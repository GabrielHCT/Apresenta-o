const botão = document.querySelector("#config");
const modal = document.querySelector("dialog");
const botãoFechar = document.querySelector("#fechar")

botão.onclick = function() {
    modal.showModal();
}

botãoFechar.onclick = function() {
    modal.close();
}