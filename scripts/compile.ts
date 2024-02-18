import { generateBookmarklet } from "../src/utils/generator.js"
import fs from "node:fs"
import chalk from "chalk"

const bookmarklet = generateBookmarklet(
  fs.readFileSync("./build/obfuscate/obfuscated.js", "utf8"),
)
fs.writeFile("./build/release/bookmarklet.js", bookmarklet, (err) => {
  if (err) {
    console.log(chalk.red("Error occured:" + err))
  } else {
    console.log(
      chalk.green.bold("Compiled to bookmarklet, ready for production 🚀 !"),
    )
  }
})
