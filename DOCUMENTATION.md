Documentação
============

O app menu foi dividido em 2 projetos, o **MenuBackend** onde foi criada uma aplicação com [Django](https://www.djangoproject.com/), que é
responsável em gerenciar a criação de novos menus e itens. E uma api rest que irá distribuir todo conteúdo.
O **MenuFrontend** é um javascript ala [Vanilajs](http://vanilla-js.com/), ele deve ser adiciona as aplicações
que vão ter seu menu gerenciado pelo **MenuBackend**.

### Variavéis de Ambiente
- DEBUG
- DB_NAME
- DB_USER
- DB_PASS
- DB_HOST

### Comandos do MenuBackend
```bash

    $ make setup-local # Cria setup para o ambiente de desenvolvimento.
    $ make create-db # Cria banco.
    $ make migrate # Criar tabelas.

    $ make load-exemple-menu # Carregar um menu de exemplo caso deseje.

    $ make debug # Executar projeto em modo debug.
```

### Executar Teste MenuBackend
```bash
    $ make test
```
### Para listar todas as tasks disponíveis
```bash
   $ make help
```

### Executar MenuFrontend
A aplicação frontend é apenas um js, foi criando um index.html com um menu test. Para subir a aplicação
é necessário possuir [nodejs](https://nodejs.org/en/).

#### Montar ambiente.
```bash

   $ cd menu_frontend;
   $ npm install
```

#### Comandos do MenuFrontend.
```bash
    $ cd menu_frontend
    $ grunt # O default executa os testes e valida o javacript.
    $ grunt jsbuilder
    $ grunt debug # Levanta um server na qual o menu está aplicado.
```

### Utilização do menu.
Após adicionar o menu.css e menu.mim.js ao header, inicie o menu no final no html.

#### Atributos.
- **slug:** Título do menu criado.
- **target:** Id do elemento onde deve ser aplicado o menu.
- **host:**: Endereço da api de menus.

#### Callbacks públicos:
- **json_to_html:** Função responsável em transformar o json que a api entrega no html do menu.
- **request:** Função responsável em realizar a requisição a api de menus.
- **validate:** Função responsável em validar os atributos passados.
- **header:** Função que responsável em montar o header do menu.
- **html:** Função responsável em concatenar o html do head ao do menu e aplicar ao *target* definido.

```javascript
    Menu({
        slug:"globo",
        target:"menu",
        host:"http://10.0.0.9:5000"
    });
```

*Obs: Alterar o host para o endereço onde sua api esta sendo executada.*
