const express = require('express');
const router = express.Router();

const mysqlConnection = require("../database");

router.get("/", (req, res) =>{
    mysqlConnection.query("SELECT * FROM inventario", (err, rows, fields) =>{
        if(!err){
            res.json(rows)
        }
        else{
            console.log(err)
        }
    });
});
router.get("/:id", (req, res) =>{
    const { id } = req.params;
    console.log(id)
    mysqlConnection.query("SELECT * FROM inventario WHERE id = ?", [id], (err, rows, fields) =>{
        if(!err){
            res.json(rows[0])
        }
        else{
            console.log(err)
        }
    });
});

router.post("/", (req, res) =>{
    const { id, nombre, proveedor, cantidad, marca, sevendepor, costo, iva, ganancias, ventas, descripcion } = req.body;
    
    const query = "INSERT INTO inventario (id, nombre, proveedor, cantidad, marca, sevendepor, costo, iva, ganancias, venta, descripcion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    
    mysqlConnection.query(query, [id, nombre, proveedor, cantidad, marca, sevendepor, costo, iva, ganancias, ventas, descripcion], (err, rows, fields) =>{
        if(!err){
            res.json({Status: "articulo guardado"});
        }
        else{
            console.log(err);
        }
    });
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, proveedor, cantidad, marca, sevendepor, costo, iva, ganancias, ventas, descripcion } = req.body;

    const query= "UPDATE inventario SET id=?, nombre=?, proveedor=?, cantidad=?, marca=?,  sevendepor=?, costo=?, iva=?, ganancias=?, venta=?, descripcion=? WHERE id=?";

    mysqlConnection.query(query, [id, nombre, proveedor, cantidad, marca, sevendepor, costo, iva, ganancias, ventas, descripcion, id], (err, rows, filds) =>{
        if(!err){
            res.json({Status: "articulo actualizado"});
        }
        else{
            console.log(err);
        }
    });

});
router.delete("/:id", (req, res) =>{
    const { id } = req.params;

    const query = "DELETE FROM inventario WHERE id=?";
    mysqlConnection.query(query, [id], (err, rows, filds) => {
        if(!err){
            res.json({Status: "articulo eliminado"});
        }
        else{
            console.log(err);
        }
    });

});
module.exports = router;