## Henrique Lopes
**Globo.com: coding challenge**

====================
#### Considerações Gerais
Você deverá usar este repositório como o repo principal do projeto, i.e., todos os seus commits devem estar registrados aqui, pois queremos ver como você trabalha.

**Registre tudo**: testes que forem executados, ideias que gostaria de implementar se tivesse mais tempo (explique como você as resolveria, se houvesse tempo), decisões que forem tomadas e seus porquês, arquiteturas que forem testadas e os motivos de terem sido modificadas ou abandonadas. Crie um arquivo COMMENTS.md ou HISTORY.md no repositório para registrar essas reflexões e decisões.

=====================
#### O Desafio: Header e Menu

Crie uma aplicação web onde seja possível cadastrar diversos menus.

A aplicação deve permitir:

1. Cadastrar um novo menu.
2. Editar um menu.
3. Ver a lista de menus cadastrados.
4. Excluir um menu.

O cadastro do menu se dá da seguinte forma:

1. Nome do menu.
2. Adição dos itens do menu.

Os itens de um menu devem conter:

1. Label.
2. Link/Url.

Eles também precisam ser editáveis e deletáveis.

**Importante:**

1. Um item de menu pode ser "pai" de outros itens.
2. Um item só pode ter no máximo um pai e um avô, logo a árvore não pode ter mais de três níveis.

Nessa aplicação, faça uma página que exiba o menu cadastrado. O layout do header e do menu deve ser baseado nas imagens abaixo (o visual não precisa ser exatamente igual).

***Exemplo 1 - com filhos***

![Header e Menu 1](example1.png?raw=true)

***Exemplo 2 - sem filhos***

![Header e Menu 2](example2.png?raw=true)

Você pode escolher as tecnologias que quiser, preferêncialmente Python, Ruby e Node (mas não vale usar plugins prontos de Header e Menu). Avaliaremos tanto a parte client-side quanto a de server-side.

============================

#### Requisitos
1. Utilize qualquer linguagem e framework web para criar a aplicação.
2. A aplicação deve rodar com um comando: `make run`.
3. Assuma que a máquina onde ela vai rodar tem a linguagem e o mysql 5.5 instalados.
4. De preferência não use nenhum framework javascript.
5. O header e o menu devem ser responsivos.

O projeto deve estar "pronto para produção" em termos de:

1. Formatação e estruturação do código;
2. Performance (client e server);
3. Segurança.

Envie as instruções necessárias para rodar o projeto localmente, incluindo todas as dependências. Devemos ser capazes de executar o seu código em uma VM ou máquina limpa com os seguintes comandos, ou algo similar:

```
git clone seu-repositorio
cd seu-repositorio
make setup
make run
```

===============================================
#### O que será avaliado na sua solução?

1. As funcionalidades listadas anteriormente devem estar presentes na sua solução.
2. Seu código será observado por uma equipe de desenvolvedores que avaliarão a simplicidade e clareza da solução, a arquitetura, documentação, estilo de código, testes automatizados, o design da interface e a implementação do código.

=============
#### Dicas

- Use ferramentas e bibliotecas open source, mas documente as decisões e os porquês;
- Automatize o que for possível;
- Em caso de dúvidas, pergunte.
