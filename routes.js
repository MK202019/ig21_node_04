const express = require('express')
const router = express.Router()

const default_login_name = process.env.LOGIN_NAME
const default_passsword = process.env.PASSWORD

router.get('/login',(req,res) => {
    res.render('login/index.ejs')
})

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
    res.render('index.ejs')
})

router.get('/profile',(req,res) => {
    res.send('This is prfile page')
})

router.get('/profile',(req,res) => {
    res.render('profile/index.ejs')
})

module.exports = router


