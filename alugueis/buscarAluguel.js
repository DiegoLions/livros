function buscarAluguelPorDataDeInicio(req, res, livros, estudantes, alugueis) {
    if (alugueis.length === 0) {
        return res.status(400).send('Nenhum aluguel cadastrado.');
    }
    
    const { dataDeInicio } = req.params;
 

    if (!dataDeInicio || dataDeInicio.trim() === '' || isNaN (new Date(dataDeInicio)) || new Date() < new Date(dataDeInicio)) {
        return res.status(400).send('A data de início do aluguel não pode estar vazia ou ser maior que a data de hoje');
    }

const dataDeInicioISO = new Date(dataDeInicio).toISOString().split('T')

    const filtrarAluguel = alugueis.filter(aluguel =>
        aluguel.dataDeInicio.includes(dataDeInicioISO[0])
    );
 
    if (filtrarAluguel.length === 0) {
        return res.status(404).send(`Nenhum aluguel encontrado para a data de início "${dataDeInicioISO[0]}".`);
    } else {
        let mensagem = `\n--- ALUGUEL(ÉIS) QUE INICIAM(ARAM) NA DATA DE  "${dataDeInicioISO[0]}" ---\n`;
        filtrarAluguel.forEach(aluguel => {
            const estudante = estudantes.find(estudante => estudante.id === aluguel.idEstudante)
            const livro = livros.find(livro => livro.id === aluguel.idLivro)
            mensagem = mensagem + `
                ID do Aluguel: ${aluguel.id}
                Título do Livro: ${livro.titulo} (ID: ${aluguel.idLivro})
                Alugado para: ${estudante.nome} (ID: ${aluguel.idEstudante})
                Data de Início do Aluguel: ${aluguel.dataDeInicio}
                Data de Devolução do Livro: ${aluguel.dataDeDevolucao}
                \n-------------------------\n
            `
        });
        return res.status(200).send(mensagem);
    }
}


function buscarAluguelPorIdLivro(req, res, livros, estudantes, alugueis) {
        if (alugueis.length === 0) {
        return res.status(400).send('Nenhum aluguel cadastrado.');
    }
    
    const {idLivro} = req.params;

    const indexParaBuscar = alugueis.findIndex (aluguel => aluguel.id===parseInt(idLivro))

        if (isNaN(idLivro)) {
            return res.status(400).send("ID inválido. Por favor, digite um número.");
        }

    const dataDeInicioISO = new Date(dataDeInicio).toISOString().split('T')

    const filtrarAluguel = alugueis.filter(aluguel =>
        aluguel.dataDeInicio.includes(dataDeInicioISO[0])
    );
 
    if (filtrarAluguel.length === 0) {
        return res.status(404).send(`Nenhum aluguel encontrado para o livro de ID nº "${idLivro}".`);
    } else {
        let mensagem = `\n--- ALUGUEL(ÉIS) NO GERENCIADOR COM O LIVRO DE ID ${idLivro}" ---\n`;
        filtrarAluguel.forEach(aluguel => {
            const estudante = estudantes.find(estudante => estudante.id === aluguel.idEstudante)
            const livro = livros.find(livro => livro.id === aluguel.idLivro)
            mensagem = mensagem + `
                ID do Aluguel: ${aluguel.id}
                Título do Livro: ${livro.titulo} (ID: ${aluguel.idLivro})
                Alugado para: ${estudante.nome} (ID: ${aluguel.idEstudante})
                Data de Início do Aluguel: ${aluguel.dataDeInicio}
                Data de Devolução do Livro: ${aluguel.dataDeDevolucao}
                \n-------------------------\n
            `
        });
        return res.status(200).send(mensagem);
}
}

function buscarAluguelPorIdLivro(req, res, livros, estudantes, alugueis) {
    if (alugueis.length === 0) {
        return res.status(400).send('Nenhum aluguel cadastrado.');
    }
    
    const {idLivro} = req.params;
    if (isNaN(parseInt(idLivro))) {
        return res.status(400).send("ID inválido. Por favor, digite um número.");
    }
    
    const alugueisDoLivro = alugueis.filter(aluguel => aluguel.idLivro === parseInt(idLivro));
    
    if (alugueisDoLivro.length === 0) {
        return res.status(404).send(`Nenhum aluguel encontrado para o livro de ID nº "${idLivro}".`);
    } else {
        const listaDeAlugueis = alugueisDoLivro.map(aluguel => {
            const estudante = estudantes.find(e => e.id === aluguel.idEstudante);
            const livro = livros.find(l => l.id === aluguel.idLivro);
            
            const tituloLivro = livro ? livro.titulo : 'Livro não encontrado';
            const nomeEstudante = estudante ? estudante.nome : 'Estudante não encontrado';

            return `
                ID do Aluguel: ${aluguel.id}
                Título do Livro: ${tituloLivro} (ID: ${aluguel.idLivro})
                Alugado para: ${nomeEstudante} (ID: ${aluguel.idEstudante})
                Data de Início do Aluguel: ${aluguel.dataDeInicio}
                Data de Devolução do Livro: ${aluguel.dataDeDevolucao}
                \n-------------------------\n`;
        }).join('');
        return res.status(200).send(`\n=== ALUGUEL(ÉIS) ENCONTRADOS NO GERENCIADOR PARA O LIVRO DE ID Nº ${idLivro} ===\n${listaDeAlugueis}`);
    }
}


function buscarAluguelPorIdEstudante(req, res, livros, estudantes, alugueis) {
  if (alugueis.length === 0) {
        return res.status(400).send('Nenhum aluguel cadastrado.');
    }
    
    const {idEstudante} = req.params;
    if (isNaN(parseInt(idEstudante))) {
        return res.status(400).send("ID inválido. Por favor, digite um número.");
    }
    
    const alugueisDoLivro = alugueis.filter(aluguel => aluguel.idEstudante === parseInt(idEstudante));
    
    if (alugueisDoLivro.length === 0) {
        return res.status(404).send(`Nenhum aluguel encontrado para o estudante de ID nº "${idEstudante}".`);
    } else {
        const listaDeAlugueis = alugueisDoLivro.map(aluguel => {
            const estudante = estudantes.find(e => e.id === aluguel.idEstudante);
            const livro = livros.find(l => l.id === aluguel.idLivro);
            
            const tituloLivro = livro ? livro.titulo : 'Livro não encontrado';
            const nomeEstudante = estudante ? estudante.nome : 'Estudante não encontrado';

            return `
                ID do Aluguel: ${aluguel.id}
                Título do Livro: ${tituloLivro} (ID: ${aluguel.idLivro})
                Alugado para: ${nomeEstudante} (ID: ${aluguel.idEstudante})
                Data de Início do Aluguel: ${aluguel.dataDeInicio}
                Data de Devolução do Livro: ${aluguel.dataDeDevolucao}
                \n-------------------------\n`;
        }).join('');
        return res.status(200).send(`\n=== ALUGUEL(ÉIS) ENCONTRADOS NO GERENCIADOR PARA O ESTUDANTE DE ID Nº ${idEstudante} ===\n${listaDeAlugueis}`);
    }
}

module.exports = {buscarAluguelPorDataDeInicio, buscarAluguelPorIdLivro, buscarAluguelPorIdEstudante};