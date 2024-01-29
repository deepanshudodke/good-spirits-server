const RequestRepository = require("../repository/request-repository");

class RequestService {
    constructor() {
        this.requestRepository = new RequestRepository();
    }

    async create(data) {
        try {
            const request = this.requestRepository.create(data);
            return request;
        } catch (error) {
            console.log("Something went wrong in Request Service");
            throw { error };
        }
    }

    async getAll(id) {
        try {
            const response = await this.requestRepository.getAll(id);
            // c/onsole.log(response);
            return response;
        } catch (error) {
            console.log("Something went wrong in Request Service");
            throw { error };
        }
    }
}

module.exports = RequestService;
