module.exports = (sequelize, DataTypes) => {
  const Doacao = sequelize.define(
    "Doacao",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      idDoador: {
        type: DataTypes.INTEGER,
      },
      descricao: DataTypes.STRING,
      status: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "doacoes",
    }
  );

  Doacao.associate = (models) => {
    Doacao.belongsTo(models.Usuario, {
      foreignKey: "idDoador",
    });

    Doacao.belongsToMany(models.Item, {
      foreignKey: "idDoacao",
      as: "itensDoacao",
      through: models.ItensDoacao,
    });
  };

  return Doacao;
};
