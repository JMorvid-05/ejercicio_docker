// index.js
const express = require('express');
const app = express();
//para router de juegos
const games=require("./routes/games.js");

// Middleware: le dice a Express que lea el cuerpo de las peticiones como JSON
app.use(express.json());



app.use("/games",games);



app.get("/", (req, res)=>{
    res.status(200).json({
        "mensaje": "Endpoint /games disponible"
    });
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});