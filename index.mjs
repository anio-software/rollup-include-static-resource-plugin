import path from "node:path"
import fs from "node:fs/promises"

export default function includeStaticResourcePlugin() {
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

				return `export default ${JSON.stringify(contents)};`
			}

			return null // other ids should be handled as usually
		}
	}
}
