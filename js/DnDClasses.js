/* 
 * className is a string
 * babScaling can be 'good', 'avg', or 'poor'
 * fort/ref/willScaling can be 'good', 'poor'
 * skillList is a boolean array
 */

class BaseClass {
	constructor (className, babScaling, fortScaling, refScaling, willScaling, skillList) {
		this._className = className;
		this._babScaling = babScaling;
		this._fortScaling = fortScaling;
		this._refScaling = refScaling;
		this._willScaling = willScaling;
		this._skillList = skillList;
	}
	get className() {
		return this._className;
	}
	get babScaling() {
		return this._babScaling;
	}
	get fortScaling() {
		return this._fortScaling;
	}
	get refScaling() {
		return this._refScaling;
	}
	get willScaling() {
		return this._willScaling;
	}
	get skillList() {
		return this._skillList;
	}

}

class Spellcaster extends BaseClass {
  constructor (className, babScaling, fortScaling, refScaling, willScaling, skillList, primarySpellAttribute, spellsPerDay, spellsKnown) {
  	super(className, babScaling, fortScaling, refScaling, willScaling, skillList);
  	this._primarySpellAttribute = primarySpellAttribute;
  	this._spellsPerDay = spellsPerDay;
  	this._spellsKnown = spellsKnown;
  }

  get primarySpellAttribute() {
  	return this._primarySpellAttribute;
  }
	get spellsPerDay() { // All spellcasters have this
		return this._spellsPerDay;
	}
	get spellsKnown() { // Not all spellcasters have this. null should mean that the caster knows all spells that they can cast for their level. 
		if (this._spellsKnown === null) {
			return null;
		}
		else {	
		  return this._spellsKnown;
		}
	}
}
/*
 * skillList should be formatted as an array of booleans
 * Each entry is 1 for a class skill or 0 for a cross-class skill 
 * The skill order is as follows:
 * [appraise, autohypnosis, balance, bluff, climb, concentration, craft, craft, craft, decipher script, diplomacy, disable device, disguise, escape artist, forgery, gather information, handle animal, heal, hide, intimidate, jump, knowledge(arcana), knowledge (arch/eng), knowledge (dungeoneering), knowledge (geography), knowledge (history), knowledge (local), knowledge (nature), knowledge (nobility/royalty), knowledge (the places), knowledge (psionics), knowledge (religion), listen, move silently, open lock, perform (act), perform (comedy), perform (dance), perform (keyboard), perform (oratory), perform (percussion), perform (string intrument), perform (wind instrument), perform (sing), profession, profession, psicraft, ride, search, sense motive, sleight of hand, spellcraft, spot, survival, swim, tumble, use magic device, use psionic device, use rope]
 * the array length is 59
 * [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,]
 */

