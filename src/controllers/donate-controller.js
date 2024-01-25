const { response } = require("express");
const DonateService = require("../services/donate-service");
const donateService = new DonateService();

const donate = async (req, res) => {
    try {
        let foodData = req;
        console.log(foodData.body.data);
        foodData = JSON.parse(foodData.body.data);

        let foodItem = foodData.foodName;
        foodItem = foodItem.toString();
        foodData.foodName = foodItem;

        let photoPath = [];
        req.files.forEach((object) => {
            photoPath.push(object.filename);
        });

        photoPath = photoPath.toString();
        foodData.photo = photoPath;

        const response = donateService.create(foodData);

        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully Donated",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to Donate",
            err: error
        });
    }
};

const getAll = async (req, res) => {
    try {
        const response = await donateService.getAllDonations();

        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully Donated",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to Donate",
            err: error
        });
    }
};

const get = async (req, res) => {
    try {
        const response = await donateService.getSingleDonation(req.query.id);

        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully fethced",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to fetch",
            err: error
        });
    }
};
module.exports = {
    donate,
    getAll,
    get
};
