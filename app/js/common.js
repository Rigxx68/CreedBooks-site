
//смена картинки
var x = 2
function imgchange(obj, imgX, imgY, imgZ) {    
    if (x == 1) {
        obj.src = imgX;        
    }
    else if (x == 2) {
        obj.src = imgY;  
    }
    else if (x == 3) {
        obj.src = imgZ;     
   }
    else if (x > 3 && x % 3 == 0) {
        obj.src = imgZ
    }
    else if (x > 3 && (x-1) % 3 == 0) {
        obj.src = imgX
    }
    else if (x > 3 && (x-2) % 3 == 0) {
        obj.src = imgY
    }
        x++;
}

//раскрытие текста "показать полностью"
function more() {
    document.getElementById("hideText").setAttribute("style", "display: inline");
    document.getElementById("more").setAttribute("style", "display: none");
    document.getElementById("less").setAttribute("style", "display: block");
}

function less() {
    document.getElementById("hideText").setAttribute("style", "display: none");
    document.getElementById("less").setAttribute("style", "display: none");
    document.getElementById("more").setAttribute("style", "display: block");
}

//стрелка вверх
window.onscroll = function() {
   var scrollElem = document.getElementById("top");
   if (document.body.scrollTop > document.documentElement.clientHeight) {
      scrollElem.style.opacity = "1";
   }
   else {
       scrollElem.style.opacity = "0";
   }
}