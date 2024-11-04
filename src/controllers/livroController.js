import livros from "../models/Livro.js";
import { autores, autorSchema } from "../models/Autor.js";


class LivroController {
    static async listarLivros(req, res) {
        try {
            const listaLivros = await livros.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` })
        }
    };

    static async listarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livros.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do livro` })
        }
    }

    static async cadastrarLivro(req, res) {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autores.findById(novoLivro.autor)
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } }
            const livroCriado = await livros.create(livroCompleto)
            res.status(201).json({ message: "Livro cadastrado com sucesso", livro: livroCriado });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
        }
    };

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            await livros.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "livro atualizado com sucesso" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização do livro` })
        }
    };

    static async excluirLivro(req, res) {
        try {
            const id = req.params.id;
            await livros.findByIdAndDelete(id);
            res.status(200).json({ message: "livro excluído com sucesso" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na exclusão do livro` })
        }
    };

    static async listarLivrosPorEditora(req, res) {
        try {
            const editora = req.query.editora
            const livrosPorEditora = await livros.find({ editora }) // o mesmo que { editora: editora }
            res.status(200).json(livrosPorEditora)
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na busca de livros por editora` })
        }
    }
}

export default LivroController;