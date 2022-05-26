/*let collection = document.querySelectorAll(".collection_flex");*/

/*let collection = document.getElementById("sale_collection");*/


const BASE_URL = "https://api.unsplash.com";
fetch(`${BASE_URL}/search/photos?client_id=jfisuiMFSIiyuAKdw60iD0nIP6hQshWcfN3MROGivv8&query=tea-leaves`)
.then(response => response.json())
.then(data => {
    let image = data["results"];

    for(i=0;i<3;i++){
      backgrounds[i].style.backgroundImage = `url(${image[i]["urls"]["full"]})`;
    }

    /*
    let product = document.createElement("div");
    product.classList.add("product");
    product.style.backgroundImage = `url(${results["urls"]["regular"]})`;
    
    let product_title = document.createElement("div");
    product_title.innerHTML = results["alt_description"]
    product_title.classList.add("product_title");
    product.append(product_title);
    
    document.querySelector(".product_grid").append(product);*/
    console.log(image);
    
});


let collections = document.querySelectorAll(".collection_flex");
let backgrounds = document.querySelectorAll(".background_slides");
let content = document.querySelectorAll(".sale_content");


collections.forEach((c,i) => {
  c.addEventListener("mouseenter", function( event ) {  
    collections.forEach(c =>{
      c.classList.remove("active");
    })

    c.classList.add("active");
    console.log(c);

    backgrounds.forEach(b => {
      b.classList.remove("active");
    })

    content.forEach(t => {
      t.classList.remove("active");
    })

    backgrounds[i].classList.add("active");
    content[i].classList.add("active");

  }, false);

  c.addEventListener("mouseleave", function( event ){
    c.classList.remove("active");
  }, false);
})
