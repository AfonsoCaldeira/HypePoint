const pool = require("../config/database");

function  RegistrationFromDB (dbObj) {
    return new userRegister(dbObj.user_id, dbObj.name, dbObj.surname, dbObj.email, dbObj.birthdate, dbObj.gender);
}

class userRegister{
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
            let[dbUserRegister,fields] = await pool.query ("Select * from Registration");
            for (let DbRegist of dbUserRegister){
                result.push(RegistrationFromDB(DbRegist));
            }
            return {status: 200, result: result};
        } catch(err){
            console.log(err);
            return {status: 500, result: err};
        }
    }
}
module.exports = userRegister;