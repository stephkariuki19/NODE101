const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')

//connect to db
const dbURI = 'mongodb+srv://blogger:Bloguser33@blogs-cluster.fd56ftr.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI)
.then((result)=>app.listen(3000))
.catch((err)=>console.log( 'this is the error:'+err));
app.set('view engine', 'ejs');

//using more middleware
/*app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
  }); */
  //username stephmukami password lLN2kV77aVlM3z6r

  // access static files
  app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true})); //takes url encoded data and parses to useable format



app.get('/',(req,res)=>{
 res.redirect('/blogs');
});

app.get('/about',(req,res)=>{
    res.render('about',{title: 'ABOUT'});
});

//using blog routes
app.use('/blogs',blogRoutes)

//404
app.use((req,res)=>{
    res.status(404).render('404',{title: '404 PAGE'});
})