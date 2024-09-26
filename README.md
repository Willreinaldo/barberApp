# Projeto Barber App
# BarberShop App

## Descrição

Este é um aplicativo de barbearia que permite agendar serviços, gerenciar barbearias e visualizar avaliações. O projeto é dividido em frontend e backend, ambos desenvolvidos com tecnologias modernas.

## Tecnologias Utilizadas

- **Frontend:** React
- **Backend:** Node.js, TypeScript, Express
- **Banco de Dados:** PostgreSQL
- **ORM:** Prisma

## Requisitos

- Node.js (versão 14 ou superior)
- PostgreSQL

## Configuração do Ambiente

### Backend

1. Navegue até a pasta do backend:
   ```bash
   cd backend

Aqui está o texto completo formatado para o README, incluindo todas as informações que você forneceu:

markdown
Copiar código
# BarberShop App

## Descrição

Este é um aplicativo de barbearia que permite agendar serviços, gerenciar barbearias e visualizar avaliações. O projeto é dividido em frontend e backend, ambos desenvolvidos com tecnologias modernas.

## Tecnologias Utilizadas

- **Frontend:** React
- **Backend:** Node.js, TypeScript, Express
- **Banco de Dados:** PostgreSQL
- **ORM:** Prisma

## Requisitos

- Node.js (versão 14 ou superior)
- PostgreSQL

## Configuração do Ambiente

### Backend

1. Navegue até a pasta do backend:
   ```bash
   cd backend
Crie um arquivo .env com as seguintes variáveis de ambiente:

plaintext
Copiar código
DATABASE_URL="postgresql://postgres:postgres@localhost:5455/mydb?schema=public"
# Se necessário, use a linha abaixo como alternativa:
# DATABASE_URL="postgresql://postgres:postgres@localhost:5432/barberapp?schema=public"

JWT_SECRET=top_secret
PORT=5000
Instale as dependências:

bash
Copiar código
npm install
Gere as tabelas de serviço e barbeiro:

bash
Copiar código
npm run generate
Para iniciar o backend, execute:

bash
Copiar código
npm run dev
Frontend
Navegue até a pasta do frontend:

bash
Copiar código
cd frontend
Crie um arquivo .env com a seguinte variável de ambiente:

plaintext
Copiar código
REACT_APP_API_URL=http://localhost:5000
Instale as dependências:

bash
Copiar código
npm install
Para iniciar o frontend, execute:

bash
npm run start
Comandos do Prisma
Para migrar o banco de dados:

bash
npm run migrate
Para gerar os dados iniciais (seed):

bash
npm run generate
Estrutura de Scripts
No package.json do backend, você encontrará os seguintes scripts:

json
"scripts": {
  "start": "node src/app.ts",
  "dev": "nodemon src/app.ts",
  "migrate": "prisma migrate dev",
  "generate": "ts-node src/script.ts"
}
Contribuições
Sinta-se à vontade para contribuir com melhorias ou correções. Para isso, basta fazer um fork do repositório e abrir um pull request.

