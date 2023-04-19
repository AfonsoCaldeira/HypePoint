const pool = require("../config/database");

function  userdataFromDB (dbObj) {
    return new userdata(dbObj.user_id, dbObj.name, dbObj.surname, dbObj.email, dbObj.birthdate, dbObj.gender);
}

class userdata{
    constructor(id, name, surname, email, birthdate, gender){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.birthdate = birthdate;
        this.gender = gender;
    }

    static async getAll() {
        try{
            let result = [];
            let[dbUserdata,fields] = await pool.query ("Select * from userdata");
            for (let dbUser of dbUserdata){
                result.push(userdataFromDB(dbUser));
            }
            return {status: 200, result: result};
        } catch(err){
            console.log(err);
            return {status: 500, result: err};
        }
    }
}
module.exports = userdata;