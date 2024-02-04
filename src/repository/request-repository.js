const { request, User, Donate } = require("../models/index");

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
                include: [
                    {
                        model: User,
                        where: {
                            id: id
                        }
                    },
                    {
                        model: Donate
                    }
                ]
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = RequestRepository;
