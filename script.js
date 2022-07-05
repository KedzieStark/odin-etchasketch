// Get page elements, initialize grid variables
const container = document.querySelector('.container');
const clearGridBtn = document.querySelector('.clearGridBtn');
const resizeGridBtn = document.querySelector('.resizeGridBtn');
let squares;
clearGridBtn.addEventListener('click', clearGrid);
resizeGridBtn.addEventListener('click', gridResize);


// Create square grid
for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add("square","ini");
    container.append(square);
}

// Create utility functions
function mouseOver() {
    squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.classList.add('active');
        });
    })
}

function clearGrid() {
    squares.forEach((square) => {
        square.classList.remove('active');
    })
}

function gridResize() {
    let gridSize = parseInt(prompt("Enter a grid size","16"));
    while (isNaN(gridSize) || (gridSize <= 0) || (gridSize >= 100)) {
        gridSize = parseInt(prompt("Enter a number between 1 & 100","16")); 
    }
    container.replaceChildren();
    for (let i = 0; i < Math.pow(gridSize, 2); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.setProperty("width", `calc(${100 / gridSize}%)`);
        container.append(square);
    }
    mouseOver();
}

mouseOver();