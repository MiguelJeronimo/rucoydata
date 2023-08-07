for(let index = 1; index <= 300; index++){
	
	console.log(`Level:${index}, Current Exp: ${expNeeded(index)}, ExpNeeded: ${ExpNeededNExt(index)}`)
}

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

