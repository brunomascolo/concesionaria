
let funciones = require("./funciones");
let autos = funciones.leerJSON();

let concesionaria = {
    autos: autos,
    buscarAuto: function (patentebuscada) {
        return autos.filter(autos => autos.patente == patentebuscada);        
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


console.log(concesionaria.buscarAuto("KKQ920"));

//duda: me cambia el valor al mostrar por consola, pero no en el archivo autos