const fs=require("fs")
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Introduce el nombre del archivo [ file.extension,salida.extension ]=> `, (nam) => {
    name=nam.split(",")
    fs.readFile(`${name[0]}`, 'utf-8', (err, dat) => {
        if(err) {
          console.log('Error Com no pudo ejecutar el trabajo: ', err);
        } else {
            da=dat.replace(/([\ \t]+(?=[\ \t])|^\s+|\s+$)/g,"")
          console.log("Comprimiendo...");
            fs.writeFile(`com.${name[1]}`,da.replace(/\n/g,""), function (err) {
              if (err){ 
                  return console.log(`El archivo :com.${name} no se pudo crear;`,err);}
              console.log(`El archivo : meod.${name} creado Exitosamente;`);
          });
        }
      });
    readline.close()
  })
