# 🎯 GerTask - Gerenciador de Tarefas

O GerTask é um sistema gerenciador de tarefas online, voltado para pessoas com rotinas agitadas que precisam organizar seus compromissos diários de forma prática e acessível. A aplicação permite que cada usuário cadastre e gerencie suas tarefas, promovendo mais organização e produtividade no cotidiano.

## ✨ Funcionalidades Principais

-   [x] **Autenticação de Usuários:** Cadastro e sistema de acesso seguro com e-mail e senha.
-   [x] **Gerenciamento de Tarefas (CRUD):**
    -   Criação de novas tarefas com título, data de início e prazo.
    -   Visualização de todas as tarefas em uma lista centralizada.
    -   Edição de tarefas existentes.
    -   Exclusão de tarefas.
-   [ ] **Gerenciamento de Usuários (Em desenvolvimento):**
    -   Criação e listagem de usuários.
    -   (Futuro) Atualização e exclusão lógica de usuários.

## 🛠️ Tecnologias Utilizadas

-   **Backend:** Node.js, Express.js
-   **Banco de Dados:** PostgreSQL (hospedado no Supabase)
-   **Frontend (Views):** EJS (Embedded JavaScript templates)
-   **Testes:** Jest
-   **Variáveis de Ambiente:** Dotenv

## 📁 Estrutura de Pastas

A estrutura do projeto segue uma arquitetura baseada no padrão MVC (Model-View-Controller), com uma camada de Serviço adicional para a lógica de negócios.

```bash
├── app.js
├── assets
│   ├── favicon.ico
│   └── modelo-banco_page-0001.jpg
├── config
│   └── db.js
├── controllers
│   ├── tasksController.js
│   └── userController.js
├── documentos
│   └── wad.md
├── jest.config.js
├── models
│   ├── taskModel.js
│   └── userModel.js
├── package-lock.json
├── package.json
├── public
│   └── css
│       └── style.css
├── readme.md
├── rest.http
├── routes
│   ├── tasks.js
│   └── usuarios.js
├── scripts
│   ├── init.sql
│   └── runSQLScript.js
├── tests
│   ├── userController.test.js
│   ├── userModel.test.js
│   ├── userRoutes.test.js
│   └── userService.test.js
└── views
    ├── components
    │   └── header.ejs
    ├── layout
    │   └── main.ejs
    └── pages
        ├── editarTask.ejs
        ├── newTask.ejs
        ├── newUser.ejs
        └── tasks.ejs
```

## 🚀 Como Executar o Projeto

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local.

### **1. Pré-requisitos**

-   [Node.js](https://nodejs.org/en/) (versão 16 ou superior)
-   [Git](https://git-scm.com/)
-   Uma conta no [Supabase](https://supabase.com/) para hospedar o banco de dados.

### **2. Clonando o Repositório**

```bash
git clone https://github.com/ruifaco/projeto-gertask
cd projeto-gertask
```

### **3. Instalando as Dependências**

```bash
npm install
```

### **4. Configurando o Ambiente**

As credenciais do banco de dados são gerenciadas por variáveis de ambiente.

a. Crie um arquivo chamado `.env` na raiz do projeto.

b. Copie o conteúdo abaixo para o seu arquivo `.env` e preencha com as suas credenciais do Supabase (encontradas em **Project Settings > Database**).

```env
# Credenciais do Banco de Dados Supabase
DB_HOST=db.xxxxxxxx.supabase.co
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD="SUA_SENHA_AQUI"
DB_DATABASE=postgres
DB_SSL=true
```

### **5. Configurando o Banco de Dados**

O projeto inclui um script para criar as tabelas `usuarios` e `tasks` automaticamente. Para executá-lo, use o comando:

```bash
node scripts/runSQLScript.js
```
*(Nota: Certifique-se de que o script `runSQLScript.js` está configurado para ler e executar o `init.sql`)*

### **6. Iniciando o Servidor**

-   Para ambiente de desenvolvimento (com reinício automático):
    ```bash
    npm run dev
    ```
-   Para execução normal:
    ```bash
    node app.js
    ```

O servidor estará rodando em `http://localhost:3000`.

## 🔗 Endpoints da API

A API segue os princípios REST. Abaixo estão os endpoints principais:

| Método | Endpoint          | Descrição                     |
| :----- | :---------------- | :---------------------------- |
| `POST` | `/usuarios`       | Cria um novo usuário.           |
| `GET`  | `/usuarios`       | Lista todos os usuários.        |
| `POST` | `/tasks`          | Cria uma nova tarefa.           |
| `GET`  | `/tasks`          | Lista todas as tarefas.         |
| `PUT`  | `/tasks/:id`      | Atualiza uma tarefa existente.  |
| `DELETE` | `/tasks/:id`    | Deleta uma tarefa.              |