//Import the express and url modules
const { json } = require('body-parser');
let express = require('express');
let url = require("url");
let product=require("./products")

//The express module is a function. When it is executed it returns an app object
let app = express();




app.use(express.static("public"));

//Set up the application to handle GET requests sent to the user path
app.get('/lessons', function(req,res){
    console.log(product.product)
    res.send(product.product);
    
});//Subfolders
app.get('/user', function(req,res){
res.send(JSON.stringify({email:"dd@gmail.com",password:"123456789"}));
});

//Start the app listening on port 8080
app.listen(8081);

async function handleProductGet(request, response) {

}



// [
//     { 'topic': 'math', 'location': 'London', 'price': 100 },
//     { 'topic': 'math', 'location': 'Liverpool', 'price': 80 },
//     { 'topic': 'math', 'location': 'Oxford', 'price': 90 },
//     { 'topic': 'math', 'location': 'Bristol', 'price': 120 },
//    ]
   