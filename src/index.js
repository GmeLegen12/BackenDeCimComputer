const express = require("express");
const app = express();

// configuracion
    app.set("port", process.env.PORT || 3001);

// Middlewares
    app.use(express.json());
// rutas
    app.use(require("./routes/inventarios.js"));

// iniciar servidor
app.listen(app.get("port"), ()=>{
    console.log("el servidor corre en el puerto", app.get("port"));
});