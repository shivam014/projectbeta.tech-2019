const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    return res.render('index');
});

['leaderboard','team2', 'home', 'team','rd', 'interactive','notifs', 'design','events', 'alumni', 'contact', '404', 'baaabaabbbaaaaaababaaaaaaababaaaaaaababaaaaaaababaaaaaa'].map(page => {
    router.get(`/${page}`, (req, res, next) => {
        return res.redirect(`./#/${page}`);
    })
})

module.exports = router;
