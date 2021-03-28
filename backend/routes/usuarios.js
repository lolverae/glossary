const router = require('express').Router();
let Usuario = require('../models/usuarios.model');

router.route('/').get((req, res) => {
    Usuario.find()
      .then(usuarios => res.json(usuarios))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/add').post((req, res) => {
    const username = req.body.username;
  
    const nuevoUsuario = new Usuario({username});
  
    nuevoUsuario.save()
      .then(() => res.json('User added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  module.exports = router;