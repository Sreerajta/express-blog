import sqlite3 from 'sqlite3';

class userService{
    private db:sqlite3.Database
    constructor(dbConnection:sqlite3.Database){
        this.db = dbConnection
    }
    public createOneUser(name: string, email: string){
        const result = this.db.run('INSERT INTO users (name, email) VALUES (?, ?)', [name, email])
        return result
    }
    public  getAllUsers(){
        const result = this.db.all('SELECT * FROM users');
        return result
    }

}

export default userService