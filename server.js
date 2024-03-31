const express = require('express')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/Claires-site', (req, res)=>{
    res.render('home.ejs')
})

app.get('/Claires-site/nyu-live', (req, res)=>{
    res.render("nyu-live.ejs")
})

app.get('/Claires-site/purradise', (req, res)=>{
    res.render("purradise.ejs")
})

app.get('/Claires-site/see-your-heart-rate', (req, res)=>{
    res.render("pcom.ejs")
})

app.get('/Claires-site/hey-wake-up', (req, res)=>{
    res.render("animation.ejs")
})

app.get('/Claires-site/cat-office', (req, res)=>{
    res.render("cat-office.ejs")
})

app.get('/Claires-site/god-simulator', (req, res)=>{
    res.render("god.ejs")
})

app.listen(1111, ()=> {
    console.log('server starts')
})

