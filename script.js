const container = document.querySelector('.container');
const clearGridBtn = document.querySelector('.clearGridBtn');
const resizeGridBtn = document.querySelector('.resizeGridBtn');


// Create square grid

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add("square","ini");
    container.append(square);
}

let squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.classList.add('active');
    });
});

// Clear grid
function clearGrid() {
    squares.forEach((square) => {
        square.classList.remove('active');
    })
}

function gridResize() {
    container.replaceChildren();
    let gridSize = prompt("Enter a grid size","16");
    let newSquareSize = (100 / gridSize);
    for (let i = 0; i < Math.pow(gridSize, 2); i++) {
        const square = document.createElement("div");
        square.classList.add("square","testClass");
        square.style.setProperty("width", `calc(${newSquareSize}%)`);
        container.append(square);
        //addHover();
    }
    squares = document.querySelectorAll('.testClass');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.classList.add('active');
        });
    });
}

clearGridBtn.addEventListener('click', clearGrid);
resizeGridBtn.addEventListener('click', gridResize);


