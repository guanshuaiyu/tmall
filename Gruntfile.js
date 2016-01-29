module.exports = function(grunt) {
    grunt.initConfig({
	watch :{
	    scripts :{
		files : ['*.html','js/*.js','css/*.css'],
		options : {
		    livereload : 8888
		}
	    }
	}
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', []);  
};
