const express = require('express')
const router = express.Router()
const passport = require('passport')
const client = require('./database')

router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        res.render('mainmenu.ejs', { name: req.user.username, authenticated: true })
    } else {
        res.redirect('/login')
    }
})

router.get('/battleship', (req, res) => {
    if (req.isAuthenticated()) {
        res.render('battleship.ejs', { name: req.user.username, id: req.user.userid, authenticated: true })
    } else {
        req.flash('message', 'You must be signed in to access that page')
        res.redirect('/login')
    }
})

router.get('/multiplayer', (req, res) => {
    if (req.isAuthenticated()) {
        res.render('multiplayer.ejs', { name: req.user.username, authenticated: true })
    } else {
        req.flash('message', 'You must be signed in to access that page')
        res.redirect('/login')
    }
})

router.get('/endscreen', (req, res) => {
    if (req.isAuthenticated()) {
        res.render('endscreenmult.ejs', { name: req.user.username, authenticated: true })
    } else {
        req.flash('message', 'You must be signed in to access that page')
        res.redirect('/login')
    }
})

router.get('/endscreenmult', (req, res) => {
    if (req.isAuthenticated()) {
        res.render('endscreenmult.ejs', { name: req.user.username, authenticated: true })
    } else {
        req.flash('message', 'You must be signed in to access that page')
        res.redirect('/login')
    }
})

router.get('/settings', (req, res) => {
    if (req.isAuthenticated()) {
        res.render('settingspage.ejs', { name: req.user.username, authenticated: true })
    } else {
        req.flash('message', 'You must be signed in to access that page')
        res.redirect('/login')
    }
})

router.get('/aboutus', (req, res) => {
    if (req.isAuthenticated()) {
        res.render('aboutus.ejs', { name: req.user.username, authenticated: true })
    } else {
        req.flash('message', 'You must be signed in to access that page')
        res.redirect('/login')
    }
})

router.get('/login', (req, res) => {
    if (req.isAuthenticated()) {
        req.flash('message', 'Your are already logged in.')
        res.redirect('/')
    } else {
        res.render('login.ejs', { authenticated: false })
    }
})

router.post('/login', (req, res, next) => {
    if (req.isAuthenticated()) {
        res.redirect('/')
    } else {
        let user = (req.body.username).toLowerCase()
        let pass = req.body.password
        if (user.length === 0 || pass.length === 0) {
            req.flash('message', 'You must provide a username and password.')
            res.redirect('/login')
        } else {
            next()
        }
    }
}, passport.authenticate('login', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

router.get('/register', (req, res) => {
    if (req.isAuthenticated()) {
        req.flash('message', 'Your are already logged in.')
        res.redirect('/')
    } else {
        res.render('register.ejs', { authenticated: false })
    }
})

router.post('/register', (req, res, next) => {
    if (req.isAuthenticated()) {
        req.flash('message', 'Your are already logged in.')
        res.redirect('/')
    } else {
        let username = (req.body.username).toLowerCase()
        let email = req.body.email
        let pass = req.body.password
        let passConf = req.body.passConf
        if (username.length === 0 || email.length === 0 || pass.length === 0 || passConf.length === 0) {
            req.flash('message', 'You must provide a username, email and password.')
            res.redirect('/register')
        } else if (pass != passConf) {
            req.flash('message', 'Your passwords do not match.')
            res.redirect('/register')
        } else {
            next()
        }
    }
}, passport.authenticate('register', {
    successRedirect: '/',
    failureRedirect: '/register',
    failureFlash: true
}))

router.get('/logout', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('User [' + req.user.username + '] has logged out.')
        req.logout()
        res.redirect('/login');
    } else {
        res.redirect('/')
    }
})

router.post('/updpass', (req, res, next) => {
    if (req.isAuthenticated()) {
        let password = req.body.password
        let newpass = req.body.newpass
        let newpassconf = req.body.newpassconf
        if (password.length === 0 || newpass.length === 0 || newpassconf.length === 0) {
            req.flash('message', 'You must provide your current password, new password, and new password confirmation.')
            res.redirect('/settings')
        } else if (newpass != newpassconf) {
            req.flash('message', 'Your password and password confirmation must match.')
            res.redirect('/settings')
        } else {
            next()
        }
    } else {
        res.redirect('/')
    }
}, passport.authenticate('updatePassword', {
    successRedirect: '/settings',
    failureRedirect: '/settings',
    failureFlash: true
}))

router.get('/stats', (req, res) => {
    if (req.isAuthenticated()) {
        loadStats()
        async function loadStats() {
            await client.query('BEGIN')
            const userID = await req.user.id
            try {
                const gameData = await client.query(`SELECT wins,gamesPlayed FROM games WHERE id='${userID}';`)
                const triviaData = await client.query(`SELECT correct,questionsanswered FROM trivia WHERE id='${userID}';`)
                res.render('stats.ejs', { authenticated: true, game: gameData.rows[0], trivia: triviaData.rows[0], name: req.user.username })
            } catch (err) {
                console.log(err)
            }
        }
    } else {
        req.flash('message', 'You must be signed in to access that page')
        res.redirect('/login')
    }
})

router.post('/deleteacct', (req, res) => {
    if (req.isAuthenticated()) {
        deleteaccount()
        async function deleteaccount() {
            await client.query('BEGIN')
            const userID = await req.user.id
            try {
                await client.query(`DELETE FROM users WHERE id='${userID}';
                                    DELETE FROM trivia WHERE id='${userID}';
                                    DELETE FROM games WHERE id='${userID}';`)
                await client.query(`COMMIT`)
                req.logout()
                req.flash('message', 'Account successfully deleted')
                res.redirect('/login')
            } catch (err) {
                console.log(err)
            }
        }
    } else {
        req.flash('message', 'You must be signed in to access that page')
        res.redirect('/login')
    }
})

router.post('/updatabase', (req, res, next) => {
    if (req.isAuthenticated()) {
        let c = req.body.correct
        let qa = req.body.questionsanswered
        let w = req.body.won
        let username = req.user.username
        updateStats()
        async function updateStats() {
            await client.query('BEGIN')
            const userID = await req.user.id
            try {
                await client.query(`UPDATE trivia SET correct=(correct + ${parseInt(c)}), questionsanswered = (questionsanswered + ${parseInt(qa)}) WHERE id='${userID}';
                                    UPDATE games SET wins=(wins + ${parseInt(w)}), gamesplayed = (gamesplayed + 1) WHERE id='${userID}';
                                    COMMIT;`)
                console.log(`pg updated for user [${username}], user ID: ${userID}`)
                res.redirect('/endscreen')
            } catch (err) {
                console.log(err)
            }
        }
    } else {
        res.redirect('/')
    }
})

module.exports = router;