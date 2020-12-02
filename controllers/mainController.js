const fs = require("fs");
let datos = JSON.parse(fs.readFileSync("./data/concesionarias.json", "utf-8"))
let sucursales = datos.map(function(lugar){
    return lugar.sucursal
})
module.exports = {
    index : (req,res) =>{
        res.render("homePage",{title : "Concesionarias DH", mensaje: "Bienvenido, aquí puedes ver una lista de nuestras concesionarias:", sucursales: sucursales})
    }
}