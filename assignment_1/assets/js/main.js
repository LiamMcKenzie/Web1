document.addEventListener("click", e => {
    console.log(e.target);      
});

let test = document.querySelector(".collection_flex");

test.addEventListener("mouseenter", function( event ) {   
    // highlight the mouseenter target
    event.target.style.color = "purple";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);