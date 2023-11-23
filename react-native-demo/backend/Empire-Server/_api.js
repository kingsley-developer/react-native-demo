"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const middleware_1 = __importDefault(require("./middleware"));
const moment_1 = __importDefault(require("moment"));
function Server() {
    (0, dotenv_1.config)();
    const app = (0, express_1.default)();
    let port_string = process.env.Port_Number;
    const PORT = Number(port_string);
    const date = (0, moment_1.default)().calendar();
    app.use((0, cors_1.default)());
    app.use("/characters", middleware_1.default);
    app.get("/characters", (Req, Res) => {
    });
    app.all("*", (Req, Res) => {
        Res.status(404).json({ date, msg: "Page Not Found" });
    });
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}
exports.default = Server;
//# sourceMappingURL=_api.js.map