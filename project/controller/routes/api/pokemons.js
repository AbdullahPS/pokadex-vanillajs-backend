const express=require ('express');
const fs =require('fs');
const path =require('path');
const router = express.Router();
const root = require('../../helper/rootpath');



//get pokemons by id 
router.get('/pokadex/:id',(req,res)=> {
    fs.readFile('./modal/apis/pokedex.json','utf-8',(err,pokemonsJSON) =>
{if(err)console.log(err)
    else
    {try {
        pokemons= JSON.parse(pokemonsJSON);
        
const found = pokemons.some(pokemon=>pokemon.id.toString()===req.params.id);
if(found)
res.json(pokemons.filter(pokemon=>pokemon.id.toString()===req.params.id));
else 
res.status(400).json({msg:`Pokemon ${req.params.id} not found`})
//get moves

    } catch (error) {
        console.log('error while parsing json'+error);
        
    }}

}
);
});



//get pokemons by name
router.get('/pokadex/name/:name',(req,res)=> {
    fs.readFile('./modal/apis/pokedex.json','utf-8',(err,pokemonsJSON) =>
{if(err)console.log(err)
    else
    {try {
        pokemons= JSON.parse(pokemonsJSON);
        
const found = pokemons.some(pokemon=>pokemon.name.english===req.params.name);
if(found)
res.json(pokemons.filter(pokemon=>pokemon.name.english===req.params.name));
else 
res.status(400).json({msg:`Pokemon ${req.params.name} not found`})
//get moves

    } catch (error) {
        console.log('error while parsing json'+error);
        
    }}

}
);
});

//get image by id 

router.get('/images/:id',(req,res)=>{
    let imagename;
    if(req.params.id<10)
        imagename=`00${req.params.id}.png`
    else if (req.params.id>=10&&req.params.id<100)
        imagename=`0${req.params.id}.png`
    else
    imagename=`${req.params.id}.png`

    res.sendFile(root+path.join('/modal/graphic','thumbnails',imagename))

})


//capture and uncapture pokemon
router.put('/:id',(req,res)=> {
    fs.readFile('./modal/apis/pokedex.json','utf-8',(err,pokemonsJSON) =>
{if(err)console.log(err)
    else
    {try {
        pokemons= JSON.parse(pokemonsJSON);
        
const found = pokemons.some(pokemon=>pokemon.id.toString()===req.params.id);
if(found){

 pokemons.forEach(pokemon=>{
    if (pokemon.id.toString()===req.params.id) {
    console.log(pokemon.captured + 'This is it ')
    if(pokemon.captured) 
    {pokemon.captured=false;
    console.log('its captured')
    } 
    else{ pokemon.captured=true
}}}
    );
let data =JSON.stringify(pokemons,null,2);

fs.writeFile('./modal/apis/pokedex.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});
res.end()
}
else 
res.status(400).json({msg:`Pokemon ${req.params.id} not found`})
//get moves

    } catch (error) {
        console.log('error while parsing json'+error);
        
    }}

}
);
});



module.exports=router;