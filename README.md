<p align="center"><a href="https://www.npmjs.com/package/json-token-replace" alt="Logo"><img src="https://ptkdev.it/img/github/json-token-replace.png"></a></p>

<p align="center"><h1 align="center">json-token-replace</h1></p>

<p align="center"><a href="#" alt="License"><img src="https://img.shields.io/badge/license-GLPv3-brightgreen.svg"></a>
<a href="https://github.com/ptkdev/json-token-replace/releases" alt="Version"><img src="https://img.shields.io/badge/version-v1.1.0-lightgrey.svg"></a>
<a href="https://slack.ptkdev.io" alt="Slack Chat"><img src="https://img.shields.io/badge/chat%20on-slack-orange.svg"></a>
<a href="http://blog.ptkdev.io" alt="Blog"><img src="https://img.shields.io/badge/blog-medium-2AE176.svg"></a>
<a href="https://twitter.com/ptkdevio" alt="Twitter"><img src="https://img.shields.io/badge/twitter-ptkdevio-2AA3EF.svg"></a>   
<a href="mailto:support@ptkdev.io" alt="Support: support@ptkdev.io"><img src="https://img.shields.io/badge/help-support@ptkdev.io-fbbc05.svg"></a></p>

<p align="center"><a href="http://patreon.ptkdev.io" alt="Patreon Backer"><img src="https://img.shields.io/badge/donate-patreon-F87668.svg"></a> <a href="http://paypal.ptkdev.io" alt="Paypale Donate"><img src="https://img.shields.io/badge/donate-paypal-46AFE0.svg"></a> <a href="http://coffee.ptkdev.io" alt="Ko-fi Donate"><img src="https://img.shields.io/badge/buy%20me-coffee-4B788C.svg"></a></p>

## What does it do
Replace the token string {{hello}} in json with value from another json where key is token {"hello":"bye"}

#### Example:
Json with tokens:
`{ "john":"Alex" }`

Json:
`{ "text": "hello {{john}}"}`

Output:
`{ "text": "hello Alex"}`

## Features
* [✓] Easy to use

## Fast setup
1. Run `npm install json-token-replace --save`
2. In your code:
```
const Jtr = require("json-token-replace");
const jtr = new Jtr();

let json_output = jtr.replace(require("./json_with_tokens.json"), require("./json.json"), "{{", "}}");
```
3. If work add star :star: at this project :heart:
4. If you want help me: <b><a href="http://paypal.ptkdev.io">donate on paypal</a></b> or become a <b><a href="http://patreon.ptkdev.io">backer on patreon</a></b>.

For advanced configuration see [INSTALL.md](https://github.com/ptkdev/json-token-replace/blob/master/INSTALL.md).

<h1>License</h1>

GNU GENERAL PUBLIC LICENSE

Copyright (c) 2018 Patryk Rzucidło (PTKDev)
