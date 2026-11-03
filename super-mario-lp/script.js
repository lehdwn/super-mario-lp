/*

Quando o usuario clicar no btn ceja o trailer, devemos abrir o modal c o video

Quando o usuário clicar no X devemos fechar o modal

*/

const botaoTrailer = document.querySelector(".btn-trailer");
const modal = document.querySelector
(".modal");
const fecharModal = document.querySelector(".fechar-modal");

const video = document.getElementById("video");
const linkDoVideo = video.src;

function alternarModal() {
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => { 
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

fecharModal.addEventListener("click", () => {
    alternarModal();

    video.setAttribute("src", "");
});