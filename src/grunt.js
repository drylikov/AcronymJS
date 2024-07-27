module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({
        cmpnt: '<json:../component.json>',
        meta: {
            banner: "/*! AcronymJS v<%= cmpnt.version %> " +
                    "http://gleero.com/all/acronymjs/ https://github.com/gleero/acronymJS */\n"
        },
        lint: {
            files: [
                'jquery.acronym.js'
            ]
        },
        min: {
            dist: {
                src: ['<banner:meta.banner>', 'jquery.acronym.js'],
                dest: '../jquery.acronym.min.js'
            }
        },
        jshint: {
            options: {
                browser: true,
                white: false,
                smarttabs: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                undef: true
            },
            globals: {
                jQuery: true
            }
        }
    });

    grunt.registerTask('default', 'lint min');

};