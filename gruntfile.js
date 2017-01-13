/*
** Global module
*/

module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: { '/src/scissor.css': '/src/utils/*.scss' }
            }
        },
        uglify: {
            options: {
                sourceMap: true
            },
            core: { files: { '/src/scissor.min.js': ['/src/utils/*.js'] } }
        },
        watch: {
            assets: { files: ['/src/utils/**/*.scss'], tasks: ['sass'] },
            scripts: { files: ['/src/utils/**/*.js'], tasks: ['uglify'] }
        }
    });

    grunt.registerTask('watch', ['watch']);

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
};