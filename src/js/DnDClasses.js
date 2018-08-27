/*
 * className is a string
 * babScaling can be "good", "avg", or "poor"
 * fort/ref/willScaling can be "good", "poor"
 * skillList is a boolean array
 * hit die and skill points are integers
 * classFeaturesMap and classBonusFeatsMap are Maps
 */
/* jshint esversion: 6 */


class BaseClass {
	constructor (className, hitDie, baseSkillPointsPerLevel, babScaling, fortScaling, refScaling, willScaling, skillList, classFeaturesMap, classBonusFeatsMap) {
		this._className = className;
		this._hitDie = hitDie;
		this._baseSkillPointsPerLevel = baseSkillPointsPerLevel;
		this._babScaling = babScaling;
		this._fortScaling = fortScaling;
		this._refScaling = refScaling;
		this._willScaling = willScaling;
		this._skillList = skillList;
		this._classFeaturesMap = classFeaturesMap;
		this._classBonusFeatsMap = classBonusFeatsMap;
	}
	get className() {
		return this._className;
	}
	get hitDie() {
		return this._hitDie;
	}
	get baseSkillPointsPerLevel() {
		return this._baseSkillPointsPerLevel;
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
	get classFeaturesMap() {
		return this._classFeaturesMap;
	}
	get classBonusFeatsMap() {
		return this._classBonusFeatsMap;
	}
	skillListAsArray() {
		let skillList = this.skillList;
		let skillListArray = [];

		for (let i = 0; i < skillList.length; i++) {
			if (skillList[i] === 1) {
				skillListArray.push(skillNames[i]);
			}
		}

		return skillListArray;
	}

	classFeaturesToArray(level) {
		let classFeatures = this.classFeaturesMap;
		if (classFeatures !== null) {
			let classFeaturesArray = [];
			for (let i = 0; i < classFeatures.length; i++) {
				if (level >= classFeatures[i][0]) {
					classFeaturesArray.push(classFeatures[i][1]);
				}	else {
					break;
				}
			}
			return classFeaturesArray;
		}
		return ["None"];
	}

	classBonusFeatsToArray(level) {
		let classBonusFeats = this.classBonusFeatsMap;
		if (classBonusFeats !== null) {
			let classBonusFeatsArray = [];
			for (let i = 0; i < classBonusFeats.length; i++) {
				if (level >= classBonusFeats[i][0]) {
					classBonusFeatsArray.push(classBonusFeats[i][1]);
				} else {
					break;
				}
			}
			return classBonusFeatsArray;
		}
		return ["None"];
	}
	// Will need to add additional class features for spellcasters and then class-specific ones
	classStatstoArray(level) {
		let classData = [];
		classData.push(`Class Name: ${this.className}`);
		classData.push(`Hit Die: d${this.hitDie}`);
		classData.push(`Skill Points Per Level: ${this.baseSkillPointsPerLevel}`);
		classData.push(`Base Attack Bonus: ${this.babScaling}`);
		classData.push(`Fortitude Base Save: ${this.fortScaling}`);
		classData.push(`Reflex Base Save: ${this.refScaling}`);
		classData.push(`Will Base Save: ${this.willScaling}`);
		classData.push(`Skill List: ${this.skillListAsArray()}`);
		classData.push(`Class Features At Level ${level}: ${this.classFeaturesToArray(level)}`);
		classData.push(`Bonus Feats Given By Level ${level}: ${this.classBonusFeatsToArray(level)}`);
		return classData;
	}
}

class Spellcaster extends BaseClass {
	constructor (className, hitDie, baseSkillPointsPerLevel, babScaling, fortScaling, refScaling, willScaling, skillList, classFeaturesMap, classBonusFeatsMap, primarySpellAttribute, spellsPerDay, spellsKnown) {
		super(className, hitDie, baseSkillPointsPerLevel, babScaling, fortScaling, refScaling, willScaling, skillList, classFeaturesMap, classBonusFeatsMap);
		this._primarySpellAttribute = primarySpellAttribute;
		this._spellsPerDay = spellsPerDay;
		this._spellsKnown = spellsKnown;
	}

