/**
 * Example and Test
 * =====================
 * How this utility work
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <support@ptkdev.io> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */

// If you use npm repository: require("json-token-replace");
let Jtr = require("../main");
let jtr = new Jtr();

// Import json with token<->value
let json_tokens = require("./json_tokens.json");

// Import full json with token {{test}} 
let json_sample = require("./json_sample.json");

// This is where the magic happens
let json_output = jtr.replace(json_tokens, json_sample);

// Test output
console.log(json_output);