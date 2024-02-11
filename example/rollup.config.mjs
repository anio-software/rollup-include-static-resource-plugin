import includeStaticResourcePlugin from "../index.mjs"

export default [{
	input: "./src/index.mjs",

	output: {
		file: "./bundle.template_strings.mjs",
		format: "es"
	},

	plugins: [includeStaticResourcePlugin({
		inline_with_template_strings: true
	})]
}, {
	input: "./src/index.mjs",

	output: {
		file: "./bundle.json.mjs",
		format: "es"
	},

	plugins: [includeStaticResourcePlugin()]
}]
