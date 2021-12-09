const express = require("express");
const app = express();

// configuracion
    app.set("port", process.env.PORT || 3900);

// Middlewares
    app.use(express.json());
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        next();
    });
// rutas
    app.use("/api" ,require("./routes/inventarios.js"));

// iniciar servidor
app.listen(app.get("port"), ()=>{
    console.log("el servidor corre en el puerto", app.get("port"));
});