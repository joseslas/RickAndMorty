const express = require("express");
const userRoutes = express.Router();
const getCharById = require("../controllers/getCharById");
const { postFav, deleteFav} = require("../controllers/handleFavorites");
const login = require("../controllers/login")

userRoutes.get("/character/:id", (req, res) => {
    getCharById(req, res)
});

userRoutes.get("/login", (req, res) => {
    login(req, res);
});

userRoutes.post("/fav", (req, res) => {
    postFav(req, res);
});

userRoutes.delete("/fav/:id", (req, res) => {
    deleteFav(req, res);
});

module.exports = userRoutes;