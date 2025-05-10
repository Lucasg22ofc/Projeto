
 const botao = document.querySelector(".botao-menu");
const menuLateral = document.querySelector(".menu-lateral");
const conteudo = document.querySelector(".conteudo");
const background = document.querySelector(".background");

// Adicionando o evento de clique no botão
botao.addEventListener("click", () => {
    menuLateral.classList.toggle("ativo");
    botao.classList.toggle("ativo");
    conteudo.classList.toggle("ativo");
    background.classList.toggle("ativo");
    document.body.style.backgroundColor = menuLateral.classList.contains('ativo') ? "rgba(101, 147, 155, 0.5)" : "white";
})

background.addEventListener("click", () => {
    menuLateral.classList.remove("ativo");
    botao.classList.remove("ativo");
    conteudo.classList.remove("ativo");
    background.classList.remove("ativo");
    document.body.style.backgroundColor = "white";
})
