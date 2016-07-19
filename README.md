# grunt-screenshot

[![Npm Version](https://img.shields.io/npm/v/grunt-screenshot.svg)](https://www.npmjs.com/package/grunt-screenshot)
[![Build Status](https://travis-ci.org/gabrielcsapo/grunt-screenshot.svg?branch=master)](https://travis-ci.org/gabrielcsapo/grunt-screenshot) [![Dependency Status](https://david-dm.org/gabrielcsapo/grunt-screenshot.svg)](https://david-dm.org/gabrielcsapo/grunt-screenshot)
[![devDependency Status](https://david-dm.org/gabrielcsapo/grunt-screenshot/dev-status.svg)](https://david-dm.org/gabrielcsapo/grunt-screenshot#info=devDependencies)
![npm license](https://img.shields.io/npm/l/grunt-screenshot.svg)
[![npm](https://img.shields.io/npm/dt/grunt-screenshot.svg?maxAge=2592000)]()
[![npm](https://img.shields.io/npm/dm/grunt-screenshot.svg?maxAge=2592000)]()

> forked from https://github.com/Ferrari/grunt-autoshot

> a grunt plugin to take remote and local screenshots

# Getting Started

This plugin requires Grunt.

If you haven't used Grunt before, be sure to check out the Getting Started guide, as it explains how to create a Gruntfile as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```
npm install grunt-screenshot --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```javascript
grunt.loadNpmTasks('grunt-screenshot');
```

Final and the most important thing, please make sure phantomjs is in your PATH, if your windows users, please download the phantomjs zip file and decompress it and don't forget to set the environment variable as phantomjs.exe's path. Cause this plugin use phantomjs to generate screenshot, so remember install it first.

# Usage

```javascript
grunt.initConfig({
  screenshot: {
    default_options: {
      options: {
        // necessary config
        path: SCREENSHOT_DIRECTORY_PATH,
        files: [
            // remote config options
            {
                parallel: BOOLEAN (OPTIONAL),
                compress : BOOLEAN (OPTIONAL),
                type: 'remote',
                src: REMOTE_SITE_URL,
                dest: FILENAME(INCLUDE FILE TYPE),
                delay: DELAY_MILLISECOND,
                basicAuth: {
                    username: STRING (OPTIONAL),
                    password: STRING (OPTIONAL)
                }
            },
            // local config options
            {
                parallel: BOOLEAN (OPTIONAL),
                compress : BOOLEAN (OPTIONAL),
                type: 'local',
                path: LOCAL_FILE_PATH,
                port: LOCAL_SERVER_PORT,
                src: LOCAL_FILENAME,
                dest: FILENAME(INCLUDE FILE TYPE),
                delay: DELAY_MILLISECOND
            }
        ],
        viewport: ['1920x1080','1024x768','640x960', '320x480'] // any (X)x(Y) size
      }
    }
  }
});
```

# Options

### options.path

Type: `String`

Path to the directory which screenshots will be saved.

### options.files

Type: `Array`


```javascript
files: [
    // remote
    {
        type: 'remote',
        src: "http://www.google.com",
        dest: "google.png",
        delay: 3000
    },
    {
        type: 'local',
        path: './dist', // path to directory of the webpage
        port: 8080      // port of startup http server
        src: "index.html",
        dest: "screenshot.jpg",
        delay: 3000
    }
]
```

### options.viewport

Type: `Array`

grunt-screenshot could create the screenshot base on given viewport, it's helpful if you want to test responsive webpage.

```javascript
viewport: ['1920x1080','1024x768','640x960', '320x480']
```

You could add any resolution you want, just follow the same format.

### options.video

Type: `Object`

grunt-screenshot can take multiple images and create a gif out of them.

```javascript
video: {
    time: '1000'
}
```

An example of creating a gif would be;

```javascript
{
    type: 'remote',
    video: {
        time: '1000'
    },
    src: 'http://localhost:8000/moving',
    dest: 'moving.gif',
    delay: '100',
    parallel: true
}
```
