// global variables and the default state.
// default grid size
let a = 10;
createGrid(a);


// functions

// creating the grid
function createGrid(a) {
    const container = document.querySelector('.Container');
    for(i = 0; i < a; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'rowDiv';
        for(j = 0; j < a; j++) {
            const colDiv = document.createElement('div');
            colDiv.className = 'columnDiv';
            // setting a default opacity
            colDiv.style.opacity = 0;
            rowDiv.appendChild(colDiv);
        }
        container.appendChild(rowDiv);
    }
    // activate the hover effect after creating the grid
    activateHoverEffect();
}

// getting user input
function alertSizeInput() {
    do {
        a = prompt("Enter the size of the grid (max size = 100, min size > 0)");
    } while(a < 0 || a > 100);
    resetGrid();
    createGrid(a);
}

// deleting the parent node(rowDiv) will delete the child nodes(columnDiv) also
function resetGrid() {
    const rowDiv = document.querySelectorAll('.rowDiv');
    rowDiv.forEach(rowDiv => {
        rowDiv.remove();
    });
}

// reason why i put this inside a function is because if i don't, it only activates after the first default grid generation.
// after that, for next grid generations through user input, it doesn't work. So to make the event activate after every grid generation, 
// put the event inside a function and call the function after grid generation
function activateHoverEffect() {
    divColor = document.querySelectorAll('.columnDiv');
    divColor.forEach(divColor => {
        divColor.addEventListener("mouseover", function (e) {
            let red = randomNumber();
            let green = randomNumber();
            let blue = randomNumber();
            // can't use the variables directly, only works with numbers
            // need to use the " ` ", inorder to substitute the variable values as numbers into the function
            // " ` " is a template literal and is used for string interpolation (that subbing variables into values is interpolation)
            //taking the original/previous opacity and add 0.1 to it(to increase by 10%)
            let opacity = parseFloat(e.target.style.opacity) + 0.1
            // setting background color
            e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
            // setting opacity
            e.target.style.opacity = opacity;
        });    
    });
}

// random number 
function randomNumber() {
    // 0 and 255 as it is the range for rgb colors
    let random = 0 + Math.floor(Math.random() * (255 - 0 + 1));
    return random
}

// event selectors

//even when button is clicked
const btn = document.querySelector('.changeSize');
btn.addEventListener('click', alertSizeInput);