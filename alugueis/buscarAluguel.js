function buscarAluguelPorDataDeInicio(req, res, livros, estudantes, alugueis) {
    if (alugueis.length === 0) {
        return res.status(400).send('Nenhum aluguel cadastrado.');
    }
    
    const { dataDeInicio } = req.params;

    if (!dataDeInicio || dataDeInicio.trim() === '') {
        return res.status(400).send('A data de início do aluguel não pode estar vazia.');
    }

const filtrarAluguel = alugueis.filter(aluguel =>
        aluguel.dataDeInicio.toLowerCase().includes(dataDeInicio.toLowerCase())
    );

    if (filtrarAluguel.length === 0) {
        return res.status(404).send(`Nenhum aluguel encontrado para a data de início "${dataDeInicio}".`);
    } else {
        let mensagem = `\n--- ALUGUEL(ÉIS) QUE INICIAM(ARAM) NA DATA DE  "${dataDeInicio}" ---\n`;
        filtrarAluguel.forEach(aluguel => {
            return `
                ID do Aluguel: ${aluguel.id}
                Título do Livro: ${tituloLivro} (ID: ${aluguel.idLivro})
                Alugado para: ${nomeEstudante} (ID: ${aluguel.idEstudante})
                Data de Início do Aluguel: ${aluguel.dataDeInicio}
                Data de Devolução do Livro: ${aluguel.dataDeDevolucao}
                \n-------------------------\n
            `
        });
        return res.status(200).send(mensagem);
    }
}


function buscarLivroPorAutor(req, res, livros) {
        if (livros.length === 0) {
        return res.status(400).send('Nenhum livro cadastrado.');
    }
    
    const {autor} = req.params

    if (!autor || autor.trim() === '') {
        return res.status(400).send('O nome do autor não pode ser pesquisado se estiver vazio.');
    }

const filtrarLivro = livros.filter(livro =>
        livro.autor.toLowerCase().includes(autor.toLowerCase())
    );

    if (filtrarLivro.length === 0) {
        return res.status(404).send(`Nenhum livro encontrado para o autor "${autor}".`);
    } else {
        let mensagem = `\n--- LIVRO(S) DO(A) AUTOR(A) "${autor}" ---\n`;
        filtrarLivro.forEach(livro => {
            mensagem += `\nID: ${livro.id}`;
            mensagem += `\nTítulo: ${livro.titulo}`;
            mensagem += `\nAutor: ${livro.autor}`;
            mensagem += `\nAno de Lançamento: ${livro.anoDeLancamento}`;
            mensagem += `\nGênero: ${livro.genero}`;
            mensagem += "\n-------------------------\n";
        });
        return res.status(200).send(mensagem);
    }
}

function buscarLivroPorAnoDeLancamento(req, res, livros) {
    if (livros.length === 0) {
        return res.status(400).send('Nenhum livro cadastrado.');
    }

    const { anoDeLancamento } = req.params;

    console.log(anoDeLancamento)
    
    const anoNumerico = parseInt(anoDeLancamento);

        console.log(livros)
    if (isNaN(anoNumerico)) {
        return res.status(400).send("Ano de Lançamento inválido. Por favor, digite um número.");
    }

    const livrosFiltrados = livros.filter(livro => livro.anoDeLancamento == anoNumerico);

   
    if (livrosFiltrados.length === 0) {
        return res.status(404).send(`Não foi encontrado um livro com o ano de lançamento ${anoNumerico}. Por favor, tente novamente.`);
    } else {
        const listaDeLivros = livrosFiltrados.map((livro, index) => {
            return `
                ${index + 1}. 
                ID: ${livro.id}
                Título: ${livro.titulo}
                Autor: ${livro.autor}
                Ano de Lançamento: ${livro.anoDeLancamento}
                Gênero: ${livro.genero}\n`;
        }).join('');

        return res.status(200).send(`\n=== LIVRO(S) LANÇADO(S) NO ANO DE ${anoNumerico} ===${listaDeLivros}`);
    }
}

function buscarLivroPorGenero(req, res, livros) {
    if (livros.length === 0) {
        return res.status(400).send('Nenhum livro cadastrado.');
    }
    
    const { genero } = req.params;

    if (!genero || genero.trim() === '') {
        return res.status(400).send('O gênero não pode estar vazio.');
    }

    const removerAcentos = (texto) => {
        return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    const generoNormalizado = removerAcentos(genero).toLowerCase();

    const filtrarLivro = livros.filter(livro =>
        removerAcentos(livro.genero).toLowerCase().includes(generoNormalizado)
    );

    if (filtrarLivro.length === 0) {
        return res.status(404).send(`Nenhum livro encontrado para o gênero "${genero}".`);
    } else {
        let mensagem = `\n--- LIVRO(S) DO GÊNERO "${genero}" ---\n`;
        filtrarLivro.forEach(livro => {
            mensagem += `\nID: ${livro.id}`;
            mensagem += `\nTítulo: ${livro.titulo}`;
            mensagem += `\nAutor: ${livro.autor}`;
            mensagem += `\nAno de Lançamento: ${livro.anoDeLancamento}`;
            mensagem += `\nGênero: ${livro.genero}`;
            mensagem += "\n-------------------------\n";
        });
        return res.status(200).send(mensagem);
    }
}

module.exports = { buscarLivroPorAutor, buscarLivroPorAnoDeLancamento, buscarLivroPorGenero};