import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: { type: Number, unique: true, required: true },
        titulo: { type: String, required: true },
        num_paginas: { type: Number, required: true },
        isbn: { type: String, required: true, unique: true },
        editora: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.model("Livro", livroSchema);;