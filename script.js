const container = document.querySelector('.container');

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

