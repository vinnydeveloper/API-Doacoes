const { Item, Doacao, Usuario } = require("../models");

const doacaoController = {
  index: async (req, res) => {
    try {
      const doacoes = await Doacao.findAll({
        include: [
          {
            model: Item,
            as: "itensDoacao",
            attributes: ["id", "nome"],
          },
          {
            model: Usuario,
            attributes: ["id", "nome", "email", "telefone"],
          },
        ],
      });
      return res.status(200).json(doacoes);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        error: true,
        msg: "Não foi possivel listar as doações!",
      });
    }
  },
  create: async (req, res) => {
    const { descricao, itens, idDoador } = req.body;

    try {
      const listaItens = await Item.findAll({
        where: {
          id: itens,
        },
      });

      const doacao = await Doacao.create({
        descricao,
        idDoador,
      });

      await doacao.setItensDoacao(listaItens);

      return res.status(201).json(doacao);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        error: true,
        msg: "Não foi possivel criar uma doacao!",
      });
    }
  },

  delete: async (req, res) => {
    const { idDoacao, idUsuarioLogado } = req.body;
    try {
      const doacao = await Doacao.findByPk(idDoacao, {
        include: {
          model: Usuario,
        },
      });

      if (doacao.Usuario.id != idUsuarioLogado) {
        return res.status(400).json({
          error: false,
          msg: "Esse usuario não pode finalizar essa doação",
        });
      }

      return res.sendStatus(204);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        error: true,
        msg: "Não foi possivel deletar uma doacao!",
      });
    }
  },
};

module.exports = doacaoController;