/* Declare skill lists */
const barbarianSkillList = [0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1, 0,0,0,0,0,0,0,0,0,0,0, 1,0,0, 0,0,0,0,0,0,0,0,0,0,0, 0,0,1,0,0,0,0,1,1,0,0,0,0];
const bardSkillList      = [1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1, 1,1,1,1,1,1,1,1,1,1,1, 1,1,0, 1,1,1,1,1,1,1,1,1,1,1, 1,0,0,1,1,1,1,0,0,1,1,1,1];
const clericSkillList    = [0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0, 1,0,0,0,1,0,0,0,1,1,1, 0,0,0, 0,0,0,0,0,0,0,0,0,1,1, 1,0,0,0,0,0,1,0,0,0,0,0,0];
const druidSkillList     = [0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0, 0,0,0,0,0,0,1,0,0,0,0, 1,0,0, 0,0,0,0,0,0,0,0,0,1,1, 1,1,0,0,0,0,1,1,1,1,0,0,0];
const fighterSkillList   = [0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1, 0,0,0,0,0,0,0,0,0,0,0, 0,0,0, 0,0,0,0,0,0,0,0,0,0,0, 0,1,0,0,0,0,0,0,1,0,0,0,0];
const monkSkillList      = [0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1, 1,0,0,0,0,0,0,0,0,0,1, 1,1,0, 1,1,1,1,1,1,1,1,1,1,1, 0,0,0,1,0,0,1,0,1,1,0,0,0];
const paladinSkillList   = [0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0, 0,0,0,0,0,0,0,1,0,0,1, 0,0,0, 0,0,0,0,0,0,0,0,0,1,1, 0,1,0,1,0,0,0,0,0,0,0,0,0];
const rangerSkillList    = [0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1, 0,0,1,1,0,0,1,0,0,0,0, 1,1,0, 0,0,0,0,0,0,0,0,0,1,1, 0,1,1,0,0,0,1,1,1,0,0,0,1];
const rogueSkillList     = [1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1, 0,0,0,0,0,1,0,0,0,0,0, 1,1,1, 1,1,1,1,1,1,1,1,1,1,1, 0,0,1,1,1,0,1,0,1,1,1,1,1];
const sorcererSkillList  = [0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0, 1,0,0,0,0,0,0,0,0,1,0, 0,0,0, 0,0,0,0,0,0,0,0,0,1,1, 1,0,0,0,0,1,0,0,0,0,0,0,0];
const wizardSkillList    = [0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0, 1,1,1,1,1,1,1,1,1,1,1, 0,0,0, 0,0,0,0,0,0,0,0,0,1,1, 1,0,0,0,0,1,0,0,0,0,0,0,0];

/*
 * primarySpellAttribute is the ability nickname that determines the strength of the class's spellcasting
 * spellsPerDay is a 2d int array to encapsulate the spells you get at a given level
 * spellsKnown is a 2d int array to encapsultate the spells you know at a given level
 * if a row of the spells per day is empty, the class does not know spells for that class level
 * if spellsKnown is empty, it is not relevant
 * To access the spells known / per day for a class,
 * Check array length every time, since the 2d arrays aren't rectangular
 */
/* Declare Spells Per Day Arrays */
const bardSpellsPerDay = [[2],
													[3,0],
													[3,1],
													[3,2,0],
													[3,3,1],
													[3,3,2],
													[3,3,2,0],
													[3,3,3,1],
													[3,3,3,2],
													[3,3,3,2,0],
													[3,3,3,3,1],
													[3,3,3,3,2],
													[3,3,3,3,2,0],
													[4,3,3,3,3,1],
													[4,4,3,3,3,2],
													[4,4,4,3,3,2,0],
													[4,4,4,4,3,3,1],
													[4,4,4,4,4,3,2],
													[4,4,4,4,4,4,3],
													[4,4,4,4,4,4,4]];

const clericSpellsPerDay = [[3,1],
														[4,2],
														[4,2,1],
														[5,3,2],
														[5,3,2,1],
														[5,3,3,2],
														[6,4,3,2,1],
														[6,4,3,3,2],
														[6,4,4,3,2,1],
														[6,4,4,3,3,2],
														[6,5,4,4,3,2,1],
														[6,5,4,4,3,3,2],
														[6,5,5,4,4,3,2,1],
														[6,5,5,4,4,3,3,2],
														[6,5,5,5,4,4,3,2,1],
														[6,5,5,5,4,4,3,3,2],
														[6,5,5,5,5,4,4,3,2,1],
														[6,5,5,5,5,4,4,3,3,2],
														[6,5,5,5,5,5,4,4,3,3],
														[6,5,5,5,5,5,4,4,4,4]];

