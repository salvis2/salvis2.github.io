"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _DnDClasses = require("./DnDClasses.js");

var dnd = _interopRequireWildcard(_DnDClasses);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint esversion: 6 */


// Listen for character class, then render new things as options are selected
// Do I even have character class options?

var selectedCharacterClass;
var selectedCharacterLevel;
// let selectedCharacterRace;

var startButton = document.querySelector("#startButton");
/*
const testThingy = new dnd.Bard();

ReactDOM.render(
	React.createElement(
		"p", null, `${testThingy.classFeaturesMap}`),
	document.getElementById("test")
);
*/
_reactDom2.default.render(_react2.default.createElement("p", null, "characterCreator.js is working"), document.getElementById("test2"));

// Display character stats for selected class and level

var CharacterResults = function (_React$Component) {
	_inherits(CharacterResults, _React$Component);

	_createClass(CharacterResults, [{
		key: "render",
		value: function render() {
			// Using this.state.usedCharacterClass
			var characterClass = void 0;
			switch (this.state.usedCharacterClass) {
				case "Barbarian":
					characterClass = new dnd.Barbarian();
					break;
				case "Bard":
					characterClass = new dnd.Bard();
					break;
				case "Cleric":
					characterClass = new dnd.Cleric();
					break;
				case "Druid":
					characterClass = new dnd.Druid();
					break;
				case "Fighter":
					characterClass = new dnd.Fighter();
					break;
				case "Monk":
					characterClass = new dnd.Monk();
					break;
				case "Paladin":
					characterClass = new dnd.Paladin();
					break;
				case "Ranger":
					characterClass = new dnd.Ranger();
					break;
				case "Rogue":
					characterClass = new dnd.Rogue();
					break;
				case "Sorcerer":
					characterClass = new dnd.Sorcerer();
					break;
				case "Wizard":
					characterClass = new dnd.Wizard();
					break;
				default:
					characterClass = null;
			}

			var classData = characterClass.classStatstoArray(this.state.usedLevel);
			var classDataMap = classData.map(function (data) {
				return _react2.default.createElement("p", null, data);
			});
			// Base Class Options

			// Spellcaster Options

			// Class-Specific Options

			// Character Options

			// Return Statement
			return _react2.default.createElement("p", null, classDataMap);
			// return React.createElement("div", null, { classDataMap });
		}
	}]);

	function CharacterResults(props) {
		_classCallCheck(this, CharacterResults);

		var _this = _possibleConstructorReturn(this, (CharacterResults.__proto__ || Object.getPrototypeOf(CharacterResults)).call(this, props));

		_this.state = {
			usedCharacterClass: selectedCharacterClass,
			usedLevel: selectedCharacterLevel
		};
		return _this;
	}

	return CharacterResults;
}(_react2.default.Component);

// character level


var levelSelection = function (_React$Component2) {
	_inherits(levelSelection, _React$Component2);

	_createClass(levelSelection, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement("button", { onClick: this.submitLevel }, "Submit Level");
		}
	}]);

	function levelSelection(props) {
		_classCallCheck(this, levelSelection);

		var _this2 = _possibleConstructorReturn(this, (levelSelection.__proto__ || Object.getPrototypeOf(levelSelection)).call(this, props));

		_this2.submitLevel = _this2.submitLevel.bind(_this2);
		return _this2;
	}

	_createClass(levelSelection, [{
		key: "submitLevel",
		value: function submitLevel() {
			selectedCharacterLevel = document.getElementById("level-input-area").value;

			_reactDom2.default.render(_react2.default.createElement("p", null, "Selected Level: " + selectedCharacterLevel), document.getElementById("level-selection"));

			_reactDom2.default.render(_react2.default.createElement(CharacterResults, { characterClass: selectedCharacterClass, characterLevel: selectedCharacterLevel }, null), document.getElementById("character-output"));
		}
	}]);

	return levelSelection;
}(_react2.default.Component);

// Character Class Selection


var classButton = function (_React$Component3) {
	_inherits(classButton, _React$Component3);

	_createClass(classButton, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement("button", { className: "character-selection", onClick: this.beginCharacterCreation }, "" + this.props.characterClassName);
		}
	}]);

	function classButton(props) {
		_classCallCheck(this, classButton);

		var _this3 = _possibleConstructorReturn(this, (classButton.__proto__ || Object.getPrototypeOf(classButton)).call(this, props));

		_this3.beginCharacterCreation = _this3.beginCharacterCreation.bind(_this3);
		return _this3;
	}

	_createClass(classButton, [{
		key: "beginCharacterCreation",
		value: function beginCharacterCreation() {
			// Highlight the button?
			// Reset the form?
			selectedCharacterClass = this.props.characterClassName;

			_reactDom2.default;

			_reactDom2.default.render(_react2.default.createElement("p", null, selectedCharacterClass + " Selected. "), document.getElementById("output-text"));

			// Render Text
			_reactDom2.default.render(_react2.default.createElement("p", null, "Select your starting level"), document.getElementById("level-selection"));

			// Render Level Input Form
			_reactDom2.default.render(_react2.default.createElement("input", { id: "level-input-area", type: "number", min: "1", max: "20", step: "1" }, null), document.getElementById("level-input"));

			// Render Level Form Submission Button
			_reactDom2.default.render(_react2.default.createElement(levelSelection, null, null), document.getElementById("level-submission"));
		}
	}]);

	return classButton;
}(_react2.default.Component);

var displayedDndClasses = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Wizard"];

var dndListItems = displayedDndClasses.map(function (dndClass) {
	return _react2.default.createElement(classButton, { characterClassName: "" + dndClass }, null);
});

var startContent = _react2.default.createElement("p", null, "Select a Character Class");

startButton.addEventListener("click", function () {
	_reactDom2.default.render(startContent, document.getElementById("output-text"));

	_reactDom2.default.render(dndListItems, document.getElementById("output-classes"));
});

// Roll or input ability scores

// Assign skill points

// Pick bonus feats?

// Explain class features?

// Explain what will need to be picked (feats)

// Name Character