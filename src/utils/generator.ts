function cleanCode(raw: string) {
  return raw.trim()
}

function generateBookmarklet(code: string) {
  const output: string = `javascript:${encodeURIComponent(
    `(function(){${cleanCode(code)}})`,
  )}`

  return output
}

export { generateBookmarklet }
