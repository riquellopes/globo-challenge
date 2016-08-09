Menu = (function(){
    "use strict";

    var Menu = function(options){
        // Sobrescrever atributos ou funções.
        if( typeof(options) == "object" ){
            for(var menu_item in this){
                if( menu_item in options ){
                    this[menu_item] = options[menu_item];
                }
            }
        }

        this.validate();
        this.service = this.service.replace(
                "{HTTP_HOST}", this.host).replace("{SLUG}", this.slug);
        this.request();
    };

    Menu.api = (function(){
        var xhr = null;

        if ("XMLHttpRequest" in window){
            xhr = new XMLHttpRequest();
        } else {
            var params = ["Msxml2.XMLHTTP", "Msxml3.XMLHTTP", "Microsoft.XMLHTTP"];
            for(var i=0, len = arr.length; i<len; i++){
                try{
                    xhr = new ActiveXObject(params[i]);
                }catch(e){
                    continue;
                }
            }
        }

        return function(){
            var menu = this;

            xhr.onreadystatechange = function(){
                if(this.readyState == this.DONE){
                    if(this.status == 200){
                        menu.json_to_html(JSON.parse(this.responseText));
                    }
                }
            };

            xhr.open("GET", this.service, true);
            xhr.send(null);
        };
    })();

    Menu.getElementById = function(target){
        return document.getElementById(target);
    };

    Menu.subMenu = function(element){
        return Menu.getElementById(
            "sub-menu-".concat(element.id.split("-")[1])
        );
    };

    Menu.eachByElement = function(iten, callback){
        for(var i=0, len = iten.length; i<len; i++){
            callback(Menu.getElementById("iten-".concat(iten[i])));
        }
    };

    Menu.html = function(target, html){
        Menu.getElementById(target).innerHTML = html;
    };

    Menu.xTudo = function(callback){
        callback(
            Menu.getElementById("menu-burguer"),
            Menu.getElementById("menu-batata")
        );
    };

    Menu.prototype = {
        constructor:Menu,
        slug:null,
        target:null,
        service:"{HTTP_HOST}/app/menu/{SLUG}/",
        host:"http://globo.api",
        request:function(){
            Menu.api.call(this);
        },
        json_to_html:function(response){
            // Processa json recuperado.
            var itens = response.itens;
            var menu = [];
            var watch = [];

            menu.push("<ul>");
            for(var g=0, len = itens.length; g<len; g++){
                var grand = itens[g];
                if( !grand.parent && grand.level === 0){
                    menu.push("<li id='iten-"+grand.id+"'>");
                    menu.push("<a href='"+grand.url+"'>"+grand.label+"</a>");

                    // Loop father
                    var have_father = false;
                    for(var f=0, fen = itens.length; f<fen; f++){
                        var father = itens[f];
                        if( father.parent == grand.id && father.level == 1 ){

                            if( have_father === false ){
                                have_father = true;
                                watch.push(grand.id);
                                menu.push("<div class='sub-menu' id='sub-menu-"+grand.id+"'> <ul>");
                            }

                            menu.push("<li id='iten-"+father.id+"'>");
                                menu.push("<a href='"+father.url+"'>"+father.label+"</a>");

                            // Loop son
                            var have_son = false;
                            for(var s=0, sen = itens.length; s<sen; s++){
                                var son = itens[s];
                                if( son.parent == father.id && son.level == 2 ){

                                    if( have_son === false ){
                                        have_son = true;
                                        watch.push(father.id);
                                        menu.push("<div class='sub-menu' style='display:none;' id='sub-menu-"+father.id+"'> <ul>");
                                    }

                                    menu.push("<li>");
                                        menu.push("<a href='"+son.url+"'>"+son.label+"</a>");
                                    menu.push("</li>");

                                }

                                if( have_son && ((sen - s) == 1)){
                                    menu.push("</ul> </div>");
                                }
                            }

                            menu.push("</li>");

                        }

                        if( have_father && ((fen - f) == 1)){
                            menu.push("</ul></div>");
                        }

                    }

                    menu.push("</li>");
                } else {
                    continue;
                }

            }

            menu.push("</ul>");
            this.html(menu.join(""));

            Menu.eachByElement(watch, function(element){
                element.onmouseover = function(){
                    Menu.subMenu(this).style.display = "block";
                };

                element.onmouseout = function(){
                    Menu.subMenu(this).style.display = "none";
                };
            });

            Menu.xTudo(function(xtudo, batata){
                xtudo.onmouseover = function(){
                    batata.style.display = "block";
                };

                document.addEventListener("click", function(e){
                    if( e.target.nodeName == "HTML" ){
                        batata.style.display = "none";
                    }
                });
            });
        },
        html:function(html){
            Menu.html(this.target, this.header(html));
        },
        validate:function(){
            if( this.slug === null || !this.slug ){
                throw new Error("O menu que deve ser carregado, não foi informado.");
            }

            if( this.target === null || !this.target ){
                throw new Error("O elemento onde deve ser aplicado o menu, não foi informado.");
            }

            if( !this.host ){
                throw new Error("O host não pode null ou em branco.");
            }
        },
        header:function(html){
            var header = ''
                        .concat('<div class="container">')
                            .concat('<div class="hamburguer" id="menu-burguer">')
                                .concat('<span></span>\n<span></span>\n<span></span>\n')
                            .concat('</div>')
                            .concat('<span class="label-menu">Menu</span>')
                        .concat('</div>')
                        .concat('<nav class="nav-menu">')
                            .concat('<div id="menu-batata" class="nav-menu_container" style="display: none;">'+html+'</div>')
                        .concat('</nav>');
            return header;
        }
    };

    return function(options){
        return new Menu(options);
    };
})();
