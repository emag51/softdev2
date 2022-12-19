const express = require('express')
const app = express()

// app.get('/', (req, res) => {
//     res.send('สวัสดีวันนี้วันพุธ')
// })

// app.get('/home', function(req, res){
//     res.sendFile(__dirname + '/home.html')
// })

// app.get('/about', function(req, res){
//     res.sendFile(__dirname + '/about.html')
// })

// app.get('/product', function(req, res){
//     res.sendFile(__dirname + '/product.html')
// })

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/error.html')
})
app.listen(3000, () => {
    console.log("Start Server at port [3000")
})