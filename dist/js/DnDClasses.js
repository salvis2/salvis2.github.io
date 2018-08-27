"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* 
 * className is a string
 * babScaling can be "good", "avg", or "poor"
 * fort/ref/willScaling can be "good", "poor"
 * skillList is a boolean array
 * hit die and skill points are integers
 * classFeaturesMap and classBonusFeatsMap are Maps
 */
/* jshint esversion: 6 */

var BaseClass = function () {
	function BaseClass(className, hitDie, baseSkillPointsPerLevel, babScaling, fortScaling, refScaling, willScaling, skillList, classFeaturesMap, classBonusFeatsMap) {
		_classCallCheck(this, BaseClass);

		this._className = className;
		this._hitDie = hitDie;
		this._baseSkillPointsPerLevel = baseSkillPointsPerLevel;
		this._babScaling = babScaling;
		this._fortScaling = fortScaling;
		this._refScaling = refScaling;
		this._willScaling = willScaling;
		this._skillList = skillList;
		this._classFeaturesMap = classFeaturesMap;
		this._classBonusFeatsMap = classBonusFeatsMap;
	}

	_createClass(BaseClass, [{
		key: "skillListAsArray",
		value: function skillListAsArray() {
			var skillList = this.skillList;
			var skillListArray = [];

			for (var i = 0; i < skillList.length; i++) {
				if (skillList[i] === 1) {
					skillListArray.push(skillNames[i]);
				}
			}

			return skillListArray;
		}
	}, {
		key: "classFeaturesToArray",
		value: function classFeaturesToArray(level) {
			var classFeatures = this.classFeaturesMap;
			if (classFeatures !== null) {
				var classFeaturesArray = [];
				for (var i = 0; i < classFeatures.length; i++) {
					if (level >= classFeatures[i][0]) {
						classFeaturesArray.push(classFeatures[i][1]);
					} else {
						break;
					}
				}
				return classFeaturesArray;
			}
			return ["None"];
		}
	}, {
		key: "classBonusFeatsToArray",
		value: function classBonusFeatsToArray(level) {
			var classBonusFeats = this.classBonusFeatsMap;
			if (classBonusFeats !== null) {
				var classBonusFeatsArray = [];
				for (var i = 0; i < classBonusFeats.length; i++) {
					if (level >= classBonusFeats[i][0]) {
						classBonusFeatsArray.push(classBonusFeats[i][1]);
					} else {
						break;
					}
				}
				return classBonusFeatsArray;
			}
			return ["None"];
		}
		// Will need to add additional class features for spellcasters and then class-specific ones

	}, {
		key: "classStatstoArray",
		value: function classStatstoArray(level) {
			var classData = [];
			classData.push("Class Name: " + this.className);
			classData.push("Hit Die: d" + this.hitDie);
			classData.push("Skill Points Per Level: " + this.baseSkillPointsPerLevel);
			classData.push("Base Attack Bonus: " + this.babScaling);
			classData.push("Fortitude Base Save: " + this.fortScaling);
			classData.push("Reflex Base Save: " + this.refScaling);
			classData.push("Will Base Save: " + this.willScaling);
			classData.push("Skill List: " + this.skillListAsArray());
			classData.push("Class Features At Level " + level + ": " + this.classFeaturesToArray(level));
			classData.push("Bonus Feats Given By Level " + level + ": " + this.classBonusFeatsToArray(level));
			return classData;
		}
	}, {
		key: "className",
		get: function get() {
			return this._className;
		}
	}, {
		key: "hitDie",
		get: function get() {
			return this._hitDie;
		}
	}, {
		key: "baseSkillPointsPerLevel",
		get: function get() {
			return this._baseSkillPointsPerLevel;
		}
	}, {
		key: "babScaling",
		get: function get() {
			return this._babScaling;
		}
	}, {
		key: "fortScaling",
		get: function get() {
			return this._fortScaling;
		}
	}, {
		key: "refScaling",
		get: function get() {
			return this._refScaling;
		}
	}, {
		key: "willScaling",
		get: function get() {
			return this._willScaling;
		}
	}, {
		key: "skillList",
		get: function get() {
			return this._skillList;
		}
	}, {
		key: "classFeaturesMap",
		get: function get() {
			return this._classFeaturesMap;
		}
	}, {
		key: "classBonusFeatsMap",
		get: function get() {
			return this._classBonusFeatsMap;
		}
	}]);

	return BaseClass;
}();

