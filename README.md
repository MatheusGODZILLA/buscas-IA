# Repositório de Implementações de Algoritmos de Busca em Inteligência Artificial

### Instituto Federal do Piauí (IFPI) - Análise e Desenvolvimento de Sistemas - Módulo III
- Professor: Rafael Torres
- Aluno: Matheus da Silva

## Descrição

Neste repositório, encontram-se implementações em JavaScript de algoritmos de busca divididos entre Não-Informados e Informados que foram estudados no contexto da disciplina de Inteligência Artificial bem como o problema adicional requisitado pelo professor.

### -> Algoritmos Não-Informados:

- **Busca em Largura**
- **Busca em Profundidade**
- **Busca Custo-Uniforme**
- **Busca em Profundidade Limitada**
- **Busca em Profundidade Iterativa**

### -> Algoritmos Informados:

- **Busca Gulosa**
- **Algoritmo A***

### -> Desafio Escolhido: Problema da Mochila
- **Objetivo**: Preencher uma mochila com objetos de diferentes pesos e valores. Deve-se preencher a
mochila com o maior valor possível, não ultrapassando o peso máximo, minimizando o
desperdício de espaço.

## Estrutura dos Códigos das Buscas

O modelo que construi segue o exemplo passado em sala de aula, mais precisamente o clássico mapa da Romênia:
<p align="center">
  <img src="https://github.com/MatheusGODZILLA/buscas-IA/assets/76749048/f0bed31b-07a1-47f1-a55b-d89a9535405b" alt="Mapa da Romênia">
</p>


Para modelar o problema, utilizei uma abordagem baseada em grafos. Cada nó do grafo é representado por uma classe `Cidade`, que contém informações sobre o estado do nó e uma lista de vizinhos para representar as conexões com outros nós. Essa classe contém variações para atender cada algoritmo em específico quando necessário.

```js
// Classe Cidade que representa um nó
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
```

Optei por não utilizar uma biblioteca pronta para criar o grafo, pois modelá-lo foi parte integrante do meu aprendizado.

```js
// Exemplo de criação do grafo que usei
// Instanciando cidades
const arad = new Cidade("Arad"); 
const sibiu = new Cidade("Sibiu");
const timisoara = new Cidade("Timisoara");
const zerind = new Cidade("Zerind");

// Adicionando os vizinhos a uma cidade específica para fazer conexões
arad.adicionarVizinho(sibiu);
arad.adicionarVizinho(timisoara);
arad.adicionarVizinho(zerind);
```
## Estrutura do Código do Problema da Mochila:

A classe `objeto` é definida para representar itens que podem ser colocados em uma mochila. Ela possui três propriedades: nome, peso e valor.

```js
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
```
Além disso, o construtor calcula a razão entre o valor e o peso do objeto. Essa razão representa o benefício por unidade de peso do objeto, uma medida chave para o algoritmo de busca gulosa posteriormente usado para selecionar os objetos a serem colocados na mochila.

O algoritmo de busca gulosa é implementado recebendo uma lista de objetos e uma capacidade máxima para a mochila:
```js
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
```

O algoritmo funciona da seguinte maneira:

- Ordenação dos objetos: A lista de objetos é ordenada de forma decrescente com base na razão (valor/peso) de cada objeto. Isso significa que os objetos mais "valiosos" em relação ao seu peso são priorizados na seleção, uma vez que a maior razão resultará do maior valor e o menor peso.

- Seleção dos objetos: Em seguida, o algoritmo percorre essa lista ordenada. Para cada objeto, verifica-se se adicionar este objeto à mochila não ultrapassará a capacidade máxima. Se o objeto puder ser adicionado sem exceder a capacidade, ele é adicionado à mochila, e o peso total da mochila (pesoAtual) e o valor total dos objetos na mochila (valorTotal) são atualizados.

- Critério de parada: O loop continua até que todos os objetos sejam considerados ou até que a capacidade máxima da mochila seja atingida. Assim que a capacidade máxima é alcançada, o loop é interrompido.

- Retorno do resultado: Ao final da execução, a função retorna um objeto contendo a lista dos objetos selecionados para a mochila, o peso total desses objetos (pesoAtual) e o valor total (valorTotal) desses objetos.

## Como Utilizar

Para utilizar as implementações dos algoritmos de busca neste repositório, basta clonar o repositório e executar os scripts JavaScript correspondentes aos algoritmos desejados. Cada algoritmo é implementado em um arquivo separado para facilitar a compreensão e reutilização.
