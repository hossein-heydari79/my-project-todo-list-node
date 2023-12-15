import { IUserCreate } from './types/user';
import express, { Request, Response } from 'express'
import connectionDataBase from './modules/connectionDataBase'
import passport from 'passport';
import bodyParser from 'body-parser';

const app = express();
app.use(passport.initialize());
app.use(bodyParser.json());
const port = 3000;



app.post('/user/create', (req: Request<{}, {}, IUserCreate>, res: Response) => {
    const { uimage, uname } = req.body;

    const sql = `INSERT INTO user(uname, uimage) VALUES (?, ?)`;
    connectionDataBase.query(sql, [uname, uimage], (err) => {
        if (err) res.send(err);
        else res.send("success!")
    });
})


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
