const { Donate, request } = require("../models/index");
const sequelize = require("sequelize");
class DonateRepository {
    async create(data) {
        try {
            const donate = await Donate.create(data);
            return donate;
        } catch (error) {
            console.log("Something went wrong in repository level");
            throw { error };
        }
    }

    async get(id) {
        try {
            const response = await Donate.findAll({
                where: {
                    userId: {
                        [sequelize.Op.not]: id
                    }
                }
            });

            return response;
        } catch (error) {
            console.log("Something went wrong in repository level");
            throw { error };
        }
    }

    async getById(id) {
        try {
            const response = await Donate.findByPk(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in repository level");
            throw { error };
        }
    }

    async deleteById(id) {
        try {
            await request.destroy({
                where: {
                    food_id: id
                }
            });

            await Donate.destroy({
                where: {
                    id: id
                }
            });

            return true;
        } catch (error) {
            console.log("Something went wrong in deleting level");
            throw { error };
        }
    }
}

module.exports = DonateRepository;
