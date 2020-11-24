const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {

//console.log(req.cookies);
//res.send(req.headers.cookie.split('auth=')[1])

//res.send(res.cookies)

try {
  var token = req.headers.cookie.split('auth=')[1];
} catch (error) {
  res.status(401).send("erreur")
}
    
   
    if(token == null || typeof token == 'undefined'){
      
      return res.status(401).send("erreur");
    } 
    jwt.verify(token,"secret",(err, schtrompf) => {
      if(err) {
        res.status(403);
        return res.status(401).send("erreur");
      }
      next();
    })
  }