import express from "express";
import Livro from "./database/models/Livro.js";
const router = express.Router();

router.get("/livros", async (req, res) => {
    const livros = await Livro.find();
    
    res.send(livros);
});

router.get("/livros/:id", async (req, res) => {
    console.log("ID", req.params.id);
    const livro = await Livro.findOne({ id: req.params.id });
    res.send(livro);
});

router.post("/livros", async (req, res) => {
    const livroDb = new Livro(req.body);
    const data = await livroDb.save();
    res.status(201).send({message: "Livro Cadastrado com sucesso!", data: data});
});

router.put("/livros/:id", async (req, res) => {
    const livro = await Livro.findOneAndUpdate({ id: req.params.id }, req.body);
    res
        .status(200)
        .send({ message: "Livro Atualizado com sucesso!", data: livro });
});

router.delete("/livros/:id", async (req, res) => {
    const livro = await Livro.findOneAndDelete({ id: req.params.id });
    res.status(200).send({ message: "Livro Deletado com sucesso!", data: livro})
});

export default router;