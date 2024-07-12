const express = require('express');
const app = express();
const session = require('express-session');
const router = express.Router();
const port = 3001;

app.use(express.json());

app.use(session({
    secret: 'itsecret',
    resave: false,
    saveUninitialized: true,
}))
app.get('/login',(req,res)=>{
    req.session.sessionData = {name:'raju',
        userid:1201,
        email:'raju@gmail.com'
    };
    res.send(<h1>you logged in</h1> <a href='/profile'>profile</a>)
});
app.get('/profile',(req,res)=>{
    const data = req.session.sessionData || 'No session found'
    res.send(<h1>wlcome ${data.name}</h1> <p> email is :${data.email}</P>);

});
app.get

app.listen(port, () => {
    console.log(Server is live on port ${port});
});