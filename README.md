# SubTrackk API Documentação

## Overview
SubTrackk API é uma API de controle de inscrições desenvolvida com Express.

## Objetivo da Aplicação
O objetivo da aplicação é gerenciar inscrições de usuários de forma eficiente utilizando uma API RESTful.

## Tecnologias Utilizadas
- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- Nodemailer
- Bcryptjs
- Dayjs
- Dotenv

## Como Rodar o Projeto

### Pré-requisitos
- Node.js instalado
- MongoDB rodando localmente ou remotamente

### Passos para Configuração
1. Clone o repositório:
    ```bash
    git clone https://github.com/JoaoLucasCordeiro/SubTrackk-API.git
    cd SubTrackk-API
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure as variáveis de ambiente criando um arquivo `.env` na raiz do projeto e adicionando as seguintes variáveis:
    ```env
    MONGO_URI=sua_uri_do_mongodb
    JWT_SECRET=sua_chave_secreta
    ```

4. Inicie a aplicação:
    ```bash
    npm start
    ```

### Scripts Disponíveis
- `npm start`: Inicia a aplicação
- `npm run dev`: Inicia a aplicação em modo de desenvolvimento com nodemon

### Estrutura do Projeto
- `app.js`: Ponto de entrada da aplicação
- `package.json`: Lista de dependências e scripts
- `config`: Configurações da aplicação
- `controllers`: Controladores que gerenciam as requisições
- `models`: Modelos do MongoDB/Mongoose
- `routes`: Rotas da API

### Dependências
- `@arcjet/node`: ^1.0.0-beta.2
- `@upstash/workflow`: ^0.2.7
- `bcryptjs`: ^2.4.3
- `cookie-parser`: ~1.4.4
- `dayjs`: ^1.11.13
- `debug`: ~2.6.9
- `dotenv`: ^16.4.7
- `express`: ~4.16.1
- `jsonwebtoken`: ^9.0.2
- `mongodb`: ^6.13.0
- `mongoose`: ^8.10.0
- `morgan`: ~1.9.1
- `nodemailer`: ^6.10.0

### Dependências de Desenvolvimento
- `@eslint/js`: ^9.20.0
- `eslint`: ^9.20.0
- `globals`: ^15.14.0
- `nodemon`: ^3.1.9

### Contribuição
Para contribuir com o projeto, siga os passos abaixo:
1. Faça um fork do projeto
2. Crie uma nova branch: `git checkout -b minha-feature`
3. Faça suas alterações e commit: `git commit -m 'Minha nova feature'`
4. Envie para a branch original: `git push origin minha-feature`
5. Crie um Pull Request

---

Essa documentação serve como um guia inicial para entender e rodar o projeto SubTrackk API. Para mais detalhes, consulte os arquivos específicos do projeto.
