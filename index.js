express = require("express")
app = express()

port = 3000

app.get('/getList',(req,res) => {
    arr = ["phones","tvs"]  
    res.send(arr)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})


  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

//comment
//comment
//comments
//d