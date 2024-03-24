# Repositório de Implementações de Algoritmos de Busca em Inteligência Artificial

### Instituto Federal do Piauí (IFPI) - Análise e Desenvolvimento de Sistemas - Módulo III
- Professor: Rafael Torres
- Aluno: Matheus da Silva

## Descrição

Neste repositório, encontram-se implementações em JavaScript de algoritmos de busca divididos entre Não-Informados e Informados que foram estudados no contexto da disciplina de Inteligência Artificial.

### -> Algoritmos Não-Informados:

- **Busca em Largura**
- **Busca em Profundidade**
- **Busca Custo-Uniforme**
- **Busca em Profundidade Limitada**
- **Busca em Profundidade Iterativa**

### -> Algoritmos Informados:

- **Busca Gulosa**
- **Algoritmo A***

## Estrutura do Código

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
## Como Utilizar

Para utilizar as implementações dos algoritmos de busca neste repositório, basta clonar o repositório e executar os scripts JavaScript correspondentes aos algoritmos desejados. Cada algoritmo é implementado em um arquivo separado para facilitar a compreensão e reutilização.
