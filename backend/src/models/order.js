import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Order extends Model {
    static associate(models) {
      Order.hasMany(models.OrderItem, { foreignKey: 'orderId' });
    }
  }

  Order.init(
    {
      customerName: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Order',
      tableName: 'Orders',
      timestamps: true,
    }
  );

  return Order;
};
