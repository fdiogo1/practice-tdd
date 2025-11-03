# 🚀 Projeto: Gerenciador de Tarefas com TDD

Este é um projeto de estudo focado na aplicação prática de **Test-Driven Development (TDD)** para construir um simples gerenciador de tarefas.

O objetivo principal não é criar uma aplicação complexa, mas sim exercitar e documentar o ciclo **Red-Green-Refactor** usando JavaScript e [Jest](https://jestjs.io/).

## 🎯 Funcionalidades Planejadas

A classe `GerenciadorDeTarefas` deve ser capaz de:

* [X] Adicionar uma nova tarefa.
* [X] Listar todas as tarefas.
* [X] Não permitir tarefas com texto duplicado.
* [ ] Marcar uma tarefa como "concluída".
* [ ] Remover uma tarefa.

*(Nota: Você pode marcar as caixas com um `X` conforme for implementando cada ciclo TDD)*

## 🛠️ Tecnologias Utilizadas

* **[Node.js](https://nodejs.org/):** Ambiente de execução JavaScript no lado do servidor.
* **[Jest](https://jestjs.io/):** Framework de testes "tudo-em-um" para JavaScript.

## 🏁 Como Executar o Projeto

Este projeto consiste apenas em código de back-end e testes. Não há interface gráfica.

### Pré-requisitos

* Node.js (v16 ou superior)
* npm (geralmente vem com o Node.js)

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU-USUARIO/meu-projeto-tdd.git](https://github.com/SEU-USUARIO/meu-projeto-tdd.git)
    cd meu-projeto-tdd
    ```

2.  **Instale as dependências:**
    (Neste caso, apenas o Jest como dependência de desenvolvimento)
    ```bash
    npm install
    ```

3.  **Execute os testes:**
    Para rodar todos os testes uma vez:
    ```bash
    npm test
    ```

4.  **Execute em Modo TDD (Watch Mode):**
    Esta é a forma recomendada para este projeto. O Jest ficará "assistindo" seus arquivos e rodará os testes automaticamente toda vez que você salvar uma alteração.

    ```bash
    npm test -- --watch
    ```

## 🔄 O Processo TDD (Red-Green-Refactor)

O desenvolvimento deste projeto segue estritamente o ciclo TDD:

1.  **🔴 VERMELHO (RED):**
    * Escrevemos um novo teste no arquivo `test/gerenciador.test.js` para uma funcionalidade que ainda não existe.
    * Rodamos `npm test` e vemos o teste **falhar** (vermelho). Isso é esperado e garante que o teste está funcionando.

2.  **🟢 VERDE (GREEN):**
    * Escrevemos o código **mínimo possível** no arquivo `src/gerenciador.js` apenas para fazer o teste passar.
    * Não nos preocupamos com a qualidade do código nesta fase, apenas com a funcionalidade.
    * Rodamos `npm test` e vemos o teste **passar** (verde).

3.  **🔵 REFATORAR (REFACTOR):**
    * Com a "rede de segurança" do teste verde, agora melhoramos o código.
    * Limpamos nomes de variáveis, removemos duplicação ou melhoramos a lógica.
    * Após cada pequena refatoração, rodamos `npm test` para garantir que tudo continua verde.

Depois, iniciamos um novo ciclo para a próxima funcionalidade.