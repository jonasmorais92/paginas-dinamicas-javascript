const inputItem = document.getElementById("input-item");    //Docme;nt se refere ao DOM (árvore genealógica do documento HTML). getElementById significa selecionar aquele documento pelo valor de seu ID.
const listaDeCompras = document.getElementById("lista-de-compras")
const botaoAdiconar = document.getElementById("adicionar-item");
let contador = 0;

botaoAdiconar.addEventListener("click", (evento) => {       //Função para escutar um evento e executar algo ao receber esse evento.
    evento.preventDefault();        //Remove o evento padrão do input de limpar o que foi digitado após enviar os dados pelo botão.
    if (inputItem.value === "") {   //Caso o valor do input seja vazio.
        alert("Por favot, insira um item!");
        return  //O return interrompe a execução e vai para prox linha.
    }

    const itemDaLista = document.createElement("li");   //Criando um elemento <li><\li> no HTML.
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container"); //Adicionando uma classe na <div> criada.
    const inputCheckbox = document.createElement("input"); //Criando o <input> no HTML.
    inputCheckbox.type = "checkbox";    //Adicionando o tipo daquele input (nesse caso o tipo é checkbox).
    inputCheckbox.id = "checkbox-" + contador++;    //Adicionando o ID desse checkbox. Concatenando o nome checkbox com o contador, o que fará o chackbox ter os nomes incrementados como: checkbox-1, checkbox-2...checkbox-n.
    const nomeItem = document.createElement("p");   //Criando o <p> no HTML.
    nomeItem.innerText = inputItem.value;       //Acessando o texto dentro do paragrafo <p> e atribuindo o valor digitado dentro do campo do input (inputItem).
    
    containerItemDaLista.appendChild(inputCheckbox);    //Depois de criado os elementos, precisa declarar quem é pai de quem. appendChild é o método usado pra definir em seu parâmetro o filho daquele elemento. Sintaxe: elementoPai.appendChield(elementoFilho).
    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista);      //Observando melhor, pode se reparar que todo o processo é feito considerando dos filhos até o último pai.
    listaDeCompras.appendChild(itemDaLista);        //o <ul> (listaDeCompras) nesse caso é o último pai, pois ele é a própria lista.

})