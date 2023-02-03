const { Op } = require("sequelize");
const models = require("../../database/models");
const Noticia = models.Noticia;

async function lst(req, res) {
  const noticias = await Noticia.findAll();
  res.render("admin/noticia/lst", { Noticias: noticias });
}
async function filtro(req, res) {
  const noticias = await Noticia.findAll({
    where: {
      titulo: {
        [Op.iLike]: "%" + req.body.pesquisar + "%",
      },
    },
  });
  res.render("admin/noticia/lst", { Noticias: noticias });
}

async function abreadd(req, res) {
  const eventos = await models.Evento.findAll({});
  res.render("admin/noticia/add", { Eventos: eventos });
}
async function add(req, res) {
  const noticia = await Noticia.create({
    titulo: req.body.titulo,
    noticia: req.body.noticia,
    data: req.body.data,
    eventoId: req.body.eventoId,
    foto: req.files.foto[0].filename,
  });
  res.redirect("/admin/noticia/lst");
}

async function abreedt(req, res) {
  const eventos = await models.Evento.findAll({});
  const noticia = await Noticia.findByPk(req.params.id);
  res.render("admin/noticia/edt", { Noticia: noticia, Eventos: eventos });
}
async function edt(req, res) {
  const noticia = await Noticia.findByPk(req.params.id);
  await noticia.update({
    titulo: req.body.titulo,
    noticia: req.body.noticia,
    foto: req.files["foto"].filename,
    data: req.body.data,
    eventoId: req.body.eventoId,
  });
  res.redirect("/admin/noticia/lst");
}

async function del(req, res) {
  const noticia = await Noticia.findByPk(req.params.id);
  await noticia.destroy();
  res.redirect("/admin/noticia/lst");
}

module.exports = { lst, filtro, abreadd, add, abreedt, edt, del };
