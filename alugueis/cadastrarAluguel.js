let idAluguelGen = 1

function cadastrarAluguel(req, res, livros, estudantes, alugueis) {
    if (livros.length === 0) {
        return res.status(400).send('Nenhum livro cadastrado. Cadastre um livro antes de tentar alugar.');
    }

    if (estudantes.length === 0) {
        return res.status(400).send('Nenhum estudante cadastrado. Cadastre um estudante antes de alugar.');
    }
    
    const { idLivro, idEstudante } = req.body;

    if (!idLivro || !idEstudante) {
        return res.status(400).send("ID do livro e ID do estudante são obrigatórios e não podem estar vazios.");
    }

    const livro = livros.find(l => l.id === parseInt(idLivro));
    const estudante = estudantes.find(e => e.id === parseInt(idEstudante));

    if (!livro) {
        return res.status(404).send(`Livro com o ID ${idLivro} não encontrado.`);
    }

    if (!estudante) {
        return res.status(404).send(`Estudante com o ID ${idEstudante} não encontrado.`);
    }
    
    if (livro.alugado) {
        return res.status(400).send(`O livro "${livro.titulo}" já está alugado.`);
    }

    const diaDeHoje = new Date();
    const daquiSeteDias = new Date();
    daquiSeteDias.setDate(diaDeHoje.getDate() + 7);
    const dataDeInicio = diaDeHoje.toISOString().split('T');
    const dataDeDevolucao = daquiSeteDias.toISOString().split('T');

    const novoAluguel = {
        id: idAluguelGen++,
        idLivro: livro.id,
        idEstudante: estudante.id,
        dataDeInicio: dataDeInicio[0],
        dataDeDevolucao: dataDeDevolucao[0],
    };

    livro.alugado = true;
    alugueis.push(novoAluguel);

    return res.status(201).send({
        mensagem: "Livro alugado com sucesso!",
        aluguel: novoAluguel
    });
}

module.exports = cadastrarAluguel;