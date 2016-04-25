module.exports = function(grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            js: {
              
                src: ['js/**/*.js'],
                dest: 'dist/<%= pkg.name %>.js'
             
            },
            css: {
                options: {
                    separator: ''
                },
                src: ['css/reset.css', 'css/myCarousel.css','css/style.css',],
                dest: 'dist/<%= pkg.name %>.css'
               
            }
        },
        uglify: {
          options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
          },
          dist: {
            files: {
              'dist/<%= pkg.name %>.min.js': ['<%= concat.js.dest %>']
            }
          }
        },
        cssmin: {
            target: {
                files: [{
                  expand: true,
                  cwd: 'dist',
                  src: ['*.css'],
                  dest: 'dist',
                  ext: '.min.css'
                }]
              }
        }
    });
    
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};