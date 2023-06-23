const sketchpadFrame = document.querySelector("#sketchpadFrame > .frame");

const divRow = 0;
const divcolumn = 0;
let gridSize = 32;

/* function CreateRow {
    const newDiv = document.createElement('div');
    const currentRow = newDiv
    current.classList.add('row');
    newDiv.setAttribute('id', divRow);
    newDiv
}*/
/* create a functions that creates the dives inside sketchpad frame
        create a functions that create and adds a number of divs in display:block equal to user request number
        inside those divs there needs to be a number of others divs in flex equal to user request number to create a grid
            these square divs need to always remain equal in size, and create a perfect square

    once the grid works fine, the individual squares should change background color when hoover over.

*/
function makeGrid() {
    let columns = 0;
    let divs = 0;
    
    while(divs < gridSize) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('row');
        newDiv.setAttribute('id', `a${divs}`);
        sketchpadFrame.appendChild(newDiv);
        const rowDiv = document.querySelector(`#a${divs}`);
        while(columns < gridSize) {
            const newCol = document.createElement('div');
            newCol.classList.add('column');
            rowDiv.appendChild(newCol);
            columns++;
        }
        divs++;
        columns = 0
    } 
    return 0; }  
makeGrid()

const gridSqr = document.querySelectorAll('.column');
gridSqr.forEach(column => {
    column.addEventListener('mouseover', function(e) {
    column.style.background = 'black'; });
    column.addEventListener('click', function(e) {
        column.style.background = 'black'; })
});
