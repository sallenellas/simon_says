const dimensions = 3;
const playButton = document.querySelector('#play');

playButton.addEventListener('click', () => {

    let row = [];
    let column = [];

    const squares = document.createElement('div');
    squares.className = "squares";
    document.body.appendChild(squares);

    for (let i = 0; i < dimensions; i++){
        row[i] = document.createElement('button');
        row[i].className = "row";
        row[i].classList.add('square');
        squares.appendChild(row[i]);

        for (let j = 0; j < row.length; j++) {
            column[j] = document.createElement('button');
            column[j].className = "column";
            column[j].classList.add('square');
            squares.appendChild(column[j]);
        }
    }

});



