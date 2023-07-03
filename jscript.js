/* some constants and variable on global scope */
const sketchpadFrame = document.querySelector("#sketchpadFrame > .frame");
const gridSizeBtn = document.querySelector("#gridSizeBtn")


let size = 32
let columns = 0;
let divs = 0;
let color = "black";
let iterateRaimbow = 0;
let raimbow = false;

var rainbowColors = [
    "#FF0000",  // Red
    "#FFA500",  // Orange
    "#FFFF00",  // Yellow
    "#00FF00",  // Green
    "#0000FF",  // Blue
    "#4B0082",  // Indigo
    "#EE82EE"   // Violet
];


/* functions */

function makeGrid(size) { /* this functions creates a grid of divs inside .frame in a dinamic way */
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
    allowDrawing()
    return 0; 
}

function cleanGrid(){ 
    const rowNode = document.querySelectorAll(".row")
    rowNode.forEach(row => {
        sketchpadFrame.removeChild(row)
    });
    divs = 0
};

function getGridSize() {
    size = Number(window.prompt("Input number of squares on side grid", "32"));
}

function replaceGrid(){ /* ask user for new grid size, removes old grid, creates new grid */
    getGridSize();
    cleanGrid();
    makeGrid(size);
}

function allowDrawing(){
    const gridSqr = document.querySelectorAll('.column');

    let mouseDown = false;

    function handleMouseDown() {
        mouseDown = true;
    }

    function handleMouseUp() {
        mouseDown = false;
    }

    function handleMouseEnter(column) {
        if (mouseDown) {
            if (raimbow == false) {
                column.target.style.background = color;
            } else if ( raimbow == true) {
                if (iterateRaimbow <= 6) {
                    color = rainbowColors[iterateRaimbow];
                    ++iterateRaimbow;
                } else  {
                    iterateRaimbow = 0;
                    color = rainbowColors[iterateRaimbow];
                    ++iterateRaimbow
                }
                column.target.style.background = color;
            }
        }  
    }
    gridSqr.forEach(column => {
        column.addEventListener('mousedown', handleMouseDown);
        column.addEventListener('mouseup', handleMouseUp);
        column.addEventListener('mouseenter', handleMouseEnter);
    })
}

function raimbowcolors() {
    

}

function allowRaimbow() {
    if (raimbow == true) {
        raimbow = false
        color = "black"
    } else if (raimbow == false) [
        raimbow = true
    ]
}

/* main script */
makeGrid(size)

document.getElementById("gridSizeBtn").addEventListener("click", function(){replaceGrid()})
document.getElementById("raimbowMode").addEventListener("click", function(){allowRaimbow()} )
/*document.gridSqr.addEventListener("mouseover", function(event) {
    if (raimbow == true) {
        if (target.event.matches(".grid-item")) {
            event.target.style.backgroundColor = raimbowcolors();
            }
        }
    }
)*/
