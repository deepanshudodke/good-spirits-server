"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("requests", {
            food_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                references: { model: "donates", key: "id" }
            },
            donor_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            acceptor_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                references: { model: "users", key: "id" }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("requests");
    }
};
