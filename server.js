const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json())
// app.post('/mensagem', (req, res) => {
//     try {
//         // Forma 1 - desestruturação
//         const { id, descricao, valor } = req.body.dadosProdutos;
//         const { nome, cpf } = req.body.dadosCliente;

//         console.log(id, descricao, valor)
//         console.log(nome, cpf)
//     });

app.post('/mensagem', (req, res) => {
    try {
        const { nome, idade, time } = req.body;
        console.log(nome, idade, time);
        res.status(201).json({ message: `Ola ${nome}, Você tem ${idade} anos e torce para o ${time}!`});

    } catch (error) {
       console.error(error);
        res.status(500).json({ message: 'Ocorreu um erro ao processar', errorMessage: error.message}) 
    }
})
app.listen(PORT, () => {
    console.log(`Server rodando na: http://localhost:${PORT}`);
})