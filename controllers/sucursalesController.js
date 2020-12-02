const fs = require("fs");
let sucursales = JSON.parse(fs.readFileSync("./data/concesionarias.json", "utf-8"))

module.exports = {
    sucursales : (req,res) => {
        res.render("sucursales", {title: "Sucursales", mensaje: "Estas son los datos de nuestras concesionaras. Elegí la que te quede más cómoda.", sucursales: sucursales})
    },
    sucursal : (req,res) =>{
        let id = req.params.sucursal
        let sucursalArray = sucursales.filter(function(sucursal){
            return sucursal.sucursal == id
        })
        let sucursal = sucursalArray[0]
        
        if (sucursalArray.length == 0){
            res.render("errorSucursal",{title : "Error", mensaje: "Ups, no encontramos la concesionaria solicitada, por favor verifica que hayas escrito bien su nombre."})
        }else {
            let autos = sucursal.autos
            res.render("sucursal", {title : sucursal.sucursal, mensaje: "Estos son los datos de nuestra concesionaria en " + sucursal.sucursal + ": ",direccion: sucursal.direccion, telefono: sucursal.telefono, autos: autos})
        }
    }
}