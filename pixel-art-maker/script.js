let currentColor = '#000000';  // Default color
const colorPicker = document.getElementById('color-picker');

// Set color picker change event
colorPicker.addEventListener('input', (e) => {
  currentColor = e.target.value;
});

// Create a pixel grid with a specified size
function createGrid() {
  const gridSize = document.getElementById('grid-size').value;
  const grid = document.getElementById('pixel-grid');

  // Clear the grid before adding new squares
  grid.innerHTML = '';

  // Dynamically set the grid columns based on the grid size
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

  // Generate squares based on the grid size
  for (let i = 0; i < gridSize * gridSize; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    
    // Event listener to change color on click
    pixel.addEventListener('click', () => {
      pixel.style.backgroundColor = currentColor;
      pixel.classList.add('colored');
    });

    // Append the pixel to the grid
    grid.appendChild(pixel);
  }
}

// Initialize the grid with a default size of 20x20
createGrid();
