var slideindex = 0;
function slideShow(index) {
    var slide = document.getElementsByClassName('slides')
    if(index == slide.length ){
        slideindex = 0;
        index= 0;
    }
    if(index < 0 ){
        slideindex = slide.length-1;
        index= slide.length-1;
    }
    for(var y of slide){
        y.style.display="none"
    }
    slide[index].style.display = "block";
}
slideShow(slideindex)

function control(x) {
    slideindex = slideindex + (x);
    slideShow(slideindex)
}
