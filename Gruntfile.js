module.exports = function(grunt) {
     grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
          basic: {
            src: ['app.js'],
            dest: 'build.js',
            options: {
              transform: ['hbsfy']
            }
          }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', ['browserify']);
}