function atualizarAluguel(req, res, livros, estudantes, alugueis) {
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

    if (!dataDeInicio || dataDeInicio.trim() === '' || isNaN (new Date(dataDeInicio)) || new Date() < new Date(dataDeInicio)) {
        return res.status(400).send("Data de início inválida ou vazia. Por favor, digite uma data válida. Atente-se para que corresponda ao formato \"AAAA-MM-DD\"");
    }

    if (!dataDeDevolucao || dataDeDevolucao.trim() === '' || isNaN (new Date(dataDeDevolucao)) || new Date(dataDeDevolucao) < new Date(dataDeInicio)) {
        return res.status(400).send("Data de devolução inválida ou vazia. Por favor, digite uma data válida. Atente-se para que corresponda ao formato \"AAAA-MM-DD\"");
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

    const dataDeInicioISO = new Date(dataDeInicio).toISOString().split('T')
    const dataDeDevolucaoISO = new Date(dataDeDevolucao).toISOString().split('T')
    
    alugueis[index].idLivro = parseInt(idLivro) || alugueis[index].idLivro;
    alugueis[index].idEstudante = parseInt(idEstudante) || alugueis[index].idEstudante;
    alugueis[index].dataDeInicio = dataDeInicioISO[0] || alugueis[index].dataDeInicio;
    alugueis[index].dataDeDevolucao = dataDeDevolucaoISO[0] || alugueis[index].dataDeDevolucao;
    console.log(alugueis[index])

    return res.status(200).send("Aluguel atualizado com sucesso!");
}

module.exports = atualizarAluguel;