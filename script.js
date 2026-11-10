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
    const gallery = document.querySelector(".gallery")
gallery.style.marginTop =  `${headerHeight}px`
const mainImg = document.querySelector(`.gallery__main-image`)
const galleryImages = document.querySelectorAll(`.gallery__img`)
function checkActiveImage () {
galleryImages.forEach(el =>{
    if (el.src === mainImg.src){
        el.parentElement.classList.add("active")
    }
    else {
       el.parentElement.classList.remove("active")
    }
})
}
galleryImages.forEach(el=>{
    el.addEventListener("click", () => {
        mainImg.src = el.src
        checkActiveImage()
    })
})

