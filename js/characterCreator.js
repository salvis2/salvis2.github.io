import { Barbarian, Bard, Cleric, Druid, Fighter, Monk, Paladin, Ranger, Rogue, Sorcerer, Wizard, Character} from "./dndClasses.js";
import React from "react";
import ReactDOM from "react-dom";

// Listen for character class, then render new things as options are selected
// Do I even have character class options?

class CharacterCreationComponent extends React.Component {
	render() {

	}


}

const characterSelectionContent = (
	<div>
	  <h3>Select a Character Class</h3>
      <ul>
        <li><button>Barbarian</button></li>
        <li><button>Bard</button></li>
        <li><button>Cleric</button></li>
        <li><button>Druid</button></li>
        <li><button>Fighter</button></li>
        <li><button>Monk</button></li>
        <li><button>Paladin</button></li>
        <li><button>Ranger</button></li>
        <li><button>Rogue</button></li>
        <li><button>Sorcerer</button></li>
        <li><button>Wizard</button></li>
      </ul>
      </div>
);

// Character class, level, race
// Roll or input ability scores
// Assign skill points
// Pick bonus feats?
// Explain class features?
// Explain what will need to be picked (feats)