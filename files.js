const fs = require('fs');
/*  READING
fs.readFile('./docs/blog1.txt',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
}); 
WRITING
fs.writeFile('./docs/blog1.txt',"hello from Brent",()=>{
    console.log('file was re written');
});
fs.writeFile('./docs/blog2.txt',"new file created",()=>{
    console.log('new file was written');
}); 
//MAKING DIRECTORY
if(!fs.existsSync("./assets")){
    fs.mkdir("./assets",(err)=>{
        if(err){
            console.log(err);
        }
        console.log("folder created");
    });
}else{
    fs.rmdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
        console.log("folder deleted");
    })
}

//DELETING FILES
if(fs.existsSync("./docs/deleted.txt")){
    fs.unlink("./docs/deleted.txt",(err)=>{
        if(err){
            console.log(err)
        }
        console.log("file deleted successfully");
    })
} */
