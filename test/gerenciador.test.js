// 1. Importando o código que queremos testar
const GerenciadorDeTarefas = require('../src/gerenciador.js');

// 2. O "describe" agrupa testes relacionados. É a nossa "suíte de testes".
describe('GerenciadorDeTarefas', () => {

  // 3. O "test" (ou "it") é o caso de teste individual.
  it('deve ser capaz de adicionar uma nova tarefa', () => {
    
    // ARRANGE (Organizar): Configuramos o cenário.
    const gerenciador = new GerenciadorDeTarefas();
    const nomeDaTarefa = 'Estudar TDD';

    // ACT (Agir): Executamos a ação que queremos testar.
    gerenciador.adicionarTarefa(nomeDaTarefa);

    // ASSERT (Verificar): Verificamos se o resultado foi o esperado.
    expect(gerenciador.listarTarefas()).toHaveLength(1);
    expect(gerenciador.listarTarefas()).toContain(nomeDaTarefa);
  });

  it('não deve adicionar tarefas com texto duplicado', () => {

    // ARRANGE (organizando o cenário)
    const gerenciador = new GerenciadorDeTarefas();
    const nomeDaTarefa = 'Fazer café'; 

    // ACT (executando)
    gerenciador.adicionarTarefa(nomeDaTarefa); 
    gerenciador.adicionarTarefa(nomeDaTarefa); // tentando adicionar a mesma tarefa 

    // ASSERT (verificando)
    expect(gerenciador.listarTarefas()).toHaveLength(1);

  });

  it('deve marcar uma tarefa como \'concluída\'', () => {

    // ARRANGE
    const gerenciador = new GerenciadorDeTarefas();
    const novaTarefa = 'Estudar TDD';
    gerenciador.adicionarTarefa(novaTarefa);


    // ACT
    gerenciador.concluirTarefa(novaTarefa);

    // ASSERT
    const tarefa = gerenciador.getTarefa(novaTarefa);
    expect(tarefa.concluida).toBe(true);


  });

  it('deve retornar o nome do dono e a data da criação da lista', () => {
    // ARRANGE
    dono = 'Diogo';
    const gerenciador = new GerenciadorDeTarefas(dono);

    // ACT
    nome = gerenciador.getDono();

    // ASSERT
    expect(nome).toContain(dono);


  });

});