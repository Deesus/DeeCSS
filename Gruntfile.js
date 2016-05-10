module.exports = function(grunt) {

    // Task configurations:
    grunt.initConfig({
        /**
         * Watch
         *
         * A generic watcher. Initiates other grunt tasks when it detects changes to certain files/directories
         */
        watch: {
            scripts: {
                files: ["src/sass/*.scss", "src/stylesheets/*.css", "src/scripts/*.js"],    // Only watch these files
                tasks: ["compass", "copy"],                                                 // What tasks will the watcher run
                options: {
                    spawn: true
                }
            }
        },
        
        /**
         * Compass watcher
         *
         * Compiles `.scss` files to `.css` files.
         */
        compass: {
            dev: {
                options: {
                    sassDir:        'src/sass',
                    cssDir:         'src/sass_compiled',
                    environment:    'development',
                    config:         'src/config.rb',
                    watch:          false                // Use `$ grunt watch` instead
                }
            }
        },
        
        /**
         * Copy files to dist/
         *
         */
        copy: {
            main: {
                files: [
                    // Source-to-destination of files:
                    {expand: true, src: ['src/stylesheets/*'],  dest: 'public/stylesheets/',    flatten: true, filter: 'isFile'},
                    {expand: true, src: ['src/scripts/*'],      dest: 'public/scripts/',        flatten: true, filter: 'isFile'}
                ]
            }
        }
    });

    // Load grunt tasks:
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks("grunt-contrib-compass");

    // Load default tasks (if we want to simply run `$grunt`):
    grunt.registerTask("default", ["watch"]);
};