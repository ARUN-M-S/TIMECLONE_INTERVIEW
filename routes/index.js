var express = require('express');
var router = express.Router();
const fetch = require("node-fetch")
const stories= require("./stories")
const news = require("./news")
// import fetch from 'node-fetch';


/* GET home page. */
router.get('/', async function(req, res, next) {
  console.log(stories,"story");

  res.render('index', {stories,news });
});

module.exports = router;
