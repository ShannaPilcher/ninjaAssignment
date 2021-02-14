class Ninja{
    constructor(name, health, speed, strength){
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(this.name, this.strength, this.speed, this.health);
    }
    drinkSake(){
        this.health += 10;
    }
}
const ninja1 = new Ninja("Hiro");
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();