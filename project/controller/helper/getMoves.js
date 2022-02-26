const fetch = require('node-fetch');
const fs =require('fs');

anything()


    let promise=[];

for (let i=0;i<=30;i++){
    promise.push( fetch(`https://pokeapi.co/api/v2/pokemon/${i}`));
}
Promise.all(promise).then(response=>{ response.json()})
.catch(err=>console.log(err))
                    .then(data=>
                        { console.log('reached her '+data)
fs.readFile('./modal/apis/pokedex.json','utf-8',(err,pokemonsJSON) =>
{if(err)console.log(err)
    else
    {try {
        pokemons= JSON.parse(pokemonsJSON);
        
const found = data.some(pokemon=>pokemon.id<150);
if(found){

 pokemons.forEach(pokemon=>{
    if (pokemon.id===data.id) {
    
    pokemon.moves=data.moves
}}
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


                        }
                        )
                        .catch(err=>console.log(err))


