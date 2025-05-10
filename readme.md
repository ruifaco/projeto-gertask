### 📜 Descrição

O sistema desenvolvido é um gerenciador de tarefas online, voltado para pessoas com rotinas agitadas que precisam organizar seus compromissos diários de forma prática e acessível. A aplicação permite que cada usuário cadastre suas tarefas com informações como título, data de início e prazo, facilitando o controle e acompanhamento das atividades ao longo do tempo.

Para utilizar o sistema, o usuário deve realizar um cadastro com e-mail e senha, garantindo acesso individualizado e seguro às suas tarefas. Os dados são armazenados em um banco de dados estruturado, que inicialmente conta com duas entidades principais: usuário e tasks. Cada tarefa está diretamente vinculada ao usuário que a criou, possibilitando uma gestão personalizada.

A proposta é oferecer uma solução simples, funcional e eficiente, substituindo o uso de agendas físicas e promovendo mais organização no cotidiano dos usuários. O sistema foi projetado para ser leve, intuitivo e de fácil manutenção, prezando pela experiência do usuário e pela escalabilidade da aplicação.

### 📁 Estrutura de pastas

Cada pasta e subpasta possui uma função específica na organização e no armazenamento dos diversos recursos do projeto, como o código-fonte, elementos visuais e sons. Compreender essa estrutura facilita a navegação entre os arquivos, permitindo que a equipe e colaboradores externos desenvolvam, mantenham e contribuam com o projeto de forma mais eficiente.

```bash
meu-projeto/
│
├── config/                # Arquivos de configuração (ex: conexão com banco)
│   └── database.js
├── controllers/           # Lógica de controle das requisições
│   └── HomeController.js
├── models/                # Definição de modelos de dados (estrutura do banco)
│   └── User.js
├── routes/                # Definição das rotas do sistema
│   └── index.js
├── services/              # Serviços auxiliares do sistema
│   └── userService.js
├── assets/                # Arquivos públicos como imagens e fontes
├── scripts/               # Arquivos de JavaScript públicos
├── styles/                # Arquivos CSS públicos
├── tests/                 # Arquivos de testes unitários
│   └── example.test.js
├── .gitignore             # Arquivo para ignorar arquivos no Git
├── .env.example           # Arquivo de exemplo para variáveis de ambiente
├── jest.config.js         # Arquivo de configuração do Jest
├── package-lock.json      # Gerenciador de dependências do Node.js
├── package.json           # Gerenciador de dependências do Node.js
├── readme.md              # Documentação do projeto (Markdown)
├── server.js              # Arquivo principal que inicializa o servidor
└── rest.http              # Teste de endpoints (opcional)
```

### Como executar

Para rodar o projeto localmente, o primeiro passo é instalar as dependências. Para isso, basta abrir o terminal na raiz do projeto e executar o comando npm install. Esse comando garante que todas as bibliotecas necessárias sejam baixadas.

Depois disso, é preciso criar um arquivo chamado .env na raiz do projeto. Nele, devem ser inseridas as informações de conexão com o banco de dados, como o usuário, a senha, o nome do banco, a porta, entre outros dados. Esse arquivo é importante porque permite configurar o ambiente de forma segura e separada do código.

Com tudo isso pronto, o servidor pode ser iniciado. Para isso, existem duas opções: usar o comando npm run dev, que é indicado durante o desenvolvimento porque reinicia o servidor automaticamente a cada mudança no código; ou então usar node server.js, que executa o servidor normalmente.

Feito isso, o sistema estará funcionando e pode ser acessado pelo navegador no endereço http://localhost:3000.
