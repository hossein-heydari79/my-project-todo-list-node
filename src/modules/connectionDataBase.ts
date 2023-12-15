import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'alfie.iran.liara.ir',
    user: 'root',
    database: 'todoList',
    password: 'ZukKXTpY3tLhd5KcAsl4qtw0',
    port: 34563
});

connection.connect((err: any) => {
    if (err) {
        console.log('error to connection!');
    }
    else console.log('success to connection!');
});

export default connection