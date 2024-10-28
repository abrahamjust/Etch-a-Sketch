// global variables and the default state.

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
            e.target.style.backgroundColor = "Black";
        });    
    });
}


// event selectors

//even when button is clicked
const btn = document.querySelector('.changeSize');
btn.addEventListener('click', alertSizeInput);

