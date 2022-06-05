"use strict";



// Получение элементов из документа
const body = document.querySelector("body");
const head = document.querySelector("head");


// Создание элементов
const mainTimer = document.createElement("div");
// const timer = document.createElement("div");
// const btnChange = document.createElement("button");

let interval;

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
    btnChange.textContent = "Изменить";
    btnChange.addEventListener("click", ()=>{

        let hours = btnChange.parentNode.firstChild.firstChild;
        let minutes = btnChange.parentNode.firstChild.childNodes[1];
        let seconds = btnChange.parentNode.firstChild.lastChild;

        if (hours.contentEditable == "false"){
            hours.contentEditable = true;
            minutes.contentEditable = true;
            seconds.contentEditable = true;
            btnChange.textContent = "Сохраниь";
        } else {
            hours.contentEditable = false;
            minutes.contentEditable = false;
            seconds.contentEditable = false;
            btnChange.textContent = "Изменить";
        }

    });


    return btnChange;
}

function createBtnStart(){
    const btnStart = document.createElement("button");
    btnStart.textContent = "Старт";
    btnStart.addEventListener("click", (e)=>{

        interval = setInterval((e)=>{
            let hours = btnStart.parentNode.firstChild.firstChild;
            let minutes = btnStart.parentNode.firstChild.childNodes[1];
            let seconds = btnStart.parentNode.firstChild.lastChild;
            let hV = parseInt(hours.textContent);
            let mV = parseInt(minutes.textContent);
            let sV = parseInt(seconds.textContent);

            sV--;
            if (sV < 0){
                sV = 59;
                mV--;
                if (mV < 0){
                    hV--;
                    if (hV < 0){
                        hV = 0;
                        mV = 0;
                        sV = 0;
                        clearInterval(interval);
                    }
                }
            }

            hours.textContent = hV;
            minutes.textContent = mV;
            seconds.textContent = sV;
        }, 1000);

    });

    return btnStart;
}


function createBtnStop(){
    const btnStop = document.createElement("button");
    btnStop.textContent = "Стоп";
    btnStop.addEventListener("click", (e)=>{
        clearInterval(interval);
    });

    return btnStop;
}

function createMainTimer(){

    
    mainTimer.appendChild(createTimer());
    mainTimer.appendChild(createBtnChange());
    mainTimer.appendChild(createBtnStart());
    mainTimer.appendChild(createBtnStop());
    mainTimer.style = "height: 50px; background-color: red;";
    body.appendChild(mainTimer);
}



addStyle();
createMainTimer();