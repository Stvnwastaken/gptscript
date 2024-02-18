import fs from "node:fs"
import chalk from "chalk"
import JavascriptObfusctor from "javascript-obfuscator"

const obfuscated = JavascriptObfusctor.obfuscate(
  fs.readFileSync("./build/build.js", "utf8"),
  { optionsPreset: "high-obfuscation" },
)

fs.writeFile(
  "./build/obfuscate/obfuscated.js",
  obfuscated.toString(),
  (err) => {
    if (err) {
      console.log(chalk.red(`Error occurred:${err}`))
    } else {
      console.log(chalk.green.bold("Build obfuscated, ready to compile 🏗️ !"))
    }
  },
)
