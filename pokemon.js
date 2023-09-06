const effectivness={
    fire:['normal','grass'],
    grass:['water','normal'],
    water:['fire','normal'],
    normal:['']
    }
    const weakness={
        fire:['water'],
        grass:['fire'],
        water:['grass'],
        }
class Pokemon{
    constructor(name,type='normal',hitPoints,attackDamage,move='tackle'){
        this.name=name;
        this.type=type;
        this.hitPoints=100;
        this.attackDamage=0;
        this.move=move;
    }
   isEffectiveAgainst(strength)
    {
       // return Pokemon strength
       if(!effectivness[this.type])
       {
           return false;
       }
    return effectivness[this.type].includes(strength);
       
    }

    isWeakTo(weak)
    {
        if(!weakness[this.type])
        {
            return false;
        }
      return weakness[this.type].includes(weak);
    } 
    takeDamage()
    {
      this.hitPoints= this.hitPoints-25;
    }
    useMove(){

    }
    hasFainted()
        {
        this.hitPoints=hitPoints;
        if(this.hitPoints==0)
        {
            return true
        }
        }
}

class fire extends Pokemon{
    constructor(name,hitPoints,attackDamage,move='tackle'){
            super(name,hitPoints,attackDamage,move='tackle');
            this.type = 'fire';
          }   
}
    class grass extends Pokemon{
        constructor(name,type='normal',hitPoints,attackDamage,move='tackle'){
                super(name,hitPoints,attackDamage,move='tackle');
                this.type = 'grass';
              }
        }
        class water extends Pokemon{
            constructor(name,type='normal',hitPoints,attackDamage,move='tackle'){
                    super(name,hitPoints,attackDamage,move='tackle');
                    this.type = 'water';
                  }
            }
 
class Charmander extends fire{
    constructor(name,type,hitPoints,attackDamage,move)
    {   super(name,type,hitPoints,attackDamage,move);
        this.name=name;
        this.type=type;
        this.hitPoints=100;
        this.attackDamage=0;
        this.move='ember';
    }
}
class Squirtle extends water{
    constructor(name,hitPoints,attackDamage,move)
    {super(name,type,hitPoints,attackDamage,move);
        this.name=name;
        this.type=type;
        this.hitPoints=100;
        this.attackDamage=0;
        this.move='water gun';
    }
}
class Bulbasaur extends grass{
    constructor(name,hitPoints,attackDamage,move='vine whi')
    {super(name,hitPoints,attackDamage,move);
        this.name=name;
        this.type=type;
        this.hitPoints=100;
        this.attackDamage=0;
        this.move='GrassPokemon';
    }
}
class Pokeball{
constructor(container)
{
  this.container= [];
}
throw(pokemon='')
{
    if(pokemon=='')
    {
    // battle
      return true
    }
 else
  {
    if(!this.container.length)
    {
        this.container.push(pokemon);
        console.log(`you caught a Pokemon called ${pokemon}`);
        return pokemon;
    }
    else{
        return 'not allowed'
    }
    
  }
 // return pokemon
}//throw

isEmpty()
{
    return (!this.container.length)? console.log("The container is empty!"):this.container.length-1;;
}
}


module.exports = {Pokemon,
    fire,
    water,
    grass,
    Bulbasaur,
    Squirtle,
    Charmander,
    Pokeball,
} ;
