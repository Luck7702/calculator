
let x = ""

let y = 1;

let total = 0;




document.getElementById("1").onclick = function(){
    x += "1";
    document.getElementById("output").textContent = x;
}


document.getElementById("2").onclick = function(){
    x += "2";
    document.getElementById("output").textContent = x;
}

document.getElementById("3").onclick = function(){
    x += "3";
    document.getElementById("output").textContent = x;
}

document.getElementById("4").onclick = function(){
    x += "4";
    document.getElementById("output").textContent = x;
}

document.getElementById("5").onclick = function(){
    x += "5";
    document.getElementById("output").textContent = x;
}

document.getElementById("6").onclick = function(){
    x += "6";
    document.getElementById("output").textContent = x;
}

document.getElementById("7").onclick = function(){
    x += "7";
    document.getElementById("output").textContent = x;
}

document.getElementById("8").onclick = function(){
    x += "8";
    document.getElementById("output").textContent = x;
}

document.getElementById("9").onclick = function(){
    x += "9";
    document.getElementById("output").textContent = x;
}

document.getElementById("0").onclick = function(){
    x += "0";
    document.getElementById("output").textContent = x;
}

document.getElementById("+").onclick = function(){

   

    total += y * (document.getElementById("output").textContent)

    y = 1
    x = ""

    document.getElementById("output").textContent = 0;

    

}

document.getElementById("-").onclick = function(){

    
    
    total += y * (document.getElementById("output").textContent)
    y = -1;
    x = "";
    document.getElementById("output").textContent = 0;

}

document.getElementById("=").onclick = function(){
    
    
    total += y * (document.getElementById("output").textContent);

    x = "";
    y = 1;
    
    document.getElementById("output").textContent = total;

    total = 0;

    

    console.log(y);
}