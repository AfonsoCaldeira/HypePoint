const express = require('express'); 
      const router = express.Router();
      const userdata = require("../models/userdataModel");

      router.get('/', async function(req, res, next){
        try {
            console.log("Get all users");
            let result = await userdata.getAll();
            res.status(result.status).send(result.result);
        } catch(err){
            console.log(err);
            res.status(500).send(err);
        }
      });

      module.exports = router;