// require packages
const express = require('express')

// set up express app
const app = express()
const PORT = 8000

// VARIABLES
const air = {
    signs: ['Aquarius', 'Gemini', 'Libra'],
    traits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
}
const water = {
    signs: ['Pisces', 'Cancer', 'Scorpio'],
    traits: ['private', 'mysterious', 'pyshic', 'charming', 'emotional', 'sensitive']
}
const fire = {
    signs: ['Aries', 'Leo', 'Sagittarius'],
    traits: ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
}
const earth = {
    signs: ['Taurus', 'Virgo', 'Capricorn'],
    traits: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
}

// configure app to use ejs
app.set('view engine', 'ejs')

// ROUTES
app.get('/', (req, res) => {
    // res.send('home page')
    res.render('index.ejs')
})

app.get('/water', (req, res) => {
    res.send('water')
})

app.get('/air', (req, res) => {
    res.send('air')
})

app.get('/fire', (req, res) => {
    res.send('fire')
})

app.get('/earth', (req, res) => {
    res.send('earth')
})

// PORT LISTENER
app.listen(PORT, () => {
    console.log('port', PORT)
})