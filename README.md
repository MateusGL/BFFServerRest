<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

### Introdução

Bem-vindo ao BFF (Backend For Frontend) desenvolvido para atuar como intermediário entre o frontend e o servidor do ServerRest. Este projeto foi desenvolvido utilizando o Nest.js e segue uma arquitetura baseada em princípios Clean Architecture e Hexagonal Architecture.

### Objetivo

O objetivo deste BFF é facilitar a comunicação entre o frontend e o servidor do ServerRest, fornecendo endpoints específicos e adaptadores necessários para atender às necessidades do frontend.

### Tecnologias Utilizadas

- Nest.js
- Axios
- Swagger

### Configuração

Variáveis de Ambiente
Certifique-se de configurar as variáveis de ambiente necessárias para a execução do projeto. Consulte o arquivo .env.example para obter um exemplo.

```
# .env.example
PORT=3000
PROVIDER_SERVER_REST_BASE_URL=https://serverest.dev
```

### Funcionalidades Concluídas

1 - Cadastro de Usuários

- Endpoint para criar um usuário.
- Utiliza o serviço do ServerRest para persistência.

2 - Login de Usuários

- Endpoint para realizar login.
- Retorna um token de autorização.

3 - Testes com PactumJS

- pactumJS.spec.ts

### Funcionalidades a Concluir

1 - Melhorias no Swagger

- Expandir a documentação Swagger para incluir exemplos de payloads.

2 - Testes Automatizados

- Implementar testes unitários e de integração para garantir robustez.
- Implementar logica de cleanup no pactumJS.

3 - Tratamento de Erros

- Melhorar o tratamento de erros, fornecendo mensagens de erro mais detalhadas.

4 - Segurança

- Implementar práticas de segurança adicionais, como validação de entrada e autenticação.

5 - Integração Contínua

- Configurar pipelines de integração contínua para automatizar o processo de construção e teste.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

O servidor estará em execução em http://localhost:3000.

O Swagger estará disponivel em http://localhost:3000/api.

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e
# Teste do pactumJs esta aqui

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
