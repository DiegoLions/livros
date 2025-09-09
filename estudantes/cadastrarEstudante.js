let idGen = 1

function cadastrarEstudante(req, res, estudantes) {
    const { nome, matricula, curso, ano } = req.body;

    
    if (typeof anoDeLancamento !== 'number') {
        return res.status(400).send("Ano de Lançamento inválido. Por favor, digite um número, não uma string.");
    }

    const novoLivro = {
        nome: nome,
        matricula: matricula,
        curso: curso,
        ano: ano,
        id: idGen,
    };
    idGen++;
    livros.push(novoLivro);
    res.status(201).send('Livro cadastrado com sucesso!');
}

module.exports = cadastrarEstudante;