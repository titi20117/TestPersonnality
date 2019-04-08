let http = require('http');
let express = require('express');
let app = express();
let server = http.Server(app);
let bodyParser = require('body-parser');
let md5 = require('MD5');
let data = require('./models/data_db.json');

app.set('view engine', 'ejs');

app.use('/assets', express.static('public'))
app.use('/views', express.static('views'))

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.get('/', (req, res)=> {
    res.render('pages/home');
})
app.get('/test', (req, res) => {
    res.render('pages/test/index', {data: data});
})
app.get('/response', (req, res) => {
    res.render('pages/response/result');
})
server.listen(1990);

let io = require('socket.io').listen(server)
console.log('socket.io is now loading')

io.sockets.on('connection', (socket)=> {
    let me;
    console.log('New Client')
    socket.on('login', function(user) {
        //stokons notre utilisateur
        me = user;
        me.id = user.mail.replace('@', '-').replace('.','-');
        me.avatar = 'https//gravatar.com/avatar/' + md5(user.mail) + '?s=50';
        //broadcast permet d'alerter tous les autres utilisateurs sauf 'utilisateur courant de l'evenement
        //dans le cas contraire faut mettre io.sockets(tous les utilsateurs actuelement connectes au systeme)
        // socket.broadcast.emit('newuser')
        io.sockets.emit('newuser')
        // console.log(user)
    })
})