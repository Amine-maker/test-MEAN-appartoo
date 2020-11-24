const db = require("../models");
const jwt = require('jsonwebtoken');
const Schtrompfs = db.schtrompf;

// Create and Save a new Tutorial
exports.create = (req, res) => {
      console.log(req.body)
        // Create a Tutorial
        const schtrompf = new Schtrompfs({
         
          age: req.body.age,
          famille: req.body.famille,
          race: req.body.race,
          nourriture: req.body.nourriture,
          login : req.body.login,
          password : req.body.password
        });
      
        // Save Tutorial in the database
        schtrompf.save()
          .then(data => {
            console.log(data);
          })
          .catch(err => {
            res.status(500).send(err);
          });
};

exports.findAll = (req, res) => {
  Schtrompfs.find({}).then(data =>{
    res.send(data)
  }).catch(err =>{
      console.log(err);
    })
}


exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Schtrompfs.findById(id)
      .then(data => {        
        console.log(data);

        res.send(data);
      })
      .catch(err => {
        res.send(err + " " + id );
      });
  };

exports.update = (req, res) => {

  const _id = req.params.id;
  console.log(req.body)

  Schtrompfs.findOneAndUpdate({_id} , {
    age : req.body.age,
    famille: req.body.famille,
    race: req.body.race,
    nourriture: req.body.nourriture
    }).then((data) => {
      res.status(200).send(data);
      }).catch((err) => console.log(err))
  };

  exports.addSchtrompfOnList = (req, res) => {

    const _id = req.params.id;
    const idAmi = req.body._id;
       
        Schtrompfs.findById(idAmi)
        .then(ami => {
           Schtrompfs.findOneAndUpdate({_id}, { $push: {
             schtrompf: ami._id
           }}).then(data => {
             res.status(200).send(data)
           })
        })
      
  }

  exports.removeFromSchtrompList = (req, res) => {
    const _id = req.params.id;
    const idAmi = req.body._id;
    
    Schtrompfs.findById(idAmi)
    .then(ami => {
       Schtrompfs.findOneAndUpdate({_id}, { $pull: {
         schtrompf: ami._id
       }}).then(data => {
         res.status(200).send(data)
       })
    })

  };

  exports.findFriendList = (req, res) => {
    var friendList = [];
    id = req.params.id;
    var i = 0;

    Schtrompfs.findById(id, 'schtrompf').then(data => {
      if(data.schtrompf.length == 0){
        res.status(200).send(friendList)
      }
      //console.log(data.schtrompf.length);
      data.schtrompf.forEach(friendId => {
        Schtrompfs.findById(friendId).then(schtrompf => {
          i++;
          friendList.push(schtrompf); 
          if(i == data.schtrompf.length){
             res.status(200).send(friendList)
          }   
        })   
      })
      
    }).catch(err =>
      console.log(err));
  }

  exports.login = (req, res) => {

    console.log(req.body);

    Schtrompfs.findOne({ $and : 
      [{ 'login' : req.body.login},
       {'password' : req.body.password }
      ]
    }).then((schtrompf) => {
      if(!schtrompf) { 
        res.status(401).send("Erreur de mot de passe ou login")
      } else {
        console.log(schtrompf)
        const token = jwt.sign(
          { schtrompfId: schtrompf.id },
          "secret",
          { expiresIn: '24h' });

          res.cookie('auth', token);
          res.status(200).redirect(`/api/schtrompf/${schtrompf.id}`)
      }
        
      }
    )
  };

  exports.logout = (req,res) => {

    res.status(200).redirect(`/api/schtrompf/login`)
    
  }

