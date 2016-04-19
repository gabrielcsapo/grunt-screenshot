'use strict';

var grunt = require('grunt');

exports.autoshot = {
    default_options: function(test) {
        test.expect(3);
        var local, remote, expected;

        local = grunt.file.read('test/screenshot/local-1920x1080-screenshot.jpg');
        expected = grunt.file.read('test/expected/local-1920x1080-screenshot.jpg');
        test.equal(local, expected, 'should generate screenshot of sample site at local');

        local = grunt.file.read('test/screenshot/local-1920x1080-ajax.jpg');
        expected = grunt.file.read('test/expected/local-1920x1080-ajax.jpg');
        test.equal(local, expected, 'should generate screenshot of sample site at local(delay)');

        remote = grunt.file.read('test/screenshot/remote-1920x1080-google.jpg');
        expected = grunt.file.read('test/expected/remote-1920x1080-google.jpg');
        test.equal(remote, expected, 'should generate screenshot of sample site from remote');

        test.done();
    }
};
