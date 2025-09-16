function atualizarEstudante(req, res, estudantes) {
    if (estudantes.length === 0) {
        return res.status(400).send('Nenhum estudante cadastrado no gerenciador. Primeiro, cadastre um estudante para então poder editá-lo.');
    }
    

    const {id} = req.params;

    const { nome, matricula, curso, ano } = req.body

     if (isNaN(parseInt(id))) {
            return res.status(400).send("ID inválido. Por favor, digite um número.");
        }

const indexParaAtualizar = estudantes.findIndex (estudante => estudante.id===parseInt(id))


    if (indexParaAtualizar === -1) {
            return res.status(400).send(`Não foi encontrado um estudante com o ID ${id}. Por favor, tente novamente.`);
        }


            if (typeof ano !== 'number') {
        return res.status(400).send("Ano inválido. Por favor, digite um número (não uma string).");
    }
    
    const estudanteParaAtualizar = {
        nome: nome,
        matricula: matricula,
        curso: curso,
        ano: ano,
        id: id,
    };

    const index = estudantes.findIndex (estudante => estudante.id===parseInt(id))

    if (index===-1) {
        return res.status(404).send ('Estudante não encontrado')
    }

    estudantes[index] = estudanteParaAtualizar
    return res.send("Estudante atualizado com sucesso!");
}

module.exports = atualizarEstudante;