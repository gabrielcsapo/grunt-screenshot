/*
 * grunt-screenshot
 * https://github.com/gabrielcsapo/grunt-screenshot
 *
 * Copyright (c) 2015 Gabriel Csapo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        connect: {
            server: {
                options: {
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
                    remote: {
                        files: [{
                            src: "http://localhost:8000",
                            dest: "ajax.jpg",
                            delay: "3000"
                        }]
                    },
                    local: {
                        path: './test/src',
                        port: 7788,
                        files: [{
                            src: "index.html",
                            dest: "screenshot.jpg"
                        }]
                    },
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
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.registerTask('test', ['clean', 'connect', 'screenshot', 'mochaTest']);
    grunt.registerTask('default', ['jshint', 'test']);

};
