const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

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

//mongoose and mongo sandbox routes
app.get('/add-blog',(req,res)=>{
    const blog = new Blog({
        title: 'monday-nights',
        snippet: 'another day in the lab',
        body: 'more about the lab'
    });
    blog.save()//on instance
       .then((result)=>{
        res.send(result)
       })
       .catch((err)=>{
        console.log(err);
       });
});


app.get('/all-blogs',(req,res)=>{
    Blog.find()//on model
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    });
})

//getting single blog
app.get('/single-blog',(req,res)=>{
    Blog.findById('640f81f4d174328ad52c88ac')//on model
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    });
})


app.get('/',(req,res)=>{
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index',{title: 'HOME',blogs});
});



app.get('/about',(req,res)=>{
    res.render('about',{title: 'ABOUT'});
});

app.get('/blogs/create',(req,res)=>{
    res.render('create',{title: 'CREATE BLOG'})
});
//404
app.use((req,res)=>{
    res.status(404).render('404',{title: '404 PAGE'});
})