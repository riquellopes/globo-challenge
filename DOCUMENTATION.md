Documentação
============

O app menu foi divido em 2 projetos, o MenuBackend onde foi criada um aplicando com [Django](https://www.djangoproject.com/), que é
responsável em gerenciar a criação de novos menus e itens. E uma api rest que distribuir todo conteúdo.
O MenuFrontend é um javascript ala [Vanilajs](http://vanilla-js.com/), ele deve ser adiciona as aplicações
que vão ter seu menu genrenciado pelo MenuBackend.

### Variavéis de Ambiente
- DEBUG
- DB_NAME
- DB_USER
- DB_PASS
- DB_HOST

### Ambiente de desenvolvimento
```bash

    make setup-local
    make create-db
    make migrate

    make debug
```

### Executar Teste MenuBackend
```bash

    make test
```

### Executar MenuFrontend
A aplicação frontend é apenas um js. Foi criando um index.html com um menu test. Para subir a aplicação
é necessário possuir [nodejs](https://nodejs.org/en/).

#### Montar ambiente.
```bash

   cd menu_frontend;
   npm install
```

#### Comandos do MenuFrontend.
```bash
    grunt
    grunt jsbuilder
    grunt debug
```
