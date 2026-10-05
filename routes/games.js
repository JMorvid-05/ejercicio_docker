const express = require("express");
const router = express.Router();
const games = require("../data/gamesdata.js");
//ep obtener todos 
idcont = 11;
router.get("/", (req, res) => {
    res.status(200).json(games);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const videogame = games.find(l => l.id === id);
    if (!videogame) return res.status(404).json({ error: `No se encontró el juego con id ${id}` });
    res.json(videogame);
});

router.post("/", (req, res) => {
    const { nombre, id_categoria, precio, desarrollador, anio } = req.body;
    if (!nombre || !id_categoria) {
        return res
            .status(400)
            .json({ mensaje: "Los campos 'nombre' e 'id_categoria' son obligatorios" });
    }
    const newgame = {
        id: idcont++,
        nombre,
        id_categoria,
        precio,
        desarrollador,
        anio
    }
    games.push(newgame);
    res.status(200).json({
        newgame
    });

});

// PUT actualizar videojuego
router.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    // variable temporal para comparar cada tupla donde el id sea igual al obtenido del req.params
    // al obtener el juego se ejecuta la función findindex que retorna el índice del juego.
    const index = games.findIndex(videogame => videogame.id === id);

    if (index === -1) {
        return res.status(404).json({
            mensaje: `No se encontró el videojuego con id ${id}`
        });
    }

    const {
        nombre,
        id_categoria,
        precio,
        desarrollador,
        anio
    } = req.body;

    if (
        !nombre ||
        id_categoria === undefined ||
        precio === undefined ||
        !desarrollador ||
        anio === undefined
    ) {
        return res.status(400).json({
            mensaje:
                "Los campos 'nombre', 'id_categoria', 'precio', 'desarrollador' y 'anio' son obligatorios"
        });
    }

    const videojuego = {
        id,
        nombre,
        id_categoria,
        precio,
        desarrollador,
        anio
    };

    games[index] = videojuego;

    res.status(200).json({
        mensaje: "Videojuego actualizado correctamente",
        videojuego
    });
});


// DELETE eliminar videojuego
router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = games.findIndex(g => g.id === id);

    if (index === -1) {
        return res.status(404).json({
            mensaje: `No se encontró el videojuego con id ${id}`
        });
    }

    const eliminado = games.splice(index, 1)[0];

    res.status(200).json({
        mensaje: "Videojuego eliminado correctamente",
        eliminado
    });
});


module.exports = router;