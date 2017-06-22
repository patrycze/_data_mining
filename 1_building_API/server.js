console.log('server is starting');

var express = require('express');
var app = express();

var server = app.listen(3000, listening);

app.use(express.static('website'));
function listening() {
    
    console.log('listening. . .')
    
}