import fs from "node:fs"
import chalk from "chalk"
import JavascriptObfusctor from "javascript-obfuscator"

const obfuscated = JavascriptObfusctor.obfuscate(
	fs.readFileSync("./build/build.js", "utf8"),
	{ optionsPreset: "high-obfuscation" },
)

fs.writeFile("./build/release/release.js", obfuscated.toString(), (err) => {
	if (err) {
		chalk.red(`Error occurred:${err}`)
	} else {
		chalk.green.bold("Build obfuscated, ready for production 🚀!")
	}
})
