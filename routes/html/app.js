var app = express();
const express = require('express');
const mysql = require('mysql2');
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan('dev'));
app.use(require('./routes'));




function myFunction(event){
    event.preventDefault();
    
    var person = document.getElementById("name");
    var photo= document.getElementById("photo");
    var q1= document.getElementById("q1");
    var q1= document.getElementById("q2");
    var q1= document.getElementById("q3");
    var q1= document.getElementById("q4");
    var q1= document.getElementById("q5");
    var q1= document.getElementById("q6");
    var q1= document.getElementById("q7");
    var q1= document.getElementById("q8");
    var q1= document.getElementById("q9");
    var q1= document.getElementById("q10");

var inputVal = '';
if (person, photo,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10) {
    inputVal = { name:person.value, link:photo.value,values:[q1.value,q2.value,q3.value,q4.value,q5.value,q6.value,q7.value,q8.value,q9.value,q10.value]}

    console.log(inputVal)
}
app.post('/api/people', (req, res) => {
    db.query('Insert into people SET?',{
        inputVal
    }, function(err) {
        if (err) throw err;
    
  });



})}
