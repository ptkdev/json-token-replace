#### Setup
1. Run `npm install json-token-replace --save`
2. In your code:
```
const Jtr = require("json-token-replace");
const jtr = new Jtr();

let json_output = jtr.replace(require("./json_with_tokens.json"), require("./json.json"), "{{", "}}");
```