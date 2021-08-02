const express = require('express')
const app = express()
const port = 3000
const path = require('path')


app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'views')));



app.get('/', (req, res) => {
  res.render('index')
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})