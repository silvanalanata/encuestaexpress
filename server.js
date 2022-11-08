const myexpress = require('express')

const myapp = myexpress()
// solicita el body-parser
var bodyParser = require('body-parser');
// ¡úsalo!
myapp.use(bodyParser.urlencoded({extended: true}));


myapp.use(myexpress.static(__dirname + "/static"));

myapp.set('views', __dirname + '/views'); 

myapp.set('view engine', 'ejs');

myapp.get('/', function(request, response) {
    response.render('index'); 
  })

  myapp.post('/resultado', function(request, response) {

    console.log(request.body)
    response.render('resultado',{formulario: request.body}); 
    response.redirect("/")
    
  })





myapp.listen(8000, function() {
    console.log('servidor ejecutandose en  http://localhost:8000');
});