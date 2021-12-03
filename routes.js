const express = require('express')
const router = express.Router()

const default_login_name = process.env.LOGIN_NAME
const default_passsword = process.env.PASSWORD

router.post('/auth', (req, res) => {
    let message = 'ログインできません';
    const login_name = req.body.login_name
    const password = req.body.password
    console.log(login_name)
    console.log(password)
    
    if (login_name == default_login_name 
        && password == default_passsword) {
        message = 'ログインしました';
    }
    res.send(message);
})

router.get('/',(req,res) => {
    res.send('Hello YSE!!!')
})

router.get('/profile',(req,res) => {
    res.send('This is prfile page')
})

//router.get('/apdate',(req,res) => {
//    res.send('XXXXXX!')
//})

//router.listen(port,host,() => {
//    console.log('http://' + host + ':' + port)
//})

module.exports = router


