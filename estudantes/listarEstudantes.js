function listarEstudantes(req, res,estudantes) {
    if (!estudantes || estudantes.length === 0) {
        return res.status(400).send("Nenhum estudante cadastrado.");
    } 
    
    return res.status(200).send(`
        \n=== ESTUDANTES CADASTRADOS NO GERENCIADOR ===
        ${
            estudantes.map((estudante, index) => {
                return (`
                    ${index + 1}. 
                    ID: ${estudante.id}
                    Nome: ${estudante.nome}
                    Matrícula: ${estudante.matricula}
                    Curso: ${estudante.curso}
                    Ano: ${estudante.ano}
                    \n`)
            })
        }` 
    )
    
}
module.exports = listarEstudantes;