var Spellcaster = function (_BaseClass) {
	_inherits(Spellcaster, _BaseClass);

	function Spellcaster(className, hitDie, baseSkillPointsPerLevel, babScaling, fortScaling, refScaling, willScaling, skillList, classFeaturesMap, classBonusFeatsMap, primarySpellAttribute, spellsPerDay, spellsKnown) {
		_classCallCheck(this, Spellcaster);

		var _this = _possibleConstructorReturn(this, (Spellcaster.__proto__ || Object.getPrototypeOf(Spellcaster)).call(this, className, hitDie, baseSkillPointsPerLevel, babScaling, fortScaling, refScaling, willScaling, skillList, classFeaturesMap, classBonusFeatsMap));

		_this._primarySpellAttribute = primarySpellAttribute;
		_this._spellsPerDay = spellsPerDay;
		_this._spellsKnown = spellsKnown;
		return _this;
	}

	_createClass(Spellcaster, [{
		key: "spellsPerDay",
		value: function spellsPerDay(casterLevel, spellLevel) {
			// All spellcasters have this
			// Out of bounds gives undefined
			return this._spellsPerDay[casterLevel - 1][spellLevel];
		}
	}, {
		key: "spellsKnown",
		value: function spellsKnown(casterLevel, spellLevel) {
			// Not all spellcasters have this. null should mean that the caster knows all spells that they can cast for their level. 
			// out of bounds gives undefined
			if (this._spellsKnown === null) {
				return null;
			} else {
				return this._spellsKnown[casterLevel - 1][spellLevel];
			}
		}
	}, {
		key: "primarySpellAttribute",
		get: function get() {
			return this._primarySpellAttribute;
		}
	}]);

	return Spellcaster;
}(BaseClass);
/*
 * skillList should be formatted as an array of booleans
 * Each entry is 1 for a class skill or 0 for a cross-class skill 
 * The skill order is as follows:
 * [appraise, autohypnosis, balance, bluff, climb, concentration, craft, craft, craft, decipher script, diplomacy, disable device, disguise, escape artist, forgery, gather information, handle animal, heal, hide, intimidate, jump, knowledge(arcana), knowledge (arch/eng), knowledge (dungeoneering), knowledge (geography), knowledge (history), knowledge (local), knowledge (nature), knowledge (nobility/royalty), knowledge (the places), knowledge (psionics), knowledge (religion), listen, move silently, open lock, perform (act), perform (comedy), perform (dance), perform (keyboard), perform (oratory), perform (percussion), perform (string intrument), perform (wind instrument), perform (sing), profession, profession, psicraft, ride, search, sense motive, sleight of hand, spellcraft, spot, survival, swim, tumble, use magic device, use psionic device, use rope]
 * the array length is 59
 * [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,]
 */

/* Declare skill lists */


var skillNames = ["appraise", "autohypnosis", "balance", "bluff", "climb", "concentration", "craft", "craft", "craft", "decipher script", "diplomacy", "disable device", "disguise", "escape artist", "forgery", "gather information", "handle animal", "heal", "hide", "intimidate", "jump", "knowledge(arcana)", "knowledge (arch/eng)", "knowledge (dungeoneering)", "knowledge (geography)", "knowledge (history)", "knowledge (local)", "knowledge (nature)", "knowledge (nobility/royalty)", "knowledge (the planes)", "knowledge (psionics)", "knowledge (religion)", "listen", "move silently", "open lock", "perform (act)", "perform (comedy)", "perform (dance)", "perform (keyboard)", "perform (oratory)", "perform (percussion)", "perform (string intrument)", "perform (wind instrument)", "perform (sing)", "profession", "profession", "psicraft", "ride", "search", "sense motive", "sleight of hand", "spellcraft", "spot", "survival", "swim", "tumble", "use magic device", "use psionic device", "use rope"];

