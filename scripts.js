// difficulty


// Create a 2D array to hold the buttons
const buttonGrid = [];

// Set the number of rows and columns for the grid
const dimensions = 3;

// Create the buttons and add them to the button grid
for (let row = 0; row < dimensions; row++) {
buttonGrid[row] = [];
    for (let col = 0; col < dimensions; col++) {
        const button = document.createElement("button");
        button.textContent = `(${row}, ${col})`;
        buttonGrid[row][col] = button;
        button.setAttribute("id", `(${row}, ${col})`);
        button.classList.add('square');
        // button.classList.add('fade-in');
        // button.style.gridRow = row + 1;
        // button.style.gridColumn = col + 1;
        document.getElementById("button-grid").appendChild(button);
    }
};