module.exports = function(grunt){
    var assets = {
        root: './assets/',
        js: '<%=assets.root %>js/',
        test: '.test/**/',
    };

    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        assets : assets,
        uglify: {
            "static/js/menu.min.js": "static/js/menu.js"
        },

        jshint: {
            files: ['Gruntfile.js', 'static/**/*.js', 'menu/tests/**/*.js']
        },

        jasmine: {
            test: {
                src: "<%=assets.js %>*.js",
                options: {
                    specs: "<%=assets.test %>*.js"
                }
            }
        }
    });

    grunt.registerTask("default", ["jshint", "jasmine"]);
};
