jasmine.getFixtures().fixturesPath = 'test/fixtures/';

var json_response = null;
beforeEach(function(){
  json_response = {"id":1,"name":"Globo","itens":[{"id":1,"label":"Moda","url":"http://globoesporte.globo.com/olimpiadas/saltos-ornamentais/noticia/2016/08/ingrid-vai-repetir-salto-do-zero-no-pan-agora-de-olho-em-final-da-olimpiada.html","parent":null,"level":0},{"id":2,"label":"Culinaria","url":"http://globoesporte.globo.com/olimpiadas/futebol/noticia/2016/08/neymar-e-mais-quatro-sao-poupados-em-treino-da-selecao-olimpica.html","parent":null,"level":0},{"id":3,"label":"Ana Maria Braga","url":"http://gshow.globo.com/Bastidores/noticia/2016/08/ana-maria-braga-diz-conversar-com-deus-diariamente-sou-muito-amiga-dele-e-de-outras-entidades.html","parent":2,"level":1},{"id":4,"label":"Mercadinho","url":"http://globoesporte.globo.com/olimpiadas/noticia/2016/08/mercadinho-da-vila-olimpica-cobra-ate-o-triplo-do-preco-por-itens-essenciais.html","parent":3,"level":2}]};

  loadFixtures('menu.html');
});

describe("Menu", function(){

    it("Build menu globo", function(){
        var menu = Menu({
            slug: "globo",
            target: "menu",
            host: "http://test",
            request: function(){
                // Mock requisição ajax.
                this.json_to_html(json_response);
            }
        });

        html = document.getElementById("menu").outerHTML;

        expect(html).toContain('<header id="menu">');
        expect(html).toContain('<div id="menu-batata" class="nav-menu_container" style="display: none;">');
        expect(html).toContain('<a href="http://globoesporte.globo.com/olimpiadas/saltos-ornamentais/noticia/2016/08/ingrid-vai-repetir-salto-do-zero-no-pan-agora-de-olho-em-final-da-olimpiada.html">Moda</a>');
        expect(html).toContain('<a href="http://globoesporte.globo.com/olimpiadas/futebol/noticia/2016/08/neymar-e-mais-quatro-sao-poupados-em-treino-da-selecao-olimpica.html">Culinaria</a>');
        expect(html).toContain('<a href="http://globoesporte.globo.com/olimpiadas/noticia/2016/08/mercadinho-da-vila-olimpica-cobra-ate-o-triplo-do-preco-por-itens-essenciais.html">Mercadinho</a>');
        expect(html).toContain('<a href="http://gshow.globo.com/Bastidores/noticia/2016/08/ana-maria-braga-diz-conversar-com-deus-diariamente-sou-muito-amiga-dele-e-de-outras-entidades.html">Ana Maria Braga</a>');

        expect(menu.slug).toBe("globo");
        expect(menu.service).toBe("http://test/app/menu/globo/");
    });


    it("Build with host default", function(){
        var menu = Menu({
            slug: "globinho",
            target: "menu",
            request: function(){}
        });

        expect(menu.slug).toBe("globinho");
        expect(menu.service).toBe("http://globo.api/app/menu/globinho/");
    });

    it("Raise Error when evoke Menu without params", function(){

        expect(Menu).toThrow();
        expect(Menu).toThrowError("O menu que deve ser carregado, não foi informado.");
        expect(function(){ Menu({slug: "globeleza"}); }).toThrowError("O elemento onde deve ser aplicado o menu, não foi informado.");
        expect(function(){ Menu({slug: "globeleza", host:null, target:"minu"}); }).toThrowError("O host não pode null ou em branco.");
    });
});

describe("Open and Close Menu", function(){
    beforeEach(function(){
      var menu = Menu({
          slug: "globo",
          target: "menu",
          request: function(){
              // Mock requisição ajax.
              this.json_to_html(json_response);
          }
      });
    });

    it("Open menu when mouseover xtudo menu", function(){
        // Emulete mouseover.
        var mouse = document.createEvent('MouseEvents');
            mouse.initMouseEvent('mouseover', true, true, window);

            expect(document.getElementById("menu-batata").style.display).toBe("none");
            document.getElementById("menu-burguer").dispatchEvent(mouse);
            expect(document.getElementById("menu-batata").style.display).toBe("block");
    });

});
