const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json())
async function validaçao(pNumUm, pNumDois) {
    try {
        if (isNaN(pNumUm) || isNaN(pNumDois)) {
            throw new Error("Os valores digitados são inválidos")
        }
        const numero1 = parseFloat(pNumUm);
        const numero2 = parseFloat(pNumDois);
        const numero3 = parseFloat(pNumDois);
        return { numero1, numero2, numero3};
    } catch (error) {
        throw new Error(error)
    }
}

app.post('/soma', (req, res) => {
    try {
        const { numero1, numero2, numero3 } = req.body;
        console.log(numero1, numero2, numero3);
        let resultado;
        resultado = numero1 + numero2 + numero3
        console.log(resultado)
        res.status(201).json({ message: `${resultado}`});

    } catch (error) {
       console.error(error);
        res.status(500).json({ message: 'Ocorreu um erro ao processar', errorMessage: error.message}) 
    }
})
app.listen(PORT, () => {
    console.log(`Server rodando na: http://localhost:${PORT}`);
})