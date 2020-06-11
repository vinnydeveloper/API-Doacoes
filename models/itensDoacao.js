module.exports = (sequelize, DataType) => {
  const ItensDoacao = sequelize.define(
    "ItensDoacao",
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      idDoacao: {
        type: DataType.INTEGER,
        allowNull: false,
      },
      idItem: {
        type: DataType.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "itens_doacoes",
      timestamps: false,
    }
  );

  return ItensDoacao;
};
