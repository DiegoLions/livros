
const express = require('express')

const cadastrarLivro = require('./cadastrarLivro');
const listarLivros = require('./listarLivros');
const atualizarLivro = require('./atualizarLivro');
const {buscarLivro, buscarLivroPorTitulo, buscarLivroPorAutor, buscarLivroPorAnoDeLancamento, buscarLivroPorGenero} = require('./buscarLivro');
const deletarLivro = require('./deletarLivro');
const cadastrarEstudante = require('../estudantes/cadastrarEstudante');

const livros = [];
const estudantes = [];

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
