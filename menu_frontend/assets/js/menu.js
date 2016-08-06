(function(){
    "use strict";

    /**
        new Menu({
            target: "menu"
            menu: "globo",
            auto_header: False
        });

        <div id="menu"></div>
    */
    var Menu = function(options){
        this.setOptions(options);
        this.build();

        return this;
    };

    // SinonJs - http://sinonjs.org
    // Tip - http://stackoverflow.com/questions/37454372/mocking-xhr-calls-in-jasmine
    // Para acelerar o processo eu pensei em utilizar o bd dos browser modernos.
    Menu.json = function(){

    };

    Menu.html = function(){

    };

    Menu.getElementById = function(element){
        return document.getElementById(element);
    };

    Menu.prototype.setOptions = function(options){

    };

    Menu.prototype.build = function(){

    };

})();
