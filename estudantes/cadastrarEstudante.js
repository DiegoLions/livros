let idGen = 1

function cadastrarEstudante(req, res, estudantes) {
    const { nome, matricula, curso, ano } = req.body;

    
    if (typeof ano !== 'number') {
        return res.status(400).send("Ano inválido. Por favor, digite um número (não uma string).");
    }

    const novoEstudante = {
        nome: nome,
        matricula: matricula,
        curso: curso,
        ano: ano,
        id: idGen,
    };
    idGen++;
    estudantes.push(novoEstudante);
    res.status(201).send('Estudante cadastrado com sucesso!');
}

module.exports = cadastrarEstudante;