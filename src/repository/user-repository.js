const { User } = require("../models/index");

class UserRepository {
    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in repository level");
            throw { error };
        }
    }

    async getByEmail(emailId) {
        try {
            const user = User.findOne({
                where: {
                    email: emailId
                }
            });
            return user;
        } catch (error) {
            console.log("Something went wrong in repository level");
            throw { error };
        }
    }

    async getById(userId) {
        try {
            const user = await User.findByPk(userId);
            return user;
        } catch (error) {
            console.log("Something went wrong in repository level");
            throw { error };
        }
    }
}

module.exports = UserRepository;
