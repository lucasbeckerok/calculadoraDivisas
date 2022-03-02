//--Clase de objeto constructor
class Moneda {
    constructor(moneda, sigla, precio){
        this.moneda = moneda;
        this.sigla = sigla;
        this.precio = parseInt(precio);
    }
}

//Clase para usar en Storage
class Resultado {
    constructor(moneda,valor, convertido){
        this.moneda = moneda;
        this.valor = valor;
        this.convertido = convertido;
    }
}

//-DOM 
let padre = document.getElementById('container');
let fecha = document.getElementById('fecha');
let monto = document.getElementById('monto');
let boton = document.getElementById('boton');
let cotizador = document.getElementById('cotizador');
let tablaTotal = document.getElementById("tablaTotal");
let containerResultado = document.getElementById("containerResultado");

//---Array monedas
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

//----Fecha
const meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
const f = new Date();
let fechaCompleta = "Hoy " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();
//-Fecha DOM
fecha.innerHTML = fechaCompleta;

//---Funciones de botones 'cotizar' y 'limpiar'

//boton cotizar
function cotizar() {

    aparecerAlert();
    monto = document.getElementById('monto').value;

    if (document.getElementById("dolar").checked) {
        let resultadoDolar = monto / monedas[0].precio;
        let resDolar = resultadoDolar.toFixed(2);
        $("#mi-ul").append(`<li><h5>$${monto} ARS es igual a $${+resDolar} USD<h5></li>`);
        //storage
        let result = new Resultado("Dolar",monto,resultadoDolar);
        localStorage.setItem("ConversiónDolar", JSON.stringify(result));
    }
    else if (document.getElementById("euro").checked) {
        let resultadoEuro = monto / monedas[1].precio;
        let resEuro = resultadoEuro.toFixed(2);
        $("#mi-ul").append(`<li><h5>$${monto} ARS es igual a $${+resEuro} EUR</h5></li>`);
        //storage
        let result = new Resultado("Euro",monto,resultadoDolar);
        localStorage.setItem("ConversiónEuro", JSON.stringify(result));
    }
    else if (document.getElementById("libra").checked) {
        let resultadoLibra = monto / monedas[2].precio;
        let resLibra = resultadoLibra.toFixed(2);
        $("#mi-ul").append(`<li><h5>$${monto} ARS es igual a $${+resLibra} GBP</h5></li>`);
        //storage
        let result = new Resultado("Libra",monto,resultadoDolar);
        localStorage.setItem("ConversiónLibra", JSON.stringify(result));
    }
    else {
        $("#mi-ul").append(`<h5><b>&#x26D4;Error!</b> Moneda no Seleccionada</h5>`);
    }
}

//-boton Limpiar
function limpiar() {
    monto = document.getElementById("monto").value="";
}

//---Recorrido array de tabla de monedas
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

//----JQuery animaciones

//Container Resultado
$("#containerAlert").hide();

function aparecerAlert() {
    $('.animate-1').fadeIn();
};

//---Tabla Total
$("#tablaTotal").hide();

//-botones de tabla
function ocultarMiDiv() {
    $('.animate-0').fadeOut();
}
function mostrarMiDiv() {
    $('.animate-0').fadeIn();
};

// --Json
const localJson = '../json/monedas.json'

$.getJSON(localJson)

const monedasJson = JSON.stringify(monedas);

localStorage.setItem(monedasJson, localJson);