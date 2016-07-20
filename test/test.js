var gm = require('gm');
var assert = require('chai').assert;

describe('screenshot', function() {

    describe('local diffing', function() {
        it('should diff 1920x1080', function(done) {
            gm.compare('test/screenshot/local-1920x1080-screenshot.png', 'test/expected/local-1920x1080-screenshot.png', function(err, isEqual, equality, raw) {
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
            gm.compare('test/screenshot/local-1024x768-screenshot.png', 'test/expected/local-1024x768-screenshot.png', function(err, isEqual, equality, raw) {
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
            gm.compare('test/screenshot/local-640x960-screenshot.png', 'test/expected/local-640x960-screenshot.png', function(err, isEqual, equality, raw) {
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
            gm.compare('test/screenshot/remote-1920x1080-ajax.png', 'test/expected/remote-1920x1080-ajax.png', function(err, isEqual, equality, raw) {
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
            gm.compare('test/screenshot/remote-1024x768-ajax.png', 'test/expected/remote-1024x768-ajax.png', function(err, isEqual, equality, raw) {
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
            gm.compare('test/screenshot/remote-640x960-ajax.png', 'test/expected/remote-640x960-ajax.png', function(err, isEqual, equality, raw) {
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
            gm.compare('test/screenshot/remote-1920x1080-authenticated.png', 'test/expected/remote-1920x1080-authenticated.png', function(err, isEqual, equality, raw) {
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
            gm.compare('test/screenshot/remote-1024x768-authenticated.png', 'test/expected/remote-1024x768-authenticated.png', function(err, isEqual, equality, raw) {
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
            gm.compare('test/screenshot/remote-640x960-authenticated.png', 'test/expected/remote-640x960-authenticated.png', function(err, isEqual, equality, raw) {
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
            gm.compare('test/screenshot/remote-1920x1080-wrongAuthentication.png', 'test/expected/remote-1920x1080-wrongAuthentication.png', function(err, isEqual, equality, raw) {
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
            gm.compare('test/screenshot/remote-1024x768-wrongAuthentication.png', 'test/expected/remote-1024x768-wrongAuthentication.png', function(err, isEqual, equality, raw) {
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
            gm.compare('test/screenshot/remote-640x960-wrongAuthentication.png', 'test/expected/remote-640x960-wrongAuthentication.png', function(err, isEqual, equality, raw) {
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

    describe('should diff gifs', function() {
        it('should diff 1920x1080', function(done) {
            gm.compare('test/screenshot/remote-1920x1080-moving.gif', 'test/expected/remote-1920x1080-moving.gif', function(err, isEqual, equality, raw) {
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
            gm.compare('test/screenshot/remote-1024x768-moving.gif', 'test/expected/remote-1024x768-moving.gif', function(err, isEqual, equality, raw) {
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
            gm.compare('test/screenshot/remote-640x960-moving.gif', 'test/expected/remote-640x960-moving.gif', function(err, isEqual, equality, raw) {
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

    describe('should diff execute-script', function() {
        it('should diff 1920x1080', function(done) {
            gm.compare('test/screenshot/remote-1920x1080-execute-script.png', 'test/expected/remote-1920x1080-execute-script.png', function(err, isEqual, equality, raw) {
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
            gm.compare('test/screenshot/remote-1024x768-execute-script.png', 'test/expected/remote-1024x768-execute-script.png', function(err, isEqual, equality, raw) {
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
            gm.compare('test/screenshot/remote-640x960-execute-script.png', 'test/expected/remote-640x960-execute-script.png', function(err, isEqual, equality, raw) {
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
