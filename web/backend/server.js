const express = require('express')
const app = express()
const port = process.env.PORT || 8080
<<<<<<< HEAD
=======
const cors=require('cors')
>>>>>>> 95f0bfd701e947f1e7fcf7f306ebdc6f7735f94b



app.use(express.json())
app.use(cors())

const ApiRouter =require('./routes/api')
app.use('/api', ApiRouter)


// app.get('/', (req, res) => {
//     res.send('Index')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})