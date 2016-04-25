# grunt-screenshot
[![Build Status](https://travis-ci.org/gabrielcsapo/grunt-screenshot.svg?branch=master)](https://travis-ci.org/gabrielcsapo/grunt-screenshot) [![Dependency Status](https://david-dm.org/gabrielcsapo/grunt-screenshot.svg)](https://david-dm.org/gabrielcsapo/grunt-screenshot)
[![devDependency Status](https://david-dm.org/gabrielcsapo/grunt-screenshot/dev-status.svg)](https://david-dm.org/gabrielcsapo/grunt-screenshot#info=devDependencies)

> based on https://github.com/Ferrari/grunt-autoshot

# Getting Started

This plugin requires Grunt.

If you haven't used Grunt before, be sure to check out the Getting Started guide, as it explains how to create a Gruntfile as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```
npm install grunt-screenshot --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```
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
                type: 'remote',
                src: REMOTE_SITE_URL,
                dest: FILENAME(INCLUDE FILE TYPE),
                delay: DELAY_MILLISECOND
            },
            // local config options
            {
                type: 'local',
                path: LOCAL_FILE_PATH,
                port: LOCAL_SERVER_PORT,
                src: LOCAL_FILENAME,
                dest: FILENAME(INCLUDE FILE TYPE),
                delay: DELAY_MILLISECOND
            }
        ]
        viewport: ['1920x1080','1024x768','640x960'] // any (X)x(Y) size
      },
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


```
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

Autoshot could create the screenshot base on given viewport, it's helpful if you want to test responsive webpage.

```
ex: ['1024x768', '1920x1080']
```

You could add any resolution you want, just follow the same format.
