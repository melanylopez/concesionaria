const express = require("express");
const router = express.Router()
const controlador = require("../controllers/sucursalesController")


router.get("/", controlador.sucursales)
router.get("/:sucursal", controlador.sucursal)


module.exports = router