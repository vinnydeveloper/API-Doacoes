const { Usuario } = require("../models");
const loginController = {
  create: async (req, res) => {
    const { email } = req.body;
    try {
      const usuario = await Usuario.findOne({
        where: {
          email,
        },
      });

      if (!usuario) {
        return res
          .status(404)
          .json({ error: false, msg: "Usuario não encontrado!" });
      }

      return res.status(200).json(usuario);
    } catch (e) {
      console.log(e);

      return res.status(400).json({
        error: true,
        msg: "Não foi possivel encontrar um usuario!",
      });
    }
  },
};

module.exports = loginController;
