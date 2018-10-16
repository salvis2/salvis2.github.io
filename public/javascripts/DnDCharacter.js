import { Spellcaster, Barbarian, Bard, Cleric, Druid,
	Fighter, Monk, Paladin, Ranger, Rogue, Sorcerer, Wizard }
	from "./DnDClasses.js";
import { Human, Dwarf, Elf, Gnome, Half_Elf, Half_Orc, Halfling }
	from "./DnDRaces.js";

export class Character {
	constructor(characterName, characterClass, characterRace,
		level, str, dex, con, inte, wis, cha) {
		this._characterName = characterName;
		this._level = level;
		this._str = str;
		this._dex = dex;
		this._con = con;
		this._int = inte;
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
		}
		// Set Character Race Object
		switch (characterRace) {
		case "Human":
			this._characterRace = new Human();
			break;
		case "Elf":
			this._characterRace = new Elf();
			break;
		case "Dwarf":
			this._characterRace = new Dwarf();
			break;
		case "Gnome":
			this._characterRace = new Gnome();
			break;
		case "Half-Elf":
			this._characterRace = new Half_Elf();
			break;
		case "Half=Orc":
			this._characterRace = new Half_Orc();
			break;
		case "Halfling":
			this._characterRace = new Halfling();
			break;
		default:
			this._characterRace = null;
		}
	}

	get characterName() {
		return this._characterName;
	}
	get characterClass() {
		return this._characterClass.className;
	}
	get characterRace() {
		return this._characterRace.raceName;
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
	get inte() {
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
		return Math.floor((this._str - 10) / 2);
	}
	get dexMod() {
		return Math.floor((this._dex - 10) / 2);
	}
	get conMod() {
		return Math.floor((this._con - 10) / 2);
	}
	get intMod() {
		return Math.floor((this._int - 10) / 2);
	}
	get wisMod() {
		return Math.floor((this._wis - 10) / 2);
	}
	get chaMod() {
		return Math.floor((this._cha - 10) / 2);
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
		default:
			return -1;
		}
	}
	fortSave(level) {
		const fortScaling = this._characterClass.fortScaling;
		switch (fortScaling) {
		case "good":
			return 2 + Math.floor(level / 2);
		case "poor":
			return Math.floor(level / 3);
		default:
			return -1;
		}
	}
	refSave(level) {
		const refScaling = this._characterClass.refScaling;
		switch (refScaling) {
		case "good":
			return 2 + Math.floor(level / 2);
		case "poor":
			return Math.floor(level / 3);
		default:
			return -1;
		}
	}
	willSave(level) {
		const willScaling = this._characterClass.willScaling;
		switch (willScaling) {
		case "good":
			return 2 + Math.floor(level / 2);
		case "poor":
			return Math.floor(level / 3);
		default:
			return -1;
		}
	}

	get classSkillList() {
		return this._characterClass.skillList;
	}

	get primarySpellAttribute() {
		if (this._characterClass instanceof Spellcaster) {
			return this._characterClass.primarySpellAttribute;
		}
		return null;
	}
	// Get Spells Per Day and Spells Known
	spellsPerDay(spellLevel) {
		return this._characterClass.spellsPerDay(this._level)[spellLevel];
	}
	spellsKnown(spellLevel) {
		return this._characterClass.spellsKnown(this._level)[spellLevel];
	}

	createBodyData() {
		let bodyData = {};

		return bodyData;
	}
}
