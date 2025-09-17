function deletarAluguel(req, res, livros, estudantes, alugueis) {
    if (alugueis.length === 0) {
        return res.status(400).send('Nenhum aluguel cadastrado no gerenciador. Primeiro, cadastre um aluguel para então poder deletá-lo.');
    }
  
    const {id} = req.params;

        if (isNaN(parseInt(id))) {
            return res.status(400).send("ID inválido. Por favor, digite um número.");
        }
        
const indexParaDeletar = alugueis.findIndex (aluguel => aluguel.id===parseInt(id))


        if (indexParaDeletar === -1) {
            return res.status(400).send(`Não foi encontrado um aluguel com o ID ${id}. Por favor, tente novamente.`);
        }

    alugueis.splice(indexParaDeletar, 1);

    return res.send("Aluguel deletado com sucesso!");

}

module.exports = deletarAluguel;
