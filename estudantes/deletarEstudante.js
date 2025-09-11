function deletarEstudante(req, res, estudantes) {
    if (estudantes.length === 0) {
        return res.status(400).send('Nenhum estudante cadastrado no gerenciador. Primeiro, cadastre um estudante para então poder deletá-lo.');
    }
  
    const {id} = req.params;

  
        if (isNaN(parseInt(id))) {
            return res.status(400).send("ID inválido. Por favor, digite um número.");
        }
        
const indexParaDeletar = estudantes.findIndex (estudante => estudante.id===parseInt(id))

        if (indexParaDeletar === -1) {
            return res.status(400).send(`Não foi encontrado um estudante com o ID ${id}. Por favor, tente novamente.`);
        }

    estudantes.splice(indexParaDeletar, 1);

    return res.send("Estudante deletado com sucesso!");

}

module.exports = deletarEstudante;