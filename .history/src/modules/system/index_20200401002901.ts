import { Response, NextFunction, Request } from 'express';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.send('Minimal module...');
});

module.exports = router;
