### 📜 Descrição

O sistema desenvolvido é um gerenciador de tarefas online, voltado para pessoas com rotinas agitadas que precisam organizar seus compromissos diários de forma prática e acessível. A aplicação permite que cada usuário cadastre suas tarefas com informações como título, data de início e prazo, facilitando o controle e acompanhamento das atividades ao longo do tempo.

Para utilizar o sistema, o usuário deve realizar um cadastro com e-mail e senha, garantindo acesso individualizado e seguro às suas tarefas. Os dados são armazenados em um banco de dados estruturado, que inicialmente conta com duas entidades principais: usuário e tasks. Cada tarefa está diretamente vinculada ao usuário que a criou, possibilitando uma gestão personalizada.

A proposta é oferecer uma solução simples, funcional e eficiente, substituindo o uso de agendas físicas e promovendo mais organização no cotidiano dos usuários. O sistema foi projetado para ser leve, intuitivo e de fácil manutenção, prezando pela experiência do usuário e pela escalabilidade da aplicação.

### 📁 Estrutura de pastas

Compreender essa estrutura facilita a navegação entre os arquivos, permitindo que a equipe e colaboradores externos desenvolvam, mantenham e contribuam com o projeto de forma mais eficiente.

```bash
├── assets
│   ├── favicon.ico
│   └── modelo-banco_page-0001.jpg
├── config
│   └── db.js
├── controllers
│   ├── TarefaController.js
│   └── userController.js
├── documentos
│   └── wad.md
├── jest.config.js
├── models
│   └── userModel.js
├── node_modules
├── package-lock.json
├── package.json
├── readme.md
├── rest.http
├── routes
│   ├── frontRoutes.js
│   ├── index.js
│   ├── taskRoutes.js
│   └── userRoutes.js
├── scripts
│   ├── init.sql
│   └── runSQLScript.js
├── server.js
├── services
│   └── userService.js
├── tests
│   ├── userController.test.js
│   ├── userModel.test.js
│   ├── userRoutes.test.js
│   └── userService.test.js
└── views
    ├── components
    ├── css
    ├── layout
    └── pages
```

### Como executar

Para colocar o projeto em funcionamento no seu ambiente local, alguns passos são necessários. Primeiro, certifique-se de ter o Node.js e o npm instalados. Após clonar o repositório para sua máquina, navegue até a pasta raiz do projeto pelo terminal e instale todas as dependências listadas no package.json com o comando npm install.

Com as dependências instaladas, o próximo passo crucial é configurar a conexão com o banco de dados PostgreSQL, que neste projeto é hospedado na plataforma Supabase. Você precisará obter as credenciais de acesso ao seu banco de dados no painel do Supabase. Em seguida, crie um arquivo chamado .env na raiz do projeto. Dentro deste arquivo, você definirá as variáveis de ambiente necessárias para a conexão, como DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE, e DB_SSL.

Após configurar as variáveis de ambiente, é preciso definir a estrutura do banco de dados. As tabelas usuarios e tasks são criadas através de comandos SQL. É fundamental que a tabela tasks tenha a coluna id como SERIAL PRIMARY KEY para auto-incremento e que a chave estrangeira id_usuario referencie corretamente a tabela usuarios, idealmente com ON DELETE CASCADE.

Com tudo isso pronto, o servidor pode ser iniciado. Para desenvolvimento, se você tiver um script configurado (como npm run dev usando nodemon), ele permitirá que o servidor reinicie automaticamente a cada mudança no código. Alternativamente, você pode usar node server.js para uma execução normal. Uma vez iniciado, o sistema estará acessível no seu navegador geralmente em http://localhost:3000, e a API estará disponível em http://localhost:3000/api.