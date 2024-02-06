# rollup-include-static-resource-plugin

Include a static resource with rollup.

Example usage:

```js
import file from "includeStaticResource:./file.html"

console.log(file)
```

Would include `./file.html` relative to the location of the importee.

Example rollup.config.mjs:

```js
import includeStaticResourcePlugin from "../index.mjs"

export default {
	input: "./src/index.mjs",

	output: {
		file: "./bundle.mjs",
		format: "es"
	},

	plugins: [includeStaticResourcePlugin()]
}
```
