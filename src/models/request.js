"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class request extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            request.belongsTo(models.User, {
                foreignKey: "donor_id"
            });

            request.belongsTo(models.Donate, {
                foreignKey: "food_id"
            });
        }
    }
    request.init(
        {
            donor_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            acceptor_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            food_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            }
        },
        {
            sequelize,
            modelName: "request"
        }
    );
    return request;
};
