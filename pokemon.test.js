const {Pokemon,
    fire,
    water,
    grass,
    Bulbasaur,
    Squirtle,
    Charmander,} = require('./pokemon');

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
            
test("to throw the ball and catch a pokemon",()=>{

expect(Charmander.type).toEqual('fire');
                    
}) 
});