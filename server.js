const express = require('express')
const dotenv = require('dotenv')

dotenv.config()
const host = process.env.HOST
const port = process.env.PORT

const routes = require('./routes')
const app = express()

//const default_login_name = process.env.LOGIN_NAME
//const default_passsword = process.env.PASSWORD


//const app = express()

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }))

//routes.js を使う
app.use(routes)

app.listen(port, host, () => {
    console.log('http://' + host + ':' + port)
})

//app.post('/auth',(req,res) => {
//    let message = 'ログインできません'
//    const login_name = req.body.login_name
//    const password = req.body.password
//    console.log(login_name)
//    console.log(password)
//
//    if (login_name == default_login_name
//        && password == default_password){
//            message='ログインしました。'
//   }
//    res.send(message)
//})

//app.get('/',(req,res) => {
//    res.send('Hello YSE!!!')
//})

//app.get('/profile',(req,res) => {
//    res.send('Max!!!')
//})

//app.get('/apdate',(req,res) => {
//    res.send('XXXXXX!')
//})

//app.listen(port,host,() => {
//    console.log('http://' + host + ':' + port)
//})

