function buscarEstudantePorNome(req, res, estudantes) {
        if (estudantes.length === 0) {
        return res.status(400).send('Nenhum estudante cadastrado.');
    }
    
    const { nome } = req.params;

    if (!nome || nome.trim() === '') {
        return res.status(400).send('O nome não pode estar vazio.');
    }

const filtrarEstudante = estudantes.filter(estudante =>
        estudante.nome.toLowerCase().includes(nome.toLowerCase())
    );

    if (filtrarEstudante.length === 0) {
        return res.status(404).send(`Nenhum estudante encontrado com o nome "${nome}".`);
    } else {
        let mensagem = `\n--- ESTUDANTE(S) COM O NOME OU QUE INCLUEM O NOME DE  "${nome}" ---\n`;
        filtrarLivro.forEach(estudante => {
            mensagem += `\nID: ${estudante.id}`;
            mensagem += `\nNome: ${estudante.nome}`;
            mensagem += `\nMatrícula: ${estudante.matricula}`;
            mensagem += `\nCurso: ${estudante.curso}`;
            mensagem += `\nAno: ${estudante.ano}`;
            mensagem += "\n-------------------------\n";
        });
        return res.status(200).send(mensagem);
    }
}


function buscarEstudantePorMatricula(req, res, estudantes) {
        if (estudantes.length === 0) {
        return res.status(400).send('Nenhum estudante cadastrado.');
    }
    
    const {matricula} = req.params

    if (!matricula || matricula.trim() === '') {
        return res.status(400).send('A matrícula do estudante não pode ser pesquisada se estiver vazia.');
    }

    if (!matricula || typeof matricula !== 'number') {
    return res.status(400).send('O número de matrícula é obrigatório e precisa ser um valor numérico.');
    }

const filtrarEstudante = estudantes.filter(estudante =>
        estudante.matricula.toLowerCase().includes(estudante.toLowerCase())
    );

    if (filtrarEstudante.length === 0) {
        return res.status(404).send(`Nenhum estudante encontrado com a matrícula "${matricula}".`);
    } else {
        let mensagem = `\n--- ESTUDANTE COM A MATRÍCULA "${matricula}" ---\n`;
        filtrarEstudante.forEach(estudante => {
            mensagem += `\nID: ${estudante.id}`;
            mensagem += `\nNome: ${estudante.nome}`;
            mensagem += `\nMatrícula: ${estudante.matricula}`;
            mensagem += `\nCurso: ${estudante.curso}`;
            mensagem += `\nAno: ${estudante.ano}`;
            mensagem += "\n-------------------------\n";
        });
        return res.status(200).send(mensagem);
    }
}

function buscarEstudantePorCurso(req, res, estudantes) {
    if (estudantes.length === 0) {
        return res.status(400).send('Nenhum estudante cadastrado.');
    }
    
    const { curso } = req.params;

    if (!curso || curso.trim() === '') {
        return res.status(400).send('O curso não pode estar vazio.');
    }

    const removerAcentos = (texto) => {
        return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    const cursoNormalizado = removerAcentos(curso).toLowerCase();

    const filtrarEstudante = estudantes.filter(estudante =>
        removerAcentos(estudante.curso).toLowerCase().includes(cursoNormalizado)
    );

    if (filtrarEstudante.length === 0) {
        return res.status(404).send(`Nenhum estudante encontrado para o curso "${curso}".`);
    } else {
        let mensagem = `\n--- ESTUDANTE(S) PARA O CURSO "${curso}" ---\n`;
        filtrarEstudante.forEach(estudante => {
            mensagem += `\nID: ${estudante.id}`;
            mensagem += `\nNome: ${estudante.nome}`;
            mensagem += `\nMatrícula: ${estudante.matricula}`;
            mensagem += `\nCurso: ${estudante.curso}`;
            mensagem += `\nAno: ${estudante.ano}`;
            mensagem += "\n-------------------------\n";
        });
        return res.status(200).send(mensagem);
    }
}

module.exports = {buscarEstudantePorNome, buscarEstudantePorMatricula, buscarEstudantePorCurso};