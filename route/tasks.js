var express = require('express');
var router = express.Router();
var data={question:'Aimez-vous Angular ?',response:[' Bon choix !',' Zut !']}
router.get('/tasks', function(req, res, next){
   res.json(data);
});
module.exports = router;