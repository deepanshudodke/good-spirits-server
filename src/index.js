const express = require("express");
const multer = require("multer");
const server = express();
const UserController = require("../src/controllers/user-controller");
const DonateController = require("./controllers/donate-controller");
const RequestController = require("./controllers/request-controller");
var cors = require("cors");
const { Donate } = require("../src/models/index");

const imageConfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./src/uploads");
    },

    filename: (req, file, callback) => {
        callback(null, `image-${Date.now()}.${file.originalname}`);
    }
});

let upload = multer({
    storage: imageConfig
});

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/uploads", express.static(__dirname + "/uploads"));
server.post("/register", UserController.create);
server.post("/login", UserController.signIn);
server.get("/isAuthenticated", UserController.isAuthenticated);
server.post("/donate", upload.array("photo", 10), DonateController.donate);
server.get("/donates", DonateController.getAll);
server.post("/request", RequestController.create);
server.get("/donate", DonateController.get);
server.get("/requests", RequestController.getAll);

server.listen(1234, async () => {
    console.log("Server has started");
});
