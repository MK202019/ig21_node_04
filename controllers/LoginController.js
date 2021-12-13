const default_login_name = process.env.LOGIN_NAME


exports.index = (req, res) => {
    res.render('login/index.ejs')
}

exports.auth = (req, res) => {
    let message = 'ログインできませんでした。'
    const login_name = req.body.login_name
    const password = req.body.password

    if(login_name == default_login_name
        && password == default_password){
            message = 'ログインしました。'
    }
    res.send(message)

}