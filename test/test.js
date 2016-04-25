var gm = require('gm');
var assert = require('chai').assert;

describe('screenshot', function() {
    it('should diff local image', function(done) {
        gm.compare('test/screenshot/local-1920x1080-screenshot.jpg', 'test/expected/local-1920x1080-screenshot.jpg', function(err, isEqual, equality, raw, path1, path2) {
            if (err) {
                throw error;
            }
            assert.isOk(isEqual, 'images are equal');
            console.log('Actual equality: %d', equality);
            console.log(raw);
            done();
        })
    });

    it('should diff remote images', function(done) {
        gm.compare('test/screenshot/remote-1920x1080-ajax.jpg', 'test/expected/remote-1920x1080-ajax.jpg', function(err, isEqual, equality, raw, path1, path2) {
            if (err) {
                throw error;
            }
            assert.isOk(isEqual, 'images are equal');
            console.log('Actual equality: %d', equality);
            console.log(raw);
            done();
        });
    });
});
