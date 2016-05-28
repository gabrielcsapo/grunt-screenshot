var gm = require('gm');
var assert = require('chai').assert;

describe('screenshot', function() {

    describe('local diffing', function() {
        it('should diff 1920x1080', function(done) {
            gm.compare('test/screenshot/local-1920x1080-screenshot.jpg', 'test/expected/local-1920x1080-screenshot.jpg', function(err, isEqual, equality, raw) {
                if (err) {
                    throw err;
                }
                assert.isOk(isEqual, 'images are equal');
                assert.isAtLeast(equality, 0, 'equality is 100%');
                console.log(equality); // eslint-disable-line no-console
                console.log(raw); // eslint-disable-line no-console
                done();
            })
        });
        it('should diff 1024x768', function(done) {
            gm.compare('test/screenshot/local-1024x768-screenshot.jpg', 'test/expected/local-1024x768-screenshot.jpg', function(err, isEqual, equality, raw) {
                if (err) {
                    throw err;
                }
                assert.isOk(isEqual, 'images are equal');
                assert.isAtLeast(equality, 0, 'equality is 100%');
                console.log(equality); // eslint-disable-line no-console
                console.log(raw); // eslint-disable-line no-console
                done();
            })
        });
        it('should diff 640x960', function(done) {
            gm.compare('test/screenshot/local-640x960-screenshot.jpg', 'test/expected/local-640x960-screenshot.jpg', function(err, isEqual, equality, raw) {
                if (err) {
                    throw err;
                }
                assert.isOk(isEqual, 'images are equal');
                assert.isAtLeast(equality, 0, 'equality is 100%');
                console.log(equality); // eslint-disable-line no-console
                console.log(raw); // eslint-disable-line no-console
                done();
            })
        });
    });

    describe('remote diffing', function() {
        it('should diff 1920x1080', function(done) {
            gm.compare('test/screenshot/remote-1920x1080-ajax.jpg', 'test/expected/remote-1920x1080-ajax.jpg', function(err, isEqual, equality, raw) {
                if (err) {
                    throw err;
                }
                assert.isOk(isEqual, 'images are equal');
                assert.isAtLeast(equality, 0, 'equality is 100%');
                console.log(equality); // eslint-disable-line no-console
                console.log(raw); // eslint-disable-line no-console
                done();
            });
        });
        it('should diff 1024x768', function(done) {
            gm.compare('test/screenshot/remote-1024x768-ajax.jpg', 'test/expected/remote-1024x768-ajax.jpg', function(err, isEqual, equality, raw) {
                if (err) {
                    throw err;
                }
                assert.isOk(isEqual, 'images are equal');
                assert.isAtLeast(equality, 0, 'equality is 100%');
                console.log(equality); // eslint-disable-line no-console
                console.log(raw); // eslint-disable-line no-console
                done();
            });
        });
        it('should diff 640x960', function(done) {
            gm.compare('test/screenshot/remote-640x960-ajax.jpg', 'test/expected/remote-640x960-ajax.jpg', function(err, isEqual, equality, raw) {
                if (err) {
                    throw err;
                }
                assert.isOk(isEqual, 'images are equal');
                assert.isAtLeast(equality, 0, 'equality is 100%');
                console.log(equality); // eslint-disable-line no-console
                console.log(raw); // eslint-disable-line no-console
                done();
            });
        });
    });

    describe('basic auth diffing', function() {
        it('should diff 1920x1080', function(done) {
            gm.compare('test/screenshot/remote-1920x1080-authenticated.jpg', 'test/expected/remote-1920x1080-authenticated.jpg', function(err, isEqual, equality, raw) {
                if (err) {
                    throw err;
                }
                assert.isOk(isEqual, 'images are equal');
                assert.isAtLeast(equality, 0, 'equality is 100%');
                console.log(equality); // eslint-disable-line no-console
                console.log(raw); // eslint-disable-line no-console
                done();
            });
        });
        it('should diff 1024x768', function(done) {
            gm.compare('test/screenshot/remote-1024x768-authenticated.jpg', 'test/expected/remote-1024x768-authenticated.jpg', function(err, isEqual, equality, raw) {
                if (err) {
                    throw err;
                }
                assert.isOk(isEqual, 'images are equal');
                assert.isAtLeast(equality, 0, 'equality is 100%');
                console.log(equality); // eslint-disable-line no-console
                console.log(raw); // eslint-disable-line no-console
                done();
            });
        });
        it('should diff 640x960', function(done) {
            gm.compare('test/screenshot/remote-640x960-authenticated.jpg', 'test/expected/remote-640x960-authenticated.jpg', function(err, isEqual, equality, raw) {
                if (err) {
                    throw err;
                }
                assert.isOk(isEqual, 'images are equal');
                assert.isAtLeast(equality, 0, 'equality is 100%');
                console.log(equality); // eslint-disable-line no-console
                console.log(raw); // eslint-disable-line no-console
                done();
            });
        });
    });

    describe('basic auth incorrect diffing', function() {
        it('should diff 1920x1080', function(done) {
            gm.compare('test/screenshot/remote-1920x1080-wrongAuthentication.jpg', 'test/expected/remote-1920x1080-wrongAuthentication.jpg', function(err, isEqual, equality, raw) {
                if (err) {
                    throw err;
                }
                assert.isOk(isEqual, 'images are equal');
                assert.isAtLeast(equality, 0, 'equality is 100%');
                console.log(equality); // eslint-disable-line no-console
                console.log(raw); // eslint-disable-line no-console
                done();
            });
        });
        it('should diff 1024x768', function(done) {
            gm.compare('test/screenshot/remote-1024x768-wrongAuthentication.jpg', 'test/expected/remote-1024x768-wrongAuthentication.jpg', function(err, isEqual, equality, raw) {
                if (err) {
                    throw err;
                }
                assert.isOk(isEqual, 'images are equal');
                assert.isAtLeast(equality, 0, 'equality is 100%');
                console.log(equality); // eslint-disable-line no-console
                console.log(raw); // eslint-disable-line no-console
                done();
            });
        });
        it('should diff 640x960', function(done) {
            gm.compare('test/screenshot/remote-640x960-wrongAuthentication.jpg', 'test/expected/remote-640x960-wrongAuthentication.jpg', function(err, isEqual, equality, raw) {
                if (err) {
                    throw err;
                }
                assert.isOk(isEqual, 'images are equal');
                assert.isAtLeast(equality, 0, 'equality is 100%');
                console.log(equality); // eslint-disable-line no-console
                console.log(raw); // eslint-disable-line no-console
                done();
            });
        });
    });
});
