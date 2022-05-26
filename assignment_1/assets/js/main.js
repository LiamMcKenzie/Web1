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
});


let collections = document.querySelectorAll(".collection_flex");
let backgrounds = document.querySelectorAll(".background_slides");
let content = document.querySelectorAll(".sale_content");


collections.forEach((c,i) => {
  c.addEventListener("mouseenter", function( event ) {  
    collections.forEach(c =>{
      c.classList.remove("active");
    })

    backgrounds.forEach(b => {
      b.classList.remove("active");
    })

    content.forEach(t => {
      t.classList.remove("active");
    })
    c.classList.add("active");
    backgrounds[i].classList.add("active");
    content[i].classList.add("active");

  }, false);

  c.addEventListener("mouseleave", function( event ){
    c.classList.remove("active");
  }, false);
})


function startImageTransition(){
  let cur = backgrounds.length;

  setInterval(changeImage, 5000)

  async function changeImage(){
    
    let nextImage = (1 + cur) % backgrounds.length; 
    
    


    console.log("transition")
    await transition();



  }

  


  function transition(){

  }
}