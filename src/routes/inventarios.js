const express = require('express');
const router = express.Router();
const InventarioControllers = require('../controllers/InventarioControllers');

router.get("/get", InventarioControllers.buscarProductos);

router.get("/get/:id", InventarioControllers.buscarProductosPorId);

router.post("/save", InventarioControllers.guardarProductos);

router.put("/update/:id", InventarioControllers.actualizarProducto);

router.delete("/delete/:id", InventarioControllers.borrarProducto);

module.exports = router;