// EXERCÍCIO 01 - Criando e exibindo um array
let nomes = ['Eliane', 'Ana', 'Maria'];
console.log(nomes);
console.log("O tamanho do Array nomes é: " + nomes.length);

// EXERCÍCIO 02 - Adicionando elementos ao final
nomes.push('João', 'Carlos');
console.log(nomes);

// EXERCÍCIO 03 - Inserindo no início
nomes.unshift('Beatriz');
console.log(nomes);

// EXERCÍCIO 04 - Removendo o último
let removidoFinal = nomes.pop();
console.log("Nome removido:", removidoFinal);
console.log(nomes);

// EXERCÍCIO 05 - Removendo o primeiro
let removidoInicio = nomes.shift();
console.log("Nome removido:", removidoInicio);
console.log(nomes);

// EXERCÍCIO 06 - Removendo e adicionando elementos
let frutas = ['Maçã', 'Banana', 'Uva', 'Pera', 'Laranja'];
frutas.splice(1, 2, 'Manga', 'Kiwi');
console.log(frutas);

// EXERCÍCIO 07 - Exibindo o tamanho do array
console.log("O tamanho do Array frutas é: " + frutas.length);

// EXERCÍCIO 08 - Criando um histórico de páginas
let historico = [];
historico.push('home', 'sobre', 'contato');
console.log(historico);

// EXERCÍCIO 09 - Removendo o último acesso do histórico
let ultimaPagina = historico.pop();
console.log("Saída da página:", ultimaPagina);
console.log(historico);

// EXERCÍCIO 10 - Alterando elementos
let cores = ['Vermelho', 'Verde', 'Amarelo', 'Roxo'];
cores.splice(2, 1, 'Azul-marinho');
console.log(cores);
