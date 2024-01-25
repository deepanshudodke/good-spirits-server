const { Donate } = require("../models/index");

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

    async get() {
        try {
            const response = await Donate.findAll();

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
}

module.exports = DonateRepository;
