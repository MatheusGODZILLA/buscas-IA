class objeto {
    nome;
    peso;
    valor;
    
    constructor(nome, peso, valor) {
        this.nome = nome;
        this.peso = peso;
        this.valor = valor;
        this.razao = (valor / peso).toFixed(2);
    }
}

function buscaGulosa(objetos, capacidadeMaxima) {
    objetos.sort((a, b) => b.razao - a.razao); // Ordena os objetos por valor/peso em ordem decrescente

    let mochila = [];
    let pesoAtual = 0;
    let valorTotal = 0;

    for (let i = 0; i < objetos.length; i++) {
        if (pesoAtual + objetos[i].peso <= capacidadeMaxima) {
            mochila.push(objetos[i]);
            pesoAtual += objetos[i].peso;
            valorTotal += objetos[i].valor;
        }

        if (pesoAtual === capacidadeMaxima) {
            break;
        }
    }
    return { mochila, pesoAtual, valorTotal };
}

// Exemplos de uso
const objetos = [
    new objeto('Estojo', 3, 80),
    new objeto('Caderno', 8, 100),
    new objeto('Garrafinha', 4, 60),
    new objeto('Casaco', 7, 120),
    new objeto('Computador', 35, 200)
];

const capacidadeMaxima = 20;

const resultado = buscaGulosa(objetos, capacidadeMaxima);
console.log("Capacidade máxima da mochila:", capacidadeMaxima);
console.log("Objetos selecionados na mochila:", resultado.mochila);
console.log("Peso total na mochila:", resultado.pesoAtual);
console.log("Valor total na mochila:", resultado.valorTotal);