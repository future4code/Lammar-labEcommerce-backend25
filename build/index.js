"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const createCharacters_1 = __importDefault(require("./endpoints/createCharacters"));
const getAllCharacters_1 = __importDefault(require("./endpoints/getAllCharacters"));
const deleteCharacters_1 = __importDefault(require("./endpoints/deleteCharacters"));
app_1.default.get("/character", getAllCharacters_1.default);
app_1.default.put("/character", createCharacters_1.default);
app_1.default.delete("/character/:id", deleteCharacters_1.default);
//app.get("/movies")
//app.delete("/movies")
//# sourceMappingURL=index.js.map