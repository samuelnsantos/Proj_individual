var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});
    //  ADICIONEI A NOVA ROTA DE PLOTAR O GRÁFICO, FAZENDO A REQUISIÇÃO E RESPOSTA - ROTAS.. AULAS DE PESQUISA E INOVAÇÃO
router.get("/plotargrafico", function (req, res) {
    usuarioController.plotargrafico(req, res);
});

module.exports = router;