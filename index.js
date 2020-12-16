const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://dongjoonlee:ehdwns82@boiler-plate.xf4bs.mongodb.net/test', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify:false
}).then(() => console.log(',Mongodb connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! Oh yeah')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})