let fs = require("fs");
const autos = require("./autos");
let funciones = {
    archivo: "./autos.js",
    leerArchivo: function(){
        return fs.readFileSync(this.archivo, 'utf-8');
    },
    escribirArchivo: function (autos) {
        fs.writeFileSync(this.archivo, autos, null, ' ');
    },
    guardarAuto(auto) {        
        autos.push(auto);
        this.escribirArchivo(autos);
    }
}

module.exports = funciones;
console.log(funciones.guardarAuto())