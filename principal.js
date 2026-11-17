let bolas = Number(localStorage.getItem("bolas")) || 0;
let multiplicador = Number(localStorage.getItem("multiplicador")) || 1;
let bolasPorClique = Number(localStorage.getItem("bolasPorClique")) || 1;

function salvar() {
    localStorage.setItem("bolas", bolas);
    localStorage.setItem("multiplicador", multiplicador);
    localStorage.setItem("bolasPorClique", bolasPorClique);
}

function atualizarTela() {
    document.querySelector("header small").innerHTML = bolas;
    document.querySelector("header strong").innerHTML = "Multiplicador: " + multiplicador + "x";
}

document.querySelector(".areaclick").addEventListener("click", function() {
    bolas = bolas + bolasPorClique * multiplicador;
    atualizarTela();
    salvar();
});

atualizarTela();