# Tasks - Gerenciador de tarefas feito com Angular, Nodejs e Firebase.

## Instalação

- Você vai precisar instalar o Nodejs "https://nodejs.org/en/"
- Você vai precisar instalar o Angular/CLI, execute o seguinte comando: "npm install -g @angular/cli"
- Você também vai precisar criar um projeto no Firebase "https://firebase.google.com/"

## Configurando o ambiente 
- Baixe o projeto Angular.
- Depois de ter criado o projeto no Firebase, pegue as configurações do seu projeto. Veja a imagem abaixo.
<img src="https://firebasestorage.googleapis.com/v0/b/tasks-b48c9.appspot.com/o/firebase-config.jpg?alt=media&token=233c8e82-7198-4baf-8bdc-442701370cc7">

- Insira as configurações do Firebase no seu projeto Angular.
- Procure por "src/environments/environments.ts" & "src/environments/environments.prod.ts" e insira as configurações. Abaixo um exemplo.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    databaseURL: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    projectId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
  }
};

## Executando o projeto NodeJs
- Para executar a API, você vai precisar fazer deploy no cloud functions.
- Acesse a pasta via terminal "task-server\functions"
- Instale o "firebase tools" via terminal
- Comando: "npm install -g firebase-tools"
- Depois de ter instalado, execute os seguintes comandos: firebase init, faça o login em sua conta google.
- Selecione a opção "Functions".
- Execute o comando "firebase deploy --only functions" para fazer o deploy da API.
- Depois de ter feito o deploy da api no Cloud Functions, você vai precisar pegar o link da API para inserir no projeto Angular.
- Você vai pegar o link da API, no site do firebase. 
Exemplo na foto abaixo:
<img src="https://firebasestorage.googleapis.com/v0/b/tasks-b48c9.appspot.com/o/functions.jpg?alt=media&token=e78594ee-23a7-478b-b1fc-6dbd97da013a">

- Para inserir o link da API no projeto Angular, você vai ter que ir no diretório: "src/environments/environments.ts" & "src/environments/environments.prod.ts"

Exemplo: 

export const environment = {
  production: false,
  firebaseConfig: {
    ....
    ....
    .......
    ...
  },
  API: 'LINK-DA-API';
};

## Executando o Projeto Task
- No terminal, você vai acessar o diretório do projeto Angular e vai inserir o seguinte comando:
- "ng serve"
- O projeto irá rodar no endereço "http://localhost:4200".
- Para acessar o projeto, você terá que criar uma conta no firebase.
- Acesse o firebase, no menu em "autenticação", você terá que ativar o metodo de login: "Email e senha".
- Depois crie um usuário e senha para acessar o projeto.

# Dúvidas

- Só falar comigo:
- instagram.com/mateuscvte





