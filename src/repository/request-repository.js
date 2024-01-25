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
}

module.exports = RequestRepository;