const druidSpellsPerDay = [[3,1],
													 [4,2],
													 [4,2,1],
													 [5,3,2],
													 [5,3,2,1],
													 [5,3,3,2],
													 [6,4,3,2,1],
													 [6,4,3,3,2],
													 [6,4,4,3,2,1],
													 [6,4,4,3,3,2],
													 [6,5,4,4,3,2,1],
													 [6,5,4,4,3,3,2],
													 [6,5,5,4,4,3,2,1],
													 [6,5,5,4,4,3,3,2],
													 [6,5,5,5,4,4,3,2,1],
													 [6,5,5,5,4,4,3,3,2],
													 [6,5,5,5,5,4,4,3,2,1],
													 [6,5,5,5,5,4,4,3,3,2],
													 [6,5,5,5,5,5,4,4,3,3,],
													 [6,5,5,5,5,5,4,4,4,4]];

const paladinSpellsPerDay = [[],
														 [],
														 [],
														 [0],
														 [0],
														 [1],
														 [1],
														 [1,0],
														 [1,0],
														 [1,1],
														 [1,1,0],
														 [1,1,1],
														 [1,1,1],
														 [2,1,1,0],
														 [2,1,1,1],
														 [2,2,1,1],
														 [2,2,2,1],
														 [3,2,2,1],
														 [3,3,3,2],
														 [3,3,3,3]];

const rangerSpellsPerDay = [[],
														[],
														[],
														[0],
														[0],
														[1],
														[1],
														[1,0],
														[1,0],
														[1,1],
														[1,1,0],
														[1,1,1],
														[1,1,1],
														[2,1,1,0],
														[2,1,1,1],
														[2,2,1,1],
														[2,2,2,1],
														[3,2,2,1],
														[3,3,3,2],
														[3,3,3,3]];

const sorcererSpellsPerDay = [[5,3],
															[6,4],
															[6,5],
															[6,6,3],
															[6,6,4],
															[6,6,5,3],
															[6,6,6,4],
															[6,6,6,5,3],
															[6,6,6,6,4],
															[6,6,6,6,5,3],
															[6,6,6,6,6,4],
															[6,6,6,6,6,5,3],
															[6,6,6,6,6,4],
															[6,6,6,6,6,5,3],
															[6,6,6,6,6,6,4],
															[6,6,6,6,6,5,3],
															[6,6,6,6,6,6,4],
															[6,6,6,6,6,6,5,3],
															[6,6,6,6,6,6,6,4],
															[6,6,6,6,6,6,6,5,3],
															[6,6,6,6,6,6,6,6,4],
															[6,6,6,6,6,6,6,6,5,3],
															[6,6,6,6,6,6,6,6,6,4],
															[6,6,6,6,6,6,6,6,6,6]];

const wizardSpellsPerDay = [[3,1],
														[4,2],
														[4,2,1],
														[4,3,2],
														[4,3,2,1],
														[4,3,3,2],
														[4,4,3,2,1],
														[4,4,3,3,2],
														[4,4,4,3,2,1],
														[4,4,4,3,3,2],
														[4,4,4,4,3,2,1],
														[4,4,4,4,3,3,2],
														[4,4,4,4,4,3,2,1],
														[4,4,4,4,4,3,3,2],
														[4,4,4,4,4,4,3,2,1],
														[4,4,4,4,4,4,4,3,3,2],
														[4,4,4,4,4,4,4,4,3,3],
														[4,4,4,4,4,4,4,4,4,4]];

/* Declare Spells Known Arrays */
const bardSpellsKnown = [[4],
												 [5,2],
												 [6,3],
												 [6,3,2],
												 [6,4,3],
												 [6,4,4,2],
												 [6,4,4,3],
												 [6,4,4,3],
												 [6,4,4,4,2],
												 [6,4,4,4,3],
												 [6,4,4,4,3],
												 [6,4,4,4,4,2],
												 [6,4,4,4,4,3],
												 [6,4,4,4,4,3],
												 [6,5,4,4,4,4,2],
												 [6,5,5,4,4,4,3],
												 [6,5,5,5,4,4,3],
												 [6,5,5,5,5,4,4],
												 [6,5,5,5,5,5,4]];

