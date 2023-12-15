"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connectionDataBase_1 = __importDefault(require("./modules/connectionDataBase"));
const passport_1 = __importDefault(require("passport"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(passport_1.default.initialize());
app.use(body_parser_1.default.json());
const port = 3000;
app.post('/user/create', (req, res) => {
    const { uimage, uname } = req.body;
    const sql = `INSERT INTO user(uname, uimage) VALUES (?, ?)`;
    connectionDataBase_1.default.query(sql, [uname, uimage], (err) => {
        if (err)
            res.send(err);
        else
            res.send("success!");
    });
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
