/**
 * Example and Test
 * =====================
 * How this utility work
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */

// If you use npm repository: require("@ptkdev/json-token-replace");
let Jtr = require("../modules/jtr");
let jtr = new Jtr();

// Import json with token<->value
let json_tokens = require("./json_tokens.json");

// Import full json with token {{test}}
let json_sample = require("./json_sample.json");

// This is where the magic happens
let json_output = jtr.replace(json_tokens, json_sample, "{{", "}}");

// Test output
console.log(json_output);