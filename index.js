const inputItem = document.getElementById("input-item")

const botaoAdiconar = document.getElementById("adicionar-item")

botaoAdiconar.addEventListener("click", (evento) => {
    evento.preventDefault();
    console.log(inputItem.value);
})