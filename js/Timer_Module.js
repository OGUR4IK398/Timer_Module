"use strict";

// Получение элементов из документа
const body = document.querySelector("body");


// Создание элементов
const mainTimer = document.createElement("div");
// const timer = document.createElement("div");
const btnChange = document.createElement("button");



function createTimer(){
    const timer = document.createElement("div");
    // timer.textContent = "00:00:00";

    const seconds = document.createElement("div").classList.add("time-block");
    const minutes = document.createElement("div").classList.add("time-block");
    const hours = document.createElement("div").classList.add("time-block");
    
    
}

function createBtnChange(){

}


function changeTimer(btn, timer){

}



function createMainTimer(){

    mainTimer.appendChild(btnChange);
    mainTimer.appendChild(timer);


    mainTimer.style = "height: 50px; background-color: red;";
    body.appendChild(mainTimer);
}




// createMainTimer();