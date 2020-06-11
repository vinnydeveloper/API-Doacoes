const { Usuario } = require("../models");

const usuarioController = {
  create: async (req, res) => {
    const { nome, email, telefone } = req.body;

    try {
      const usuario = await Usuario.create({ nome, email, telefone });
      return res.status(201).json(usuario);
    } catch (e) {
      console.log(e);

      return res.status(400).json({
        error: true,
        msg: "Não foi possivel criar um usuario!",
      });
    }
  },
};

module.exports = usuarioController;
