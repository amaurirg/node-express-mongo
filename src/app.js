import express from "express"
// import db from './config/dbConnect.js'
// import livros from "./models/Livro.js"


// db.on("error", console.log.bind(console, "Erro de conexão"))
// db.once("open", () => {
//     console.log("Conexão com o banco feita com sucesso!")
// })

const app = express();
app.use(express.json());

const livros = [
    { id: 1, "titulo": "Senhor dos Anéis" },
    { id: 2, "titulo": "O Hobiit" }
]

const rota_livros = "/livros"

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node");
})

app.get(rota_livros, (req, res) => {
    // livros.find((err, livros) => {
    //     res.status(200).json(livros);
    // })
    res.status(200).json(livros);
})

app.get(`${rota_livros}/:id`, (req, res) => {
    const index = buscaLivro(req.params.id);
    res.json(livros[index]);
})

app.post(rota_livros, (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
})

app.put(`${rota_livros}/:id`, (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})

app.delete(`${rota_livros}/:id`, (req, res) => {
    const { id } = req.params;
    const index = buscaLivro(id);
    console.log("index =", index)
    if (index >= 0) {
        livros.splice(index, 1);
        res.send(`Livro ${id} removido com sucesso`);
    } else {
        res.send("Livro não encontrado")
    }
})

function buscaLivro(id) {
    const filtro = livros.findIndex(livro => livro.id == id);
    return filtro
}


export default app;