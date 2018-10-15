var express = require('express');
var characterSheetRouter = express.Router();
var pdfFiller = require('pdffiller');
var path = require('path');

const dndCharacterSheetSource = "public/other/dndCharacterSheet.pdf";
const dndCharacterSheetDestination = "public/other/createdDndCharacterSheet.pdf";
const shouldFlatten = false;

const data = {
        "strBase": "12",
        "dexBase": "14",
        "religionOrDiety": "Pelor",
        "concentrationRanks": "6",
        "concentrationCS": "On",
        "classesLevels": "Cleric 8",
        "armorName": "Masterwork Full Plate",
        "armorMaxDex": "1",
        "armorBonus": "8",
        "armorWeight": "34",
        "fortBase": "6",
        "conBase": "17",
	"refBase": "2",
	"willBase": "6",
        "spellsPerDay0": "6",
        "spellsPerDay1": "4",
        "spellsPerDay2": "3",
        "spellsPerDay3": "3",
        "spellsPerDay4": "2",
        "domain0": "Good"
};

characterSheetRouter.get('/', function(req, res, next) {
	pdfFiller.fillFormWithFlatten(dndCharacterSheetSource, dndCharacterSheetDestination,
		data, shouldFlatten, function (err) {
		if (err) {
			throw err;
		}
	});
	res.sendFile(path.join(__dirname + "/../public/other/createdDndCharacterSheet.pdf"));
});

module.exports = characterSheetRouter;
