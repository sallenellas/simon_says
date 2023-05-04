const dimensions = 3;
const playButton = document.querySelector('#play');


// Random color generator
function generateColor(){
    let color = [];
    let r = Math.floor(Math.random() * 100) + 50;
    color.push(r);
    let g = Math.floor(Math.random() * 100) + 50;
    color.push(g);
    let b = Math.floor(Math.random() * 100) + 50;
    color.push(b);
    let a = 1.0;
    color.push(a);
    color.join('');
    return color;
}

playButton.addEventListener('click', () => {

    let row = [];
    let column = [];

    const squares = document.createElement('div');
    squares.className = "squares";
    document.body.appendChild(squares);

    for (let i = 0; i < dimensions; i++){
        row[i] = document.createElement('button');
        row[i].classList.add('square');
        for (let j = 0; j < row.length; j++) {
            column[j] = document.createElement('button');
            column[j].classList.add('square');
            squares.appendChild(column[j]);
            squares.appendChild(row[i]);
        }
        squares.appendChild(row[i]);
    }
    squares.addEventListener('click', (e) => {
        // console.log(e.target);
        let red = generateColor()[0];
        let green = generateColor()[1];
        let blue = generateColor()[2];
        let alpha = generateColor()[3];
        e.target.style = `background-color: #${red}${green}${blue}${alpha}`;
    });

});