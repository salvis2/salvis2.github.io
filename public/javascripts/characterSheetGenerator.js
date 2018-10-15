// Character Sheet Generator

const pdfFiller = require("pdffiller");

const dndCharacterSheetSource = "public/other/dndCharacterSheet.pdf";
const dndCharacterSheetDestination = "public/other/createdDndCharacterSheet.pdf";
const shouldFlatten = false;

const data = {
	"strBase": "16",
	"dexBase": "13",
	"religionOrDiety": "Pelor",
	"concentrationRanks": "6",
	"concentrationCS": "On",
	"classesLevels": "Cleric 8",
	"armorName": "Masterwork Full Plate",
	"armorMaxDex": "1",
	"armorBonus": "8",
	"armorWeight": "50",
	"fortBase": "6",
	"conBase": "14",
	"spellsPerDay0": "6",
	"spellsPerDay1": "4",
	"spellsPerDay2": "3",
	"spellsPerDay3": "3",
	"spellsPerDay4": "2",
	"domain0": "Good"
};

pdfFiller.fillFormWithFlatten(dndCharacterSheetSource, dndCharacterSheetDestination,
	data, shouldFlatten, function (err) {
	if (err) {
		throw err;
	}
});

