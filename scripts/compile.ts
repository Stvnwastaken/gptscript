import fs from "node:fs"
import chalk from "chalk"
import { generateBookmarklet } from "../src/utils/generator.js"

const bookmarklet = generateBookmarklet(
	fs.readFileSync("./src/index.ts", "utf8"),
)
fs.writeFile("./build/bookmarklet.ts", bookmarklet, (err) => {
	if (err) {
		chalk.red(`Error occured:${err}`)
	} else {
		chalk.green.bold("Compiled to bookmarklet, ready to build 🏗️!")
	}
})
