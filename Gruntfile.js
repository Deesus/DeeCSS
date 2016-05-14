module.exports = function(grunt) {

    // Task configurations:
    grunt.initConfig({

        //  Grunt watcher:
        watch: {
            scripts: {
                files: ["src/sass/*.scss", "src/stylesheets/*.css", "src/scripts/*.js"],
                tasks: ["compass"],             // TODO: Add the tasks the watcher will run
                options: {
                    spawn: true
                }
            }
        },

        // Compass watcher:
        compass: {
            dev: {
                options: {
                    sassDir:        'src/sass',
                    cssDir:         'src/sass_compiled',
                    environment:    'development',
                    config:         'src/config.rb',
                    watch:          true        // TODO: change to `false` if you want to only compile once
                }
            }
        },

        // copies files from `src` to `dist`:
        copy: {
            main: {
                files: [
                    {expand: true, src: ['src/stylesheets/*'],  dest: 'dist/stylesheets/',  flatten: true, filter: 'isFile'},
                    {expand: true, src: ['src/scripts/*'],      dest: 'dist/scripts/',      flatten: true, filter: 'isFile'}
                ]
            }
        },

        // minify CSS:
        cssmin: {
            my_target: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['src/stylesheets/*.css'],
                    dest: 'dist/stylesheets',
                    ext: '.min.css'
                }]
            }
        },

        // minify JS:
        uglify: {
            my_target: {
                files: {'dist/scripts/scripts.min.js' : 'src/scripts/*.js'}
            }
        }
    });

    // Load grunt tasks:
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks("grunt-contrib-compass");
    grunt.loadNpmTasks("grunt-contrib-uglify");
};