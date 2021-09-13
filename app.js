let cells = document.querySelectorAll('.row > div'),
    clickCount = 0
    let resetButton = document.getElementById('reset');
let winningCombos = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]]
];

resetButton.addEventListener("click", function () {
    window.location.reload();
});

console.log(cells)

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked)
}

function cellClicked(e) {
    //event.target.textContent = 'X'
    //console.log("click count: " + clickCount)
    //clickCount++

    if (clickCount % 2 == 0) {
        e.target.textContent = 'X'
    } else {
        e.target.textContent = 'O'
    }

    clickCount++

    checkWinner();

}

function checkWinner() {

    for (i = 0; i < winningCombos.length; i++) {
        let xCount = 0
        let oCount = 0

        for (j = 0; j < winningCombos[i].length; j++) {

            if (winningCombos[i][j].textContent == 'X') {
                xCount++
            } else if (winningCombos[i][j].textContent == 'O') {
                oCount++
            }
        }

        if (xCount == 3) {
            alert("You won X")
            resetButton.style.display = "inline"
            return
        } else if (oCount == 3) {
            alert("You won O")
            resetButton.style.display = "inline"
            return
        }

    }
    if (clickCount == 9) {
        alert("DRAW")
        resetButton.style.display = "inline";
    }

}