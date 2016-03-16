const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

router.route('/movies')
  .post(function(req, res) {
    const title = req.body.title;
    const year = req.body.year;
    const imdb = req.body.imdb;
    Movie.findOne({ imdb: imdb }).exec()
      .then(function fulfilled(result) {
        if (result) {
          res.status(409).send('User already exists');
        } else {
          const p = Movie.create({
            title: title,
            year: year,
            imdb: imdb
          })
            p.then(function fulfilled() {
              res.status(201).json('User Created');
            });
        }
      })
  })

module.exports = router;