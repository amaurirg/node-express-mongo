import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";


/* 
Embed x Reference
=================

Veja os arquivos para entender a diferença e utilizar o método referencing
- Embed x Reference.docx
- Mesmo projeto usando Reference.docx
*/

const livroSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        titulo: { type: String, required: true },
        editora: { type: String },
        preco: { type: Number },
        paginas: { type: Number },
        autor: autorSchema
    },
    {versionKey: false}
);

const livros = mongoose.model("livros", livroSchema);

export default livros;
