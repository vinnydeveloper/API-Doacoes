const express = require("express");
const router = express.Router();

const usuarioController = require("../controllers/usuarioController");
const doacaoController = require("../controllers/doacaoController");
const itemController = require("../controllers/itemController");
const loginController = require("../controllers/loginController");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/usuario", usuarioController.create);
router.post("/login", loginController.create);

router.get("/doacoes", doacaoController.index);
router.post("/doacoes", doacaoController.create);
router.delete("/doacoes", doacaoController.delete);

router.get("/itens", itemController.index);
router.post("/itens", itemController.create);

module.exports = router;
