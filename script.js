const container = document.querySelector('.Container');
for(i = 0; i < 10; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'rowDiv';
    for(j = 0; j < 10; j++) {
        const colDiv = document.createElement('div');
        colDiv.className = 'columnDiv';
        rowDiv.appendChild(colDiv);
    }
    container.appendChild(rowDiv);
}