function buscarLivro(req, res, livros) {
    if (livros.length === 0) {
        return res.status(400).send('Nenhum livro cadastrado.');
    }

const {id} = req.params;

const indexParaBuscar = livros.findIndex (livro => livro.id===parseInt(id))

        if (isNaN(id)) {
            return res.status(400).send("ID inválido. Por favor, digite um número.");
        }

    if (indexParaBuscar === -1) {
    return res.status(400).send(`Não foi encontrado um livro com o ID ${id}. Por favor, tente novamente.`);
} else {
    const listaDeLivros = livros.map((livro, index) => {
        return `
            ${index + 1}. 
            ID: ${livro.id}
            Título: ${livro.titulo}
            Autor: ${livro.autor}
            Ano de Lançamento: ${livro.anoDeLancamento}
            Gênero: ${livro.genero}\n`;
    }).join('');
    return res.status(200).send(`\n=== LIVROS SALVOS NO GERENCIADOR COM O ID ${id} ===${listaDeLivros}`);
}
}

function buscarLivroPorTitulo(req, res, livros) {
        if (livros.length === 0) {
        return res.status(400).send('Nenhum livro cadastrado.');
    }
    
    const { titulo } = req.params;

    if (!titulo || titulo.trim() === '') {
        return res.status(400).send('O título não pode ser vazio.');
    }

const filtrarLivro = livros.filter(livro =>
        livro.titulo.toLowerCase().includes(titulo.toLowerCase())
    );

    if (filtrarLivro.length === 0) {
        return res.status(404).send(`Nenhum livro encontrado com o título "${titulo}".`);
    } else {
        let mensagem = `\n--- LIVRO(S) COM O TÍTULO OU QUE INCLUEM O TERMO DE  "${titulo}" ---\n`;
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

module.exports = {buscarLivro, buscarLivroPorTitulo, buscarLivroPorAutor, buscarLivroPorAnoDeLancamento, buscarLivroPorGenero};