const express = require("express");
const router = express.Router();
const noticiaController = require("../../controller/admin/noticiaController");
const upload = require("../../config/upload");

router.get("/noticia/lst", noticiaController.lst);
router.post("/noticia/lst", noticiaController.filtro);

router.get("/noticia/add", noticiaController.abreadd);
router.post(
  "/noticia/add",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  noticiaController.add
);

router.get("/noticia/edt/:id", noticiaController.abreedt);
router.post(
  "/noticia/edt/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  noticiaController.edt
);

router.get("/noticia/del/:id", noticiaController.del);

module.exports = router;
