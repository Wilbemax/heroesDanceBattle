class Hero {
    constructor(name, level, healthPoints, stats){
        this.name = name;
        this.level = level;
        this.healthPoints = healthPoints
        this.stats = stats
    }

    displayHero(){
        const heroInfo =
        `Имя: ${this.name}` +
        `\nУровень: ${this.level}` +
        `\nЖизненные силы: ${this.healthPoints}` +
        `\nСила: ${this.stats.str}` +
        `\nИнтеллект: ${this.stats.int}` +
        `\nЛовкость: ${this.stats.agi}`;

        console.log(heroInfo);
    }
}

class Knight extends Hero{
    constructor(name, level, healthPoints, stats, isHorseTango, energy){
        super(name, level, healthPoints, stats)
        this.isHorseTango = isHorseTango
        this.energy = energy  
    }

    displayHero(){
        super.displayHero()
        if(this.isHorseTango === true){
            console.log(`this hero can dance horse tango`);
        }
    }
}
class Mage extends Hero{
    constructor(name, level, healthPoints, stats, hasTectonicPotion, mana){
        super(name, level, healthPoints, stats, stats)
        this.hasTectonicPotion = hasTectonicPotion
        this.mana = mana
    }
    displayHero(){
        super.displayHero()
        if(this.hasTectonicPotion === true){
            console.log(`this hero can dance tectonic`);
        }
    }
}