let calendar = document.querySelector(".calendar");

document.querySelector(".llegada").addEventListener("click", e => {
    calendar.classList.toggle("active");
})

let month = document.createElement("div");

let today = new Date();
const month_name = today.toLocaleDateString('default', { month: 'long' });
month.innerHTML = month_name;

let day = today.getDate();
console.log(day);

let inner_grid = document.createElement("div");
inner_grid.classList.add("inner_grid");

for(let i = 1; i <= 31; i++)
{
    let square = document.createElement("div");
    square.classList.add("square");
    if(i < day)
        square.classList.add("disabled");

    square.innerHTML = i;
    inner_grid.append(square);
}

calendar.append(inner_grid);