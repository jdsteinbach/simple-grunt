'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'expanded'
      },
      dist: {
        files: [
          {
            expand: true, // Recursive
            cwd: "sass", // The startup directory
            src: ["**/*.scss"], // Source files
            dest: "css", // Destination
            ext: ".css" // File extension
          }
        ]
      }
    },

    autoprefixer: {
      options: {
        browsers: [
      'last 3 versions'
        ],
        map: true // Update source map (creates one if it can't find an existing map)
      },
      dist: {
        files: [
          {
            expand: true, // Recursive
            cwd: "css", // The startup directory
            src: ["**/*.css"], // Source files
            dest: "css", // Destination
            ext: ".css" // File extension
          }
        ]
      }
    },

    watch: {
      gruntfile: {
        files: ['Gruntfile.js']
      },
      scss: {
        files: '**/*.scss',
        tasks: ['sass', 'autoprefixer']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '{,*/}*.html',
          '{,*/}*.php',
          'js/{,*/}*.js',
          'css/{,*/}*.css',
          'sass/{,*/}*.scss',
          'images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      },
    },
    connect: {
      options: {
        port: 9000,
        open: true,
        livereload: 35729,
        hostname: 'localhost'
      },
      livereload: {
       options: {
         open: true
        }
      },
      dist: {
        options: {
          base: '~/<%= pkg.name %>'
        }
      }
    }
  });

  // Load these required NPM tasks:
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('serve', function (target) {
    grunt.task.run([
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('default', ['serve']);
};