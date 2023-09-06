const {Pokemon,
    fire,
    water,
    grass,
    Bulbasaur,
    Squirtle,
    Charmander,
    Pokeball,} = require('./pokemon');

describe("Pokemon",()=>{
test("returns an instance of a pokemon",()=>{
const Rattata = new Pokemon('Rattata');
expect(Rattata.type).toEqual('normal');

})

   test("returns wether the pokemon effective against someones else",()=>{
    const Rattata = new Pokemon('Rattata','normal');
    expect(Rattata.isEffectiveAgainst('grass')).toEqual(false);
    
    })

    test("returns if this pokemon has any weakness",()=>{
    const Rattata = new Pokemon('Rattata','normal');
    expect(Rattata.isWeakTo('grass')).toEqual(false);
        
        })

        test("returns the first drived pokemon",()=>{
           
        const Charmander=new fire('Charmander');
        expect(Charmander.type).toEqual('fire');
            
            }) 
            
    const Charmander=new fire('Charmander');
test("to check if Charmander can defeat pokemon grassfdsf",()=>{
    const Charmander=new fire('Charmander');
expect(Charmander.type).toEqual('fire');
//const Rattata = new Pokemon('Rattata','normal');
expect(Charmander.isEffectiveAgainst('grass')).toEqual(true);                   
}) 

test("to capture pokemon",()=>{
    const battle=new Pokeball();
    //const cc
expect(battle.throw('Charmander')).toEqual('Charmander'); 
expect(battle.throw('grass')).toEqual('not allowed');    
//expect(battle.throw().toEqual('');                  
}) 

test("To release a pokemon",()=>{
    const battle=new Pokeball();
    //const cc
expect(battle.throw()).toEqual(true); 
//expect(battle.throw('grass')).toEqual('not allowed');    
//expect(battle.throw().toEqual('');                  
}) 
});