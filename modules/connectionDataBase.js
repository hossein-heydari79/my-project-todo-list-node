"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const connection = mysql_1.default.createConnection({
    host: 'alfie.iran.liara.ir',
    user: 'root',
    database: 'todoList',
    password: 'ZukKXTpY3tLhd5KcAsl4qtw0',
    port: 34563
});
connection.connect((err) => {
    if (err) {
        console.log('error to connection!');
    }
    else
        console.log('success to connection!');
});
exports.default = connection;
