const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const cors=require('cors')
const path=require('path')



app.use(express.json())
// app.use(cors())


const ApiRouter =require('./routes/api')
app.use('/api', ApiRouter)

app.use(express.static(path.join(__dirname, '/frontend')))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/frontend', 'index.html'))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})