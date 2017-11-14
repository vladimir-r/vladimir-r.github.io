var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test/:id', function(req, res, next) {
  res.render('test', {output: req.params.id});
});

/*router.post('/test/submit', function(req, res, next) {
  res.redirect('/test/...');
});

/*router.post('/submit',function (req, res,next) {
    var a = req.body;
    console.log(a);
    res.send(a)
	});
	*/
module.exports = router;
