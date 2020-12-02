const fs = require("fs");
let sucursales = JSON.parse(fs.readFileSync("./data/concesionarias.json", "utf-8"))
let autosSucursal = sucursales.map(function(sucursal){
    return sucursal.autos
})
let autos = [...autosSucursal[0], ...autosSucursal[1], ...autosSucursal[2], ...autosSucursal[3], ...autosSucursal[4]]
let marcasTotal = autos.map(function(auto){
    return auto.marca
})
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}
let marcas = marcasTotal.filter(onlyUnique)



module.exports = {
    marcas:(req,res)=>{
        res.render("marcas", {title : "Marcas", mensaje: "Estas son todas las marcas con las que trabajamos:", marcas : marcas})
    },
    marca: (req,res) => {
        let marca = req.params.marca
        let autosM = autos.filter(function(autos){
            return autos.marca == marca
        })
        console.log(autosM)
        if (autosM[0] == undefined){
            res.render("errorSucursal", {title : "Error", mensaje: "Lo sentimos, la marca seleccionada no se encuentra en nuestr base de datos. Pruebe con otra."})
        }else{
        res.render("marca", {marca: marca, title : marca.toUpperCase(), mensaje: "Estos son todos los autos que tenemos de: " + marca.toUpperCase(),autos : autosM})
        }
    }
}