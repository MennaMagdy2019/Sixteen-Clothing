/************ Sticky navber ************/
//window.onscroll = function(){onScroll()};

var list =  document.getElementById("menu");
//document.querySelectorAll("li a").forEach(li => li.style.color="red")

window.addEventListener("scroll", function(){
  document.getElementById("Navv").classList.toggle('sticky', window.scrollY || 0);
  
})


/**********toggle menu*******/
function togglemenu(){
    list.classList.toggle('active');
}

/****active nav *****/

const currentlocation = location.href;
const links =document.querySelectorAll("a");
for(var i=0;i<links.length;i++){
  if(links[i].href === currentlocation){
    links[i].className = "active"
  }
}