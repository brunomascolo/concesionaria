let autos = require("./autos.js");
let funciones = require("./funciones");

let concesionaria = {
    autos: autos,
    buscarAuto: function (patentebuscada) {
        for (let i = 0; i < autos.length; i++) {
            if (autos[i].patente == patentebuscada) {
                return autos[i];
            }
            else {
                return null;
            }
        }
    },
    venderAuto: function (patentebuscada) {
        let autoVendido = this.buscarAuto(patentebuscada);
        autoVendido.vendido = true;
        funciones.guardarAuto(autoVendido);
        return autoVendido;
        
    },
    autosParaLaVenta: function (vendido) {
        autos.filter(function (condicion) {
            return condicion.vendido == false;
        })
        return autos.autosParaLaVenta;
    }
}


console.log(concesionaria.venderAuto("APL123"));

//duda: me cambia el valor al mostrar por consola, pero no en el archivo autos