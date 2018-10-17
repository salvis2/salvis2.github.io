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

		this.createBodyData = this.createBodyData.bind(this);

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
		const classSkills = this.classSkillList;
		const level = this.level;

		console.log(classSkills.length);

		let bodyData = [
			// Basic Info
			{ characterName: this.characterName },
			{ classesLevels: `${this.characterClass} ${level}` },
			// raceOrTemplate: this.characterRace,

			// Ability Scores
			// Add Race Adjustments after the Race Selection Component is Introduced
			{ strBase: this.str },
			{ dexBase: this.dex },
			{ conBase: this.con },
			{ intBase: this.inte },
			{ wisBase: this.wis },
			{ chaBase: this.cha },

			// Race Basics

			// Class Basics
			{ bab: this.bab(level) },
			{ fortBase: this.fortSave(level) },
			{ refBase: this.refSave(level) },
			{ willBase: this.willSave(level) },

			// Class Skills
			{ appraiseCS: classSkills[0] ? "On" : "Off" },
			{ autohypnosisCS: classSkills[1] ? "On" : "Off" },
			{ balanceCS: classSkills[2] ? "On" : "Off" },
			{ bluffCS: classSkills[3] ? "On" : "Off" },
			{ climbCS: classSkills[4] ? "On" : "Off" },
			{ concentrationCS: classSkills[5] ? "On" : "Off" },
			{ craft0CS: classSkills[6] ? "On" : "Off" },
			{ craft1CS: classSkills[7] ? "On" : "Off" },
			{ craft2CS: classSkills[8] ? "On" : "Off" },
			{ decipherScriptCS: classSkills[9] ? "On" : "Off" },
			{ diplomacyCS: classSkills[10] ? "On" : "Off" },
			{ disableDeviceCS: classSkills[11] ? "On" : "Off" },
			{ disguiseCS: classSkills[12] ? "On" : "Off" },
			{ escapeArtistCS: classSkills[13] ? "On" : "Off" },
			{ forgeryCS: classSkills[14] ? "On" : "Off" },
			{ gatherInfoCS: classSkills[15] ? "On" : "Off" },
			{ handleAnimalCS: classSkills[16] ? "On" : "Off" },
			{ healCS: classSkills[17] ? "On" : "Off" },
			{ hideCS: classSkills[18] ? "On" : "Off" },
			{ intimidateCS: classSkills[19] ? "On" : "Off" },
			{ jumpCS: classSkills[20] ? "On" : "Off" },
			{ knowArcanaCS: classSkills[21] ? "On" : "Off" },
			{ knowArchEngCS: classSkills[22] ? "On" : "Off" },
			{ knowDungeonCS: classSkills[23] ? "On" : "Off" },
			{ knowGeographyCS: classSkills[24] ? "On" : "Off" },
			{ knowHistoryCS: classSkills[25] ? "On" : "Off" },
			{ knowLocalCS: classSkills[26] ? "On" : "Off" },
			{ knowNatureCS: classSkills[27] ? "On" : "Off" },
			{ knowNobilityCS: classSkills[28] ? "On" : "Off" },
			{ knowPlanesCS: classSkills[29] ? "On" : "Off" },
			{ knowPsionicsCS: classSkills[30] ? "On" : "Off" },
			{ knowReligionCS: classSkills[31] ? "On" : "Off" },
			{ listenCS: classSkills[32] ? "On" : "Off" },
			{ moveSilentlyCS: classSkills[33] ? "On" : "Off" },
			{ openLockCS: classSkills[34] ? "On" : "Off" },
			{ performActCS: classSkills[35] ? "On" : "Off" },
			{ performComedyCS: classSkills[36] ? "On" : "Off" },
			{ performDanceCS: classSkills[37] ? "On" : "Off" },
			{ performKeyboardCS: classSkills[38] ? "On" : "Off" },
			{ performOratoryCS: classSkills[39] ? "On" : "Off" },
			{ performPercussionCS: classSkills[40] ? "On" : "Off" },
			{ performStringCS: classSkills[41] ? "On" : "Off" },
			{ performWindCS: classSkills[42] ? "On" : "Off" },
			{ performSingCS: classSkills[43] ? "On" : "Off" },
			{ profession0CS: classSkills[44] ? "On" : "Off" },
			{ profession1CS: classSkills[45] ? "On" : "Off" },
			{ pricraftCS: classSkills[46] ? "On" : "Off" },
			{ rideCS: classSkills[47] ? "On" : "Off" },
			{ searchCS: classSkills[48] ? "On" : "Off" },
			{ senseMotiveCS: classSkills[49] ? "On" : "Off" },
			{ sleightOfHandCS: classSkills[50] ? "On" : "Off" },
			{ spellcraftCS: classSkills[51] ? "On" : "Off" },
			{ spotCS: classSkills[52] ? "On" : "Off" },
			{ survivalCS: classSkills[53] ? "On" : "Off" },
			{ swimCS: classSkills[54] ? "On" : "Off" },
			{ tumbleCS: classSkills[55] ? "On" : "Off" },
			{ useMagicDevCS: classSkills[56] ? "On" : "Off" },
			{ usePsionicDevCS: classSkills[57] ? "On" : "Off" },
			{ useRope: classSkills[58] ? "On" : "Off" }
		];

		// Spellcaster Options
		if (this._characterClass instanceof Spellcaster) {
			// need to distinguish between classes with 0th level spells and otherwise
			// Can I use a variable for the name of the object?
			// To iterate thru the spells per day items
			if (this._characterClass instanceof Paladin || this._characterClass instanceof Ranger) {
				// levels 1 to 4
				if (this.spellsPerDay(0) !== undefined) {
					bodyData.push({ spellsPerDay1: this.spellsPerDay(0) });
				}
				if (this.spellsPerDay(1) !== undefined) {
					bodyData.push({ spellsPerDay2: this.spellsPerDay(1) });
				}
				if (this.spellsPerDay(2) !== undefined) {
					bodyData.push({ spellsPerDay3: this.spellsPerDay(2) });
				}
				if (this.spellsPerDay(3) !== undefined) {
					bodyData.push({ spellsPerDay4: this.spellsPerDay(3) });
				}
			}	else if (this._characterClass instanceof Bard) {
				// levels 1 to 6
				// Spells Per Day and Spells Known
				if (this.spellsPerDay(0) !== undefined) {
					bodyData.push({ spellsPerDay1: this.spellsPerDay(0) });
					bodyData.push({ spellsKnown1: this.spellsKnown(0) });
				}
				if (this.spellsPerDay(1) !== undefined) {
					bodyData.push({ spellsPerDay2: this.spellsPerDay(1) });
					bodyData.push({ spellsKnown2: this.spellsKnown(1) });
				}
				if (this.spellsPerDay(2) !== undefined) {
					bodyData.push({ spellsPerDay3: this.spellsPerDay(2) });
					bodyData.push({ spellsKnown3: this.spellsKnown(2) });
				}
				if (this.spellsPerDay(3) !== undefined) {
					bodyData.push({ spellsPerDay4: this.spellsPerDay(3) });
					bodyData.push({ spellsKnown4: this.spellsKnown(3) });
				}
				if (this.spellsPerDay(4) !== undefined) {
					bodyData.push({ spellsPerDay5: this.spellsPerDay(4) });
					bodyData.push({ spellsKnown5: this.spellsKnown(4) });
				}
				if (this.spellsPerDay(5) !== undefined) {
					bodyData.push({ spellsPerDay6: this.spellsPerDay(5) });
					bodyData.push({ spellsKnown6: this.spellsKnown(5) });
				}
			}	else if (this._characterClass instanceof Sorcerer) {
				// levels 0 to 9 spells per day and spells known
				if (this.spellsPerDay(0)) {
					bodyData.push({ spellsPerDay0: this.spellsPerDay(0) });
					bodyData.push({ spellsKnown0: this.spellsKnown(0) });
				}
				if (this.spellsPerDay(1)) {
					bodyData.push({ spellsPerDay1: this.spellsPerDay(1) });
					bodyData.push({ spellsKnown1: this.spellsKnown(1) });
				}
				if (this.spellsPerDay(2)) {
					bodyData.push({ spellsPerDay2: this.spellsPerDay(2) });
					bodyData.push({ spellsKnown2: this.spellsKnown(2) });
				}
				if (this.spellsPerDay(3)) {
					bodyData.push({ spellsPerDay3: this.spellsPerDay(3) });
					bodyData.push({ spellsKnown3: this.spellsKnown(3) });
				}
				if (this.spellsPerDay(4)) {
					bodyData.push({ spellsPerDay4: this.spellsPerDay(4) });
					bodyData.push({ spellsKnown4: this.spellsKnown(4) });
				}
				if (this.spellsPerDay(5)) {
					bodyData.push({ spellsPerDay5: this.spellsPerDay(5) });
					bodyData.push({ spellsKnown5: this.spellsKnown(5) });
				}
				if (this.spellsPerDay(6)) {
					bodyData.push({ spellsPerDay6: this.spellsPerDay(6) });
					bodyData.push({ spellsKnown6: this.spellsKnown(6) });
				}
				if (this.spellsPerDay(7)) {
					bodyData.push({ spellsPerDay7: this.spellsPerDay(7) });
					bodyData.push({ spellsKnown7: this.spellsKnown(7) });
				}
				if (this.spellsPerDay(8)) {
					bodyData.push({ spellsPerDay8: this.spellsPerDay(8) });
					bodyData.push({ spellsKnown8: this.spellsKnown(8) });
				}
				if (this.spellsPerDay(9)) {
					bodyData.push({ spellsPerDay9: this.spellsPerDay(9) });
					bodyData.push({ spellsKnown9: this.spellsKnown(9) });
				}
			}	else {
				// Wizard, Druid, or Cleric
				// levels 0 to 9
				if (this.spellsPerDay(0)) {
					bodyData.push({ spellsPerDay0: this.spellsPerDay(0) });
				}
				if (this.spellsPerDay(1)) {
					bodyData.push({ spellsPerDay1: this.spellsPerDay(1) });
				}
				if (this.spellsPerDay(2)) {
					bodyData.push({ spellsPerDay2: this.spellsPerDay(2) });
				}
				if (this.spellsPerDay(3)) {
					bodyData.push({ spellsPerDay3: this.spellsPerDay(3) });
				}
				if (this.spellsPerDay(4)) {
					bodyData.push({ spellsPerDay4: this.spellsPerDay(4) });
				}
				if (this.spellsPerDay(5)) {
					bodyData.push({ spellsPerDay5: this.spellsPerDay(5) });
				}
				if (this.spellsPerDay(6)) {
					bodyData.push({ spellsPerDay6: this.spellsPerDay(6) });
				}
				if (this.spellsPerDay(7)) {
					bodyData.push({ spellsPerDay7: this.spellsPerDay(7) });
				}
				if (this.spellsPerDay(8)) {
					bodyData.push({ spellsPerDay8: this.spellsPerDay(8) });
				}
				if (this.spellsPerDay(9)) {
					bodyData.push({ spellsPerDay9: this.spellsPerDay(9) });
				}
			}
		}

		return bodyData;
	}
}
