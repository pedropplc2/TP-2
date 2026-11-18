let moedas = Number(localStorage.getItem("moedas")) || 0;
let multiplicador = Number(localStorage.getItem("multiplicador")) || 1;
let bolasPorClique = Number(localStorage.getItem("bolasPorClique")) || 1;

let area = document.querySelector(".areaclick");
let container = document.querySelector(".campo");
let contador = document.querySelector("header small");
let textoMultiplicador = document.querySelector("header strong");

let zagueiro = document.querySelector(".zagueiro");
let meia = document.querySelector(".meia");
let atacante = document.querySelector(".atacante");

let upgrades = document.querySelectorAll(".multiplicador p, .bolas p");

let nomes = ["Multiplicador", "Bolas"];
let precosIniciais = [10, 80];

let precos = [];
let niveis = [];

for (let i = 0; i < upgrades.length; i++) {
    precos[i] = Number(localStorage.getItem("preco" + nomes[i])) || precosIniciais[i];
    niveis[i] = Number(localStorage.getItem("nivel" + nomes[i])) || 1;
}

function salvar() {
    localStorage.setItem("moedas", moedas);
    localStorage.setItem("multiplicador", multiplicador);
    localStorage.setItem("bolasPorClique", bolasPorClique);

    for (let i = 0; i < upgrades.length; i++) {
        localStorage.setItem("preco" + nomes[i], precos[i]);
        localStorage.setItem("nivel" + nomes[i], niveis[i]);
    }
}

function atualizarTela() {
    contador.textContent = moedas;
    textoMultiplicador.textContent = "Multiplicador: " + multiplicador + "x";

    for (let i = 0; i < upgrades.length; i++) {
        upgrades[i].querySelector(".nivel").textContent = "lvl " + niveis[i];
        upgrades[i].querySelector(".preco").lastChild.textContent = precos[i];
    }
}


function moverBola(bola, elemento) {
    let x = elemento.offsetLeft + elemento.offsetWidth / 2;
    let y = elemento.offsetTop + elemento.offsetHeight * 0.9;

    bola.style.left = (x / container.offsetWidth * 100) + "%";
    bola.style.top = (y / container.offsetHeight * 100) + "%";
}

area.addEventListener("click", function() {

    let bola = document.createElement("div");

    bola.classList.add("bola");
    bola.textContent = "⚽";

    moverBola(bola, area);

    container.appendChild(bola);

    let caminho = [zagueiro, meia, atacante];

    for (let i = 0; i < caminho.length; i++) {

        setTimeout(function() {
            moverBola(bola, caminho[i]);
        }, 50 + i * 800);

    }


    setTimeout(function() {

        bola.style.left = "94%";
        bola.style.top = "46%";

        moedas = moedas + bolasPorClique * multiplicador;

        atualizarTela();
        salvar();

        setTimeout(function() {
            bola.remove();
        }, 1300);

    }, 50 + caminho.length * 800);

});

for (let i = 0; i < upgrades.length; i++) {

    upgrades[i].addEventListener("click", function() {

        if (moedas >= precos[i]) {

            moedas = moedas - precos[i];

            niveis[i] = niveis[i] + 1;
            precos[i] = precos[i] + precosIniciais[i];

            if (i == 0) {
                multiplicador = multiplicador + 1;
            }

            if (i == 1) {
                bolasPorClique = bolasPorClique + 1;
            }

            atualizarTela();
            salvar();
        }

    });

}

atualizarTela();
