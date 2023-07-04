const container = document.querySelector(".container")
const btnEl = document.querySelector(".btn")

btnEl.addEventListener("click", () => {
    imgNum = 10;
    newImg();

})

function newImg() {
    for (let index = 0; index < imgNum; index++) {
        const imgEl = document.createElement("img")
        imgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`
        container.appendChild(imgEl)

    }


}