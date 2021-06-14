const express = require('express')
const path = require('path')
const api = require('./routes/api')
const app = express();
const cors = require('cors')

const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('working')
})

app.use('/api', api)


app.listen(PORT, () => {
    console.log(`App listening to port ${PORT}`)
})


