const gridContainer = document.getElementById("gridContainer");
const resetButton = document.getElementById("resetButton");

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(size) {
  gridContainer.innerHTML = ""; // Clear existing grid
  const totalSquares = size * size;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = getRandomColor(); // Set random color on hover
    });
    gridContainer.appendChild(square);
  }
}

resetButton.addEventListener("click", () => {
  let newSize;
  do {
    newSize = parseInt(
      prompt("Enter the number of squares per side (1-100):"),
      10
    );
  } while (isNaN(newSize) || newSize < 1 || newSize > 100);

  createGrid(newSize);
});

// Create initial grid
createGrid(16);
