const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const cors=require('cors')



app.use(express.json()) 
app.use(cors())

app.use(express.static(path.join(__dirname, '/frontend')))

// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname, '/frontend', 'index.html'))
// })


const ApiRouter =require('./routes/api')
app.use('/api', ApiRouter)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})