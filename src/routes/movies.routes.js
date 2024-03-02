const { Router } = require("express");

const MoviesController = require("../controllers/MoviesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const moviesRoutes = Router();

const moviesCrontroller = new MoviesController();

moviesRoutes.use(ensureAuthenticated);

moviesRoutes.post("/", moviesCrontroller.create);
moviesRoutes.get("/:id", moviesCrontroller.show);
moviesRoutes.delete("/:id", moviesCrontroller.delete);
moviesRoutes.get("/", moviesCrontroller.index);
moviesRoutes.patch("/:id", moviesCrontroller.update);

module.exports = moviesRoutes;