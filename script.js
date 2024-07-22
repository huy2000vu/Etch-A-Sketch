let gridsize 
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
    container.appendChild(grid);
}
const grids = document.querySelectorAll(".grids");
grids.forEach((grid)=>{
    grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = "red";
        // console.log("grid.id");
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

// function realTimeDimensionValue()
// {

// }