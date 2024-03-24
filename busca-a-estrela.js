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

    adicionarVizinho(vizinho, distancia) {
        this.vizinhos.push({cidade: vizinho, custo: distancia});
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
arad.adicionarVizinho(sibiu, 140);
arad.adicionarVizinho(timisoara, 118);
arad.adicionarVizinho(zerind, 75);

zerind.adicionarVizinho(arad, 75);
zerind.adicionarVizinho(oradea, 71);

oradea.adicionarVizinho(zerind, 71);
oradea.adicionarVizinho(sibiu, 151);

sibiu.adicionarVizinho(arad, 140);
sibiu.adicionarVizinho(fagaras, 99);
sibiu.adicionarVizinho(oradea, 151);
sibiu.adicionarVizinho(rimnicuVilcea, 80);

timisoara.adicionarVizinho(arad, 118);
timisoara.adicionarVizinho(lugoj, 111);

lugoj.adicionarVizinho(timisoara, 111);
lugoj.adicionarVizinho(mehadia, 70);

mehadia.adicionarVizinho(lugoj, 70);
mehadia.adicionarVizinho(dobreta, 75);

dobreta.adicionarVizinho(mehadia, 75);
dobreta.adicionarVizinho(craiova, 120);

craiova.adicionarVizinho(dobreta, 120);
craiova.adicionarVizinho(pitesti, 138);
craiova.adicionarVizinho(rimnicuVilcea, 146);

rimnicuVilcea.adicionarVizinho(sibiu, 80);
rimnicuVilcea.adicionarVizinho(pitesti, 97);
rimnicuVilcea.adicionarVizinho(craiova, 146);

fagaras.adicionarVizinho(sibiu, 99);
fagaras.adicionarVizinho(bucharest, 211);

pitesti.adicionarVizinho(rimnicuVilcea, 97);
pitesti.adicionarVizinho(craiova, 138);
pitesti.adicionarVizinho(bucharest, 101);

bucharest.adicionarVizinho(fagaras, 211);
bucharest.adicionarVizinho(pitesti, 101);
bucharest.adicionarVizinho(giurgiu, 90);
bucharest.adicionarVizinho(urziceni, 85);

giurgiu.adicionarVizinho(bucharest, 90);

urziceni.adicionarVizinho(bucharest, 85);
urziceni.adicionarVizinho(hirsova, 98);
urziceni.adicionarVizinho(vaslui, 142);

hirsova.adicionarVizinho(urziceni, 98);
hirsova.adicionarVizinho(eforie, 86);

eforie.adicionarVizinho(hirsova, 86);

vaslui.adicionarVizinho(urziceni, 142);
vaslui.adicionarVizinho(iasi, 92);

iasi.adicionarVizinho(vaslui, 92);
iasi.adicionarVizinho(neamt, 87);

neamt.adicionarVizinho(iasi, 87);

// Função de busca A*
function buscaAEstrela(inicio, objetivo) {
    let abertos = [inicio]; // Nós ainda não avaliados
    let fechados = []; // Nós já avaliados
    let caminho = {}; 

    // Função de custo total estimado
    function custoTotalEstimado(cidade) {
        return cidade.distanciaObjetivo + caminho[cidade.nome].custo;
    }

    caminho[inicio.nome] = { custo: 0, pai: null }; // O custo para chegar à cidade inicial é 0 e não tem pai

    while (abertos.length > 0) {
        // Encontrando a cidade com o menor custo total estimado
        let cidadeAtual = abertos.reduce((minCidade, cidade) => custoTotalEstimado(cidade) < custoTotalEstimado(minCidade) ? cidade : minCidade, abertos[0]);

        if (cidadeAtual === objetivo) {
            let caminhoFinal = [];
            while (cidadeAtual !== null) {
                caminhoFinal.unshift(cidadeAtual.nome);
                cidadeAtual = caminho[cidadeAtual.nome].pai;
            }
            return caminhoFinal;
        }

        // Removendo a cidade atual da lista de nós abertos
        abertos = abertos.filter(cidade => cidade !== cidadeAtual);
        fechados.push(cidadeAtual);

        cidadeAtual.vizinhos.forEach(vizinho => {
            if (!fechados.includes(vizinho.cidade)) { // Se o vizinho ainda não foi avaliado
                let custoAtualizado = caminho[cidadeAtual.nome].custo + vizinho.custo;

                // Se o vizinho ainda não está na lista de nós abertos, ou se o novo custo é menor
                if (!abertos.includes(vizinho.cidade) || custoAtualizado < caminho[vizinho.cidade.nome].custo) {
                    caminho[vizinho.cidade.nome] = { custo: custoAtualizado, pai: cidadeAtual }; // Atualiza o custo e o pai do vizinho
                    if (!abertos.includes(vizinho.cidade)) {
                        abertos.push(vizinho.cidade); // Adiciona o vizinho à lista de nós abertos
                    }
                }
            }
        });
    }
    return null;
}

// Execução da busca A*
resultado = buscaAEstrela(arad, bucharest);

if (resultado !== null) {
    console.log("Caminho encontrado:");
    console.log(resultado);
} else {
    console.log("Caminho não encontrado.");
}