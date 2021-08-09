const express = require('express')
const app = express()
const db = require('./queries')
const port = 3000

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
)

// GET Request to root URL (/)
app.get('/', (req, res) => {
  res.json({Welcome: 'How to create API with Node.js,EXPRESS and PostgreSQL' })
})

// Endpoints
app.get('/countries', db.getCountries)
app.get('/countries/:id', db.getCountryById)
app.post('/countries', db.createCountry)
app.put('/countries/:id', db.updateCountry)
app.delete('/countries/:id', db.deleteCountry)


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
