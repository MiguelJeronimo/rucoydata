/**for(let index = 1; index <= 300; index++){
	
	console.log(`Level:${index}, Current Exp: ${expNeeded(index)}, ExpNeeded: ${ExpNeededNExt(index)}`)
	
}*/
Monsters()
function expNeeded(level) {
	exp = Math.pow(level, (level/1000)+3)
	return Math.ceil(exp)
}

function ExpNeededNExt(levelActual){
	let nextLevel = levelActual+1
	expNecesaria = expNeeded(nextLevel) - expNeeded(levelActual)
	return expNecesaria
}

/**
 * 
 * Stats: Exp Needed (Level < 55) = Level^((Level/1000)+2.171)) Exp Needed (Level>55) = Level^((Level/1000)+2.373))
	Base: Exp Needed: Level^((Level/1000)+3))
 */
function expNeededLEvel (level){
	let exp = null
	if (level<55) {
		exp = Math.pow(level, (level/1000)+2.171)
	}
	else{
		exp = Math.pow(level, (level/1000)+2.373)
	}
	return Math.ceil(exp)
}

function creatureExp(exp_creature, exp_character) {
	let cantidad = exp_character/ exp_creature
	return Math.ceil(cantidad)
}

function Monsters() {
	fetch("http://10.60.63.84:5500/creatures.json")
	.then((response)=> response.json())
	.then((data)=>{
		console.log(`Level:${999}, Current Exp: ${expNeeded(910)}, ExpNeeded: ${ExpNeededNExt(910)}`)
		data.creatures.forEach(creature => {
			console.log(`Exp Next Level: ${999}, Creature: ${creatureExp(creature.exp,ExpNeededNExt(999))}: ${creature.name}`)
		});
	})
}

/**
 * 
 * 
 * 
 *     public Mob(String name, String emojicode, int defense, int health){
        this.mob_name = name;
        this.emoji_code = emojicode;
        this.mob_defense = defense;
        this.mob_health = health;
    }
 	new Mob("Rat Lv.1", "<:1_rat:781390912248348683>", 4, 25),
    new Mob("Rat Lv.3", "<:3_rat:781390923753717781>", 7, 35),
    new Mob("Crow Lv.6", "<:6_crow:781390951191937024>", 13, 40),
    new Mob("Wolf Lv.9", "<:9_wolf:781390959735996436>", 17, 50),
    new Mob("Scorpion Lv.12", "<:12_scorpion:781390969824215052>", 18, 50),
    new Mob("Cobra Lv.13", "<:14_cobra:781390978988507158>", 18, 50),
    new Mob("Worm Lv.14", "<:14_worm:781390986614014004>", 19, 55),
    new Mob("Goblin Lv.15", "<:15_goblin:781390994376622140>", 21, 60),
    new Mob("Mummy Lv.25", "<:25_mummy:781391003780513813>", 36, 80),
    new Mob("Pharaoh Lv.35", "<:35_pharaoh:781391013591253063>", 51, 100),
    new Mob("Assassin Lv.45", "<:45_assassin:781391026727682051>", 71, 120),
    new Mob("Assassin Lv.50", "<:50_assassin:781391034990460958>", 81, 140),
    new Mob("Assassin Ninja Lv.55", "<:55_ninja_assassin:781391057128390696>", 91, 160),
    new Mob("Skeleton Archer Lv.80", "<:80_skeleton_archer:781391133023928359>", 101, 300),
    new Mob("Zombie Lv.65", "<:65_zombie:781391115181228069>", 106, 200),
    new Mob("Skeleton Lv.75", "<:75_skeleton:781391124929314827>", 121, 300),
	new Mob("Skeleton Warrior Lv.90", "<:90_skeleton_warrior:781391140691771393>", 146, 375),
    new Mob("Vampire Lv.100", "<:100_vampire:781391148982730763>", 171, 450),
    new Mob("Vampire Lv.110", "<:110_vampire:781391156671807508>", 186, 530),
    new Mob("Drow Ranger Lv.125", "<:120_drow_ranger:781391163743010867>", 191, 600),
    new Mob("Drow Mage Lv. 130", "<:130_drow_mage:781391184470867968>", 191, 600),
    new Mob("Drow Assassin Lv.120", "<:125_drow_assassin:781391173088575488>", 221, 620),
    new Mob("Drow Sorceress Lv.140", "<:140_drow_sorceress:781391206755336222>", 221, 600),
    new Mob("Drow Fighter Lv.135", "<:135_drow_fighter:781391196534472705>", 246, 680),
    new Mob("Lizard Archer Lv.160", "<:160_lizard_archer:781391233582497793>", 271, 650),
    new Mob("Lizard Shaman Lv.170", "<:170_lizard_shaman:781391275177672715>", 276, 600),
    new Mob("Dead Eyes Lv.170", "<:170_dead_eyes:781391266923020309>", 276, 600),
    new Mob("Lizard Warrior Lv.150", "<:150_lizard_warrior:781391223604117534>", 301, 680),
    new Mob("Djinn Lv.150", "<:150_djinn:781391214833303562>", 301, 640),
    new Mob("Lizard High Shaman Lv.190", "<:190_lizard_high_shaman:781391314947538944>", 326, 740),
    new Mob("Gargoyle Lv.190", "<:190_gargoyle:781391298598010892>", 326, 740),
    new Mob("Dragon Hatchling Lv. 240", "<:240_dragon_hatchling:781391338758471690>", 331, 10000),
    new Mob("Lizard Captain lv.180", "<:180_lizard_captain:781391284002488370>", 361, 815),
    new Mob("Dragon Lv.250", "<:250_dragon:781391347922894849>", 501, 20000),
    new Mob("Minotaur Lv.225", "<:225_minotaur:781391328763314187>", 511, 4250),
    new Mob("Minotaur Lv.250", "<:250_minotaur:781391355561246752>", 591, 5000),
    new Mob("Dragon Warden Lv.280", "<:280_dragon_warden:781391390575165450>", 626, 30000),
    new Mob("Ice Elemental Lv.300", "<:300_ice_elemental:781391399709835267>", 676, 40000),
    new Mob("Minotaur Lv.275", "<:275_minotaur:781391363476291597>", 681, 5750),
    new Mob("Ice Dragon Lv.320", "<:320_ice_dragon:781391412217249823>", 726, 50000),
    new Mob("Yeti Lv.350", "<:350_yeti:781391428030431262>", 826, 60000),
 */