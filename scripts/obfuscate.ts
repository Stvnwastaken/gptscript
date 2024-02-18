import JavascriptObfusctor from "javascript-obfuscator"
import fs from "node:fs"
import chalk from "chalk"

const obfuscated = JavascriptObfusctor.obfuscate(
  fs.readFileSync("./build/build.js", "utf8"),
  { optionsPreset: "high-obfuscation" },
)

fs.writeFile("./build/prod/production.js", obfuscated.toString(), (err) => {
  if (err) {
    chalk.red("Error occurred:" + err)
  } else {
    chalk.green.bold("Build obfuscated, ready for production 🚀!")
  }
})
