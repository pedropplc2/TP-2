let multiplicador = 1;
let moedas = 0;

let area = document.querySelector(".areaclick");
let container = document.querySelector(".container");
let contador = document.querySelector("#coin")


area.addEventListener("click", function(){

    let bola = document.createElement("div");

    bola.classList.add("bola");

    bola.textContent = "⚽";

    bola.style.left = "410px";
    bola.style.bottom = "150px";

    container.appendChild(bola);

    setTimeout(function(){

    
        bola.style.left = "537px";
        bola.style.bottom = "530px";

    }, 50);

    
    setTimeout(function(){

        bola.style.left = "927px";
        bola.style.bottom = "350px";

    }, 850);

    setTimeout(function(){

        bola.style.left = "1360px";
        bola.style.bottom = "520px";

    }, 1650);

    setTimeout(function(){

        bola.style.left = "1690px";
        bola.style.bottom = "580px";

        moedas = moedas + (1 * multiplicador);

        contador.textContent = moedas;

        setTimeout(function(){
            bola.remove();
        }, 1300);

    }, 2450);

});

