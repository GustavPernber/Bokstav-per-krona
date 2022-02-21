const express = require('express')
const app = express()
const port = process.env.PORT || 8080



app.use(express.json())

const ApiRouter =require('./routes/api')
app.use('/api', ApiRouter)


// app.get('/', (req, res) => {
//     res.send('Index')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})