const clericSpellsKnown = null;
const druidSpellsKnown = null;
const paladinSpellsKnown = null;
const rangerSpellsKnown = null;

const sorcererSpellsKnown = [[4,2],
														 [5,2],
														 [5,3],
														 [6,3,1],
														 [6,4,2],
														 [7,4,2,1],
														 [7,5,3,2],
														 [8,5,3,2,1],
														 [8,5,4,3,2],
														 [9,5,4,3,2,1],
														 [9,5,5,4,3,2],
														 [9,5,5,4,3,2,1],
														 [9,5,5,4,4,3,2],
														 [9,5,5,4,4,3,2,1],
														 [9,5,5,4,4,4,3,2],
														 [9,5,5,4,4,4,3,2,1],
														 [9,5,5,4,4,4,3,3,2],
														 [9,5,5,4,4,4,3,3,2,1],
														 [9,5,5,4,4,4,3,3,3,2],
														 [9,5,5,4,4,4,3,3,3,3]];

const wizardSpellsKnown = null;

/* Declare Primary Spellcasting Attributes */
const bardPrimarySpellAttribute = 'cha';
const clericPrimarySpellAttribute = 'wis';
const druidPrimarySpellAttribute = 'wis';
const paladinPrimarySpellAttribute = 'cha';
const rangerPrimarySpellAttribute = 'wis';
const sorcererPrimarySpellAttribute = 'cha';
const wizardPrimarySpellAttribute = 'int';

/* Declare Specific DnD Class Objects */
/* constructor (className, babScaling, fortScaling, refScaling, willScaling, skillList) */
/* constructor (className, babScaling, fortScaling, refScaling, willScaling, skillList, primarySpellAttribute, spellsPerDay, spellsKnown) */

class Barbarian extends BaseClass {
	constructor() {
		super('Barbarian','good','good','poor','poor',barbarianSkillList);
	}
}
class Bard extends Spellcaster {
	constructor() {
		super('Bard','avg','poor','good','good',bardSkillList,bardPrimarySpellAttribute,bardSpellsPerDay,bardSpellsKnown);
	}
}
class Cleric extends Spellcaster {
	constructor() {
		super('Cleric','avg','good','poor','good',clericSkillList,clericPrimarySpellAttribute,clericSpellsPerDay,clericSpellsKnown);
	}
}
class Druid extends Spellcaster {
	constructor() {
		super('Druid','avg','good','poor','good',druidSkillList,druidPrimarySpellAttribute,druidSpellsPerDay,druidSpellsKnown);
	}
}
class Fighter extends BaseClass {
	constructor() {
		super('Fighter','good','good','poor','poor',fighterSkillList);
	}
}
class Monk extends BaseClass {
	constructor() {
		super('Monk','avg','good','good','good',monkSkillList);
	}
}
class Paladin extends Spellcaster {
	constructor() {
		super('Paladin'  ,'good','good','poor','poor',paladinSkillList,paladinPrimarySpellAttribute,paladinSpellsPerDay,paladinSpellsKnown);
	}
}
class Ranger extends Spellcaster {
	constructor() {
		super('Ranger','good','good','good','poor',rangerSkillList,rangerPrimarySpellAttribute,rangerSpellsPerDay,rangerSpellsKnown);
	}
}
class Rogue extends BaseClass {
	constructor() {
		super('Rogue','avg','poor','good','poor',rogueSkillList);
	}
}
class Sorcerer extends Spellcaster {
	constructor() {
		super('Sorcerer','poor','poor','poor','good',sorcererSkillList,sorcererPrimarySpellAttribute,sorcererSpellsPerDay,sorcererSpellsKnown);
	}
}
class Wizard extends Spellcaster {
	constructor() {
		super('Wizard','poor','poor','poor','good',wizardSkillList,wizardPrimarySpellAttribute,wizardSpellsPerDay,wizardSpellsKnown);
	}
}

