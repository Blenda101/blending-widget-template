var express = require('express');
var path = require('path');
const livereload = require('livereload');
const connectLiveReload = require('connect-livereload');

var wiki = require('./data/wiki');
var config = require('../config.json');
const { compileSass } = require('./utils/compiler');

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
app.use((req, res, next) => {
  compileSass('./server/public', 'style.css', next);
});

app.use(express.static(path.join(__dirname, '../assets')));
app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, '../server/public')));
app.set('views', path.join(__dirname, './views'));

// Set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', { meta: config, data: wiki, methods: {} });
});

app.listen(8080, () => {
  console.log('Server started at http://localhost:8080/');
});
