/* 
 * className is a string
 * babScaling can be 'good', 'avg', or 'poor'
 * fort/ref/willScaling can be 'good', 'poor'
 * skillList is a boolean array
 * abilitySpellDependence is either NULL or the ability that determines the strength of the class's spellcasting
 * spellsPerDay is a 2d int array to encapsulate the spells you get at a given level
 * spellsKnown is a 2d int array to encapsultate the spells you know at a given level
 * if spellsPerDay is all 0, you don't know spells
 * if spellsPerDay is not all 0, but spellsKnown is all 0, spellsKnown is not relevant for the character
 * To access the spells known / per day for a class, 
 * Array size is 20*10, for 20 levels and levels 0 thru 9
  [[0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0]]
 */
class DndClass {
	constructor (className, babScaling, fortScaling, refScaling, willScaling, skillList, abilitySpellDependence, spellsPerDay, spellsKnown) {
		this._className = className;
		this._babScaling = babScaling;
		this._fortScaling = fortScaling;
		this._refScaling = refScaling;
		this._willScaling = willScaling;
		this._skillList = skillList;
		this._abilitySpellDependence = abilitySpellDependence;
		this._spellsPerDay = spellsPerDay;
		this._spellsKnown = spellsKnown;
	}
	get className() {
		return this._name;
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
	get spellsPerDay(level) {
		return this._spellsPerDay[level];
	}
	get spellsKnown(level) {
		return this._spellsKnown[level];
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

const barbarian = new DndClass('Barbarian','good','good','poor','poor',  NULL, [0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1, 0,0,0,0,0,0,0,0,0,0,0, 1,0,0, 0,0,0,0,0,0,0,0,0,0,0, 0,0,1,0,0,0,0,1,1,0,0,0,0],NULL,NULL);
const bard =      new DndClass('Bard'     ,'avg' ,'poor','good','good', 'cha', [1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1, 1,1,1,1,1,1,1,1,1,1,1, 1,1,0, 1,1,1,1,1,1,1,1,1,1,1, 1,0,0,1,1,1,1,0,0,1,1,1,1],
															[[2],[3,0],[3,1],[3,2,0],[3,3,1],[3,3,2],[3,3,2,0],[3,3,3,1],[3,3,3,2],[3,3,3,2,0],[3,3,3,3,1],[3,3,3,3,2],[3,3,3,3,2,0],[4,3,3,3,3,1],[4,4,3,3,3,2],[4,4,4,3,3,2,0],[4,4,4,4,3,3,1],[4,4,4,4,4,3,2],[4,4,4,4,4,4,3],[4,4,4,4,4,4,4]],
															[[4],[5,2],[6,3],[6,3,2],[6,4,3],[6,4,4,2],[6,4,4,3],[6,4,4,3],[6,4,4,4,2],[6,4,4,4,3],[6,4,4,4,3],[6,4,4,4,4,2],[6,4,4,4,4,3],[6,4,4,4,4,3],[6,5,4,4,4,4,2],[6,5,5,4,4,4,3],[6,5,5,5,4,4,3],[6,5,5,5,5,4,4],[6,5,5,5,5,5,4]]);
const cleric =    new DndClass('Cleric'   ,'avg' ,'good','poor','good', 'wis', [0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0, 1,0,0,0,1,0,0,0,1,1,1, 0,0,0, 0,0,0,0,0,0,0,0,0,1,1, 1,0,0,0,0,0,1,0,0,0,0,0,0],
															[[3,1],[4,2],[4,2,1],[5,3,2],[5,3,2,1],[5,3,3,2],[6,4,3,2,1],[6,4,3,3,2],[6,4,4,3,2,1],[6,4,4,3,3,2],[6,5,4,4,3,2,1],[6,5,4,4,3,3,2],[6,5,5,4,4,3,2,1],[6,5,5,4,4,3,3,2],[6,5,5,5,4,4,3,2,1],[6,5,5,5,4,4,3,3,2],[6,5,5,5,5,4,4,3,2,1],[6,5,5,5,5,4,4,3,3,2],[6,5,5,5,5,5,4,4,3,3,],[6,5,5,5,5,5,4,4,4,4]],NULL;
const druic =     new DndClass('Druid'    ,'avg' ,'good','poor','good', 'wis', [0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0, 0,0,0,0,0,0,1,0,0,0,0, 1,0,0, 0,0,0,0,0,0,0,0,0,1,1, 1,1,0,0,0,0,1,1,1,1,0,0,0],
															[[3,1],[4,2],[4,2,1],[5,3,2],[5,3,2,1],[5,3,3,2],[6,4,3,2,1],[6,4,3,3,2],[6,4,4,3,2,1],[6,4,4,3,3,2],[6,5,4,4,3,2,1],[6,5,4,4,3,3,2],[6,5,5,4,4,3,2,1],[6,5,5,4,4,3,3,2],[6,5,5,5,4,4,3,2,1],[6,5,5,5,4,4,3,3,2],[6,5,5,5,5,4,4,3,2,1],[6,5,5,5,5,4,4,3,3,2],[6,5,5,5,5,5,4,4,3,3,],[6,5,5,5,5,5,4,4,4,4]],NULL];
const fighter =   new DndClass('Fighter'  ,'good','good','poor','poor',  NULL, [0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1, 0,0,0,0,0,0,0,0,0,0,0, 0,0,0, 0,0,0,0,0,0,0,0,0,0,0, 0,1,0,0,0,0,0,0,1,0,0,0,0],NULL,NULL);
const monk =      new DndClass('Monk'     ,'avg' ,'good','good','good',  NULL, [0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1, 1,0,0,0,0,0,0,0,0,0,1, 1,1,0, 1,1,1,1,1,1,1,1,1,1,1, 0,0,0,1,0,0,1,0,1,1,0,0,0],NULL,NULL);
const paladin =   new DndClass('Paladin'  ,'good','good','poor','poor', 'wis', [0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0, 0,0,0,0,0,0,0,1,0,0,1, 0,0,0, 0,0,0,0,0,0,0,0,0,1,1, 0,1,0,1,0,0,0,0,0,0,0,0,0],
															[[],[],[],[0],[0],[1],[1],[1,0],[1,0],[1,1],[1,1,0],[1,1,1],[1,1,1],[2,1,1,0],[2,1,1,1],[2,2,1,1],[2,2,2,1],[3,2,2,1],[3,3,3,2],[3,3,3,3]],NULL);
const ranger =    new DndClass('Ranger'   ,'good','good','good','poor', 'wis', [0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1, 0,0,1,1,0,0,1,0,0,0,0, 1,1,0, 0,0,0,0,0,0,0,0,0,1,1, 0,1,1,0,0,0,1,1,1,0,0,0,1],
															[[],[],[],[0],[0],[1],[1],[1,0],[1,0],[1,1],[1,1,0],[1,1,1],[1,1,1],[2,1,1,0],[2,1,1,1],[2,2,1,1],[2,2,2,1],[3,2,2,1],[3,3,3,2],[3,3,3,3]],NULL);
const rogue =     new DndClass('Rogue'    ,'avg' ,'poor','good','poor',  NULL, [1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1, 0,0,0,0,0,1,0,0,0,0,0, 1,1,1, 1,1,1,1,1,1,1,1,1,1,1, 0,0,1,1,1,0,1,0,1,1,1,1,1],NULL,NULL);
const sorcerer =  new DndClass('Sorcerer' ,'poor','poor','poor','good', 'cha', [0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0, 1,0,0,0,0,0,0,0,0,1,0, 0,0,0, 0,0,0,0,0,0,0,0,0,1,1, 1,0,0,0,0,1,0,0,0,0,0,0,0],
															[[5,3],[6,4],[6,5],[6,6,3],[6,6,4],[6,6,5,3],[6,6,6,4],[6,6,6,5,3],[6,6,6,6,4],[6,6,6,6,5,3],[6,6,6,6,6,4],[6,6,6,6,6,5,3],[6,6,6,6,6,4],[6,6,6,6,6,5,3],[6,6,6,6,6,6,4],[6,6,6,6,6,5,3],[6,6,6,6,6,6,4],[6,6,6,6,6,6,5,3],[6,6,6,6,6,6,6,4],[6,6,6,6,6,6,6,5,3],[6,6,6,6,6,6,6,6,4],[6,6,6,6,6,6,6,6,5,3],[6,6,6,6,6,6,6,6,6,4],[6,6,6,6,6,6,6,6,6,6]],
															[[4,2],[5,2],[5,3],[6,3,1],[6,4,2],[7,4,2,1],[7,5,3,2],[8,5,3,2,1],[8,5,4,3,2],[9,5,4,3,2,1],[9,5,5,4,3,2],[9,5,5,4,3,2,1],[9,5,5,4,4,3,2],[9,5,5,4,4,3,2,1],[9,5,5,4,4,4,3,2],[9,5,5,4,4,4,3,2,1],[9,5,5,4,4,4,3,3,2],[9,5,5,4,4,4,3,3,2,1],[9,5,5,4,4,4,3,3,3,2],[9,5,5,4,4,4,3,3,3,3]]);
const wizard =    new DndClass('Wizard'   ,'poor','poor','poor','good', 'int', [0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0, 1,1,1,1,1,1,1,1,1,1,1, 0,0,0, 0,0,0,0,0,0,0,0,0,1,1, 1,0,0,0,0,1,0,0,0,0,0,0,0],
															[3,1],[4,2],[4,2,1],[4,3,2],[4,3,2,1],[4,3,3,2],[4,4,3,2,1],[4,4,3,3,2],[4,4,4,3,2,1],[4,4,4,3,3,2],[4,4,4,4,3,2,1],[4,4,4,4,3,3,2],[4,4,4,4,4,3,2,1],[4,4,4,4,4,3,3,2],[4,4,4,4,4,4,3,2,1],[4,4,4,4,4,4,4,3,3,2],[4,4,4,4,4,4,4,4,3,3],[4,4,4,4,4,4,4,4,4,4]],NULL);
