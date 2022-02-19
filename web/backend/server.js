const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const ApiRouter =require('./routes/api')

app.use(express.json())

app.use('/api', ApiRouter)


// app.get('/', (req, res) => {
//     res.send('Index')
// })




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})