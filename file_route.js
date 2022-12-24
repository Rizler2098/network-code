import fs from 'node:js';
import {access, constants} from 'node:js';

var createFile = function( name, data) {
    //check if inputs are strings
    if (typeof myVar === 'string' || myVar instanceof String)
    // it's a string
    else
    // it's something else
    //check if exists
    
    //create file if not
    const fs = require('fs');
    fs.appendFile(name,data, function (err){
      if(err) throw err;
      console.log('Created');
    })
    
    
    
}
