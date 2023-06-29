const sketchpadFrame = document.querySelector("#sketchpadFrame > .frame");
const gridSizeBtn = document.querySelectorAll("#gridSizeBtn")

const divRow = 0;
const divcolumn = 0;
let size = 32
let columns = 0;
let divs = 0;

function getGridSize() {
    size = Number(window.prompt("Input number of squares on side grid", "32"));
    makeGrid()
    return size;
}


/* script to create the grid */
document.getElementById("gridSizeBtn").addEventListener("click", function(){getGridSize()})

function makeGrid() {
    
    while (divs > 0) {
        sketchpadFrame.removeChild('div')
        divs--
    }
    while(divs < size) {
        

        console.log(size);
        const newDiv = document.createElement('div');
        newDiv.classList.add('row');
        newDiv.setAttribute('id', `a${divs}`);
        sketchpadFrame.appendChild(newDiv);
        const rowDiv = document.querySelector(`#a${divs}`);
        while(columns < size) {
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
 
/* Here starts the drawing script */

const gridSqr = document.querySelectorAll('.column');

let mouseDown = false;

function handleMouseDown() {
    mouseDown = true;
}

function handleMouseUp() {
    mouseDown = false;
}

function handleMouseEnter (column) {
    if (mouseDown) {
        column.target.style.background = 'black'
    }
}

gridSqr.forEach(column => {
    column.addEventListener('mousedown', handleMouseDown);
    column.addEventListener('mouseup', handleMouseUp);
    column.addEventListener('mouseenter', handleMouseEnter);
})
