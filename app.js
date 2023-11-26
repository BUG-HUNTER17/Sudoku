var numSelected = null;
var tileSelected = null;
var errors = 0;
var darkMode = false;

var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
];

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
];

window.onload = function() {
    setGame();

    document.getElementById("toggleDarkMode").addEventListener("click", toggleDarkMode);
    document.getElementById("resetGame").addEventListener("click", resetGame);
}

function setGame() {
    // ... (your existing setGame function)
}

function selectNumber() {
    // ... (your existing selectNumber function)
}

function selectTile() {
    // ... (your existing selectTile function)
}

function toggleDarkMode() {
    darkMode = !darkMode;

    var body = document.body;

    if (darkMode) {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }

    // Check for winning condition and add animation class
    if (checkWin()) {
        body.classList.add("win-animation");
    } else {
        body.classList.remove("win-animation");
    }
}

function checkWin() {
    // Implement your logic to check if the puzzle is solved
    // Compare the user's board with the solution
    // Return true if the puzzle is solved, otherwise return false
    // Example: return JSON.stringify(board) === JSON.stringify(solution);

    // For demonstration purposes, assuming the puzzle is solved when all tiles have a number
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] === "-") {
                return false;
            }
        }
    }
    return true;
}

function resetGame() {
    // Implement the logic to reset the game
    // Example: window.location.reload();
    // You can reload the page or reset the board and errors counters
    errors = 0;
    document.getElementById("errors").innerText = errors;
    document.body.classList.remove("win-animation");
    setGame();
}
