function atualizarAluguel(req, res, alugueis, livros, estudantes) {
    if (alugueis.length === 0) {
        return res.status(400).send('Nenhum aluguel cadastrado para ser editado.');
    }

    const { id } = req.params;
    const { idLivro, idEstudante, dataDeInicio, dataDeDevolucao } = req.body;

    
    if (isNaN(parseInt(id))) {
        return res.status(400).send("ID inválido. Por favor, digite um número.");
    }

    const index = alugueis.findIndex(aluguel => aluguel.id === parseInt(id));

    if (index === -1) {
        return res.status(404).send(`Não foi encontrado um aluguel com o ID ${id}.`);
    }

    if (!dataDeInicio || isNaN(new Date(dataDeInicio))) {
        return res.status(400).send("Data de início inválida. Por favor, digite uma data válida.");
    }

    if (!dataDeDevolucao || isNaN(new Date(dataDeDevolucao))) {
        return res.status(400).send("Data de devolução inválida. Por favor, digite uma data válida.");
    }
    
    if (idLivro) {
        const livroExiste = livros.find(l => l.id === parseInt(idLivro));
        if (!livroExiste) {
            return res.status(404).send(`Livro com o ID ${idLivro} não encontrado.`);
        }
    }

    if (idEstudante) {
        const estudanteExiste = estudantes.find(e => e.id === parseInt(idEstudante));
        if (!estudanteExiste) {
            return res.status(404).send(`Estudante com o ID ${idEstudante} não encontrado.`);
        }
    }
    
    const aluguelExistente = alugueis[index];
    
    aluguelExistente.idLivro = parseInt(idLivro) || aluguelExistente.idLivro;
    aluguelExistente.idEstudante = parseInt(idEstudante) || aluguelExistente.idEstudante;
    aluguelExistente.dataDeInicio = dataDeInicio || aluguelExistente.dataDeInicio;
    aluguelExistente.dataDeDevolucao = dataDeDevolucao || aluguelExistente.dataDeDevolucao;

    return res.status(200).send("Aluguel atualizado com sucesso!");
}

module.exports = atualizarAluguel;