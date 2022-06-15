const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const index_router = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', './views')

app.use("/", index_router)
app.use(express.static('assets'))

app.get('/', (req, res) => {
    res.render("index")
})

app.listen(PORT, () => {
console.log(`Example app listening on port ${PORT}`)
})