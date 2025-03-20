
let x = ""; let y = 1; let total = 0;

let z = 0;

let colors = ["aquamarine","red","blue","green"];

document.querySelectorAll("#Numbers button").forEach(button => {
    button.onclick = function() {
        x += this.textContent; 
        document.getElementById("output").textContent = x;
    };
});

document.getElementById("AC").onclick = function(){

    total = 0; x = ""; y = 1;
    document.getElementById("output").textContent = 0;


}

document.getElementById("+").onclick = function(){

    total += y * (document.getElementById("output").textContent)
    y = 1; x = "";  
    document.getElementById("output").textContent = 0;
}

document.getElementById("-").onclick = function(){

    total += y * (document.getElementById("output").textContent)
    y = -1; x = "";
    document.getElementById("output").textContent = 0;
}

document.getElementById("=").onclick = function(){
    
    total += y * (document.getElementById("output").textContent);
    x = ""; y = 1;
    document.getElementById("output").textContent = total;
    total = 0;
    console.log(y);
}

document.getElementById("Color").onclick = function(){

    if(z >= 3) z = -1; z += 1;
    
    document.getElementById("calcbutt").style.backgroundColor = colors[z];
    console.log(z);

}