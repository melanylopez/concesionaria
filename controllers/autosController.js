const fs = require("fs");
const { type } = require("os");
let sucursales = JSON.parse(fs.readFileSync("./data/concesionarias.json", "utf-8"))
let autosSucursal = sucursales.map(function(sucursal){
    return sucursal.autos
})
let autos = [...autosSucursal[0], ...autosSucursal[1], ...autosSucursal[2], ...autosSucursal[3], ...autosSucursal[4]]
module.exports = {
    autos : (req,res) => {
        res.render("autos",{title: "Autos", mensaje:"Estos son todos los autos que podes encontrar en nuestras concesionarias: ", autos : autos})
    },
    marca : (req,res) => {
        let marca = req.params.marca;
        autosMarca = autos.filter(function(auto){
            return auto.marca === marca
        })
        if(autosMarca[1] == undefined){
            return res.render("errorSucursal", {title: "Error", mensaje: "No encontramos ningúna uto con la marca solicitada. Por favor, ingrese una marca que se encuentre en el listado"})
        }else {
            return res.render("autos", {title: marca.toUpperCase(), mensaje: "Estos son todos los autos que tenemos de: " + marca.toUpperCase(),autos : autosMarca})
        }
    },
    dato : (req,res) => {
        let marca = req.params.marca
        autosMarca = autos.filter(function(auto){
            return auto.marca === marca
        })
        let dato = req.params.dato
        if(autosMarca[1] == undefined){
            return res.render("errorSucursal", {title: "Error", mensaje: "No encontramos ningún auto con la marca solicitada. Por favor, ingrese una marca que se encuentre en el listado"})
        }else if (dato.includes(0,1,2,3,4,5,6,7,8,9)){
            let anio = dato;
            let autosAnio = autosMarca.filter(function(auto){
                return auto.anio == dato
            })
            if(autosAnio[1] == undefined){
                return res.render("errorSucursal", {title: "Error", mensaje: "No encontramos ningún auto del año solicitado. Por favor, ingrese una año diferente" })
            }else{
                return res.render("autos", {title: `${marca.toUpperCase()} ${dato}`, mensaje: "Estos son todos los autos que tenemos de: " + marca.toUpperCase() + " del año " + anio,autos : autosAnio})
            }
        }else{
            let autosColor = autosMarca.filter(function(auto){
                return auto.color == dato
            })
            if(autosColor[0] == undefined){
                return res.render("errorSucursal", {title: "Error", mensaje: "No encontramos ningún auto del color solicitado. Por favor, ingrese un color diferente" })
            }else{
                return res.render("autos", {title: `${marca.toUpperCase()} ${dato.toUpperCase()}`, mensaje: "Estos son todos los autos que tenemos de: " + marca.toUpperCase() + " del color " + dato.toUpperCase(),autos : autosColor})
            }
        }
            

    }
}