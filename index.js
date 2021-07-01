
const displayAllNumbers = function(){
    let bingoContainerNode = document.getElementById("bingo-container")
    for (let bingoNumber = 1; bingoNumber <= 76; bingoNumber++) {
        let newBingoNumber = document.createElement("div") 
        newBingoNumber.innerText = bingoNumber
        newBingoNumber.classList.add("number")
        // newBingoNumber.onclick = selectNumber
        bingoContainerNode.appendChild(newBingoNumber)
    }
}
window.addEventListener("load",function() { displayAllNumbers() })