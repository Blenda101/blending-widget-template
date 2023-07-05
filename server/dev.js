var express = require('express');
var path = require('path');
const sassMiddleware = require('node-sass-middleware')
const livereload = require('livereload');
const connectLiveReload = require('connect-livereload');

var wiki = require('./data/wiki');
var config = require('../config.json');

var app = express();

// For reloading browser whenever code change
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
liveReloadServer.server.once('connection', () => {
  setTimeout(() => {
    liveReloadServer.refresh('/');
  }, 100);
});
app.use(connectLiveReload());

// Setting custom directory for rendering ejs files
app.use(
  sassMiddleware({
    src: path.join(__dirname, '../styles'),
    dest: path.join(__dirname, '/public/'),
    outputStyle: 'compressed',
  })
)
app.use(express.static(path.join(__dirname, '../assets')));
// app.use(express.static(path.join(__dirname, '../styles')));
app.use(express.static(path.join(__dirname, '../server/public')));
app.set('views', path.join(__dirname, './views'));

// Set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', {meta: config, data: wiki, methods: {} });
});

app.listen(8080, () => {
  console.log('Server started at http://localhost:8080/');
});
