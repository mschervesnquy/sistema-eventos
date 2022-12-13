const { Op } = require("sequelize");
const models = require("../../database/models");
const Admin = models.Admin;

async function lst(req, res) {
  const admins = await Admin.findAll();
  res.render("admin/admin/lst", { Admins: admins });
}
async function filtro(req, res) {
  const admins = await Admin.findAll({
    where: {
      nome: {
        [Op.iLike]: "%" + req.body.pesquisar + "%",
      },
    },
  });
  res.render("admin/admin/lst", { Admins: admins });
}

async function abreadd(req, res) {
  res.render("admin/admin/add");
}
async function add(req, res) {
  const admin = await Admin.create({
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha,
    foto: req.file.filename,
  });
  res.redirect("/admin/admin/lst");
}

async function abreedt(req, res) {
  const admin = await Admin.findByPk(req.params.id);
  res.render("admin/admin/edt", { Admin: admin });
}
async function edt(req, res) {
  const admin = await Admin.findByPk(req.params.id);
  await admin.update({
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha,
    foto: req.file.filename,
  });
  res.redirect("/admin/admin/lst");
}

async function del(req, res) {
  const admin = await Admin.findByPk(req.params.id);
  await admin.destroy();
  res.redirect("/admin/admin/lst");
}

module.exports = { lst, filtro, abreadd, add, abreedt, edt, del };
