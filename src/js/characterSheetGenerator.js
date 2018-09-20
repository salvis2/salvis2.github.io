// Character Sheet Generator
import pdftk from "node-pdftk";

export function fillDndCharacterSheet(data) {
	pdftk
		.input("../etc/dndCharacterSheet.pdf")
		.fillForm(data)
		.output()
		.then(buffer => {
			console.log("Character Sheet Created");
			res.type("application.pdf");
			res.send(buffer);
		})
		.catch(next);
}
/*
const pdfFiller = require("pdffiller");

const dndCharacterSheetSource = "../etc/dndCharacterSheet.pdf";
const dndCharacterSheetDestination = "../etc/createdDndCharacterSheet.pdf";
const shouldFlatten = false;

	pdfFiller.fillFormWithFlatten(dndCharacterSheetSource, dndCharacterSheetDestination,
		data, shouldFlatten, function (err) {
			if (err) {
				throw err;
			}
		});
*/
