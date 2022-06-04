"use strict";

// Получение элементов из документа
const body = document.querySelector("body");
const head = document.querySelector("head");


// Создание элементов
const mainTimer = document.createElement("div");
// const timer = document.createElement("div");
// const btnChange = document.createElement("button");


function addStyle(){
    const style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = "Timer_Styles.css";
    style.type = "text/css";
    head.appendChild(style);
}


function createTimer(){
    const timer = document.createElement("div");
    timer.classList.add("timer");
    // timer.textContent = "00:00:00";

    const seconds = document.createElement("div");
    const minutes = document.createElement("div");
    const hours = document.createElement("div");

    seconds.textContent = "00";
    minutes.textContent = "00";
    hours.textContent = "00";

    seconds.contentEditable = false;
    minutes.contentEditable = false;
    hours.contentEditable = false;

    seconds.classList.add("time-block", "seconds");
    minutes.classList.add("time-block", "minutes");
    hours.classList.add("time-block", "hours");

    timer.appendChild(hours);
    timer.appendChild(minutes);
    timer.appendChild(seconds);
    
    return timer;
}

function createBtnChange(){
    const btnChange = document.createElement("button");
    btnChange.addEventListener("click", ()=>{
        const timer = document.querySelector(".timer");
        document.querySelector(".seconds").contentEditable = true;
    });

    btnChange.textContent = "Изменить";
    return btnChange;
}


function changeTimer(btn, timer){

}



function createMainTimer(){

    
    mainTimer.appendChild(createTimer());
    mainTimer.appendChild(createBtnChange());

    mainTimer.style = "height: 50px; background-color: red;";
    body.appendChild(mainTimer);
}



addStyle();
createMainTimer();