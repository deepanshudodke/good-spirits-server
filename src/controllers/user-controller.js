const UserService = require("../services/user-service");
const userService = new UserService();

const create = async (req, res) => {
    try {
        const response = await userService.create(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully created the user",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to create the user",
            err: error
        });
    }
};

const signIn = async (req, res) => {
    try {
        const response = await userService.signIn(
            req.body.email,
            req.body.password
        );
        return res.status(200).json({
            data: response,
            message: "Successfully signed in the user",
            success: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Something went wrong",
            success: false,
            err: error
        });
    }
};

const isAuthenticated = async (req, res) => {
    try {
        //console.log(req.headers);
        const token = req.headers["auth-token"];

        const response = await userService.isAuthenticated(token);
        return res.status(200).json({
            data: response,
            message: "user is authenticated and token is valid",
            success: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Something went wrong in authentication",
            success: false,
            err: error
        });
    }
};

const getById = async (req, res) => {
    try {
        const response = await userService.getById(req.query.id);
        return res.status(200).json({
            data: response,
            message: "Successfully Fetched in the user",
            success: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Something went wrong",
            success: false,
            err: error
        });
    }
};

module.exports = {
    create,
    signIn,
    isAuthenticated,
    getById
};
