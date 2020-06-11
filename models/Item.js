module.exports = (sequelize, DataType) => {
  const Item = sequelize.define(
    "Item",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER,
      },
      nome: {
        type: DataType.STRING,
        allowNull: false,
      },
      descricao: {
        type: DataType.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataType.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataType.DATE,
      },
    },
    {
      tableName: "itens",
    }
  );

  Item.associate = (models) => {
    Item.belongsToMany(models.Doacao, {
      foreignKey: "idItem",
      as: "doacoes",
      through: models.ItensDoacao,
    });
  };

  return Item;
};
