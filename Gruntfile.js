/**
 * Created by gfrethem on 10/2/15.
 */
module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client/app.js',
                dest: 'server/public/assets/scripts/app.min.js'
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.js.map",
                    "underscore/underscore-min.js",
                    "underscore/underscore-min.map",
                    "font-awesome-4.4.0/css/font-awesome.min.css",
                    "font-awesome-4.4.0/fonts/*.*"

                ],
                "dest": "server/public/vendor/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

// Default task(s).
    grunt.registerTask('default', ['copy', 'uglify']);
};