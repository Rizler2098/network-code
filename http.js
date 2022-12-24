//simple http server with nodejs

const http = require("node:http");

const localhost = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
   res.statusCode - 200;
   res.setHeader("Content-Type, "text/plain");
   res.end("hello");

});

server.listen(port, localhost, () => {
  Console.log("server running at http://${hostname}:${port}/");
});


//file module
const fs = require('fs');
try{
  const stats = fs.statSync('/local/text.txt');
  } catch(err) {
    console.error(err);
    }
    
    
import {access, constats} from 'node:fs';
const file = 'package.json';

access(file, constants.F_OK | constants.W_OK, (err) =>{
  console.log('${file} ${err ? 'is not' : 'is'} readable and writable');
  if(!err){
    console.error('file already exists');
    return;
  }
  open('file' , 'wx', (err,fd) => {
    if(err) throw err;
    
    try{
      writeMyData(fd);
      }finally {
        close(fd, (err) =>{
          if (err) throw err;
        });
     )
});
    










