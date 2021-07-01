
const displayAllNumbers = function() {
    let bingoContainerNode = document.getElementById("bingo-container")
    for (let bingoNumber = 1; bingoNumber <= 76; bingoNumber++) {
        let newBingoNumber = document.createElement("div") 
        newBingoNumber.innerText = bingoNumber
        newBingoNumber.classList.add("number")
        bingoContainerNode.appendChild(newBingoNumber)
        if (bingoNumber === 38) {
            let freeSpace = document.createElement("div") 
            freeSpace.innerText = "Free"
            freeSpace.classList.add("empty")
            bingoContainerNode.appendChild(freeSpace)
        }
    }
}
window.addEventListener("load",function() { displayAllNumbers() })

const randomNumber = function() {
    let random = Math.random() * 76
    random = Math.floor(random)
    let elements = document.getElementsByClassName("number")
    let randomElement = elements[random]
    randomElement.classList.add("selected")
}
