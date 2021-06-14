const express = require('express')
const mongoose = require('mongoose')
const ContactForm = require('../Models/Models')


mongoose.connect('mongodb://localhost:27017/portfolio', {
    useUnifiedTopology: true, 
    useNewUrlParser: true,
    useFindAndModify: true
})

const db = mongoose.connection;

db.on('open', _ => {
    console.log('mongo connected')
})

db.on('error', err => {
    console.error('connection error:', err)
  })

const apiGetRouterHandler = async(req, res) => {
    try{
        const deleteEntries = await ContactForm.deleteMany({})
        console.log(deleteEntries)
        res.send('working')
    } catch(err){
        console.log('Error:', err.message)

        res.status(500)
    }
    
}

const apiPostRouterHandler = async(req, res) => {
    try{
        const data = req.body

        const db = await new ContactForm(data)

        await db.save()
        
        res.status(201).send('success')
    }
    catch (err) {
        console.log('Error:', err.message)

        res.status(500)
    }
}


module.exports = {
    getHandler : apiGetRouterHandler,
    postHandler : apiPostRouterHandler
}