var barbarianSkillList = [0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0];
var bardSkillList = [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1];
var clericSkillList = [0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0];
var druidSkillList = [0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0];
var fighterSkillList = [0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
var monkSkillList = [0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0];
var paladinSkillList = [0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var rangerSkillList = [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1];
var rogueSkillList = [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1];
var sorcererSkillList = [0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0];
var wizardSkillList = [0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0];

/*
 * primarySpellAttribute is the ability nickname that determines the strength of the class"s spellcasting
 * spellsPerDay is a 2d int array to encapsulate the spells you get at a given level
 * spellsKnown is a 2d int array to encapsultate the spells you know at a given level
 * if a row of the spells per day is empty, the class does not know spells for that class level
 * if spellsKnown is empty, it is not relevant
 * To access the spells known / per day for a class,
 * Check array length every time, since the 2d arrays aren"t rectangular
 */
/* Declare Spells Per Day Arrays */
var bardSpellsPerDay = [[2], [3, 0], [3, 1], [3, 2, 0], [3, 3, 1], [3, 3, 2], [3, 3, 2, 0], [3, 3, 3, 1], [3, 3, 3, 2], [3, 3, 3, 2, 0], [3, 3, 3, 3, 1], [3, 3, 3, 3, 2], [3, 3, 3, 3, 2, 0], [4, 3, 3, 3, 3, 1], [4, 4, 3, 3, 3, 2], [4, 4, 4, 3, 3, 2, 0], [4, 4, 4, 4, 3, 3, 1], [4, 4, 4, 4, 4, 3, 2], [4, 4, 4, 4, 4, 4, 3], [4, 4, 4, 4, 4, 4, 4]];

var clericSpellsPerDay = [[3, 1], [4, 2], [4, 2, 1], [5, 3, 2], [5, 3, 2, 1], [5, 3, 3, 2], [6, 4, 3, 2, 1], [6, 4, 3, 3, 2], [6, 4, 4, 3, 2, 1], [6, 4, 4, 3, 3, 2], [6, 5, 4, 4, 3, 2, 1], [6, 5, 4, 4, 3, 3, 2], [6, 5, 5, 4, 4, 3, 2, 1], [6, 5, 5, 4, 4, 3, 3, 2], [6, 5, 5, 5, 4, 4, 3, 2, 1], [6, 5, 5, 5, 4, 4, 3, 3, 2], [6, 5, 5, 5, 5, 4, 4, 3, 2, 1], [6, 5, 5, 5, 5, 4, 4, 3, 3, 2], [6, 5, 5, 5, 5, 5, 4, 4, 3, 3], [6, 5, 5, 5, 5, 5, 4, 4, 4, 4]];

var druidSpellsPerDay = [[3, 1], [4, 2], [4, 2, 1], [5, 3, 2], [5, 3, 2, 1], [5, 3, 3, 2], [6, 4, 3, 2, 1], [6, 4, 3, 3, 2], [6, 4, 4, 3, 2, 1], [6, 4, 4, 3, 3, 2], [6, 5, 4, 4, 3, 2, 1], [6, 5, 4, 4, 3, 3, 2], [6, 5, 5, 4, 4, 3, 2, 1], [6, 5, 5, 4, 4, 3, 3, 2], [6, 5, 5, 5, 4, 4, 3, 2, 1], [6, 5, 5, 5, 4, 4, 3, 3, 2], [6, 5, 5, 5, 5, 4, 4, 3, 2, 1], [6, 5, 5, 5, 5, 4, 4, 3, 3, 2], [6, 5, 5, 5, 5, 5, 4, 4, 3, 3], [6, 5, 5, 5, 5, 5, 4, 4, 4, 4]];

var paladinSpellsPerDay = [[], [], [], [0], [0], [1], [1], [1, 0], [1, 0], [1, 1], [1, 1, 0], [1, 1, 1], [1, 1, 1], [2, 1, 1, 0], [2, 1, 1, 1], [2, 2, 1, 1], [2, 2, 2, 1], [3, 2, 2, 1], [3, 3, 3, 2], [3, 3, 3, 3]];

var rangerSpellsPerDay = [[], [], [], [0], [0], [1], [1], [1, 0], [1, 0], [1, 1], [1, 1, 0], [1, 1, 1], [1, 1, 1], [2, 1, 1, 0], [2, 1, 1, 1], [2, 2, 1, 1], [2, 2, 2, 1], [3, 2, 2, 1], [3, 3, 3, 2], [3, 3, 3, 3]];

var sorcererSpellsPerDay = [[5, 3], [6, 4], [6, 5], [6, 6, 3], [6, 6, 4], [6, 6, 5, 3], [6, 6, 6, 4], [6, 6, 6, 5, 3], [6, 6, 6, 6, 4], [6, 6, 6, 6, 5, 3], [6, 6, 6, 6, 6, 4], [6, 6, 6, 6, 6, 5, 3], [6, 6, 6, 6, 6, 4], [6, 6, 6, 6, 6, 5, 3], [6, 6, 6, 6, 6, 6, 4], [6, 6, 6, 6, 6, 5, 3], [6, 6, 6, 6, 6, 6, 4], [6, 6, 6, 6, 6, 6, 5, 3], [6, 6, 6, 6, 6, 6, 6, 4], [6, 6, 6, 6, 6, 6, 6, 5, 3], [6, 6, 6, 6, 6, 6, 6, 6, 4], [6, 6, 6, 6, 6, 6, 6, 6, 5, 3], [6, 6, 6, 6, 6, 6, 6, 6, 6, 4], [6, 6, 6, 6, 6, 6, 6, 6, 6, 6]];

var wizardSpellsPerDay = [[3, 1], [4, 2], [4, 2, 1], [4, 3, 2], [4, 3, 2, 1], [4, 3, 3, 2], [4, 4, 3, 2, 1], [4, 4, 3, 3, 2], [4, 4, 4, 3, 2, 1], [4, 4, 4, 3, 3, 2], [4, 4, 4, 4, 3, 2, 1], [4, 4, 4, 4, 3, 3, 2], [4, 4, 4, 4, 4, 3, 2, 1], [4, 4, 4, 4, 4, 3, 3, 2], [4, 4, 4, 4, 4, 4, 3, 2, 1], [4, 4, 4, 4, 4, 4, 4, 3, 3, 2], [4, 4, 4, 4, 4, 4, 4, 4, 3, 3], [4, 4, 4, 4, 4, 4, 4, 4, 4, 4]];

/* Declare Spells Known Arrays */
var bardSpellsKnown = [[4], [5, 2], [6, 3], [6, 3, 2], [6, 4, 3], [6, 4, 4, 2], [6, 4, 4, 3], [6, 4, 4, 3], [6, 4, 4, 4, 2], [6, 4, 4, 4, 3], [6, 4, 4, 4, 3], [6, 4, 4, 4, 4, 2], [6, 4, 4, 4, 4, 3], [6, 4, 4, 4, 4, 3], [6, 5, 4, 4, 4, 4, 2], [6, 5, 5, 4, 4, 4, 3], [6, 5, 5, 5, 4, 4, 3], [6, 5, 5, 5, 5, 4, 4], [6, 5, 5, 5, 5, 5, 4]];

var clericSpellsKnown = null;
var druidSpellsKnown = null;
var paladinSpellsKnown = null;
var rangerSpellsKnown = null;

var sorcererSpellsKnown = [[4, 2], [5, 2], [5, 3], [6, 3, 1], [6, 4, 2], [7, 4, 2, 1], [7, 5, 3, 2], [8, 5, 3, 2, 1], [8, 5, 4, 3, 2], [9, 5, 4, 3, 2, 1], [9, 5, 5, 4, 3, 2], [9, 5, 5, 4, 3, 2, 1], [9, 5, 5, 4, 4, 3, 2], [9, 5, 5, 4, 4, 3, 2, 1], [9, 5, 5, 4, 4, 4, 3, 2], [9, 5, 5, 4, 4, 4, 3, 2, 1], [9, 5, 5, 4, 4, 4, 3, 3, 2], [9, 5, 5, 4, 4, 4, 3, 3, 2, 1], [9, 5, 5, 4, 4, 4, 3, 3, 3, 2], [9, 5, 5, 4, 4, 4, 3, 3, 3, 3]];

var wizardSpellsKnown = null;

/* Declare Primary Spellcasting Attributes */
var bardPrimarySpellAttribute = "cha";
var clericPrimarySpellAttribute = "wis";
var druidPrimarySpellAttribute = "wis";
var paladinPrimarySpellAttribute = "cha";
var rangerPrimarySpellAttribute = "wis";
var sorcererPrimarySpellAttribute = "cha";
var wizardPrimarySpellAttribute = "int";

/* Declare Class Feature Maps
 * key is the character level
 * value is the array of class features they receive at that level
 * Should I put bonus feats in this? for now...
 * Put normal feats in this? No. Keep a tally of feats in the active character creation app, and output the total.
 */
var barbarianClassFeaturesMap = [[1, ["Fast Movement", "Illiteracy"]], [2, ["Uncanny Dodge"]], [5, ["Improved Uncanny Dodge"]], [14, ["Indomitable Will"]], [17, ["Tireless Rage"]]];

var bardClassFeaturesMap = [[1, ["Bardic Music", "Bardic Knowledge", "Countersong", "Fascinate"]], [3, ["Inspire Competence"]], [6, ["Suggestion"]], [9, ["Inspire Greatness"]], [12, ["Song of Freedom"]], [15, ["Inspire Heroics"]], [18, ["Mass Suggestion"]]];

var clericClassFeaturesMap = [[1, ["Turn or Rebuke Undead"]]];

var druidClassFeaturesMap = [[1, ["Animal Companion", "Nature Sense", "Wild Empathy"]], [2, ["Woodland Stride"]], [3, ["Trackless Step"]], [4, ["Resist Nature\"s Lure"]], [9, ["Venom Immunity"]], [13, ["A Thousand Faces"]], [15, ["Timeless Body"]]];

var fighterClassFeaturesMap = null;

var monkClassFeaturesMap = [[1, ["Flurry of Blows", "Unarmed Strike"]], [2, ["Evasion"]], [3, ["Still Mind"]], [5, ["Purity of Body"]], [7, ["Wholeness of Body"]], [9, ["Improved Evasion"]], [11, ["Diamond Body"]], [12, ["Abundant Step"]], [13, ["Diamond Soul"]], [15, ["Quivering Palm"]], [17, ["Timeless Body", "Tongue of the Sun and Moon"]], [19, ["Empty Body"]], [20, ["Perfect Self"]]];

var paladinClassFeaturesMap = [[1, ["Aura of Good", "Detect Evil"]], [2, ["Divine Grace", "Lay on Hands"]], [3, ["Aura of Courage", "Divine Health"]], [4, ["Turn Undead"]], [5, ["Special Mount"]]];

var rangerClassFeaturesMap = [[1, ["Wild Empathy"]], [4, ["Animal Companion"]], [7, ["Woodland Stride"]], [8, ["Swift Tracker"]], [9, ["Evasion"]], [13, ["Camouflage"]], [17, ["Hide in Plain Sight"]]];

var rogueClassFeaturesMap = [[1, ["Trapfinding"]], [2, ["Evasion"]], [4, ["Uncanny Dodge"]], [8, ["Improved Uncanny Dodge"]], [10, ["Special Ability"]], [13, ["Special Ability"]], [16, ["Special Ability"]], [19, ["Special Ability"]]];

var sorcererClassFeaturesMap = [[1, ["Summon Familiar"]]];

var wizardClassFeaturesMap = [[1, ["Summon Familiar"]]];

/* Declare Class Bonus Feats Maps
 * Can hold "Bonus Feat" or the name of the feat
 */
var barbarianBonusFeatMap = null;

var bardBonusFeatMap = null;

var clericBonusFeatMap = null;

var druidBonusFeatMap = null;

var fighterBonusFeatMap = [[1, ["Bonus Feat"]], [2, ["Bonus Feat"]], [4, ["Bonus Feat"]], [6, ["Bonus Feat"]], [8, ["Bonus Feat"]], [10, ["Bonus Feat"]], [12, ["Bonus Feat"]], [14, ["Bonus Feat"]], [16, ["Bonus Feat"]], [18, ["Bonus Feat"]], [20, ["Bonus Feat"]]];

var monkBonusFeatMap = [[1, ["Bonus Feat", "Improved Unarmed Strike"]], [2, ["Bonus Feat"]], [6, ["Bonus Feat"]]];

var paladinBonusFeatMap = null;

var rangerBonusFeatMap = [[1, ["Track"]], [2, ["Combat Style"]], [3, ["Endurance"]], [6, ["Improved Combat Style"]], [11, ["Combat Style Mastery"]]];

var rogueBonusFeatMap = null;

var sorcererBonusFeatMap = null;

var wizardBonusFeatMap = [[1, ["Scribe Scroll"]], [5, ["Bonus Feat"]], [10, ["Bonus Feat"]], [15, ["Bonus Feat"]], [20, ["Bonus Feat"]]];

/* Declare Specific DnD Class Objects
 * constructor (className, hitDie, baseSkillPointsPerLevel, babScaling, fortScaling, refScaling, willScaling, skillList, classFeaturesMap, classBonusFeatsMap) 
 * constructor (className, hitDie, baseSkillPointsPerLevel, babScaling, fortScaling, refScaling, willScaling, skillList, classFeaturesMap, classBonusFeatsMap, primarySpellAttribute, spellsPerDay, spellsKnown) 
 * Should base class objects have an array of class features? feats? 
 * map. key for level, array of strings for value. reduce clutter.
 * Gonna need a large switch statement to write the character outputs to the pdf
 */

var Barbarian = exports.Barbarian = function (_BaseClass2) {
	_inherits(Barbarian, _BaseClass2);

	function Barbarian() {
		_classCallCheck(this, Barbarian);

		return _possibleConstructorReturn(this, (Barbarian.__proto__ || Object.getPrototypeOf(Barbarian)).call(this, "Barbarian", 12, 4, "good", "good", "poor", "poor", barbarianSkillList, barbarianClassFeaturesMap, barbarianBonusFeatMap));
	}

	_createClass(Barbarian, [{
		key: "rageBonuses",
		value: function rageBonuses(level) {
			// format as ["rageType","strBonus","conBonus","willBonus","acPenalty"]
			var rageBonuses = void 0;
			if (level >= 11 && level < 20) {
				rageBonuses = ["Greater", 6, 6, 3, -2];
			} else if (level >= 20) {
				rageBonuses = ["Mighty", 8, 8, 4, -2];
			} else {
				// Barbarian levels 1 - 10
				rageBonuses = ["Normal", 4, 4, 2, -2];
			}

			return rageBonuses;
		}
	}, {
		key: "ragesPerDay",
		value: function ragesPerDay(level) {
			return 1 + Math.floor(level / 4);
		}
	}, {
		key: "trapSenseBonus",
		value: function trapSenseBonus(level) {
			return Math.floor(level / 3);
		}
	}, {
		key: "damageReduction",
		value: function damageReduction(level) {
			if (level >= 7) {
				return Math.floor((level - 4) / 3);
			} else {
				return 0;
			}
		}
	}]);

	return Barbarian;
}(BaseClass);

var Bard = exports.Bard = function (_Spellcaster) {
	_inherits(Bard, _Spellcaster);

	function Bard() {
		_classCallCheck(this, Bard);

		return _possibleConstructorReturn(this, (Bard.__proto__ || Object.getPrototypeOf(Bard)).call(this, "Bard", 6, 6, "avg", "poor", "good", "good", bardSkillList, bardClassFeaturesMap, bardBonusFeatMap, bardPrimarySpellAttribute, bardSpellsPerDay, bardSpellsKnown));
	}
	// Get inspire courage +


	_createClass(Bard, [{
		key: "inspireCourageBonus",
		value: function inspireCourageBonus(level) {
			if (level < 8) {
				return 1;
			} else return 1 + Math.floor((level - 2) / 6);
		}
	}]);

	return Bard;
}(Spellcaster);

var Cleric = exports.Cleric = function (_Spellcaster2) {
	_inherits(Cleric, _Spellcaster2);

	function Cleric() {
		_classCallCheck(this, Cleric);

		return _possibleConstructorReturn(this, (Cleric.__proto__ || Object.getPrototypeOf(Cleric)).call(this, "Cleric", 8, 2, "avg", "good", "poor", "good", clericSkillList, clericClassFeaturesMap, clericBonusFeatMap, clericPrimarySpellAttribute, clericSpellsPerDay, clericSpellsKnown));
	}
	// Get turn/rebuke undead numbers in app


	return Cleric;
}(Spellcaster);

var Druid = exports.Druid = function (_Spellcaster3) {
	_inherits(Druid, _Spellcaster3);

	function Druid() {
		_classCallCheck(this, Druid);

		return _possibleConstructorReturn(this, (Druid.__proto__ || Object.getPrototypeOf(Druid)).call(this, "Druid", 8, 4, "avg", "good", "poor", "good", druidSkillList, druidClassFeaturesMap, druidBonusFeatMap, druidPrimarySpellAttribute, druidSpellsPerDay, druidSpellsKnown));
	}
	// Get wild shape / day, wild shape options


	_createClass(Druid, [{
		key: "wildShapesPerDay",
		value: function wildShapesPerDay(level) {
			var total = 0;

			if (level >= 5) {
				total++;
			}
			if (level >= 6) {
				total++;
			}
			if (level >= 7) {
				total++;
			}
			if (level >= 10) {
				total++;
			}
			if (level >= 14) {
				total++;
			}
			if (level >= 18) {
				total++;
			}
			return total;
		}
	}, {
		key: "elementalWildShapesPerDay",
		value: function elementalWildShapesPerDay(level) {
			var total = 0;
			if (level >= 16) {
				total++;
			}
			if (level >= 18) {
				total++;
			}
			if (level >= 20) {
				total++;
			}
			return total;
		}
	}, {
		key: "wildShapeOptions",
		value: function wildShapeOptions(level) {
			var wildShapeOptions = [];

			if (level >= 5) {
				wildShapeOptions.push("Small Animal");
				wildShapeOptions.push("Medium Animal");
			}
			if (level >= 8) {
				wildShapeOptions.push("Large Animal");
			}
			if (level >= 11) {
				wildShapeOptions.push("Tiny Animal");
			}
			if (level >= 15) {
				wildShapeOptions.push("Huge Animal");
			}
			if (level >= 12) {
				wildShapeOptions.push("Plant");
			}
			if (level >= 16) {
				wildShapeOptions.push("Small, Medium, or Large Elemental");
			}
			if (level >= 20) {
				wildShapeOptions.push("Huge Elemental");
			}
		}
	}]);

	return Druid;
}(Spellcaster);

var Fighter = exports.Fighter = function (_BaseClass3) {
	_inherits(Fighter, _BaseClass3);

	function Fighter() {
		_classCallCheck(this, Fighter);

		return _possibleConstructorReturn(this, (Fighter.__proto__ || Object.getPrototypeOf(Fighter)).call(this, "Fighter", 10, 2, "good", "good", "poor", "poor", fighterSkillList, fighterClassFeaturesMap, fighterBonusFeatMap));
	}

	return Fighter;
}(BaseClass);

var Monk = exports.Monk = function (_BaseClass4) {
	_inherits(Monk, _BaseClass4);

	function Monk() {
		_classCallCheck(this, Monk);

		return _possibleConstructorReturn(this, (Monk.__proto__ || Object.getPrototypeOf(Monk)).call(this, "Monk", 8, 4, "avg", "good", "good", "good", monkSkillList, monkClassFeaturesMap, monkBonusFeatMap));
	}
	// Get speed bonus, ac bonus, unarmed damage, flurry of blows, slow fall


	_createClass(Monk, [{
		key: "kiStrikeTypes",
		value: function kiStrikeTypes(level) {
			var kiStrikeTypes = [];

			if (level > 3) {
				kiStrikeTypes.push("Magic");
			}
			if (level > 9) {
				kiStrikeTypes.push("Lawful");
			}
			if (level > 16) {
				kiStrikeTypes.push("Adamantine");
			}

			return kiStrikeTypes;
		}
	}, {
		key: "slowFallDistance",
		value: function slowFallDistance(level) {
			if (level < 4) {
				return 0;
			} else if (level < 20) {
				return 10 * Math.floor(level / 2);
			} else {
				// level >= 20
				return Infinity;
			}
		}
	}, {
		key: "unarmedDamage",
		value: function unarmedDamage(level) {
			// unarmedDamage[0] is the number of dice, unarmedDamage[1] is the die size
			var unarmedDamage = void 0;

			if (level < 4) {
				unarmedDamage = [1, 6];
			} else if (level < 8) {
				unarmedDamage = [1, 8];
			} else if (level < 12) {
				unarmedDamage = [1, 10];
			} else if (level < 16) {
				unarmedDamage = [2, 6];
			} else if (level < 20) {
				unarmedDamage = [2, 8];
			} else {
				unarmedDamage = [2, 10];
			}

			return unarmedDamage;
		}
	}, {
		key: "monkACBonus",
		value: function monkACBonus(level) {
			return Math.floor(level / 5);
		}
	}, {
		key: "monkSpeedBonus",
		value: function monkSpeedBonus(level) {
			return 10 * Math.floor(level / 3);
		}
	}, {
		key: "flurryOfBlowsAdjustments",
		value: function flurryOfBlowsAdjustments(level) {
			// Contains the negative offset from base attack bonus [0] and the number of attacks at highest bonus [1]
			var flurryOfBlowsAdjustments = void 0;

			if (level < 5) {
				flurryOfBlowsAdjustments = [-2, 2];
			} else if (level < 9) {
				flurryOfBlowsAdjustments = [-1, 2];
			} else {
				flurryOfBlowsAdjustments = [0, 3];
			}

			return flurryOfBlowsAdjustments;
		}
	}]);

	return Monk;
}(BaseClass);

var Paladin = exports.Paladin = function (_Spellcaster4) {
	_inherits(Paladin, _Spellcaster4);

	function Paladin() {
		_classCallCheck(this, Paladin);

		return _possibleConstructorReturn(this, (Paladin.__proto__ || Object.getPrototypeOf(Paladin)).call(this, "Paladin", 10, 2, "good", "good", "poor", "poor", paladinSkillList, paladinClassFeaturesMap, paladinBonusFeatMap, paladinPrimarySpellAttribute, paladinSpellsPerDay, paladinSpellsKnown));
	}
	// Get smite evil / day, remove disease / day, lay on hands


	_createClass(Paladin, [{
		key: "smiteEvilPerDay",
		value: function smiteEvilPerDay(level) {
			return 1 + Math.floor(level / 5);
		}
	}, {
		key: "removeDiseasePerWeek",
		value: function removeDiseasePerWeek(level) {
			if (level < 6) {
				return 0;
			} else {
				return Math.floor((level - 3) / 3);
			}
		}
	}]);

	return Paladin;
}(Spellcaster);

var Ranger = exports.Ranger = function (_Spellcaster5) {
	_inherits(Ranger, _Spellcaster5);

	function Ranger() {
		_classCallCheck(this, Ranger);

		return _possibleConstructorReturn(this, (Ranger.__proto__ || Object.getPrototypeOf(Ranger)).call(this, "Ranger", 8, 6, "good", "good", "good", "poor", rangerSkillList, rangerClassFeaturesMap, rangerBonusFeatMap, rangerPrimarySpellAttribute, rangerSpellsPerDay, rangerSpellsKnown));
	}
	// Get favored enemies, favored enemies" bonuses, combat style?
	// Set favored enemies and bonus?

	return Ranger;
}(Spellcaster);

var Rogue = exports.Rogue = function (_BaseClass5) {
	_inherits(Rogue, _BaseClass5);

	function Rogue() {
		_classCallCheck(this, Rogue);

		return _possibleConstructorReturn(this, (Rogue.__proto__ || Object.getPrototypeOf(Rogue)).call(this, "Rogue", 6, 8, "avg", "poor", "good", "poor", rogueSkillList, rogueClassFeaturesMap, rogueBonusFeatMap));
	}
	// Get sneak attack, trap sense 


	_createClass(Rogue, [{
		key: "sneakAttackBonus",
		value: function sneakAttackBonus(level) {
			return Math.floor((level + 1) / 2);
		}
	}, {
		key: "trapSenseBonus",
		value: function trapSenseBonus(level) {
			return Math.floor(level / 3);
		}
	}]);

	return Rogue;
}(BaseClass);

var Sorcerer = exports.Sorcerer = function (_Spellcaster6) {
	_inherits(Sorcerer, _Spellcaster6);

	function Sorcerer() {
		_classCallCheck(this, Sorcerer);

		return _possibleConstructorReturn(this, (Sorcerer.__proto__ || Object.getPrototypeOf(Sorcerer)).call(this, "Sorcerer", 4, 2, "poor", "poor", "poor", "good", sorcererSkillList, sorcererClassFeaturesMap, sorcererBonusFeatMap, sorcererPrimarySpellAttribute, sorcererSpellsPerDay, sorcererSpellsKnown));
	}

	return Sorcerer;
}(Spellcaster);

var Wizard = exports.Wizard = function (_Spellcaster7) {
	_inherits(Wizard, _Spellcaster7);

	function Wizard() {
		_classCallCheck(this, Wizard);

		return _possibleConstructorReturn(this, (Wizard.__proto__ || Object.getPrototypeOf(Wizard)).call(this, "Wizard", 4, 2, "poor", "poor", "poor", "good", wizardSkillList, wizardClassFeaturesMap, wizardBonusFeatMap, wizardPrimarySpellAttribute, wizardSpellsPerDay, wizardSpellsKnown));
	}

	return Wizard;
}(Spellcaster);

/* Declare character object 
 * Save all of the info for these objects into database
 * Except the character object, just save the name
 * How will I work with the races? Race object
 */

var BaseRace = exports.BaseRace = function BaseRace(raceName) {
	_classCallCheck(this, BaseRace);

	this._raceName = raceName;
};

var Character = exports.Character = function () {
	function Character(characterName, characterClass, level, race, str, dex, con, int0, wis, cha) {
		_classCallCheck(this, Character);

		this._characterName = characterName;
		this._level = level;
		this._race = race;
		this._str = str;
		this._dex = dex;
		this._con = con;
		this._int = int0;
		this._wis = wis;
		this._cha = cha;

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
		} //switch
	}

	_createClass(Character, [{
		key: "bab",


		// Get BAB and Saves
		value: function bab(level) {
			var babScaling = this._characterClass.babScaling;
			switch (babScaling) {
				case "good":
					return level;
				case "avg":
					return Math.floor(level * 0.75);
				case "poor":
					return Math.floor(level * 0.5);
			}
		}
	}, {
		key: "fortSave",
		value: function fortSave(level) {
			var fortScaling = this._characterClass.fortScaling;
			switch (fortScaling) {
				case "good":
					return 2 + Math.floor(level / 2);
				case "poor":
					return Math.floor(level / 3);
			}
		}
	}, {
		key: "refSave",
		value: function refSave(level) {
			var refScaling = this._characterClass.refScaling;
			switch (refScaling) {
				case "good":
					return 2 + Math.floor(level / 2);
				case "poor":
					return Math.floor(level / 3);
			}
		}
	}, {
		key: "willSave",
		value: function willSave(level) {
			var willScaling = this._characterClass.willScaling;
			switch (willScaling) {
				case "good":
					return 2 + Math.floor(level / 2);
				case "poor":
					return Math.floor(level / 3);
			}
		}
	}, {
		key: "spellsPerDay",

		// Get Spells Per Day and Spells Known
		value: function spellsPerDay(spellLevel) {
			return this._characterClass.spellsPerDay(this._level, spellLevel);
		}
	}, {
		key: "spellsKnown",
		value: function spellsKnown(spellLevel) {
			return this._characterClass.spellsKnown(this._level, spellLevel);
		}
	}, {
		key: "characterName",
		get: function get() {
			return this._characterName;
		}
	}, {
		key: "characterClass",
		get: function get() {
			return this._characterClass.className;
		}
	}, {
		key: "level",
		get: function get() {
			return this._level;
		}

		// Get Ability Scores

	}, {
		key: "str",
		get: function get() {
			return this._str;
		}
	}, {
		key: "dex",
		get: function get() {
			return this._dex;
		}
	}, {
		key: "con",
		get: function get() {
			return this._con;
		}
	}, {
		key: "int0",
		get: function get() {
			return this._int;
		}
	}, {
		key: "wis",
		get: function get() {
			return this._wis;
		}
	}, {
		key: "cha",
		get: function get() {
			return this._cha;
		}

		// Get Ability Modifiers

	}, {
		key: "strMod",
		get: function get() {
			return Math.floor((this._str - 10) / 2);
		}
	}, {
		key: "dexMod",
		get: function get() {
			return Math.floor((this._dex - 10) / 2);
		}
	}, {
		key: "conMod",
		get: function get() {
			return Math.floor((this._con - 10) / 2);
		}
	}, {
		key: "intMod",
		get: function get() {
			return Math.floor((this._int - 10) / 2);
		}
	}, {
		key: "wisMod",
		get: function get() {
			return Math.floor((this._wis - 10) / 2);
		}
	}, {
		key: "chaMod",
		get: function get() {
			return Math.floor((this._cha - 10) / 2);
		}
	}, {
		key: "classSkillList",
		get: function get() {
			return this._characterClass.skillList;
		}
	}, {
		key: "primarySpellAttribute",
		get: function get() {
			if (this._characterClass instanceof Spellcaster) {
				return this._characterClass.primarySpellAttribute;
			} else return null;
		}
	}]);

	return Character;
}();