if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

// passport-postgres authentication tutorial followed from https://github.com/ad3m3r5/passport-postgres-authentication

const express = require('express')
const session = require('express-session') // maintain session across pages
const passport = require('passport') // for logging in
const flash = require('connect-flash') // for error messages to user (such as 'invalid password and such')
const bodyParser = require('body-parser') // to read in form inputs

const app = express()
const PORT = process.env.PORT || 3000;

const routes = require('./config/routes') // read in our routes as defined in routes.js

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())

app.use(function(req, res, next){
    res.locals.message = req.flash('message');
    next();
});

app.use(routes)
require('./config/passport')(passport)

app.listen(PORT, () => {
    console.log(`HTB server started on port ${PORT} http://localhost:${PORT}/`)
})