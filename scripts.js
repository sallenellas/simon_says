// difficulty
function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}


// Create a 2D array to hold the buttons
const buttonGrid = [];

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
        document.getElementById("button-grid").appendChild(button);
        button.addEventListener('click', (e) => {
            
            const currentColor = button.style.backgroundColor;
            const currentWidth = button.offsetWidth;
            const currentHeight = button.offsetHeight;
          
            // Set the new width and height of the button to be slightly larger
            const newWidth = currentWidth * 1.025;
            const newHeight = currentHeight * 1.025;
            button.style.width = `${newWidth}px`;
            button.style.height = `${newHeight}px`;

            button.style.backgroundColor = getRandomColor()

            setTimeout(() => {
                button.style.backgroundColor = currentColor;
                button.style.width = `${currentWidth}px`;
                button.style.height = `${currentHeight}px`;
            }, 200);
        })
    }
};

const play = document.querySelector('#play');

play.addEventListener('click', (e) => {
    let x = Math.floor(Math.random() * 3);
    let y = Math.floor(Math.random() * 3);
    const randomButton = document.getElementById(`(${x}, ${y})`);
    const colorNow = randomButton.style.backgroundColor;
    randomButton.style.backgroundColor = getRandomColor();

    setTimeout(() => {
        randomButton.style.backgroundColor = colorNow;
    }, 200);
});