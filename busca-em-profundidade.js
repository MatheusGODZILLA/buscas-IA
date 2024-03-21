class Cidade {
    nome;
    vizinhos;

    constructor(nome) {
        this.nome = nome;
        this.vizinhos = []; 
    }

    adicionarVizinho(vizinho) {
        this.vizinhos.push({cidade: vizinho});
    }
}

// Criação da árvore
const arad = new Cidade("Arad");
const zerind = new Cidade("Zerind");
const oradea = new Cidade("Oradea");
const sibiu = new Cidade("Sibiu");
const timisoara = new Cidade("Timisoara");
const lugoj = new Cidade("Lugoj");
const mehadia = new Cidade("Mehadia");
const dobreta = new Cidade("Dobreta");
const craiova = new Cidade("Craiova");
const rimnicuVilcea = new Cidade("Rimnicu Vilcea");
const fagaras = new Cidade("Fagaras");
const pitesti = new Cidade("Pitesti");
const bucharest = new Cidade("Bucharest");
const giurgiu = new Cidade("Giurgiu");
const urziceni = new Cidade("Urziceni");
const hirsova = new Cidade("Hirsova");
const eforie = new Cidade("Eforie");
const vaslui = new Cidade("Vaslui");
const iasi = new Cidade("Iasi");
const neamt = new Cidade("Neamt");

// Adicionando os vizinhos
arad.adicionarVizinho(sibiu);
arad.adicionarVizinho(timisoara);
arad.adicionarVizinho(zerind);

zerind.adicionarVizinho(arad);
zerind.adicionarVizinho(oradea);

oradea.adicionarVizinho(zerind);
oradea.adicionarVizinho(sibiu);

sibiu.adicionarVizinho(arad);
sibiu.adicionarVizinho(fagaras);
sibiu.adicionarVizinho(oradea);
sibiu.adicionarVizinho(rimnicuVilcea);

timisoara.adicionarVizinho(arad);
timisoara.adicionarVizinho(lugoj);

lugoj.adicionarVizinho(timisoara);
lugoj.adicionarVizinho(mehadia);

mehadia.adicionarVizinho(lugoj);
mehadia.adicionarVizinho(dobreta);

dobreta.adicionarVizinho(mehadia);
dobreta.adicionarVizinho(craiova);

craiova.adicionarVizinho(dobreta);
craiova.adicionarVizinho(pitesti);
craiova.adicionarVizinho(rimnicuVilcea);

rimnicuVilcea.adicionarVizinho(sibiu);
rimnicuVilcea.adicionarVizinho(pitesti);
rimnicuVilcea.adicionarVizinho(craiova);

fagaras.adicionarVizinho(sibiu);
fagaras.adicionarVizinho(bucharest);

pitesti.adicionarVizinho(rimnicuVilcea);
pitesti.adicionarVizinho(craiova);
pitesti.adicionarVizinho(bucharest);

bucharest.adicionarVizinho(fagaras);
bucharest.adicionarVizinho(pitesti);
bucharest.adicionarVizinho(giurgiu);
bucharest.adicionarVizinho(urziceni);

giurgiu.adicionarVizinho(bucharest);

urziceni.adicionarVizinho(bucharest);
urziceni.adicionarVizinho(hirsova);
urziceni.adicionarVizinho(vaslui);

hirsova.adicionarVizinho(urziceni);
hirsova.adicionarVizinho(eforie);

eforie.adicionarVizinho(hirsova);

vaslui.adicionarVizinho(urziceni);
vaslui.adicionarVizinho(iasi);

iasi.adicionarVizinho(vaslui);
iasi.adicionarVizinho(neamt);

neamt.adicionarVizinho(iasi);

// Função da busca em profundidade
function buscaEmProfundidade(inicio, objetivo) {
    let pilha = []; // pilha para os nós a serem verificados
    let visitados = new Set(); // conjunto para manter o controle dos nós já visitados

    pilha.push(inicio); // adiciona o nó inicial à pilha
    visitados.add(inicio); // marca o nó inicial como visitado

    while (pilha.length > 0) {
        let cidade = pilha.pop(); // remove o último nó da pilha

        console.log(`Visitando a cidade: ${cidade.nome}`);

        if (cidade.nome === objetivo.nome) { // se o nó é o objetivo, termina a busca
            console.log(`Encontrou o objetivo: ${cidade.nome}`);
            return;
        }

        // Adiciona os vizinhos do nó atual à pilha
        for (let vizinho of cidade.vizinhos.reverse()) { // inverte a ordem dos vizinhos para simular a pilha
            if (!visitados.has(vizinho.cidade)) { // se o vizinho ainda não foi visitado
                pilha.push(vizinho.cidade);
                visitados.add(vizinho.cidade); // marca o vizinho como visitado
            }
        }
    }
    console.log('Objetivo não encontrado');
}

// Execução da busca
buscaEmProfundidade(arad, bucharest);