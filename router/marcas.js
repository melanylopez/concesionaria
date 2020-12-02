const express = require("express");
const router = express.Router()
const controlador = require("../controllers/marcasController")


router.get("/", controlador.marcas)
router.get("/:marca", controlador.marca)


module.exports = router