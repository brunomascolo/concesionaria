let autos = require("./autos");
let persona = [{
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    },
    {
        nombre: "Bruno",
        capacidadDePagoEnCuotas: 10000,
        capacidadDePagoTotal: 50000
    }
];

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

    },
    listaDeVentas: function(){
        let ventas = []
        for(i = 0 ; i < autos.length ; i++ ){
            if(autos[i].vendido == true){
                ventas.push(autos[i].precio);
            }
        }
        return ventas;
    },
    totalDeVentas: function(){
        listaDeVentas = this.listaDeVentas();
        if(listaDeVentas.length != 0){
            ventas = listaDeVentas.reduce(function(acum, num){
                return acum + num;
            });
        }
        else{
            ventas = 0;
        }
        
        return ventas;
    },
    puedeComprar: function(persona, auto){
        let cuota = auto.precio / auto.cuotas
        if(persona.capacidadDePagoTotal >= auto.precio && persona.capacidadDePagoEnCuotas >= cuota) {
            return true;
        }
        else{
            return false;
        }
    }
};

//console.log(concesionaria.buscarAuto("KKQ920"));
// console.log(concesionaria.autosNuevos());
// console.log("Termina autos para la venta nuevos");
// console.log(concesionaria.venderAuto("JJK116"));
// console.log("Termina auto vendido");
// console.log(concesionaria.autosNuevos());
// console.log("Termina autos para la venta nuevos");
// console.log(concesionaria.venderAuto("KKQ920"));
// console.log("Termina auto vendido");
// console.log(concesionaria.autosNuevos());
// console.log("Termina autos para la venta nuevos");
// console.log(concesionaria.listaDeVentas());
// console.log(concesionaria.totalDeVentas())

console.log(concesionaria.puedeComprar({
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 150000
    },
    {
        marca: 'Ford',
        modelo: 'Fiesta',
        precio: 150000,
        km: 200,
        color: 'Azul',
        cuotas: 12,
        anio: 2019,
        patente: 'APL123',
        vendido: false
      }
))

