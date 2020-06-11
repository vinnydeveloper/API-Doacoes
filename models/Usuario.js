module.exports = (sequelize, DataType) => {
  const Usuario = sequelize.define(
    "Usuario",
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: DataType.STRING,
        allowNull: false,
      },
      email: {
        type: DataType.STRING,
        allowNull: false,
        unique: true,
      },
      telefone: {
        type: DataType.STRING,
        allowNull: false,
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
      tableName: "usuarios",
    }
  );

  return Usuario;
};
