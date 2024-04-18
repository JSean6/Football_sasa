const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.render('index', { paypalClientId:
    'Af_mJOvb8GJB7rsvqvDo1PNhP5ejS07K75qKVf0y4fTd7HYE5V7c3nBIGjNRHPY2HQVZPAhQknOyXlov'})
    })

app.listen(3000)
  