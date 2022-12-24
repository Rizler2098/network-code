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
import { open, close} from 'node:fs';
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

     
var url = require('url');
var adr = 'http://localhost:8080/default.html?year=2017&month=february';
var q = url.parse(adr, true);
var q = url.parse(adr, true);
//q.host, q.pathname, q.search     
   
var qdata = q.query;// returns an object: {year:2017, month: 'february'}

//return html by using http.createServer
     
const http = require('http');
const url =  require('url');
const fs = require('fs');
     
http.createServer(function (req,res){
 var query = url.parse(req.url, true);
 var filename = '.' + query.pathname;
 fs.readFile(filename, functiopn(err,data){
               if(err){
                   res.writenHead(404, {'Content-Type': 'text/html'});
                   return res.end('4040 not found');
             
             }
              res.writenHead(200, {'Content-Type': 'text/html'});
              return res.end();
 });
}).listen(8080);
     
     
     
     









