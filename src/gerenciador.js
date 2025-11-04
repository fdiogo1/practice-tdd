// src/gerenciador.js

// 1. Criamos a classe que o teste tentou instanciar
class GerenciadorDeTarefas {

    // 2. O teste precisa de um construtor (new) e de uma lista interna
    constructor(dono='unknown') {
        this.tarefas = [];
        this.dono = dono;
        this.date = Date.now();
    }

    // 3. O teste chama o método 'adicionarTarefa'
    adicionarTarefa(textoDaTarefa) {

        const tarefaExiste = this.tarefas.some(t => t.texto === textoDaTarefa)

        if (!tarefaExiste) {
            this.tarefas.push({
                texto: textoDaTarefa,
                concluida: false // Estado inicial padrão
            });
        }
    }

    concluirTarefa(textoDaTarefa) {
        const tarefaExiste = this.getTarefa(textoDaTarefa);

        if (tarefaExiste) {
            tarefaExiste.concluida = true;
        }
    }

    // 4. O teste chama o método 'listarTarefas' para verificar
    listarTarefas() {
        return this.tarefas.map(t => t.texto);
    }

    getTarefa(textoDaTarefa) {
        return this.tarefas.find(t => t.texto === textoDaTarefa);
    }

    getDono() {
        return this.dono;
    }

}

// 5. Exportamos a classe para que o arquivo de teste possa "vê-la"
module.exports = GerenciadorDeTarefas;