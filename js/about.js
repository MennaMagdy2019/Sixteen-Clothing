var tittles = document.querySelectorAll('.Tittle');
console.log(tittles.length);
var linksA = document.getElementById('links');
let ContactLinks = linksA.querySelectorAll('ul li a');
for(let i=0;i<tittles.length;i++){
    ContactLinks[i].addEventListener("click", function(){
        tittles[i].classList.toggle('active');
        
    })
}

