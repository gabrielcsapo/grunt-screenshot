/*
 * grunt-screenshot
 * https://github.com/gabrielcsapo/grunt-screenshot
 *
 * Copyright (c) 2015 Gabriel Csapo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    var phantom = require('node-phantom-simple');
    var fs = require('fs');
    var st = require('st');
    var http = require('http');
    var async = require('async');
    var imageminPngquant = require('imagemin-pngquant');

    process.setMaxListeners(0);
    grunt.registerMultiTask('screenshot', 'Create a quick screenshot for your site which could help for document or testing.', function() {
        var done = this.async();
        var options = this.options({
            path: __dirname + '/screenshot',
            files: [],
            viewport: ['1920x1080']
        });

        var screenshot = function(opts, cb) {
            var viewport = opts.viewport;
            var type = opts.type;
            var path = opts.path;
            var src = opts.src;
            var dest = opts.dest;
            var delay = opts.delay;
            var compress = opts.compress;

            phantom.create({
                path: require('phantomjs-prebuilt').path
            }, function(err, ph) {
                if (err) {
                    grunt.fail.warn(err.message);
                    return;
                }
                return ph.createPage(function(err, page) {
                    if (viewport) {
                        var sets = viewport.match(/(\d+)x(\d+)/);
                        if (sets[1] && sets[2]) {
                            page.set('viewportSize', {
                                width: sets[1],
                                height: sets[2]
                            });
                        }
                    }
                    page.set('zoomFactor', 1);
                    var render = function() {
                        return page.open(src, function(err) {
                            if (err) {
                                grunt.fail.warn(err.message);
                                return;
                            }
                            var target = type + '-' + viewport + '-' + dest;

                            // Background problem under self-host server
                            page.evaluate(function() {
                                var style = document.createElement('style');
                                var text = document.createTextNode('body { background: #fff }');
                                style.setAttribute('type', 'text/css');
                                style.appendChild(text);
                                document.head.insertBefore(style, document.head.firstChild);
                            });

                            if (delay) {
                                setTimeout(function() {
                                    page.render(path + '/' + target, function() {
                                        grunt.log.writeln('Delay ' + delay + ' to take a screenshot to ' + target);
                                        if (compress) {
                                            var buf = fs.readFileSync(path + '/' + target);
                                            imageminPngquant()(buf).then(function(data) {
                                                fs.writeFile(path + '/' + target, data, function() {
                                                    ph.exit();
                                                    cb();
                                                });
                                            });
                                        } else {
                                            ph.exit();
                                            cb();
                                        }
                                    });
                                }, delay);
                            } else {
                                page.render(path + '/' + target, function() {
                                    grunt.log.writeln('Take a screenshot to ' + target);
                                    if (compress) {
                                        var buf = fs.readFileSync(path + '/' + target);
                                        imageminPngquant()(buf).then(function(data) {
                                            fs.writeFile(path + '/' + target, data, function() {
                                                ph.exit();
                                                cb();
                                            });
                                        });
                                    } else {
                                        ph.exit();
                                        cb();
                                    }
                                });
                            }
                        });
                    }

                    if (opts.basicAuth) {
                        page.get('settings', function(err, settings) {
                            if (err) {
                                return done(err);
                            }
                            settings.userName = opts.basicAuth.username;
                            settings.password = opts.basicAuth.password;
                            page.set('settings', settings, function() {
                                render();
                            });
                        });
                    } else {
                        render();
                    }
                });
            });
        };

        // At least local or remote url should be assigned
        if (!options.files) {
            grunt.fail.fatal('At least need one either remote or local url');
        }

        var filesLeft = options.files.length;

        async.eachSeries(options.files, function(file, outerCb) {
            filesLeft -= 1;
            var parallel = file.parallel;

            if (file.type == 'remote') {
                if (parallel) {
                    var tasks = [];
                    options.viewport.forEach(function(view) {
                        tasks.push(function(cb) {
                            screenshot({
                                path: options.path,
                                type: "remote",
                                viewport: view,
                                src: file.src,
                                dest: file.dest,
                                delay: file.delay,
                                compress: file.compress || false,
                                basicAuth: file.basicAuth
                            }, function() {
                                cb();
                            });
                        });
                    });
                    async.parallel(tasks, function() {
                        outerCb();
                    });
                } else {
                    async.eachSeries(options.viewport, function(view, cb) {
                        screenshot({
                            path: options.path,
                            type: "remote",
                            viewport: view,
                            src: file.src,
                            dest: file.dest,
                            delay: file.delay,
                            compress: file.compress || false,
                            basicAuth: file.basicAuth
                        }, function() {
                            cb();
                        });
                    }, function() {
                        outerCb();
                    });
                }
            } else if (file.type == 'local') {
                var mount = st({
                    path: file.path,
                    index: file.src
                });
                var server = http.createServer(function(req, res) {
                    mount(req, res);
                }).listen(file.port, function() {
                    if (parallel) {
                        var tasks = [];
                        options.viewport.forEach(function(view) {
                            tasks.push(function(cb) {
                                screenshot({
                                    path: options.path,
                                    type: 'local',
                                    viewport: view,
                                    src: 'http://localhost:' + file.port + '/' + file.src,
                                    dest: file.dest,
                                    delay: file.delay,
                                    compress: file.compress || false
                                }, function() {
                                    cb();
                                });
                            });
                        });
                        async.parallel(tasks, function() {
                            outerCb();
                        });
                    } else {
                        async.eachSeries(options.viewport, function(view, cb) {
                            screenshot({
                                path: options.path,
                                type: 'local',
                                viewport: view,
                                src: 'http://localhost:' + file.port + '/' + file.src,
                                dest: file.dest,
                                delay: file.delay,
                                compress: file.compress || false
                            }, function() {
                                cb();
                            });
                        }, function() {
                            server.close();
                            outerCb();
                        });
                    }
                });
            } else {
                outerCb();
            }
        }, function() {
            grunt.event.emit('finish', 'remote');
        });

        grunt.event.on('finish', function() {
            if (filesLeft == 0) {
                done();
            }
        });
    });
};
