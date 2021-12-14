const express = require('express')
const app = express()
const path = require('path')
const exhbs = require('express-handlebars')

const hbs = exhbs.create({
    defaultLayout: 'main.hbs',
    extname: 'hbs',
})

app.use(express.static(path.join(__dirname, 'public')))

app.engine('hbs', hbs.engine)
app.set('views engine', 'hbs')
app.set('views', 'views')

app.get('/', (req, res) => {
    res.render('index.hbs', {
        title: 'Romsem | rasmiy sahifa',
        isTrue: true
    })

})

app.get('/set', (req, res) => {
    res.render('set.hbs', {
        title: 'Romsem / Сеты'
    })
})
app.get('/pizza', (req, res) => {
    res.render('pizza.hbs', {
        title: 'Romsem / Сеты / pizza'
    })
})
app.get('/otzev', (req, res) => {
    res.render('otzev.hbs', {
        title: 'Romsem / Отзывы'
    })
})



const port = 3000
app.listen(port, () => {
    console.log(`Express working on 3000 port....`);
})