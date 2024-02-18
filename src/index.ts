function createFrame() {
  const id = document.querySelector<HTMLElement>("#id")
  if (id) {
    id.style.display = "none"
  } else {
    // Creating iframe element
    const el = document.createElement("iframe")

    // Setting the values for the attributes
    el.srcdoc = `<h1>Iframe Element</h1> 
    <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>`
    el.width = "400px"
    el.height = "200px"
    el.id = "chatgpt"
    // Adding the created iframe to div as
    // a child element
    document.querySelector("body")?.append(el)
  }
}

function removeFrame() {
  const body = document.querySelector("body")
  const lastChild = body?.lastChild

  if (lastChild) {
    // Check if the lastChild exists before attempting to remove it
    body?.removeChild(lastChild)
  }
}

document.addEventListener("load", createFrame)

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape") removeFrame()
})
