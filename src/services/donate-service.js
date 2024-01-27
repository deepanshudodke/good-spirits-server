const DonateRepository = require("../repository/donate-repository");
class DonateService {
    constructor() {
        this.donateRepository = new DonateRepository();
    }

    async create(data) {
        try {
            const donate = await this.donateRepository.create(data);
            return donate;
        } catch (error) {
            console.log("Something went wrong in service level");
            console.log(error);
            throw { error };
        }
    }

    async getAllDonations(id) {
        try {
            const response = await this.donateRepository.get(id);

            return response;
        } catch (error) {
            console.log("Something went wrong in service level");
            console.log(error);
            throw { error };
        }
    }

    async getSingleDonation(id) {
        try {
            const response = await this.donateRepository.getById(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in service level");
            console.log(error);
            throw { error };
        }
    }
}

module.exports = DonateService;
