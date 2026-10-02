const colors = [
  "#f38ba8", // ružová
  "#df98cf",
  "#cba6f7", // fialová
  "#aaadf8",
  "#89b4fa", // modrá
  "#aaadf8",
  "#cba6f7",
  "#df98cf",
];

let colorIndex = 0;
const gridContainer = document.querySelector(".hero .container");
const sizeButton = document.querySelector(".size");

sizeButton.addEventListener("click", changeSize);

function changeColor() {
  this.style.backgroundColor = colors[colorIndex];
  colorIndex++;

  if (colorIndex >= colors.length) {
    colorIndex = 0;
  }
}

function changeSize() {
  let gridSize = prompt("Choose desired grid size (1-100):");

  if (Number(gridSize) < 1 || Number(gridSize) > 100) {
    alert("Desired grid size should be 1-100! Try again!");
  }
  createGrid(gridSize);
}

function createGrid(size) {
  gridContainer.textContent = "";

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", changeColor);
    square.style.width = `calc(100% / ${size})`;
    square.style.height = `calc(100% / ${size})`;

    gridContainer.appendChild(square);
  }
}

createGrid(32);
