const express = require("express");
const router = express.Router();
const noticiaController = require("../../controller/admin/noticiaController");

router.get("/noticia/lst", noticiaController.lst);
router.post("/noticia/lst", noticiaController.filtro);

router.get("/noticia/add", noticiaController.abreadd);
router.post("/noticia/add", noticiaController.add);

router.get("/noticia/edt", noticiaController.abreedt);
router.post("/noticia/edt", noticiaController.edt);

router.get("/noticia/del", noticiaController.del);

module.exports = router;
