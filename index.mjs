import path from "node:path"
import fs from "node:fs/promises"

export default function includeStaticResourcePlugin({
	inline_with_template_strings = false
}= {}) {
	return {
		name: "include-static-resource-plugin",

		resolveId(source, context) {
			if (source.startsWith("includeStaticResource:")) {
				const absolute_path = path.resolve(
					path.dirname(context), source.slice("includeStaticResource:".length)
				)

				return `getFileContentsAbsolute:${absolute_path}`
			}

			return null // other ids should be handled as usually
		},

		async load(id) {
			if (id.startsWith("getFileContentsAbsolute:")) {
				let path = id.slice("getFileContentsAbsolute:".length)

				const contents = (await fs.readFile(path)).toString()

				if (inline_with_template_strings) {
					let escaped_content = contents.split("`").join("\\`")

					escaped_content = escaped_content.split("${").join("\\${")

					return `export default \`${escaped_content}\`;`
				} else {
					return `export default ${JSON.stringify(contents)};`
				}
			}

			return null // other ids should be handled as usually
		}
	}
}
