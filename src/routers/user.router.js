const router = require("express").Router();
const UserCtrl = require("../controllers/user.controller");

module.exports = (app) => {
    router.get("/", UserCtrl.index);
    router.get("/create", UserCtrl.showFormCreate);
    router.post("/create", UserCtrl.create);
    router.get("/update/:id", UserCtrl.showFormUpdate);
    router.post("/update/:id", UserCtrl.update);
    router.get("/delete/:id", UserCtrl.delete);
    app.use("/", router);
};