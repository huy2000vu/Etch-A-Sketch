let gridsize 
let opacitycounter = 1;
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
        if(opacitycounter === 10)
            {
                opacitycounter = 1;
            }
        if(isRandomPaintColor.checked) {
            // console.log(getRandomColor(opacitycounter*0.1))
            grid.style.backgroundColor = getRandomColor(opacitycounter*0.1); 
            opacitycounter++;
            
        }
        else{
            let color = getUserPaintColor()
            grid.style.backgroundColor = hex2rgb(color,0.1*opacitycounter);
            // grid.style.backgroundColor = hex2rgb(getUserPaintColor(),opacitycounter*0.1);
            // console.log(hex2rgb(getUserPaintColor(),0.4))
            opacitycounter++;
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

function getRandomColor(opacity){
    // return R G B with random values --> rgb(255,255,255)
    Rval = Math.floor(Math.random()*256)
    Gval = Math.floor(Math.random()*256)
    Bval = Math.floor(Math.random()*256)
    return `rgb(${Rval}, ${Gval}, ${Bval}, ${opacity})`
}

function darkening(){

}

function hex2rgb(hex,opacity){
    hex = hex.replace(/^#/, '') //remove #
    let r = parseInt(hex.substring(0,2),16)
    let g = parseInt(hex.substring(2,4),16)
    let b = parseInt(hex.substring(4,6),16)
    
    return `rgb(${r}, ${g}, ${b}, ${opacity})`

}