"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mortal_Kombat_json_1 = __importDefault(require("./Stactic-assests/Mortal-Kombat.json"));
function get_Characters(Req, Res, next) {
    try {
        Res.status(200).json(Mortal_Kombat_json_1.default);
        next();
    }
    catch (e) {
        console.log(e);
    }
}
exports.default = get_Characters;
//# sourceMappingURL=middleware.js.map