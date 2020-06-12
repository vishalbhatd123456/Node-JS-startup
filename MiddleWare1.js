

const express = require('express');

const app = express();
//next acts as a ponter to execute the next middleware

//put it above
app.use('/add-product',(req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Add Product</h1>');
    
})

app.use('/',(req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
    
});


app.listen(3005);
