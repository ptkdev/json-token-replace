/**
 * Utils: json-token-replace
 * =====================
 * Replace the token string {{hello}} in json with value from another json where key is token {"hello":"bye"}
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <support@ptkdev.io> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    1.0.0
 * @changelog:  1.0.0 initial release
 * 				1.1.0 start and end tokens string
 *
 */
class Utils {
    constructor() {

    }

    replace(json_tokens, json_input, start = "{{", end = "}}") {
        let json_string = JSON.stringify(json_input);
        for (var key in json_tokens) {
        	let regex = new RegExp(start + key + end,"g");
            json_string = json_string.replace(regex, json_tokens[key]);
        }

        return JSON.parse(json_string);
    }
}

module.exports = Utils;