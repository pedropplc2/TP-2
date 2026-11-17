
let moedas = Number(localStorage.getItem("moedas")) || 0;
let multiplicador = Number(localStorage.getItem("multiplicador")) || 1;
let bolasPorClique = Number(localStorage.getItem("bolasPorClique")) || 1;

let area = document.querySelector(".areaclick");
let container = document.querySelector(".campo");
let contador = document.querySelector("header small");
let textoMultiplicador = document.querySelector("header strong");

let upgrades = document.querySelectorAll(".tecnico p, .estadio p, .multiplicador p, .bolas p");

let nomes = ["Entrosamento", "Tatico", "Gramado", "Arquibancada", "Gol", "Multiplicador", "Bolas"];
let precosIniciais = [50, 75, 100, 150, 200, 10, 80];

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

area.addEventListener("click", function() {

    let bola = document.createElement("div");

    bola.classList.add("bola");
    bola.textContent = "⚽";

    bola.style.left = "23%";
    bola.style.top = "67%";

    container.appendChild(bola);

    setTimeout(function() {

        bola.style.left = "43%";
        bola.style.top = "46%";

    }, 50);

    setTimeout(function() {

        bola.style.left = "56%";
        bola.style.top = "54%";

    }, 850);

    setTimeout(function() {

        bola.style.left = "71%";
        bola.style.top = "57%";

    }, 1650);

    setTimeout(function() {

        bola.style.left = "88%";
        bola.style.top = "47%";

        moedas = moedas + bolasPorClique * multiplicador;

        atualizarTela();
        salvar();

        setTimeout(function() {
            bola.remove();
        }, 1300);

    }, 2450);

});

for (let i = 0; i < upgrades.length; i++) {

    upgrades[i].addEventListener("click", function() {

        if (moedas >= precos[i]) {

            moedas = moedas - precos[i];

            niveis[i] = niveis[i] + 1;
            precos[i] = precos[i] + precosIniciais[i];

            if (i == 5) {
                multiplicador = multiplicador + 1;
            }

            if (i == 6) {
                bolasPorClique = bolasPorClique + 1;
            }

            atualizarTela();
            salvar();
        }

    });

}

atualizarTela();
