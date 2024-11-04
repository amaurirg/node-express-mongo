import express from "express"
import conectaDatabase from "./config/dbConnect.js"
import routes from './routes/index.js'


const conexao = await conectaDatabase()

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro)
})

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!")
})

const app = express();
routes(app);

const rota_livros = "/livros"

// app.get("/", (req, res) => {
//     res.status(200).send("Curso de Node");
// })

// app.get(rota_livros, async (req, res) => {
//     const listaLivros = await livros.find({});
//     res.status(200).json(listaLivros);
// })

// app.get(`${rota_livros}/:id`, (req, res) => {
//     const index = buscaLivro(req.params.id);
//     res.json(livros[index]);
// })

// app.post(rota_livros, (req, res) => {
//     livros.push(req.body);
//     res.status(201).send("Livro cadastrado com sucesso");
// })

// app.put(`${rota_livros}/:id`, (req, res) => {
//     const index = buscaLivro(req.params.id);
//     livros[index].titulo = req.body.titulo;
//     res.json(livros);
// })

// app.delete(`${rota_livros}/:id`, (req, res) => {
//     const { id } = req.params;
//     const index = buscaLivro(id);
//     console.log("index =", index)
//     if (index >= 0) {
//         livros.splice(index, 1);
//         res.send(`Livro ${id} removido com sucesso`);
//     } else {
//         res.send("Livro não encontrado")
//     }
// })

export default app;