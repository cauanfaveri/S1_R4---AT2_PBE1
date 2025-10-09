const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json())
async function validaçao(pNumUm, pNumDois, pNumTres) {
    try {
        if (isNaN(pNumUm) || isNaN(pNumDois || isNaN(pNumTres))) {
            throw new Error("Os valores digitados são inválidos")
        }
        const num1 = parseFloat(pNumUm);
        const num2 = parseFloat(pNumDois);
        const num3 = parseFloat(pNumTres);
        return { num1, num2, num3};
    } catch (error) {
        throw new Error(error)
    }
}

app.post('/soma', async (req, res) => {
    try {
        const { numero1, numero2, numero3 } = req.body;
        console.log(numero1, numero2, numero3);
        const {num1, num2, num3} = await validaçao(numero1,  numero2, numero3);
        resultado = num1 + num2 + num3
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