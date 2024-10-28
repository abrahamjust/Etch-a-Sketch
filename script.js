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
}

a = 10;
createGrid(a);

divColor = document.querySelectorAll('.columnDiv');
divColor.forEach(divColor => {
    divColor.addEventListener("mouseover", function (e) {
        e.target.style.backgroundColor = "Black";
      });    
});
