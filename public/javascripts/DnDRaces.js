// Dungeons and Dragons Races
// add bonus languages
// add save bonuses, conditional
// add visions?
// How much do I just put under Racial Features?

// Have an entry for other
// just print that they should know it exists, but it won't go on the sheet?

export class BaseRace {
	constructor(raceName, size, speed,
		abilityScoreAdjustments,
		skillModifiers,
		languages) {
		this._raceName = raceName;
		this._size = size;
		this._speed = speed;
		this._abilityScoreAdjustments = abilityScoreAdjustments;
		this._skillModifiers = skillModifiers;
		this._languages = languages;
	}
	get raceName() {
		return this._raceName;
	}
	size() {
		let raceSize;
		switch (this._size) {
		case "M":
			raceSize = "Medium";
			break;
		case "S":
			raceSize = "Small";
			break;
		default:
			raceSize = null;
			console.log(`Invalid Size`);
		}
		return raceSize;
	}
	get speed() {
		return this._speed;
	}
	get abilityScoreAdjustments() {
		return this._abilityScoreAdjustments;
	}
	get skillModifiers() {
		return this._skillModifiers;
	}
	get languages() {
		return this._languages;
	}

	racialTraitsToArray() {
		let racialTraits = [];

		racialTraits.push(`Size: ${ this.size() }`);
		racialTraits.push(`Base Land Speed: ${ this.speed }\'`);

		// Ability Score Adjustments
		for (let i = 0; i < this.abilityScoreAdjustments.length; i += 1) {
			if (this.abilityScoreAdjustments[i][1] < 0) {
				racialTraits.push(`${ this.abilityScoreAdjustments[i][0] } Penalty:${" "}
					${this.abilityScoreAdjustments[i][1]}`);
			} else {
				racialTraits.push(`${ this.abilityScoreAdjustments[i][0] } Bonus:${" "}
					+${this.abilityScoreAdjustments[i][1]}`);
			}
		}

		// Skill Bonuses
		for (let i = 0; i < this.skillModifiers.length; i += 1) {
			racialTraits.push(`${ this.skillModifiers[i][0] } Bonus: +${ this.skillModifiers[i][1]}`);
		}

		racialTraits.push(`Automatic Languages: ${ this.languages }`);

		return racialTraits;
	}
}

export class Human extends BaseRace {
	constructor() {
		super("Humon", "M", 30,
			[],
			[],
			["Common"]
		);
	}
}

export class Dwarf extends BaseRace {
	constructor() {
		super("Dwarf", "M", 20,
			[["Constitution", 2], ["Charisma", -2]],
			[["Appraise", 2], ["Craft", 2]],
			["Common", "Dwarven"]
		);
	}
}

export class Elf extends BaseRace {
	constructor() {
		super("Elf", "M", 30,
			[["Dexterity", 2], ["Constitution", -2]],
			[["Listen", 2], ["Search", 2], ["Spot", 2]],
			["Common", "Elven"]
		);
	}
}

export class Gnome extends BaseRace {
	constructor() {
		super("Gnome", "S", 20,
			[["Constitution", 2], ["Strength", -2]],
			[["Listen", 2], ["Craft (alchemy)", 2]],
			["Common", "Gnome"]
		);
	}
}

export class Half_Elf extends BaseRace {
	constructor() {
		super("Half-Elf", "M", 30,
			[],
			[["Listen", 1], ["Search", 1], ["Spot", 1], ["Diplomacy", 2], ["Gather Information", 2]],
			["Common", "Elven"]
		);
	}
}

export class Half_Orc extends BaseRace {
	constructor() {
		super("Half-Orc", "M", 30,
			[["Strength", 2], ["Intelligence", -2], ["Charisma", -2]],
			[],
			["Common", "Orc"]
		);
	}
}

export class Halfling extends BaseRace {
	constructor() {
		super("Halfling", "S", 20,
			[["Dexterity", -2], ["Strength", -2]],
			[["Climb", 2], ["Jump", 2], ["Move Silently", 2], ["Listen", 2]],
			["Common", "Halfling"]
		);
	}
}
