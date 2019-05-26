var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/:username', function(req, res) {
  axios.get('https://api.github.com/users/' + req.params.username + '/starred')
  .then(function (response) {
    res.status(200).send(response.data)
  })
  .catch(function (error) {
    res.status(500).send(error)
  })
});

module.exports = router;
