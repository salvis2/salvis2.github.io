// Character Sheet Generator

const pdfFiller = require("pdffiller");

const dndCharacterSheetSource = "public/other/dndCharacterSheet.pdf";
const dndCharacterSheetDestination = "public/other/createdDndCharacterSheet.pdf";
const shouldFlatten = false;

const data = {
	"strScore": "16",
	"dexScore": "13"
};

pdfFiller.fillFormWithFlatten(dndCharacterSheetSource, dndCharacterSheetDestination,
	data, shouldFlatten, function (err) {
	if (err) {
		throw err;
	}
});

