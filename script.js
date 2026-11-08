const w = document.querySelector("#arrow-template")
const q = document.querySelectorAll(".item-with-arrow")
const header = document.querySelector(".header")
const collapsiblePanel = document.querySelector(".collapsible-panel")
const headerHeight = header.offsetHeight
collapsiblePanel.style.top = `${headerHeight}px`
q.forEach(el=>{
    const r = w.content.cloneNode(true)
    el.appendChild(r)
el.addEventListener("click", () => {
    collapsiblePanel.classList.toggle("open")
})
})
    