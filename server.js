const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json())

app.post('/login', (req, res) => {
    try {
        const { usuario, senha} = req.body;
        console.log(usuario, senha);
        if (usuario === "admin" && senha === "1234"){
            res.status(201).json({ message: `Dados corretos`});
        } else {
            res.status(201).json({ message: `Dados incorretos`});
        }
    } catch (error) {
       console.error(error);
        res.status(500).json({ message: 'Ocorreu um erro ao processar', errorMessage: error.message}) 
    }
})
app.listen(PORT, () => {
    console.log(`Server rodando na: http://localhost:${PORT}`);
})