	get primarySpellAttribute() {
		return this._primarySpellAttribute;
	}
	spellsPerDay(casterLevel, spellLevel) {
		// All spellcasters have this
		// Out of bounds gives undefined
		return this._spellsPerDay[casterLevel - 1][spellLevel];
	}
	spellsKnown(casterLevel, spellLevel) {
		// Not all spellcasters have this. null should mean that the caster knows all spells that they can cast for their level. 
		// out of bounds gives undefined
		if (this._spellsKnown === null) {
			return null;
		}
		else {
			return this._spellsKnown[casterLevel - 1][spellLevel];
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
var skillNames = ["appraise", "autohypnosis", "balance", "bluff", "climb", "concentration", "craft", "craft", "craft", "decipher script", "diplomacy", "disable device", "disguise", "escape artist", "forgery", "gather information", "handle animal", "heal", "hide", "intimidate", "jump", "knowledge(arcana)", "knowledge (arch/eng)", "knowledge (dungeoneering)", "knowledge (geography)", "knowledge (history)", "knowledge (local)", "knowledge (nature)", "knowledge (nobility/royalty)", "knowledge (the planes)", "knowledge (psionics)", "knowledge (religion)", "listen", "move silently", "open lock", "perform (act)", "perform (comedy)", "perform (dance)", "perform (keyboard)", "perform (oratory)", "perform (percussion)", "perform (string intrument)", "perform (wind instrument)", "perform (sing)", "profession", "profession", "psicraft", "ride", "search", "sense motive", "sleight of hand", "spellcraft", "spot", "survival", "swim", "tumble", "use magic device", "use psionic device", "use rope"];

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
 * primarySpellAttribute is the ability nickname that determines the strength of the class"s spellcasting
 * spellsPerDay is a 2d int array to encapsulate the spells you get at a given level
 * spellsKnown is a 2d int array to encapsultate the spells you know at a given level
 * if a row of the spells per day is empty, the class does not know spells for that class level
 * if spellsKnown is empty, it is not relevant
 * To access the spells known / per day for a class,
 * Check array length every time, since the 2d arrays aren"t rectangular
 */
/* Declare Spells Per Day Arrays */
const bardSpellsPerDay = 
	[ [2],
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

const clericSpellsPerDay = 
	[ [3,1],
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

const druidSpellsPerDay = 
	[ [3,1],
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

const paladinSpellsPerDay = 
	[ [],
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

const rangerSpellsPerDay = 
	[ [],
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

const sorcererSpellsPerDay = 
	[ [5,3],
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

const wizardSpellsPerDay = 
	[ [3,1],
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
const bardSpellsKnown = 
	[ [4],
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

const sorcererSpellsKnown = 
	[ [4,2],
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
const bardPrimarySpellAttribute = "cha";
const clericPrimarySpellAttribute = "wis";
const druidPrimarySpellAttribute = "wis";
const paladinPrimarySpellAttribute = "cha";
const rangerPrimarySpellAttribute = "wis";
const sorcererPrimarySpellAttribute = "cha";
const wizardPrimarySpellAttribute = "int";

/* Declare Class Feature Maps
 * key is the character level
 * value is the array of class features they receive at that level
 * Should I put bonus feats in this? for now...
 * Put normal feats in this? No. Keep a tally of feats in the active character creation app, and output the total.
 */
const barbarianClassFeaturesMap = (
	[ [1, ["Fast Movement","Illiteracy"]],
		[2, ["Uncanny Dodge"]],
		[5, ["Improved Uncanny Dodge"]],
		[14,["Indomitable Will"]],
		[17,["Tireless Rage"]]]
);

const bardClassFeaturesMap = (
	[ [1, ["Bardic Music","Bardic Knowledge","Countersong","Fascinate"]],
		[3, ["Inspire Competence"]],
		[6, ["Suggestion"]],
		[9, ["Inspire Greatness"]],
		[12,["Song of Freedom"]],
		[15,["Inspire Heroics"]],
		[18,["Mass Suggestion"]]]
);

const clericClassFeaturesMap = (
	[ [1, ["Turn or Rebuke Undead"]]]
);

const druidClassFeaturesMap = (
	[ [1, ["Animal Companion","Nature Sense","Wild Empathy"]],
		[2, ["Woodland Stride"]],
		[3, ["Trackless Step"]],
		[4, ["Resist Nature\"s Lure"]],
		[9, ["Venom Immunity"]],
		[13,["A Thousand Faces"]],
		[15,["Timeless Body"]]]
);

const fighterClassFeaturesMap = null;

const monkClassFeaturesMap = (
	[ [1, ["Flurry of Blows","Unarmed Strike"]],
		[2, ["Evasion"]],
		[3, ["Still Mind"]],
		[5, ["Purity of Body"]],
		[7, ["Wholeness of Body"]],
		[9, ["Improved Evasion"]],
		[11,["Diamond Body"]],
		[12,["Abundant Step"]],
		[13,["Diamond Soul"]],
		[15,["Quivering Palm"]],
		[17,["Timeless Body","Tongue of the Sun and Moon"]],
		[19,["Empty Body"]],
		[20,["Perfect Self"]]]
);

const paladinClassFeaturesMap = (
	[ [1, ["Aura of Good","Detect Evil"]],
		[2, ["Divine Grace","Lay on Hands"]],
		[3, ["Aura of Courage","Divine Health"]],
		[4, ["Turn Undead"]],
		[5, ["Special Mount"]]]
);

const rangerClassFeaturesMap = (
	[ [1, ["Wild Empathy"]],
		[4, ["Animal Companion"]],
		[7, ["Woodland Stride"]],
		[8, ["Swift Tracker"]],
		[9, ["Evasion"]],
		[13,["Camouflage"]],
		[17,["Hide in Plain Sight"]]]
);

const rogueClassFeaturesMap = (
	[ [1, ["Trapfinding"]],
		[2, ["Evasion"]],
		[4, ["Uncanny Dodge"]],
		[8, ["Improved Uncanny Dodge"]],
		[10,["Special Ability"]],
		[13,["Special Ability"]],
		[16,["Special Ability"]],
		[19,["Special Ability"]]]
);

const sorcererClassFeaturesMap = (
	[ [1, ["Summon Familiar"]]]
);

const wizardClassFeaturesMap = (
	[	[1, ["Summon Familiar"]]]
);

/* Declare Class Bonus Feats Maps
 * Can hold "Bonus Feat" or the name of the feat
 */
const barbarianBonusFeatMap = null;

const bardBonusFeatMap = null;

const clericBonusFeatMap = null;

const druidBonusFeatMap = null;

const fighterBonusFeatMap = (
	[ [1, ["Bonus Feat"]],
		[2, ["Bonus Feat"]],
		[4, ["Bonus Feat"]],
		[6, ["Bonus Feat"]],
		[8, ["Bonus Feat"]],
		[10,["Bonus Feat"]],
		[12,["Bonus Feat"]],
		[14,["Bonus Feat"]],
		[16,["Bonus Feat"]],
		[18,["Bonus Feat"]],
		[20,["Bonus Feat"]]]
);

const monkBonusFeatMap = (
	[ [1, ["Bonus Feat","Improved Unarmed Strike"]],
		[2, ["Bonus Feat"]],
		[6, ["Bonus Feat"]]]
);

const paladinBonusFeatMap = null;

const rangerBonusFeatMap = (
	[ [1, ["Track"]],
		[2, ["Combat Style"]],
		[3, ["Endurance"]],
		[6, ["Improved Combat Style"]],
		[11,["Combat Style Mastery"]]]
);

const rogueBonusFeatMap = null;

const sorcererBonusFeatMap = null;

const wizardBonusFeatMap = (
	[ [1, ["Scribe Scroll"]],
		[5, ["Bonus Feat"]],
		[10,["Bonus Feat"]],
		[15,["Bonus Feat"]],
		[20,["Bonus Feat"]]]
);


/* Declare Specific DnD Class Objects
 * constructor (className, hitDie, baseSkillPointsPerLevel, babScaling, fortScaling, refScaling, willScaling, skillList, classFeaturesMap, classBonusFeatsMap) 
 * constructor (className, hitDie, baseSkillPointsPerLevel, babScaling, fortScaling, refScaling, willScaling, skillList, classFeaturesMap, classBonusFeatsMap, primarySpellAttribute, spellsPerDay, spellsKnown) 
 * Should base class objects have an array of class features? feats? 
 * map. key for level, array of strings for value. reduce clutter.
 * Gonna need a large switch statement to write the character outputs to the pdf
 */

export class Barbarian extends BaseClass {
	constructor() {
		super("Barbarian",12,4,"good","good","poor","poor",barbarianSkillList, barbarianClassFeaturesMap, barbarianBonusFeatMap);
	}

	rageBonuses(level) {
		// format as ["rageType","strBonus","conBonus","willBonus","acPenalty"]
		let rageBonuses;
		if (level >= 11 && level < 20) {
			rageBonuses = ["Greater",6,6,3,-2];
		}
		else if (level >= 20) {
			rageBonuses = ["Mighty",8,8,4,-2];
		}
		else { // Barbarian levels 1 - 10
			rageBonuses = ["Normal",4,4,2,-2];
		}

		return rageBonuses;
	}

	ragesPerDay(level) {
		return 1 + Math.floor(level/4);
	}

	trapSenseBonus(level) {
		return Math.floor(level/3);
	}

	damageReduction(level) {
		if (level >= 7) {
			return Math.floor((level - 4)/3);
		}
		else {
			return 0;
		}
	}
}

export class Bard extends Spellcaster {
	constructor() {
		super("Bard",6,6,"avg","poor","good","good",bardSkillList, bardClassFeaturesMap, bardBonusFeatMap,bardPrimarySpellAttribute,bardSpellsPerDay,bardSpellsKnown);
	}
	// Get inspire courage +
	inspireCourageBonus(level) {
		if (level < 8) {
			return 1;
		}
		else return 1 + Math.floor((level - 2)/6);
	}
}

export class Cleric extends Spellcaster {
	constructor() {
		super("Cleric",8,2,"avg","good","poor","good",clericSkillList,clericClassFeaturesMap,clericBonusFeatMap,clericPrimarySpellAttribute,clericSpellsPerDay,clericSpellsKnown);
	}
	// Get turn/rebuke undead numbers in app
}

export class Druid extends Spellcaster {
	constructor() {
		super("Druid",8,4,"avg","good","poor","good",druidSkillList,druidClassFeaturesMap,druidBonusFeatMap,druidPrimarySpellAttribute,druidSpellsPerDay,druidSpellsKnown);
	}
	// Get wild shape / day, wild shape options
	wildShapesPerDay(level) {
		let total = 0;

		if (level >= 5) {
			total++;
		}
		if (level >= 6) {
			total++;
		}
		if (level >= 7 ) {
			total++;
		}
		if (level >= 10) {
			total++;
		}
		if (level >= 14) {
			total++;
		}
		if (level >= 18) {
			total++;
		}
		return total;
	}

	elementalWildShapesPerDay(level) {
		let total = 0;
		if (level >= 16) {
			total++;
		}
		if (level >= 18) {
			total++;
		}
		if (level >= 20) {
			total++;
		}
		return total;
	}

	wildShapeOptions(level) {
		let wildShapeOptions = [];

		if (level >= 5) {
			wildShapeOptions.push("Small Animal");
			wildShapeOptions.push("Medium Animal");
		}
		if (level >= 8) {
			wildShapeOptions.push("Large Animal");
		}
		if (level >= 11) {
			wildShapeOptions.push("Tiny Animal");
		}
		if (level >= 15) {
			wildShapeOptions.push("Huge Animal");
		}
		if (level >= 12) {
			wildShapeOptions.push("Plant");
		}
		if (level >= 16) {
			wildShapeOptions.push("Small, Medium, or Large Elemental");
		}
		if (level >= 20) {
			wildShapeOptions.push("Huge Elemental");
		}
	}
}

export class Fighter extends BaseClass {
	constructor() {
		super("Fighter",10,2,"good","good","poor","poor",fighterSkillList,fighterClassFeaturesMap,fighterBonusFeatMap);
	}
}

export class Monk extends BaseClass {
	constructor() {
		super("Monk",8,4,"avg","good","good","good",monkSkillList,monkClassFeaturesMap,monkBonusFeatMap);
	}
	// Get speed bonus, ac bonus, unarmed damage, flurry of blows, slow fall
	kiStrikeTypes(level) {
		let kiStrikeTypes = [];

		if (level > 3) {
			kiStrikeTypes.push("Magic");
		}
		if (level > 9) {
			kiStrikeTypes.push("Lawful");
		}
		if (level > 16) {
			kiStrikeTypes.push("Adamantine");
		}

		return kiStrikeTypes;
	}

	slowFallDistance(level) {
		if (level < 4) {
			return 0;
		}
		else if (level < 20) {
			return 10 * Math.floor(level / 2);
		}
		else { // level >= 20
			return Infinity;
		}
	}

	unarmedDamage(level) { 
		// unarmedDamage[0] is the number of dice, unarmedDamage[1] is the die size
		let unarmedDamage;

		if (level < 4) {
			unarmedDamage = [1,6];
		}
		else if (level < 8) {
			unarmedDamage = [1,8];
		}
		else if (level < 12) {
			unarmedDamage = [1,10];
		}
		else if (level < 16) {
			unarmedDamage = [2,6];
		}
		else if (level < 20) {
			unarmedDamage = [2,8];
		}
		else {
			unarmedDamage = [2,10];
		}

		return unarmedDamage;
	}

	monkACBonus(level) {
		return Math.floor(level / 5);
	}

	monkSpeedBonus(level) {
		return 10 * Math.floor(level / 3);
	}

	flurryOfBlowsAdjustments(level) {
		// Contains the negative offset from base attack bonus [0] and the number of attacks at highest bonus [1]
		let flurryOfBlowsAdjustments;

		if (level < 5) {
			flurryOfBlowsAdjustments = [-2,2];
		}
		else if (level < 9) {
			flurryOfBlowsAdjustments = [-1,2];
		}
		else {
			flurryOfBlowsAdjustments = [0,3];
		}

		return flurryOfBlowsAdjustments;
	}
}
export class Paladin extends Spellcaster {
	constructor() {
		super("Paladin",10,2,"good","good","poor","poor",paladinSkillList,paladinClassFeaturesMap,paladinBonusFeatMap,paladinPrimarySpellAttribute,paladinSpellsPerDay,paladinSpellsKnown);
	}
	// Get smite evil / day, remove disease / day, lay on hands
	smiteEvilPerDay(level) {
		return 1 + Math.floor(level/5);
	}
	removeDiseasePerWeek(level) {
		if (level < 6) {
			return 0;
		}
		else {
			return Math.floor((level - 3)/3);
		}
	}
}

export class Ranger extends Spellcaster {
	constructor() {
		super("Ranger",8,6,"good","good","good","poor",rangerSkillList,rangerClassFeaturesMap,rangerBonusFeatMap,rangerPrimarySpellAttribute,rangerSpellsPerDay,rangerSpellsKnown);
	}
	// Get favored enemies, favored enemies" bonuses, combat style?
	// Set favored enemies and bonus?

}

export class Rogue extends BaseClass {
	constructor() {
		super("Rogue",6,8,"avg","poor","good","poor",rogueSkillList,rogueClassFeaturesMap,rogueBonusFeatMap);
	}
	// Get sneak attack, trap sense 
	sneakAttackBonus(level) {
		return Math.floor((level + 1)/2);
	}
	trapSenseBonus(level) {
		return Math.floor(level/3);
	}
}

export class Sorcerer extends Spellcaster {
	constructor() {
		super("Sorcerer",4,2,"poor","poor","poor","good",sorcererSkillList,sorcererClassFeaturesMap,sorcererBonusFeatMap,sorcererPrimarySpellAttribute,sorcererSpellsPerDay,sorcererSpellsKnown);
	}
}

export class Wizard extends Spellcaster {
	constructor() {
		super("Wizard",4,2,"poor","poor","poor","good",wizardSkillList,wizardClassFeaturesMap,wizardBonusFeatMap,wizardPrimarySpellAttribute,wizardSpellsPerDay,wizardSpellsKnown);
	}
}

/* Declare character object 
 * Save all of the info for these objects into database
 * Except the character object, just save the name
 * How will I work with the races? Race object
 */

export class BaseRace {
	constructor(raceName ) {
		this._raceName = raceName;
	}
}

export class Character {
	constructor(characterName, characterClass, level, race, str, dex, con, int0, wis, cha) {
		this._characterName = characterName;
		this._level = level;
		this._race = race;
		this._str = str;
		this._dex = dex;
		this._con = con;
		this._int = int0;
		this._wis = wis;
		this._cha = cha;

		// Set Character Class Object
		switch (characterClass) {
		case "Barbarian":
			this._characterClass = new Barbarian();
			break;
		case "Bard":
			this._characterClass = new Bard();
			break;
		case "Cleric":
			this._characterClass = new Cleric();
			break;
		case "Druid":
			this._characterClass = new Druid();
			break;
		case "Fighter":
			this._characterClass = new Fighter();
			break;
		case "Monk":
			this._characterClass = new Monk();
			break;
		case "Paladin":
			this._characterClass = new Paladin();
			break;
		case "Ranger":
			this._characterClass = new Ranger();
			break;
		case "Rogue":
			this._characterClass = new Rogue();
			break;
		case "Sorcerer":
			this._characterClass = new Sorcerer();
			break;
		case "Wizard":
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
	get level() {
		return this._level;
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
	get int0() {
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
	bab(level) {
		const babScaling = this._characterClass.babScaling;
		switch (babScaling) {
		case "good":
			return level;
		case "avg":
			return Math.floor(level * 0.75);
		case "poor":
			return Math.floor(level * 0.5);
		}
	}
	fortSave(level) {
		const fortScaling = this._characterClass.fortScaling;
		switch (fortScaling) {
		case "good":
			return 2 + Math.floor(level / 2);
		case "poor":
			return Math.floor(level / 3);
		}
	}
	refSave(level) {
		const refScaling = this._characterClass.refScaling;
		switch (refScaling) {
		case "good":
			return 2 + Math.floor(level / 2);
		case "poor":
			return Math.floor(level / 3);
		}
	}
	willSave(level) {
		const willScaling = this._characterClass.willScaling;
		switch (willScaling) {
		case "good":
			return 2 + Math.floor(level / 2);
		case "poor":
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
		else return null;
	}
	// Get Spells Per Day and Spells Known
	spellsPerDay(spellLevel) {
		return this._characterClass.spellsPerDay(this._level, spellLevel);
	}
	spellsKnown(spellLevel) {
		return this._characterClass.spellsKnown(this._level, spellLevel);
	}
}