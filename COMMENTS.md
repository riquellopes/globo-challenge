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

* Eu divide o projeto 2, o backend que é um api com um admin para realizar as alterações no menu,
e o frontend que vai consumir via rest o recurso e tranformar em menu responsivo.
* O backend ainda pretendo realizar um teste carga com [Locust](http://locust.io), para ter uma noção
do tempo de resposta da api.
* No frontend eu vou usar Grunt para gereciar minhas tarefas, jasmine para executar minhas specs, uglify
para minificar meus arquivos js e jshint para analizar meus js.
