"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Donate extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Donate.init(
        {
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            foodName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false
            },
            servings: {
                type: DataTypes.STRING,
                allowNull: false
            },
            pickupDate: {
                type: DataTypes.DATE,
                allowNull: false
            },
            contactPersonName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            phoneNumber: {
                type: DataTypes.STRING,
                allowNull: false
            },
            address: {
                type: DataTypes.STRING,
                allowNull: false
            },
            expiry: {
                type: DataTypes.STRING,
                allowNull: false
            },
            type: {
                type: DataTypes.STRING,
                allowNull: false
            },
            photo: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            sequelize,
            modelName: "Donate"
        }
    );
    return Donate;
};
