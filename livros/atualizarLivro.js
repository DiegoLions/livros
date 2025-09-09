function atualizarLivro(req, res, livros) {
    if (livros.length === 0) {
        return res.status(400).send('Nenhum livro cadastrado no gerenciador. Primeiro, adicione um livro para então poder editá-lo.');
    }
    

    const {id} = req.params;

    const { titulo, autor, anoDeLancamento, genero} = req.body

     if (isNaN(parseInt(id))) {
            return res.status(400).send("ID inválido. Por favor, digite um número.");
        }

const indexParaAtualizar = livros.findIndex (livro => livro.id===parseInt(id))


    if (indexParaAtualizar === -1) {
            return res.status(400).send(`Não foi encontrado um livro com o ID ${id}. Por favor, tente novamente.`);
        }


        if (isNaN(parseInt(anoDeLancamento)) || anoDeLancamento.trim() === '') {
           return res.status(400).send("Ano de Lançamento inválido. Por favor, digite apenas números.");
        }
    
    const livroParaAtualizar = {
        titulo: titulo,
        autor: autor,
        anoDeLancamento: anoDeLancamento,
        genero : genero,
        id: id,
    };

    const index = livros.findIndex (livro => livro.id===parseInt(id))

    if (index===-1) {
        return res.status(404).send ('Livro não encontrado')
    }

    livros[index] = livroParaAtualizar
    return res.send("Livro atualizado com sucesso!");
}

module.exports = atualizarLivro;