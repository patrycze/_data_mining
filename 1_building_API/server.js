var fs = require('fs');
var data = fs.readFileSync('words.json');
var words = JSON.parse(data);
console.log(words);
//console.log('server is starting');

var express = require('express');
var app = express();

var server = app.listen(3000, listening);

app.use(express.static('website'));

app.get('/add/:word/:score?', addWord)

function addWord(request, response) {
    
    var data = request.params;
    var word = data.word;
    var score = Number(data.score);
    var reply; 
    if(!score) {
        reply = {
            msg: "Score is required"
        }   
    } else {
        
        words[word] = score;
        
        var data = JSON.stringify(words, null, 2);
        fs.writeFile('words.json', data, finished);
        
        function finished(err) {
            console.log('all set.');
        }
        
        
        reply = {
            msg: "Thank you for score"
        }
    }
    
    response.send(reply);
}

function listening() {
    
    console.log('listening. . .')
    
}


app.get('/all', sendAll)

function sendAll(request, response) {
    response.send(words) 
}



app.get('/search/:word/', searchWord)

function searchWord(request, response) {
    
    var score = request.params.word;
    var reply;
    
    if(words[score]) {
         reply = {
            word: score,
            status: "Here is your score"
        }
    }
         else {
         reply = {
             
            word: score,
            status: "There is no word"
         }
    }
 response.send(reply);   
}
