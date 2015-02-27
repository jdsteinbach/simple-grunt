# simple-grunt

This is my Gruntfile: it runs a flat file server with LiveReload, Sass, AutoPrefixer. Not too complicated … yet.

## `grunt serve`

That's about it. Clone all this into your project folder (where `index.html` lives), make sure you've got all your npm stuff squared away (`npm install`), and run `grunt serve`.

A server will start on port 9000 with LiveReload running on 35729.

Grunt will watch your project files (anything with the extension `html`, `php`, `js`, `css`, `scss`, `png`, `jpg`, `jpeg`, `gif`, `webp`, or `svg`).

If you change any of your Sass files (expected to live in a directory called `sass` but this can be changed on line 16), Grunt will compile your CSS in a directory called `css`. It will also run AutoPrefixer on that file (you can configure that at line 26ff).

That's all for now. I'll be adding more tasks as I have need.

## Road Map

* Add `build` task
* Add image optimization
* Add JS uglify/concatenate
* Add [Susy](http://susy.readthedocs.org/en/latest/install/#grunt-and-yeoman) support by default