const RequestService = require("../services/request-service");
const requestService = new RequestService();

const create = async (req, res) => {
    try {
        const response = await requestService.create(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully request to the user",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: "Failed to request"
        });
    }
};

const getAll = async (req, res) => {
    try {
        const response = await requestService.getAll(req.query.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully request to the user",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: "Failed to request"
        });
    }
};

module.exports = {
    create,
    getAll
};
