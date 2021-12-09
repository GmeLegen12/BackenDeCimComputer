const express = require('express');
const router = express.Router();
const InventarioControllers = require('../controllers/InventarioControllers');

router.get("/get", InventarioControllers.buscarProductos);

router.get("/get/:id", InventarioControllers.buscarProductosPorId);

router.post("/save", InventarioControllers.guardarProductos);

router.put("/update/:id", InventarioControllers.actualizarProducto);

router.delete("/delete/:id", InventarioControllers.borrarProducto);

console.log("");

console.log("Obtener datos");
console.log("http://192.168.2.50:3900/api/get");

console.log("");

console.log("buscar un articulo en especifico");
console.log("http://192.168.2.50:3900/api/get/:id");

console.log("");

console.log("guardar articulo");
console.log("http://192.168.2.50:3900/api/save");

console.log("");

console.log("Actualizar Articulo");
console.log("http://192.168.2.50:3900/api/update/:id");

console.log("");

console.log("Borrar Articulo");
console.log("http://192.168.2.50:3900/api/delete/:id");
console.log("");
console.log("");


module.exports = router;