module.exports = function(grunt){
    var assets = {
        root: './assets/',
        js: '<%=assets.root %>js/',
        test: './test/**/',
    };

    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        assets : assets,
        uglify: {
            options: {
              banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            my_target: {
              files: {
                '<%=assets.js %>menu.min.js': ['<%=assets.js %>menu.js']
              }
            }
        },

        jshint: {
            files: ['Gruntfile.js', 'assets/js/menu.js', 'test/**/*.js']
        },

        jasmine: {
            test: {
                src: "<%=assets.js %>*.js",
                options: {
                    specs: "<%=assets.test %>*.js",
                    vendor:['node_modules/jquery/dist/jquery.min.js',
                            'node_modules/jasmine-jquery/lib/jasmine-jquery.js']
                }
            }
        },
        'http-server': {
            root: assets.root,
            port: 5001,
            host: '0.0.0.0',
            showDir: true,
            autoIndex: true,
            ext: 'html',
            runInBackground: true
        }
    });

    grunt.registerTask("default", ["jshint", "jasmine"]);
    grunt.registerTask("jsbuilder", ["jshint", "uglify"]);
    grunt.registerTask("debug", ["jshint", "uglify", "http-server"]);
};
