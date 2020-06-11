const { Item } = require("../models");
const itemController = {
  index: async (req, res) => {
    try {
      const itens = await Item.findAll();
      return res.status(200).json(itens);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        error: true,
        msg: "Não foi possivel listar os itens!",
      });
    }
  },
  create: async (req, res) => {
    const { nome, descricao } = req.body;
    try {
      const item = await Item.create({
        nome,
        descricao,
      });

      return res.status(201).json(item);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        error: true,
        msg: "Não foi possivel criar o item!",
      });
    }
  },
};

module.exports = itemController;
