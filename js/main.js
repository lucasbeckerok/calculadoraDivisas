class Moneda {
    constructor(moneda, sigla, precio){
        this.moneda = moneda;
        this.sigla = sigla;
        this.precio = parseInt(precio);
    }
}

// DOM 
let padre = document.getElementById('container');
let fecha = document.getElementById('fecha');
let boton = document.getElementById('boton');
let cotizador = document.getElementById('cotizador');
let tablaTotal = document.getElementById("tablaTotal");
// Fin DOM

//Array monedas
let monedas = [];
monedas.push(new Moneda("Dolar", "USD","220"));
monedas.push(new Moneda("Euro","EUR","240"));
monedas.push(new Moneda("Libra","GBP","260"));
monedas.push(new Moneda("Bitcoin","BTC","36000"));
monedas.push(new Moneda("Ethereum","ETH","2500"));
monedas.push(new Moneda("Theter","USDT","1"));
monedas.push(new Moneda("Binance Coin","BNB","350"));
monedas.push(new Moneda("USD Coin","USDC","1"));
monedas.push(new Moneda("Cardano","ADA","1"));

//Fecha
const meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
const f = new Date();
//fecha de hoy
let fechaCompleta = "Hoy " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();
// fecha en HTML
fecha.innerHTML = fechaCompleta;

function cotizar() {
    
    const monto = document.getElementById('monto').value;

    if (document.getElementById("dolar").checked) {
        let resultadoDolar = monto / monedas[0].precio;
        let resDolar = parseInt(resultadoDolar.toFixed(2));
        $("#mi-ul").append(`<li><b>Resultado:</b> ${monto} ARS es igual a ${resDolar} USD</li>`);
    }
    else if (document.getElementById("euro").checked) {
        let resultadoEuro = monto / monedas[1].precio;
        let resEuro = parseInt(resultadoEuro.toFixed(2));
        $("#mi-ul").append(`<li><b>Resultado:</b> ${monto} ARS es igual a ${+resEuro} EUR</li>`);
    }
    else if (document.getElementById("libra").checked) {
        let resultadoLibra = monto / monedas[2].precio;
        let resLibra = parseInt(resultadoLibra.toFixed(2));
        $("#mi-ul").append(`<li><b>Resultado:</b>  ${monto}ARS es igual a ${+resLibra} GBP</li>`);
    }
    else {
        $("#mi-ul").append(`<b>Debes completar correctamente todos los campos!</b>`);
    }
}

// Recorrido array de tabla de monedas

for (let monedaTabla of monedas) {
    $("#app").append(`
    <tr>
          <td></td>
          <td>${monedaTabla.moneda}</td>
          <td>${monedaTabla.sigla}</td>
          <td>${monedaTabla.precio}</td>
    </tr>
    `);
}

//-------- Jquery animaciones ----------------

$("#tablaTotal").hide();

function ocultarMiDiv() {
    $('.animate-0').fadeOut();
}
function mostrarMiDiv() {
    $('.animate-0').fadeIn();
};

//----- Clase 14. AJax en el proyecto -------

// const localJson = 'json/monedas.json'

// $.getJSON(localJson,function(responsive, status){
//     if(status == "success"){
//         for (let monedas of responsive){
//             monedas.push(monedas)
//         }
//     } else{
//         console.log('algo salio mal')
//     }
// })

const monedasJson = JSON.stringify(monedas);

localStorage.setItem('datos', monedasJson);


const monedasGuardadoEnJson = localstorage.getItem('datos');

const MonedasObj = JSON.parse(monedasGuardadoEnJson);

console.log(MonedasObj);