const { request } = require("../models/index");

class RequestRepository {
    async create(data) {
        try {
            console.log(request);
            const response = await request.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in Request repo");
            console.log(error);
            throw { error };
        }
    }

    async getAll(id) {
        try {
            const response = await request.findAll({
                where: {
                    donor_id: id
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = RequestRepository;
