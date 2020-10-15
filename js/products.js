
var products= document.querySelectorAll(".product-item");
var feature = document.querySelectorAll(".Featured");
var flash = document.querySelectorAll(".Flash");
var minute = document.querySelectorAll(".Minute");
var product = document.getElementById("prod").getElementsByTagName("a")[0];
function AllProducts() {
    for(var k =0;k<products.length ; k++){
        products[k].style.display="block";
        product.style.color="#F33F3F";
        console.log("oK");
    }
}

function Featured (){
  for(let i =0;i<products.length ; i++){
      products[i].style.display="none";
      products[i].classList.remove("active");
      product.classList.remove("active");
      product.style.color="#232323"
      console.log("oK")
  }
  for(let x=0 ; x<feature.length ; x++){
      feature[x].classList.add("active");
      console.log("active");
  }
}
function Flash(){
    for(let i =0;i<products.length ; i++){
        products[i].style.display="none";
        products[i].classList.remove("active");
        product.classList.remove("active");
       product.style.color="#232323"
        console.log("oK")
    }
    for(let y=0 ; y<flash.length ; y++){
        flash[y].classList.add("active");
        console.log("active");
    }
 }
 function Minute(){
    for(let i =0;i<products.length ; i++){
        products[i].style.display="none";
        products[i].classList.remove("active");
        product.classList.remove("active");
        product.style.color="#232323"
        console.log("oK")
    }
    for(let z=0 ; z<minute.length ; z++){
        minute[z].classList.add("active");
        console.log("active");
    }
 }