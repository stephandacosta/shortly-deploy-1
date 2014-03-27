var app = require('./server-config.js');

var port = process.env.PORT || 4568;

app.listen(port);

console.log('domain:  ' , app.get('domain'));

console.log('Server now listening on port ' + port);
