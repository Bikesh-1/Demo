const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var elemC = document.querySelector("#core-team")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter",function(){
    fixed.style.display="block"

})

elemC.addEventListener("mouseleave",function(){
    fixed.style.display="none"

})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })

})


var elemCop = document.querySelector("#cop-cards")
var fixed2 = document.querySelector("#fixed-image2")
elemCop.addEventListener("mouseenter",function(){
    fixed2.style.display="block"

})

elemCop.addEventListener("mouseleave",function(){
    fixed2.style.display="none"

})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        fixed2.style.backgroundImage = `url(${image})`
    })

})


  