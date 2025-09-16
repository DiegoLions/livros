
const express = require('express')

const cadastrarLivro = require('./livros/cadastrarLivro');
const listarLivros = require('./livros/listarLivros');
const atualizarLivro = require('./livros/atualizarLivro');
const {buscarLivro, buscarLivroPorTitulo, buscarLivroPorAutor, buscarLivroPorAnoDeLancamento, buscarLivroPorGenero} = require('./livros/buscarLivro');
const deletarLivro = require('./livros/deletarLivro');

const cadastrarEstudante = require('./estudantes/cadastrarEstudante');
const listarEstudantes = require('./estudantes/listarEstudantes');
const {buscarEstudantePorNome, buscarEstudantePorMatricula, buscarEstudantePorCurso} = require('./estudantes/buscarEstudante');
const atualizarEstudante = require('./estudantes/atualizarEstudante');
const deletarEstudante = require('./estudantes/deletarEstudante');

const cadastrarAluguel = require('./alugueis/cadastrarAluguel');
const listarAlugueis = require('./alugueis/listarAlugueis');
const {buscarAluguelPorDataDeInicio, buscarAluguelPorIdDoLivro, buscarAluguelPorIdDoEstudante} = require('./alugueis/buscarAluguel');
const atualizarAluguel = require('./alugueis/atualizarAluguel');
const deletarAluguel = require('./alugueis/deletarAluguel');

const livros = [];
const estudantes = [];
const alugueis = [];

const app = express()
app.use (express.json())
const port = 3000
app.listen (port, () => console.log(`Servidor rodando na porta ${port}`))


app.post ('/livro', (req, res) => cadastrarLivro(req, res, livros))

app.get ('/livro', (req, res) => listarLivros(req, res, livros))

app.get ('/livro/:id', (req, res) => buscarLivro(req, res, livros))

app.get ('/livro/titulo/:titulo', (req, res) => buscarLivroPorTitulo(req, res, livros))

app.get ('/livro/autor/:autor', (req, res) => buscarLivroPorAutor(req, res, livros))

app.get ('/livro/anoDeLancamento/:anoDeLancamento', (req, res) => buscarLivroPorAnoDeLancamento(req, res, livros))

app.get ('/livro/genero/:genero', (req, res) => buscarLivroPorGenero(req, res, livros))

app.put ('/livro/:id', (req, res) => atualizarLivro(req, res, livros))

app.delete ('/livro/:id', (req, res) => deletarLivro(req, res, livros))


app.post ('/estudante', (req, res) => cadastrarEstudante(req, res, estudantes))

app.get ('/estudante', (req, res) => listarEstudantes(req, res, estudantes))

app.get ('/estudante/nome/:nome', (req, res) => buscarEstudantePorNome(req, res, estudantes))

app.get ('/estudante/matricula/:matricula', (req, res) => buscarEstudantePorMatricula(req, res, estudantes))

app.get ('/estudante/curso/:curso', (req, res) => buscarEstudantePorCurso(req, res, estudantes))

app.put ('/estudante/:id', (req, res) => atualizarEstudante(req, res, estudantes))

app.delete ('/estudante/:id', (req, res) => deletarEstudante(req, res, estudantes))


app.post ('/aluguel', (req, res) => cadastrarAluguel(req, res, livros, estudantes, alugueis))

app.get ('/aluguel', (req, res) => listarAlugueis(req, res, livros,estudantes, alugueis))

app.get ('/aluguel/datadeinicio/:dataDeInicio', (req, res) => buscarAluguelPorDataDeInicio(req, res, livros, estudantes, alugueis))

app.get ('/aluguel/iddolivro/:idDoLivro', (req, res) => buscarAluguelPorIdDoLivro(req, res, livros, livros, estudantes, alugueis))

app.get ('/aluguel/iddoestudante/:idDoEstudante', (req, res) => buscarAluguelPorIdDoEstudante(req, res, livros, estudantes, alugueis))

app.put ('/aluguel/:id', (req, res) => atualizarAluguel(req, res, livros, estudantes, alugueis))

app.delete ('/aluguel/:id', (req, res) => deletarAluguel(req, res, livros, estudantes, alugueis))
