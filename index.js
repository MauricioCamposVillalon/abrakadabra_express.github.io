const express = require('express');
const app = express();
const fs = require('fs');


let usuarios = JSON.parse(fs.readFileSync('usuarios.json', 'utf8'));
const user = usuarios.usuarios;

//console.log(user);

const listener = app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000")
});
app.use(express.static("assets"));




app.get('/abracadabra/juego/:usuario', function(req,res){
   
    const found = user.find(usr => usr == req.params.usuario );
    //console.log(found);
    if (found){
        res.sendFile(__dirname + '/index.html')
    }else{
        res.sendFile(__dirname + '/assets/who.jpeg')
    }
});

app.get('/abracadabra/conejo/:n', function (req, res) {
    let numero = req.params.n;
   // console.log(numero);
    let random =  Math.floor(Math.random() * (5 - 1)) + 1;
    console.log(random);
    if(numero == random){
        res.sendFile(__dirname + '/assets/conejito.jpg')
    }else {
        res.sendFile(__dirname + '/assets/voldemort.jpg')
    }
});


app.get("*", (req, res) => {
    res.send("Esta pagina no existe....");
})



