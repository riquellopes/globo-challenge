#### Backend/Frontend:

* Vou usar python3.5, não quero ser que preocupar com unicode.
* Para gerenciar a criação de menu vou utilizar Django. A escolha dele é muito natural para mim,
pois ele vai auxiliar e me preocupar apenas com meu sistema.

* Vou usar um vagrant para isolar o meu sistema. Eu não possuo mysql 5.5 instalado na minha máquina.
O docker seria uma outra opção.

* Tive um pouco de dor de cabeça na hora instalar o drive do mysql do python3.5,
mais depois foi de boa.

* Quando começar mexer na parte de frontend eu vou adicionar o grunt ao projeto.
* Adicionei um py.test ao projeto. Eu utilize o nose por um bom tempo, principalmente pelo fato
de conseguir descrever os tests no doc do método. Passei a utilizar o pytest, depois que fui dar
manutenção em projeto da empresa. Eu fui vendo que ele possui um features, bem legais.

* Hoje eu iniciei a interface do admin, criei os testes para validar a regra de negócio. Para evitar ter
que fazer consultas, eu verifico qual o nível do parent que já existe antes que o no item seja criado.
* Adicionei o FactoryBoy ao projeto, apesar do desafio ser pequeno eu achei interessante utilizá-lo,
para evitar criar o mesmo objeto e ter que ficar refatorando testes.
* Para debugar eu adicionei o ipdb.
* Adicionei o pytest-mock ele é um wrapper do mock da unittest. Poderia usar o da unittest.

* Para deixar os testes mais rápido, criei um settings que executa os testes em mémoria, e outro para
executar o projeto.

* Eu divide o projeto 2, o backend que é uma api com um admin para realizar as alterações no menu,
e o frontend que vai consumir via rest o recurso e tranformar em menu responsivo.
* Gostaria de fazer um teste de carga no backend com [Locust](http://locust.io), para ter uma noção
do tempo de resposta da api, e poder ter a real definição do número de request a api suporta.
* No frontend eu vou usar Grunt para gerenciar minhas tarefas, [grunt-contrib-jasmine](https://github.com/gruntjs/grunt-contrib-jasmine) para executar minhas specs, [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)
para minificar meus arquivos js e [grunt-contrib-jshint"](https://github.com/gruntjs/grunt-contrib-jshint) para analizar meus js. Eu adicionei o [grunt-http-server](https://www.npmjs.com/package/grunt-http-server), para prover um servidor http para exibir o menu. Adicionei o [jasmine-jquery](https://github.com/velesin/jasmine-jquery) & [jquery](https://www.npmjs.com/package/jquery) apenas por 2 features,
*loadFixtures* e *jasmine.getFixtures().fixturesPath*, eu não queria perder muito tempo tendo que desenvolver
isso js puro.

* O javascript do menu foi feito todo com [vanillajs](http://vanilla-js.com), ele não tem nenhuma dependências
de framework. Essa decisão foi tomada, pesando reutilização em outros projetos e reduzir o numero de dependências
que a aplicação pode ter.
* Quando inicie pensei utilizar o [Handlebars](http://handlebarsjs.com), mais o html gerado pelo menu é bem simples.
* Eu também pensei em utlizar uma microframework para ajax, mais acabei desenvolvendo uma api para realizar a consulta
ajax. Em uma nova versão eu iria pesquisaria mais, para encontrar um microframework simples.

* Eu adicionei django-cors-headers, a idéia é liberar a requisição da api apenas para domínios globo.

#### Como mais tempo.
* Se eu tive mais tempo eu trabalharia mais o responsivo do site.
* Um docker-compose cairia muito bem para o ambiente de desenvolvimento.
