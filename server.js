const http = require("http");
const fs = require('fs');
const _ = require("lodash")
const server = http.createServer((req,res)=>{
    const num = _.random(10,1000);
    console.log(num);

    res.setHeader("Content-Type","text/html");
    /*res.write('<p>hello again</p>')
    res.write('<p>hello again old friend</p>')
    res.end(); */
    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path +='about.html';
             res.statusCode = 200;
            break;
        case '/about-mee':
           res.statusCode = 301;
           res.setHeader('Location','/about');
           res.end();
            break;
        default:
            path +='404.html'
             res.statusCode = 400;
            break;
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        } else{
            res.end(data)
        }
    })

});
server.listen(3000,"localhost",()=>{
    console.log("listening for requests made on port 3000");
})
