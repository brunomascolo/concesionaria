let autos = require("./autos");
let concesionaria = {
    autos: autos,
    buscarAuto: function (patentebuscada) {
        autoEncontrado = autos.filter(autos => autos.patente == patentebuscada); 
        if(autoEncontrado.length > 0){
            return autoEncontrado;
        }      
        else{
            return null;
        } 
    },
    venderAuto: function (patentebuscada) {        
        autoVendido = this.buscarAuto(patentebuscada);
        autoVendido[0].vendido = true;
        return autoVendido; 
    },
    autosParaLaVenta: function () {
        let autosALaVenta = autos.filter(autos => autos.vendido == false);
       return autosALaVenta;
    },
    autosNuevos: function(){
        let autosALaVenta = this.autosParaLaVenta();
        let autosNuevos = autosALaVenta.filter(autosALaVenta => autosALaVenta.km == 0);
        return autosNuevos;

    }
};

//console.log(concesionaria.buscarAuto("KKQ920"));
console.log(concesionaria.autosNuevos());
console.log("Termina autos para la venta nuevos")
console.log(concesionaria.venderAuto("JJK116"));
console.log("Termina auto vendido")
console.log(concesionaria.autosNuevos());
console.log("Termina autos para la venta nuevos")

