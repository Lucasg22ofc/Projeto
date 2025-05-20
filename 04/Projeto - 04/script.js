
const elementoCor = document.querySelector(".cor");
const imagemPrincipal =document.querySelector(".imagem img")


function trocarCor(novaCor, novaImagem) {
    elementoCor.style.background = novaCor;
    imagemPrincipal.src = novaImagem
}


const botao = document.querySelector(".botao-menu");
const menuLateral = document.querySelector(".menu-lateral");
const conteudo = document.querySelector(".conteudo");
const background = document.querySelector(".background");
const copos = document.querySelector(".copos");
const imagem = document.querySelector(".imagem");
const cor = document.querySelector(".cor");

botao.addEventListener("click", () => {
    menuLateral.classList.toggle("ativo");
    copos.classList.toggle("ativo");
    botao.classList.toggle("ativo");
    conteudo.classList.toggle("ativo");
    background.classList.toggle("ativo");
    imagem.classList.toggle("ativo");
    cor.classList.toggle("ativo");
    document.body.style.backgroundColor = menuLateral.classList.contains('ativo') ? "rgb(255, 255, 255)" : "white";
})

background.addEventListener("click", () => {
    menuLateral.classList.remove("ativo");
    copos.classList.remove("ativo");
    botao.classList.remove("ativo");
    conteudo.classList.remove("ativo");
    background.classList.remove("ativo");
    document.body.style.backgroundColor = "white";
})

