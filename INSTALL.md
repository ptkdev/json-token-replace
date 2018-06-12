#### Setup
1. Add dependencies on `package.json`
```
"dependencies": {
	"json-token-replace": "^1.0.0",
}
```

2. In your code:
```
const Jtr = require("json-token-replace");
const jtr = new Jtr();

let json_output = jtr.replace("./json_with_tokens.json", "./json.json");
```