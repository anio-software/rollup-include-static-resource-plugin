import includeStaticResourcePlugin from "../index.mjs"

export default {
	input: "./src/index.mjs",

	output: {
		file: "./bundle.mjs",
		format: "es"
	},

	plugins: [includeStaticResourcePlugin()]
}
