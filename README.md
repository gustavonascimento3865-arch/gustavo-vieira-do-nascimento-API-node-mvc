# API de Produtos em MVC (Node.js + MySQL)

Aluno: Gustavo Vieira do Nascimento
Turma: (coloque a turma)

Atividade Prática 02 de PW3: a API de produtos da atividade anterior foi refatorada para o padrão MVC.

## Como rodar

1. Instale as dependências com `npm install`.
2. Rode o `schema.sql` no MySQL para criar o banco `loja_mvc` e a tabela `produtos`.
3. Copie o `.env.example` para `.env` e preencha com seus dados do MySQL.
4. Inicie com `npm run dev` (ou `npm start`). A API fica em http://localhost:3000/produtos.

## Arquitetura

O código foi separado em camadas:

- `config/db.js`: conexão com o MySQL.
- `models/`: onde ficam todas as consultas SQL.
- `controllers/`: valida os dados recebidos, chama o model e devolve a resposta com o status certo.
- `routes/`: define as rotas e liga cada uma a uma função do controller.
- `server.js`: configura o Express e sobe o servidor, sem nenhum SQL.

A "view" é a resposta em JSON, já que a aplicação é só uma API.
