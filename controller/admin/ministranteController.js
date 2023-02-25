const { Op } = require("sequelize");
const models = require("../../database/models");
const Ministrante = models.Ministrante;

async function lst(req, res) {
  const ministrantes = await Ministrante.findAll();
  res.render("admin/ministrante/lst", { Ministrantes: ministrantes });
}
async function filtro(req, res) {
  const ministrantes = await Ministrantes.findAll({
    where: {
      nome: {
        [Op.iLike]: "%" + req.body.pesquisar + "%",
      },
    },
  });
  res.render("admin/ministrante/lst", { Ministrantes: ministrantes });
}

async function abreadd(req, res) {
  res.render("admin/ministrante/add");
}
async function add(req, res) {
  const ministrante = await Ministrante.create({
    nome: req.body.nome,
    sobre: req.body.sobre,
    email: req.body.email,
    facebook: req.body.facebook,
    instagram: req.body.instagram,
    linkedin: req.body.linkedin,
    twitter: req.body.twitter,
    lattes: req.body.lattes,
    foto: req.files.foto[0].filename,
  });
  console.log(ministrante);
  res.redirect("/admin/ministrante/lst");
}

async function abreedt(req, res) {
  const ministrante = await Ministrante.findByPk(req.params.id);
  res.render("admin/ministrante/edt", { Ministrante: ministrante });
}
async function edt(req, res) {
  const ministrante = await Ministrante.findByPk(req.params.id);
  await ministrante.update({
    nome: req.body.nome,
    sobre: req.body.sobre,
    email: req.body.email,
    facebook: req.body.facebook,
    instagram: req.body.instagram,
    linkedin: req.body.linkedin,
    twitter: req.body.twitter,
    lattes: req.body.lattes,
    foto: req.files["foto"].filename,
  });
  res.redirect("/admin/ministrante/lst");
}

async function del(req, res) {
  const ministrante = await Ministrante.findByPk(req.params.id);
  await ministrante.destroy();
  res.redirect("/admin/ministrante/lst");
}

module.exports = { lst, filtro, abreadd, add, abreedt, edt, del };
