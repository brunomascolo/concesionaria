let fs = require("fs");

let funciones = {
    archivo: "./autos.json",
    leerJSON: function(){
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    escribirJSON: function (autos) {
        fs.writeFileSync(this.archivo, JSON.stringify(autos, null, ' '));
    },
    guardarTarea(auto) {
        let autos = this.leerJSON();
        autos.push(auto);
        this.escribirJSON(autos);
    },
}

module.exports = funciones;
