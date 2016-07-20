/*
 * grunt-screenshot
 * https://github.com/gabrielcsapo/grunt-screenshot
 *
 * Copyright (c) 2015 Gabriel Csapo
 * Licensed under the MIT license.
 */

'use strict';

var basicAuth = require('basic-auth-connect');

module.exports = function(grunt) {
    grunt.initConfig({
        eslint: {
            options: {
                rulePaths: ['.']
            },
            src: ['*.js', 'tasks/*.js', 'test/*.js', '!node_modules']
        },
        connect: {
            server: {
                options: {
                    middleware: function(connect, options, middlewares) {
                        middlewares.unshift(function(req, res, next) {
                            if (req.url == '/authenticated') {
                                basicAuth('username', 'password')(req, res, function() {
                                    res.end(grunt.file.read('test/src/authenticated.html'));
                                });
                            } else {
                                next();
                            }
                        });

                        return middlewares;
                    },
                    port: 8000,
                    base: {
                        path: 'test/src/',
                        options: {
                            index: 'ajax.html',
                            maxAge: 300000
                        }
                    }
                }
            }
        },
        clean: {
            tests: ['test/screenshot']
        },
        screenshot: {
            defaults: {
                options: {
                    path: './test/screenshot',
                    maxParallel: 100,
                    files: [{
                        type: 'remote',
                        src: 'http://localhost:8000',
                        dest: 'ajax.png',
                        delay: '2000',
                        parallel: true
                    }, {
                        type: 'remote',
                        src: 'http://localhost:8000',
                        dest: 'compressed.png',
                        delay: '2000',
                        compress: true
                    }, {
                        type: 'remote',
                        src: 'http://localhost:8000/authenticated',
                        dest: 'authenticated.png',
                        delay: '2000',
                        basicAuth: {
                            username: 'username',
                            password: 'password'
                        }
                    }, {
                        type: 'remote',
                        src: 'http://localhost:8000/authenticated',
                        dest: 'wrongAuthentication.png',
                        delay: '2000',
                        basicAuth: {
                            username: 'wrong',
                            password: 'wrong'
                        }
                    }, {
                        type: 'local',
                        path: './test/src',
                        port: 7786,
                        src: 'index.html',
                        dest: 'screenshot.png'
                    }, {
                        type: 'local',
                        path: './test/src',
                        port: 7787,
                        src: 'index.html',
                        dest: 'screenshot.png',
                        parallel: true
                    }, {
                        type: 'remote',
                        src: 'http://localhost:8000',
                        dest: 'execute-script.png',
                        delay: '2000',
                        script: 'document.body.style.backgroundColor = "orange"; document.body.innerHTML = "<h1>Hello World</h1>"',
                        parallel: true
                    }, {
                        type: 'remote',
                        video: {
                            time: '1000'
                        },
                        src: 'http://localhost:8000/moving.html',
                        dest: 'moving.gif',
                        delay: '100',
                        parallel: true
                    }, {
                        type: 'local',
                        video: {
                            time: '1000'
                        },
                        port: 7788,
                        path: './test/src',
                        src: 'moving.html',
                        dest: 'moving.gif',
                        delay: '100',
                        parallel: true
                    }],
                    viewport: [
                        '1920x1080',
                        '1024x768',
                        '640x960'
                    ]
                }
            }
        },
        mochaTest: {
            test: {
                src: ['test/test.js']
            }
        }
    });
    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('gruntify-eslint');
    grunt.registerTask('test', ['clean', 'connect', 'screenshot', 'mochaTest']);
    grunt.registerTask('default', ['eslint', 'test']);
};
