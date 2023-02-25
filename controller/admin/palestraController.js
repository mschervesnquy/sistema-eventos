const { Op } = require("sequelize");
const models = require("../../database/models");
const Palestra = models.Palestra;

async function lst(req, res) {
  const palestras = await Palestra.findAll();
  res.render("admin/palestra/lst", { Palestras: palestras });
}
async function filtro(req, res) {
  const palestras = await Palestra.findAll({
    where: {
      titulo: {
        [Op.iLike]: "%" + req.body.pesquisar + "%",
      },
    },
  });
  res.render("admin/palestra/lst", { Palestras: palestras });
}

async function abreadd(req, res) {
  const eventos = await models.Evento.findAll({});
  const ministrantes = await models.Ministrante.findAll();
  res.render("admin/palestra/add", {
    Eventos: eventos,
    Ministrantes: ministrantes,
  });
}
async function add(req, res) {
  const palestra = await Palestra.create({
    titulo: req.body.titulo,
    resumo: req.body.resumo,
    dataehora: req.body.dataehora,
    eventoId: req.body.eventoId,
  });
  console.log(palestra);

  const arr = [...[req.body.ministranteId]];
  arr.forEach(async function (id) {
    const ministrante = await models.Ministrante.findByPk(id);
    await palestra.addMinistrante(ministrante);
  });

  res.redirect("/admin/palestra/lst");
}

async function abreedt(req, res) {
  const eventos = await models.Evento.findAll({});
  const ministrantes = await models.Ministrante.findAll({});
  const palestra = await Palestra.findByPk(req.params.id);
  res.render("admin/palestra/edt", {
    Palestra: palestra,
    Eventos: eventos,
    Ministrantes: ministrantes,
  });
}
async function edt(req, res) {
  const palestra = await Palestra.findByPk(req.params.id);
  await palestra.update({
    titulo: req.body.titulo,
    sobre: req.body.sobre,
    dataehora: req.body.dataehora,
    eventoId: req.body.eventoId,
  });

  const arr = [...[req.body.ministranteId]];
  await palestra.removeMinistrante(palestra.ministrantes);
  arr.forEach(async function (id) {
    const ministrante = await models.Ministrante.findByPk(id);
    await palestra.addMinistrante(ministrante);
  });

  res.redirect("/admin/palestra/lst");
}

async function del(req, res) {
  const palestra = await Palestra.findByPk(req.params.id);
  await palestra.destroy();
  res.redirect("/admin/palestra/lst");
}

module.exports = { lst, filtro, abreadd, add, abreedt, edt, del };
