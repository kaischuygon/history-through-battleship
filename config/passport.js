const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid');
const client = require('./database')

var LocalStrategy = require('passport-local').Strategy

module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user);
    });
    passport.deserializeUser(function (user, done) {
        done(null, user);
    });

    passport.use('login', new LocalStrategy({
        passReqToCallback: true
    },
        function (req, username, password, done) {
            loginUser()
            async function loginUser() {
                await client.query('BEGIN')
                try {
                    const loginQuery = await client.query(`SELECT id, username, password FROM users WHERE username='${username.toLowerCase()}';`)
                    if (loginQuery.rows[0] == null) {
                        return done(null, false, req.flash('message', 'Incorrect username or password'))
                    } else {
                        try {
                            const valid = await bcrypt.compare(password, loginQuery.rows[0].password)
                            if (valid) {
                                console.log(`User [${req.body.username}] has logged in.`)
                                return done(null, { username: loginQuery.rows[0].username, id: loginQuery.rows[0].id })
                            } else {
                                return done(null, false, req.flash('message', 'Incorrect username or password'))
                            }
                        } catch (err) {
                            console.log('Error on password validation')
                            return done(err)
                        }
                    }
                } catch (err) {
                    console.log(err)
                    return done(err)
                }
            }
        }))

    passport.use('register', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    }, function (req, username, password, done) {
        registerUser()
        async function registerUser() {
            await client.query('BEGIN')
            let passHash = await bcrypt.hash(password, 8)
            try {
                const result = await client.query(`SELECT id FROM users WHERE username='${username}';`)
                if (!testPass(password)) {
                    return done(null, false, req.flash('message', 'Password must be between 8-64 characters'))
                } else {
                    if (result.rows[0]) {
                        return done(null, false, req.flash('message', 'Sorry, this username is already taken.'))
                    } else {
                        const newID = uuidv4()
                        try {
                            await client.query(`INSERT INTO users VALUES ('${newID}', '${req.body.username.toLowerCase()}', '${req.body.email}', '${passHash}'); 
                                                INSERT INTO games VALUES ('${newID}', 0, 0);
                                                INSERT INTO trivia VALUES ('${newID}', 0, 0);`)
                            client.query('COMMIT')
                            console.log(`User [${req.body.username}] has registered.`)
                            return done(null, { username: username, id: newID })
                        } catch (err) {
                            console.log(err)
                        }
                    }
                }
            } catch (err) {
                console.log(err)
                return done(err)
            }
        }
    }))

    passport.use('updatePassword', new LocalStrategy({
        usernameField: 'password',
        passwordField: 'newpass',
        passReqToCallback: true
    },
        function (req, password, newpass, done) {
            let username = (req.user.username).toLowerCase()
            updatePassword()
            async function updatePassword() {
                await client.query('BEGIN')
                let newPassHash = await bcrypt.hash(req.body.newpass, 8)
                try {
                    const result = await client.query(`SELECT id, username, password FROM users WHERE username='${username}'`)
                    if (!testPass(req.body.newpass)) {
                        return done(null, false, req.flash('message', 'Password must be between 8-64 characters'))
                    } else {
                        if (result.rows[0] == null) {
                            return done(null, false, req.flash('message', 'Error on changing password. Please try again'))
                        } else {
                            try {
                                const valid = bcrypt.compare(req.body.password, result.rows[0].password)
                                if (valid) {
                                    await client.query(`UPDATE users SET password='${newPassHash}' WHERE username='${req.user.username}'`)
                                    client.query('COMMIT')
                                    console.log(`User [${req.user.username}] has updated their password.`)
                                    return done(null, { username: req.user.username }, req.flash('message', 'Your password has been updated.'))
                                } else {
                                    req.flash('message', 'Incorrect current password entered')
                                    return done(null, false)
                                }
                            } catch (err) {
                                console.log('Error on current password validation')
                                return done(err)
                            }
                        }
                    }
                } catch (err) {
                    return done(err)
                }
            }
        }))
}

function testPass(input) {
    let format = /.{8,64}$/ // require 8-64 character password
    return format.test(input)
}