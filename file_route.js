import fs from 'node:js';


var createFile = function( name, data) {
    //check if inputs are strings
    
    //check if exists
    
    //create file if not
    const fs = require('fs');
    fs.appendFile(name,data, function (err){
      if(err) throw err;
      console.log('Created');
    })
    
    
    
}
