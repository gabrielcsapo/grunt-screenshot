/*
 * grunt-autoshot
 * https://github.com//grunt-autoshot
 *
 * Copyright (c) 2013 Ferrari Lee
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['test/screenshot'],
    },

    // Configuration to be run (and then tested).
    autoshot: {
      default_options: {
        options: {
          path: './test/screenshot',
          remote: {
            files: [
              { src: "http://www.google.com", dest: "google.jpg", delay: "3000" }
            ]
          },
          local: {
            path: './test/src',
            port: 7788,
            files: [
              { src: "index.html", dest: "screenshot.jpg" },
              { src: "ajax.html", dest: "ajax.jpg", delay: "5000" }
            ]
          },
          viewport: [
            '1920x1080',
            '1024x768',
            '640x960'
          ]
        },
      },
    },
    nodeunit: {
      tests: ['test/*_test.js'],
    }
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.registerTask('test', ['clean', 'autoshot', 'nodeunit']);
  grunt.registerTask('default', ['jshint', 'test']);

};
