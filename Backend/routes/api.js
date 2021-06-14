const express = require('express');
const router = express.Router();
const {getHandler, postHandler} = require('../collections/api')


router.use((req, res, next) => {
    console.log('connection to the api')
    next()
})

router.route('/')
    .get(getHandler)
    .post(postHandler)


module.exports = router