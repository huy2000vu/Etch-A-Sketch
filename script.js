let gridsize 
//random color enabled
let isRandomPaintColor = document.getElementById('randomColorBoolInput');
document.getElementById("sizebutton").onclick = () => {
    gridsize = document.getElementById("sizeInput").value
    reset()
    createGrids(gridsize);
}
function createGrids(size){
    const container = document.getElementById("container");
    for (let i = 0; i < size*size ; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grids");
    grid.style.flex = `0 0 calc(100%/${gridsize})`;
    grid.style.height = `100%/${gridsize}`;
    grid.style.backgroundColor = getUserBackgroundColor();
    container.appendChild(grid);
}
const grids = document.querySelectorAll(".grids");
grids.forEach((grid)=>{
    grid.addEventListener("mouseover", () => {
        if(isRandomPaintColor.checked) {
            grid.style.backgroundColor = getRandomColor();
        }
        else{
            grid.style.backgroundColor = getUserPaintColor();
        }
    })
})
}function reset(){
    const container = document.getElementById("container");
    let child = container.lastChild;
    while(child){
        container.removeChild(child);
        child = container.lastChild;
    }
}

function getUserPaintColor(){
    paintColor = document.getElementById("paintcolorInput")
    return paintColor.value;
}

function getUserBackgroundColor(){
    backgroundColor = document.getElementById("BackgroundColorInput")
    return backgroundColor.value;
}

function getRandomColor(){
    // return R G B with random values --> rgb(255,255,255)
    Rval = Math.floor(Math.random()*256)
    Gval = Math.floor(Math.random()*256)
    Bval = Math.floor(Math.random()*256)
    return `rgb(${Rval}, ${Gval}, ${Bval})`
}