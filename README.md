# Projeto Barber App

### Alunos: Willian Reinaldo, Francisco Paulino e Gustavo Araujo.

## Descrição

Este é um aplicativo de barbearia que permite agendar e gerenciar um serviço além de criar ou visualizar avaliações sobre a barbearia. O projeto é dividido em frontend e backend, ambos desenvolvidos com tecnologias modernas, além de utilizar biblioteca de mapa e de acessibilidade.

## Tecnologias Utilizadas

- **Frontend:** React
- **Backend:** Node.js, TypeScript, Express
- **Banco de Dados:** PostgreSQL
- **ORM:** Prisma

## Requisitos

- Node.js (versão 14 ou superior)
- PostgreSQL

## Configuração do Ambiente

## Backend

- ### Navegue até a pasta do backend:
   ```
   cd backend
- ### Crie um arquivo .env com as seguintes variáveis de ambiente:
  - `JWT_SECRET=top_secret`
   -  `PORT=5000`

- `DATABASE_URL="postgresql://<USUÁRIO>:<SENHA>@<HOST>:<PORTA>/<NOME_DO_BANCO>?schema=public"`
- USUÁRIO: Seu nome de usuário do PostgreSQL (ex: postgres)
- SENHA: A senha definida para o seu PostgreSQL (ex: postgres)
- HOST: O host onde o PostgreSQL está rodando (ex: localhost)
- PORTA: A porta em que o PostgreSQL está rodando (ex: 5455)
- NOME_DO_BANCO: O nome do banco de dados a ser utilizado (ex: mydb)
- schema=public: Define o schema padrão
- Exemplo de configuração: `DATABASE_URL="postgresql://postgres:postgres@localhost:5455/mydb?schema=public"`
  
- ### Instale as dependências:
`npm install`

### Gere as tabelas de serviço e barbeiro:
   
`npm run generate`
- ### Para iniciar o backend, execute:
`npm run dev`
## Frontend
- ### O Frontend roda por padrão na porta 3000;
- ### Navegue até a pasta do frontend:

`cd frontend`
- ### Crie um arquivo .env com a seguinte variável de ambiente:
`REACT_APP_API_URL=http://localhost<porta_do_seu_backend>`;
- ### Exemplo:
`REACT_APP_API_URL=http://localhost:5000`.

- ### Instale as dependências:
`npm install`
- ### Para iniciar o frontend, execute:
`npm run start`
