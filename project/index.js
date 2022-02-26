const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
//app.use(express.static('./view'))
app.use('/pokemon',require('./controller/routes/api/pokemons'))
const PORT = process.env.PORT || 5000 ;
app.listen(PORT,()=>{
    console.log('Listening on Port: '+PORT)  ;

})