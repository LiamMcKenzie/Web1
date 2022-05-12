const BASE_URL = "https://api.unsplash.com/";
fetch(`${BASE_URL}/search/photos?client_id=jfisuiMFSIiyuAKdw60iD0nIP6hQshWcfN3MROGivv8&query=tea-leaves&color=white`)
.then(response => response.json())
.then(d => {
  d["results"].forEach(r => {
    background[1].style.backgroundImage = `url(${r["urls"]["full"]})`;

    /*
    let product = document.createElement("div");
    product.classList.add("product");
    product.style.backgroundImage = `url(${r["urls"]["regular"]})`;
    
    let product_title = document.createElement("div");
    product_title.innerHTML = r["alt_description"]
    product_title.classList.add("product_title");
    product.append(product_title);
    
    document.querySelector(".product_grid").append(product);*/
  });
});


let collection = document.querySelectorAll(".collection_flex");

collection.forEach(c => {
  

});

/*
let collection0 = document.querySelector("[data-index='0']");
let collection1 = document.querySelector("[data-index='1']");
let collection2 = document.querySelector("[data-index='2']");*/
let background = document.querySelectorAll(".background_slides");
let content = document.querySelectorAll(".sale_content");
/*
collection0.addEventListener("mouseenter", function( event ) {  
  console.log("enter");
  collection0.classList.add("active");
  background[0].classList.add("active");
  background[1].classList.remove("active");
  background[2].classList.remove("active");
}, false);

collection1.addEventListener("mouseenter", function( event ) {  
  console.log("enter");
  collection1.classList.add("active");
  background[1].classList.add("active");
  background[0].classList.remove("active");
  background[2].classList.remove("active");
}, false);

collection2.addEventListener("mouseenter", function( event ) {  
  console.log("enter");
  collection2.classList.add("active");
  background[2].classList.add("active");
  background[1].classList.remove("active");
  background[0].classList.remove("active");
}, false);

collection0.addEventListener("mouseleave", function( event ){
  collection0.classList.remove("active");
}, false);

collection1.addEventListener("mouseleave", function( event ){
  collection1.classList.remove("active");
}, false);

collection2.addEventListener("mouseleave", function( event ){
  collection2.classList.remove("active");
}, false);*/

