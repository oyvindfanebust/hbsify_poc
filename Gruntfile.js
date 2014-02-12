module.exports = function(grunt) {
     grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
          basic: {
            src: ['app.js'],
            dest: 'build.js',
            options: {
              transform: ['hbsfy'],
              standalone: 'example'
            }
          }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', ['browserify']);
}