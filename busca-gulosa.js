// Classe Cidade que representa um nó
class Cidade {
    nome;
    distanciaObjetivo;
    vizinhos;

    constructor(nome, distanciaObjetivo) {
        this.nome = nome;
        this.distanciaObjetivo = distanciaObjetivo;
        this.vizinhos = []; 
    }

    adicionarVizinho(vizinho) {
        this.vizinhos.push({cidade: vizinho});
    }
}

// Criação do grafo
const arad = new Cidade("Arad", 366);
const zerind = new Cidade("Zerind", 374);
const oradea = new Cidade("Oradea", 380);
const sibiu = new Cidade("Sibiu", 253);
const timisoara = new Cidade("Timisoara", 329);
const lugoj = new Cidade("Lugoj", 244);
const mehadia = new Cidade("Mehadia", 241);
const dobreta = new Cidade("Dobreta", 242);
const craiova = new Cidade("Craiova", 160);
const rimnicuVilcea = new Cidade("Rimnicu Vilcea", 193);
const fagaras = new Cidade("Fagaras", 178);
const pitesti = new Cidade("Pitesti", 98);
const bucharest = new Cidade("Bucharest", 0);
const giurgiu = new Cidade("Giurgiu", 77);
const urziceni = new Cidade("Urziceni", 80);
const hirsova = new Cidade("Hirsova", 151);
const eforie = new Cidade("Eforie", 161);
const vaslui = new Cidade("Vaslui", 199);
const iasi = new Cidade("Iasi", 226);
const neamt = new Cidade("Neamt", 234);

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

// Função de busca gulosa
function buscaGulosa(inicio, objetivo) {
    let atual = inicio;
    let caminho = [inicio.nome]; // Inicia o caminho com a cidade inicial

    while (atual !== objetivo) {
        let menorDistancia = Infinity; // Inicializa com infinito para garantir que a primeira cidade visitada será a mais próxima do objetivo
        let proximaCidade = null;

        atual.vizinhos.forEach(vizinho => { // Itera sobre os vizinhos da cidade atual
            if (vizinho.cidade.distanciaObjetivo < menorDistancia) { 
                menorDistancia = vizinho.cidade.distanciaObjetivo;
                proximaCidade = vizinho.cidade;
            }
        });

        if (proximaCidade === null) {
            return null;
        }

        atual = proximaCidade;
        caminho.push(atual.nome);
    }
    return caminho;
}

// Execução da busca gulosa
const resultado = buscaGulosa(arad, bucharest);
if (resultado !== null) {
    console.log("Caminho encontrado:", resultado.join(" -> "));
} else {
    console.log("Caminho não encontrado!");
}