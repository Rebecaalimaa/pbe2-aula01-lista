const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json('API respondendo');
});

app.post('/desconto', (req, res) => {
    const { preco } = req.body;
    let desconto = 0;
    if (preco >= 1000) {
        desconto = preco * 0.08;
    }
    let precoFinal = preco - desconto;
    res.json({ desconto, precoFinal });
})

app.post('/salarioFamilia', (req, res) => {
    const { salario, filhos } = req.body;
    let salarioFamilia = 0;
    if (salario < 2000)
        salarioFamilia = filhos * 45;
    let salarioFinal = salario + salarioFamilia;
    res.json({ salario, salarioFamilia, salarioFinal });
});

app.post('/calcularINSS', (req, res) => {
    let { salario } = req.body;
    let inss = 0;
    let salarioFinal = 0;

    if (salario <= 1212) {
        inss = salario * 0.075;
    } else if (salario <= 2427.35) {
        inss = salario * 0.09;
    } else if (salario <= 3641.03) {
        inss = salario * 0.12;
    } else if (salario <= 7087.22) {
        inss = salario * 0.14;
    } else {
        inss = 7087.22 * 0.14;
    }

    salarioFinal = salario - inss;
    res.json({ salario, salarioFinal });
});

app.post('/triangulo', (req, res) => {
    const { a, b, c } = req.body;
    let resultado = 0;

    if (a === b && b === c) {
        resultado = 'O triângulo é EQUILÁTERO.';
    } else if (a === b || b === c || a === c) {
        resultado = 'O triângulo é ISÓSCELES.';
    } else {
        resultado = 'O triângulo é ESCALENO.';
    }
    res.json({ resultado });

});

app.post('/aumento', (req, res) => {
    const { nome, valor } = req.body;
    let valorNovo = 0;

    if (valor < 1000) {
        valorNovo = valor * 0.05;
    } else {
        valorNovo = valor * 0.07;
    }
    res.json({ nome, valorNovo });
});

app.post('/numeroMaior', (req, res) => {
    const { nums } = req.body;
    const numeroMaior = Math.max(...nums);
    res.json({ numeroMaior })

});

app.post('/organizar', (req, res) => {
    const { nums } = req.body;
    if (nums) {
        const organizar = nums.sort((a, b) => a - b);
        res.json({ organizar });
    }
});

app.post('/maiorMenor', (req, res) => {
    const { num1, num2 } = req.body;
    let maior, menor;
    if (num1 > num2) {
        maior = num1;
        menor = num2;
    } else if (num2 > num1) {
        maior = num2;
        menor = num1;
    } else {
        maior = menor = num1;
    }
    res.json({ maior, menor });
});

app.post('/calcularReajuste', (req, res) => {
    const { salarioAtual } = req.body;
    var novoSalario = 0;

    if (salarioAtual >= 1500 && salarioAtual < 1750) {
        novoSalario = salarioAtual * 1.15;
    } else if (salarioAtual >= 1750 && salarioAtual < 2000) {
        novoSalario = salarioAtual * 1.12;
    } else if (salarioAtual >= 2000 && salarioAtual < 3000) {
        novoSalario = salarioAtual * 1.09;
    } else if (salarioAtual >= 3000) {
        novoSalario = salarioAtual * 1.06;
    }
    res.json({ salarioAtual, novoSalario });
});

app.post('/Media', (req, res) => {
    const { nota1, nota2, nota3 } = req.body;

    var media = (nota1 + nota2 + nota3) / 3;
    var situacao = 0;

    if (media >= 6) {
        situacao = "Aprovado";
    } else if (media >= 4) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }
    res.json({ situacao })
});

app.post('/roupaDesconto', (req, res) => {
    const { produto, preco } = req.body;

    var desconto = 0;
    var valorFinal = preco;

    if (produto === "camisa") {
        desconto = 0.20; 
   } else if (produto === "bermuda") {
       desconto = 0.10;
   } else if (produto === "calca") {
       desconto = 0.15; 
   }

   valorFinal = preco - (preco * desconto);

    res.json({ desconto, valorFinal })
});


app.listen(4000, () => {
    console.log('API rodando em http://localhost:4000');
});




