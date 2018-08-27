/*jshint esversion:6*/
export default class BaseClassTest {
	
	constructor(attrib) {
		this._attrib = attrib;
	}
	
	get attrib() {
		return this._attrib;
	}
	
}