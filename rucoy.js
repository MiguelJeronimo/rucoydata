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

