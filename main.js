/**
 * Utils: json-token-replace
 * =====================
 * Replace the token string {{hello}} in json with value from another json where key is token {"hello":"bye"}
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <support@ptkdev.io> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
class Utils {
    constructor() {

    }

    replace(json_tokens, json_input) {
        let json_string = JSON.stringify(json_input);
        for (var key in json_tokens) {
            json_string = json_string.replace("{{" + key + "}}", json_tokens[key]);
        }

        return JSON.parse(json_string);
    }
}

module.exports = Utils;