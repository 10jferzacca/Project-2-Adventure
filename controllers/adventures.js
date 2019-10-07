const express = require('express');
const router = express.Router();

const Adventure = require("../models/adventure");

router.delete('/:id', (req, res) => {
    Adventure.findOneAndRemove({ _id: req.params.id}).then(() => { 
      res.redirect("/adventures");
      });
    });

router.post('/', (req, res) => {
    Adventure.create(req.body)
    .then(adventure => {
        res.redirect('/adventures')
      });
  });

  router.put('/:id', (req, res) => {
    Adventure.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
      .then(adventure => {
        res.redirect('/')
      });
  });

  router.get("/", (req, res) => {
    Adventure.find({})
    .then(adventures => {
        res.render('home', {adventures});
    })
    .catch(err => console.error(err));
});

router.get("/adventures", (req, res) => {
    Adventure.find({})
    .then(adventures => {
        res.render('index', {adventures});
    })
    .catch(err => console.error(err));
});

router.get('/edit/:id', (req, res) => {
    Adventure.findOne({_id: req.params.id}).then(adventure => {
      res.render("edit", {adventure});
    });
  });

router.get('/new', (req, res) => {
    res.render('new')
  });

router.get("/:id", (req, res) => {
    Adventure.findOne({ _id: req.params.id })
    .then(adventure => {
        res.render('show', adventure)
    })
    .catch(err => console.error(err));
  });

module.exports = router;