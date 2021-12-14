"use strict"

const mysqlConnection = require("../database");
const path = require('path'),
        fs = require("fs");
const multer = require('multer');
const validator = require("validator")
const controller = {
    
    buscarProductos: (req, res) =>{
        mysqlConnection.query("SELECT * FROM inventario", (err, rows, fields) =>{
            if(!err){
                res.json(rows);
            }
            else{
                console.log(err);
            }
        });
    }, 

    buscarProductosPorId:  (req, res) =>{
        const { id } = req.params;
        console.log([1])
        mysqlConnection.query("SELECT * FROM inventario WHERE id = ?", [id], (err, rows, fields) =>{
            if(!err){
                res.json(rows[0]);
            }
            else{
                console.log(err);
            }
        });
    },

    guardarProductos: (req, res) =>{
        const { id, nombre, proveedor, cantidad, marca, sevendepor, costo, iva, ganancias, ventas, descripcion } = req.body;
        
        const query = "INSERT INTO inventario (id, nombre, proveedor, cantidad, marca, sevendepor, costo, iva, ganancias, venta, descripcion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        try{

            mysqlConnection.query(query, [id, nombre, proveedor, cantidad, marca, sevendepor, costo, iva, ganancias, ventas, descripcion], (err, rows, fields) => {
                if(!err){
                    res.status(200).json( { exito: "articulo guardado" } );
                }
                else{
                    res.status(406).json( { error: err } );
                }
            });             

        }
        catch (err){
            res.status(412).send( { error: err } );
        }
        
        
        
    },

    actualizarProducto: (req, res) => {
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
    
    },

    borrarProducto:  (req, res) =>{
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
    
    },
    
    
    
    guardarImagen: (req, res) =>{
        const type = req.file.mimetype;
        const name = req.file.originalname;
        const data = fs.readFileSync(path.join(__dirname, "../image/" +req.file.filename));
        const query = "INSERT INTO imagenprueba  imagen  set ?";
        
        mysqlConnection.query(query, [{type, name, data}], (err, rows) =>{
            if(!err){ 
                res.status(200).send( { save : "se aguardo la imagen" } );
            }
            else{
                return res.status(500).send({ error: err } );
            }

    });

    },

    obtenerImagen: (req, res) =>{
        const data = "table.txt"
        fs.writeFile("tabletaImagen.jpg", data, {encoding: "base64"}, (err) =>{
            if(err){
                console.log(err);
            }
            else{
                console.log("archivo Creado ahuevo");
            }
        });
    }

}
module.exports = controller;
