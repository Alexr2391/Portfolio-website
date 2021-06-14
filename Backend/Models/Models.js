const mongoose = require('mongoose')

const contactFormsSchema = new mongoose.Schema({
    fullName: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    subject: {
        type: String, 
        required: true
    },
    message: {
        type: String, 
        required: true
    }
})

const contactform = mongoose.model('Contactform', contactFormsSchema)

module.exports = Contact = contactform