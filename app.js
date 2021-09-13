let cells = document.querySelectorAll('.row > div'),
    clickCount = 0

console.log(cells)

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked)
}

function cellClicked() {
    event.target.textContent = 'X'
    console.log("click count: " + clickCount)
    clickCount++

    if (clickCount % 2 == false) {
        event.target.textContent = 'O'
    } else if (clickCount >= 9) {
        alert('We may have a winner')
    }

    if (cellClicked.textContent == 'X') {
      checkWinner ()
      alert("You won X")  
    }
   // checkWinner ()
}

function checkWinner() {

    let winningCombos = [
        ['.top left', '.top middle', 'top right'],
        ['.center left', '.center', '.center right'],
        ['.bottom left', '.bottom middle', '.bottom right'],
        ['.top left', '.center middle', '.bottom right'],
        ['.top right', '.center', '.bottom left']
        ['.top middle', '.center', '.bottom middle']
        ['.top left', '.center left', '.bottom left']
        ['.top right', '.center right', '.bottom right']
    ]



}