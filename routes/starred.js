var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET starred listing. */
router.get('/:user', function(req, res, next) {
  axios.get('https://api.github.com/users/' + req.params.user + '/starred')
  .then(function (response) {
    res.status(200).send(response.data)
  })
  .catch(function (error) {
    res.status(500).send(error)
  })
});

module.exports = router;
