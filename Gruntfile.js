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
            default_options: {
                options: {
                    path: './test/screenshot',
                    files: [{
                        type: 'remote',
                        src: 'http://localhost:8000',
                        dest: 'ajax.jpg',
                        delay: '2000'
                    }, {
                        type: 'remote',
                        src: 'http://localhost:8000/authenticated',
                        dest: 'authenticated.jpg',
                        delay: '2000',
                        basicAuth: {
                            username: 'username',
                            password: 'password'
                        }
                    }, {
                        type: 'remote',
                        src: 'http://localhost:8000/authenticated',
                        dest: 'wrongAuthentication.jpg',
                        delay: '2000',
                        basicAuth: {
                            username: 'wrong',
                            password: 'wrong'
                        }
                    }, {
                        type: 'local',
                        path: './test/src',
                        port: 7788,
                        src: 'index.html',
                        dest: 'screenshot.jpg'
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
