var Userdb = require('../model/model');
const { use } = require('../routes/router');

//create and save new user
exports.create = (req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message : "content cannot be empty!"});
        return;
    }

    //new user
    const user = new Userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })

    //save user in the database
    user
        .save(user)
        .then(data =>{
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "some errors occured while creating the create operation"
            });
        });

}

//retrieve and return all users/ retrieve and return a single user
exports.find = (req,res)=>{

}

//update a new identified user by user id
exports.update = (req, res)=>{

}

//Delete a user with specific user id in the request
exports.delete = (req,res)=>{

}