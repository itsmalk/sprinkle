const elastic = require('../lib/elastic')

function submitDish(req, res) {
  elastic.addDish(req.body.dish)
    .then(() => {
      res.send({
        success: true
      })
    })
    .catch(() => {
      res.send({
        success: false
      })
    })
}

module.exports = submitDish
