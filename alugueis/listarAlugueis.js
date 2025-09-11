function listarAlugueis(req, res, livros, estudantes, alugueis) {
    if (!alugueis || alugueis.length === 0) {
        return res.status(400).send("Nenhum aluguel efetuado.");
    }
    
    const alugueisFormatados = alugueis.map((aluguel, index) => {

        const livro = livros.find(l => l.id === aluguel.idLivro);
        
        const estudante = estudantes.find(e => e.id === aluguel.idEstudante);
        
        const tituloLivro = livro ? livro.titulo : 'Livro não encontrado';
        const nomeEstudante = estudante ? estudante.nome : 'Estudante não encontrado';

        return `
            ${index + 1}. 
            ID do Aluguel: ${aluguel.id}
            Título do Livro: ${tituloLivro} (ID: ${aluguel.idLivro})
            Alugado para: ${nomeEstudante} (ID: ${aluguel.idEstudante})
            Data de Início do Aluguel: ${aluguel.dataDeInicio}
            Data de Devolução do Livro: ${aluguel.dataDeDevolucao}
        `;
    }).join('');

    return res.status(200).send(`
        \n=== ALUGUÉIS CADASTRADOS NO GERENCIADOR ===
        ${alugueisFormatados}
    `);
}

module.exports = listarAlugueis;