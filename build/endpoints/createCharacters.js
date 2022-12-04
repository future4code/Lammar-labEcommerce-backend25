"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data");
function createCharacters(req, res) {
    const { name, gender, description } = req.body;
    data_1.characters.push({
        id: Date.now(),
        name,
        gender,
        description
    });
    res.status(201).end();
}
exports.default = createCharacters;
//# sourceMappingURL=createCharacters.js.map