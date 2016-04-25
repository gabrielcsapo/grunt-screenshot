var gm = require('gm');
var assert = require('chai').assert;

describe('screenshot', function() {
    it('should diff local image', function(done) {
        gm.compare('test/screenshot/local-1920x1080-screenshot.jpg', 'test/expected/local-1920x1080-screenshot.jpg', function(err, isEqual, equality, raw) {
            if (err) {
                throw err;
            }
            assert.isOk(isEqual, 'images are equal');
            assert.isAtLeast(equality, 0, 'equality is 100%');
            console.log(raw); // eslint-disable-line no-console
            done();
        })
    });

    it('should diff remote images', function(done) {
        gm.compare('test/screenshot/remote-1920x1080-ajax.jpg', 'test/expected/remote-1920x1080-ajax.jpg', function(err, isEqual, equality, raw) {
            if (err) {
                throw err;
            }
            assert.isOk(isEqual, 'images are equal');
            assert.isAtLeast(equality, 0, 'equality is 100%');
            console.log(raw); // eslint-disable-line no-console
            done();
        });
    });
});
