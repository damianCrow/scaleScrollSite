module.exports = function(grunt) {

    "use strict";

    require("load-grunt-tasks")(grunt);
    /*
    ALL TASKS BELOW ARE LOADED UNDER ONDER THE COMMAND 'load-grunt-tasks' ABOVE
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    */

    grunt.initConfig({

        sass: {

            dev: {
                options: {
                    style: "compressed",
                },

                files : {
                    "style.min.css": "sass/style.scss"
                }
            }
        },

        uglify: {

            dev: {
                options: {
                    compress: true,
                    mangle: true,
                    preserveComments: false
                },

                files: {
                    "app.min.js" : [ "js/script.js"]
                }
            }
        },

        connect: {

            server : {
                options: {
                    open: true
                }
            }
        },

        autoprefixer: {

            dist : {
                options: {
                    // Task-specific options go here - we are supporting
                    // the last 4 browsers, any browsers with more than 5% market share,
                    // and ensuring we support firefox 3.6+, IE8+, and Android 4 stock browsers with prefixes.
                    browsers: ["> 5%", "last 4 versions", "firefox > 3.6", "ie > 7", "Android 4"],
                    map: true
                },

                files: {
                     "style.min.css": "sass/style.scss"
                }
            }
        },

        jshint: {
            files: ['Gruntfile.js', 'js/**/*.js'],
                options: {
                    // options here to override JSHint defaults
                    globals: {
                        console: true,
                        module: true,
                        document: true
                    }
                }
        },

        watch: {

            options: {

                livereload: true,
            },

            html: {
                files: ["index.html"],
            },

            js: {
                files: ["js/*.js"],
                tasks: ["uglify:dev", "jshint"]
            },

            sass: {
                files: ["sass/*.scss"],
                tasks: ["sass:dev", "autoprefixer:dist", "uglify:dev"]
            },

            img: {
                files: ["images/**/*.*"],
                tasks: ["copy:img"]
            }
        }
});

    grunt.registerTask("run", ["sass:dev", "uglify:dev", "connect:server", "watch"]);
};