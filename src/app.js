import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import livro from "./models/Livro.js"
const conexao = await conectaNaDatabase();
conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro)
})

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!")
})

const app = express();
app.use(express.json()); 

app.get("/", (requisicao, resposta) => {
    resposta.status(200).send("Curso de Node.js");
});

app.get("/livros", async (requisicao, resposta) => {
    const listaLivros = await livro.find({})
    resposta.status(200).json(listaLivros);
});

app.get("/livros/:id", (requisicao, resposta) =>{
    const index = buscaLivros(requisicao.params.id);
    resposta.status(200).json(livros[index])
})

app.post("/livros", (requisicao, resposta) => {
    livros.push(requisicao.body);
    resposta.status(201).send(" Livro cadastro com sucesso!")
});

app.put("/livros/:id", (requisicao, resposta) => {
    const index = buscaLivros(requisicao.params.id);
    livros[index].titulo = requisicao.body.titulo;
    resposta.status(200).json(livros);
})

app.delete("/livros/:id", (requisicao, resposta) => {
    const index = buscaLivros(requisicao.params.id);
    livros.splice(index, 1);
    resposta.status(200).send('Livro deletado com sucesso!')
})

export default app;

