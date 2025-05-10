### 📜 Descrição

O sistema desenvolvido é um gerenciador de tarefas online, voltado para pessoas com rotinas agitadas que precisam organizar seus compromissos diários de forma prática e acessível. A aplicação permite que cada usuário cadastre suas tarefas com informações como título, data de início e prazo, facilitando o controle e acompanhamento das atividades ao longo do tempo.

Para utilizar o sistema, o usuário deve realizar um cadastro com e-mail e senha, garantindo acesso individualizado e seguro às suas tarefas. Os dados são armazenados em um banco de dados estruturado, que inicialmente conta com duas entidades principais: usuário e tasks. Cada tarefa está diretamente vinculada ao usuário que a criou, possibilitando uma gestão personalizada.

A proposta é oferecer uma solução simples, funcional e eficiente, substituindo o uso de agendas físicas e promovendo mais organização no cotidiano dos usuários. O sistema foi projetado para ser leve, intuitivo e de fácil manutenção, prezando pela experiência do usuário e pela escalabilidade da aplicação.

### 📁 Estrutura de pastas

Compreender essa estrutura facilita a navegação entre os arquivos, permitindo que a equipe e colaboradores externos desenvolvam, mantenham e contribuam com o projeto de forma mais eficiente.

```bash
MVC-BOILERPLATE/
├── assets/
│   └── assets/modelo-banco_page-0001.jpg
├── config/
│   └── database.js
├── controllers/
│   └── userController.js
├── documentos/
│   └── wad.md
├── models/
│   └── UserModel.js
├── routes/
│   └── frontRoutes.js
├── └── userRoutes.js
├── services/
│   └── userService.js
├── assets/
├── scripts/
├── styles/
├── tests/
│   └── example.test.js
├── .gitignore
├── .env
├── jest.config.js
├── package-lock.json
├── package.json
├── readme.md
├── server.js
└── rest.http
```

### Como executar

Para rodar o projeto localmente, o primeiro passo é instalar as dependências. Para isso, basta abrir o terminal na raiz do projeto e executar o comando npm install. Esse comando garante que todas as bibliotecas necessárias sejam baixadas.

Depois disso, é preciso criar um arquivo chamado .env na raiz do projeto. Nele, devem ser inseridas as informações de conexão com o banco de dados, como o usuário, a senha, o nome do banco, a porta, entre outros dados. Esse arquivo é importante porque permite configurar o ambiente de forma segura e separada do código.

Com tudo isso pronto, o servidor pode ser iniciado. Para isso, existem duas opções: usar o comando npm run dev, que é indicado durante o desenvolvimento porque reinicia o servidor automaticamente a cada mudança no código; ou então usar node server.js, que executa o servidor normalmente.

Feito isso, o sistema estará funcionando e pode ser acessado pelo navegador no endereço http://localhost:3000.
