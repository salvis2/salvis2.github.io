// Dungeons and Dragons Races
// add languages
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
	get size() {
		return this._size;
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
}

export class Humon extends BaseRace {
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

export class Halfing extends BaseRace {
	constructor() {
		super("Halfling", "S", 20,
			[["Dexterity", -2], ["Strength", -2]],
			[["Climb", 2], ["Jump", 2], ["Move Silently", 2], ["Listen", 2]],
			["Common", "Halfling"]
		);
	}
}
