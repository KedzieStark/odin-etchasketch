const container = document.querySelector('.container');
const clearGridBtn = document.querySelector('.clearGridBtn');
const resizeGridBtn = document.querySelector('.resizeGridBtn');

// Create square grid

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.className = "square";
    container.append(square);
}

// Hover effect

const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.classList.add('active');
    })
})

// Clear grid
function clearGrid() {
    squares.forEach((square) => {
        square.classList.remove('active');
    })
}

function gridResize() {
    let gridSize = prompt("Enter a grid size","16");
    container.replaceChildren();
}

clearGridBtn.addEventListener('click', clearGrid);