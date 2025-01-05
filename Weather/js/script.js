
var cookie = document.querySelector("#cookies");

function hide(){
    console.log(cookie);    
    cookie.remove();
}


function changeToF(temps){
    for(var i=0; i<8; i++){
        var temp = document.querySelector("#temp"+(i+1));
        temp.textContent = Math.floor((temps[i] * 9/5)+32);

    }
}


function changeToC(temps){
    for(var i=0; i<8; i++){
        var temp = document.querySelector("#temp"+(i+1));
        temp.textContent = Math.ceil((temps[i] - 32 )*5/9);
    }
}

function changeTemp(){
    var tempConv = document.getElementById("tempSelect").value;

    var temps = [];
    for(var i=1; i<9; i++){
        var temp = document.querySelector("#temp"+i).textContent;
        temps.push(temp);
    }
    if(tempConv == "F"){
        changeToF(temps);
    } else {
        changeToC(temps)
    }

}