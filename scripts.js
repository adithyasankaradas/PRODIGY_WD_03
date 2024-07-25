const gameBoard=document.querySelector("#gameboard")
const infoDispaly=document.querySelector("#info")

 const startCells= [
    "","","","","","","","",""
 ]

 let go = "cross"

 infoDispaly.textContent="Cross goes first"

 function createBoard(){
    startCells.forEach((_cell,index)=>{
        const cellElement=document.createElement("div")
        cellElement.classList.add("square");
        cellElementid=index
        cellElement.addEventListener("click",addGo)
        gameBoard.append(cellElement)
    })
 }

 createBoard()
function addGo(e){
    const goDisplay = document.createElement("div");
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go === "circle" ? "cross" : "circle"
    infoDispaly.textContent="It Is Now " + go + "'s go"
    e.target.removeEventListener("click",addGo)
    checkScore()
}

function checkScore(){
    const allSquares=document.querySelectorAll(".square")
    const winningCombos=[
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8],[2,4,6]
    ]

    winningCombos.forEach(arr=>{
        const circleWins = arr.every(cell =>
            allSquares[cell].firstChild?.classList.contains("circle"))
            if(circleWins){
                infoDispaly.textContent="Circle Wins"
                allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
            }
    })

    winningCombos.forEach(arr=>{
        const crossWins = arr.every(cell =>
            allSquares[cell].firstChild?.classList.contains("cross"))
            if(crossWins){
                infoDispaly.textContent="Cross Wins"
                allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
            }
    })
    
}
