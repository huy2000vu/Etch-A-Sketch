let gridsize = 16    
const container = document.getElementById("container");
for (let i = 0; i < gridsize*gridsize ; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grids");
    grid.style.flex = `0 0 calc(100%/${gridsize})`;
    grid.style.height = '100%/${gridsize}';
    container.appendChild(grid);
}

const grids = document.querySelectorAll(".grids");
grids.forEach((grid)=>{
    grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = "red";
        console.log("grid.id");
    })
})

console.log('Script loaded and event listeners added');