/***********************************  DO I WANT TO CHANGE THE STRUCTURE SO THAT EACH CLASS IS INSTANTIATED WITH A LEVEL ??? ******************************/
/* Declare character object */
class Character {
  constructor(characterName, characterClass, level, race, str, dex, con, int, wis, cha) {
  	this._characterName = characterName;
  	this._level = level;
  	this._race = race;
  	this._str = str;
  	this._dex = dex;
  	this._con = con;
  	this._int = int;
  	this._wis = wis;
  	this._cha = cha;

  	// Set Character Class Object
  	switch (characterClass) {
  		case 'Barbarian':
  		  this._characterClass = new Barbarian();
  		  break;
  		case 'Bard':
  		  this._characterClass = new Bard();
  		  break;
  		case 'Cleric':
  		  this._characterClass = new Cleric();
  		  break;
  		case 'Druid':
  		  this._characterClass = new Druid();
  		  break;
  		case 'Fighter':
  		  this._characterClass = new Fighter();
  		  break;
  		case 'Monk':
  		  this._characterClass = new Monk();
  		  break;
  		case 'Paladin':
  		  this._characterClass = new Paladin();
  		  break;
  		case 'Ranger':
  		  this._characterClass = new Ranger();
  		  break;
  		case 'Rogue':
  		  this._characterClass = new Rogue();
  		  break;
  		case 'Sorcerer':
  		  this._characterClass = new Sorcerer();
  		  break;
  		case 'Wizard':
  		  this._characterClass = new Wizard();
  		  break;
  		default:
  		  this._characterClass = null;
  	} //switch
	}

	get characterName() {
		return this._characterName;
	}
	get characterClass() {
		return this._characterClass.className;
	}

	// Get Ability Scores
	get str() {
		return this._str;
	}
	get dex() {
		return this._dex;
	}
	get con() {
		return this._con;
	}
	get int() {
		return this._int;
	}
	get wis() {
		return this._wis;
	}
	get cha() {
		return this._cha;
	}

	// Get Ability Modifiers

	get strMod() {
		return Math.floor((this._str - 10)/2);
	}
	get dexMod() {
		return Math.floor((this._dex - 10)/2);
	}
	get conMod() {
		return Math.floor((this._con - 10)/2);
	}
	get intMod() {
		return Math.floor((this._int - 10)/2);
	}
	get wisMod() {
		return Math.floor((this._wis - 10)/2);
	}
	get chaMod() {
		return Math.floor((this._cha - 10)/2);
	}

  // Get BAB and Saves
  get bab(level) {
  	const babScaling = this._characterClass.babScaling;
  	switch (babScaling) {
  		case 'good':
  		  return level;
  		case 'avg':
  		  return Math.floor(level * 0.75);
  		case 'poor':
  		  return Math.floor(level * 0.5);
  	}
  }
  get fortSave(level) {
  	const fortScaling = this._characterClass.fortScaling;
  	switch (fortScaling) {
  		case 'good':
  		  return 2 + Math.floor(level / 2);
  		case 'poor':
  		  return Math.floor(level / 3);
  	}
  }
  get refSave(level) {
  	const refScaling = this._characterClass.refScaling;
  	switch (refScaling) {
  		case 'good':
  		  return 2 + Math.floor(level / 2);
  		case 'poor':
  		  return Math.floor(level / 3);
  	}
  }
  get willSave(level) {
  	const willScaling = this._characterClass.willScaling;
  	switch (willScaling) {
  		case 'good':
  		  return 2 + Math.floor(level / 2);
  		case 'poor':
  		  return Math.floor(level / 3);
  	}
  }

  get classSkillList() {
  	return this._characterClass.skillList;
  }

  get primarySpellAttribute() {
  	if (this._characterClass instanceof Spellcaster) {
  		return this._characterClass.primarySpellAttribute;
  	}
  }
  // Get Spells Per Day
  // Get Spells Known
}