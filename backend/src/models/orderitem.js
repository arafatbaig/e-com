import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class OrderItem extends Model {
    static associate(models) {
      OrderItem.belongsTo(models.Order, { foreignKey: 'orderId' });
      OrderItem.belongsTo(models.Product, { foreignKey: 'productId' });
    }
  }

  OrderItem.init(
    {
      orderId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'OrderItem',
      tableName: 'OrderItems',
      timestamps: true,
    }
  );

  return OrderItem;
};