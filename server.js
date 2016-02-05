var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = new require('express')();
var compiler = webpack(config);
var port = 3000;

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get("/tests", function(req, res) {
  res.sendFile(__dirname + '/public/tests.html');
});

app.listen(port, function(err) {
  if (err) {
    console.error(err);
    return;
  }
  console.info("Listening at http://localhost:%s", port);
});
