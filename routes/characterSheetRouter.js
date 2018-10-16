var express = require('express');
var characterSheetRouter = express.Router();
var pdfFiller = require('pdffiller');
var path = require('path');

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

characterSheetRouter.post('/', function(req, res, next) {
	const body = req.body;
	const dndCharacterSheetSource = "public/other/dndCharacterSheet.pdf";
	const dndCharacterSheetDestination = "public/other/createdDndCharacterSheet.pdf";
	const shouldFlatten = false;

	pdfFiller.fillFormWithFlatten(dndCharacterSheetSource, dndCharacterSheetDestination,
		body, shouldFlatten, function (err) {
		if (err) {
			throw err;
		}
	});
	res.download(path.resolve(__dirname + '/../public/other/createdDndCharacterSheet.pdf'));
	//res.send('A Character Sheet Has Been Created!');
	res.status(200).send('Character Sheet Created');
});

characterSheetRouter.get('/', function(req, res, next) {
	res.sendFile(path.join(__dirname + "/../public/other/createdDndCharacterSheet.pdf"));
});

module.exports = characterSheetRouter;
