const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const cors=require('cors')



app.use(express.json())
app.use(cors())

const ApiRouter =require('./routes/api')
app.use('/api', ApiRouter)


app.get('/', (req, res) => {
    res.send('Index')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})