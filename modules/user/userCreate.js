"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userCreateHandler = (app, connectionDataBase) => {
    app.post('/user/create', (req, res) => {
        const { uimage, uname } = req.body;
        const sql = `INSERT INTO user(uname, uimage) VALUES (?, ?)`;
        connectionDataBase.query(sql, [uname, uimage], (err, rows, fields) => {
            if (err)
                res.send(err);
            else
                res.send("success!");
        });
    });
};
exports.default = userCreateHandler;
