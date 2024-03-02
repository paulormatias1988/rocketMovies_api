const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UsersCrontroller = require("../controllers/UsersCrontroller");
const UserAvatarController = require("../controllers/UserAvatarController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const usersCrontroller = new UsersCrontroller();
const userAvatarController = new UserAvatarController();

usersRoutes.post("/", usersCrontroller.create);
usersRoutes.put("/", ensureAuthenticated, usersCrontroller.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update);

module.exports = usersRoutes;