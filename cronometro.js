let hh = 0;
let mm = 0;
let ss = 0;
let ms = 0
let tempo = 10;
let cron;
let ligado = false
function start(){
    if(!ligado){
    cronometro = setInterval(()=>{timer()},tempo)
    ligado = true
    }
}
function restart(){
    clearInterval(cronometro)
    mm = 0;
    ss = 0;
    ms = 0;
    let temp = document.getElementById('temp').innerText =  mm + "0:" + ss + "0:0" + ms 
    ligado = false
}
function stop(){
    clearInterval(cronometro)
    ligado = false
}

function timer(){
    ms++
    if(ms == 100){
    ss++
    ms = 0
    if(ss == 59){
        mm++ 
        ss = 0
        if(mm == 60){
            mm = 0
            hh++
        }
    }
}
let seg = "" + ss + ":"
let mim = "" + mm + ": "
    if(mm < 10){
        mim = "0" + mm + ":"
    }
    if(ss < 10){
        seg = "0" + ss + ": " 
    }
    
    let temp = document.getElementById('temp').innerText =  mim + seg + ms 
}

function segundosTot(){
    return mm*60 + ss 
}