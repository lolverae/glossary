const router = require('express').Router();
let Palabra = require('../models/glosario.model');

router.route('/').get((req, res) => {
  Palabra.find()
    .then(palabras => res.json(palabras))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const palabraADefinir = req.body.palabraADefinir;
  const significado = Number(req.body.significado);

  const nuevaPalabra = new Palabra({
    username,
    palabraADefinir,
    significado,
  });

  nuevaPalabra.save()
  .then(() => res.json('Palabra added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Palabra.findById(req.params.id)
    .then(palabra => res.json(palabra))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
  Palabra.findByIdAndDelete(req.params.id)
    .then(() => res.json('Palabra deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Palabra.findById(req.params.id)
    .then(palabra => {
      palabra.username = req.body.username;
      palabra.palabraADefinir = req.body.palabraADefinir;
      palabra.significado = Number(req.body.significado);

      palabra.save()
        .then(() => res.json('Palabra updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;