function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

document.querySelector("button").addEventListener("click",function(){
     color = "#";
     Rvalue = getRndInteger(0,256);
     Gvalue = getRndInteger(0,256);
     Bvalue = getRndInteger(0,256);
     Rvalue = Rvalue.toString(16);
     Gvalue = Gvalue.toString(16);
     Bvalue = Bvalue.toString(16);
     color = color + (Rvalue < 10 ? "0"  : "") + Rvalue ;
     color = color + (Gvalue < 10 ? "0"  : "") + Gvalue ;
     color = color + (Bvalue < 10 ? "0"  : "") + Bvalue ;
     document.querySelector("body").style.background = color;
     document.querySelector("p").innerHTML = color;   
})