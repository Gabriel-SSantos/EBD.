function sorteio(){
    sort = document.getElementById('sorteio')
    sort.style.display = 'block'
}

function grupos(){
    grup = document.getElementById('grupos')
    grup.style.display = 'flex'
}
let j = -1
function criagrupos(){
    grup = document.getElementById('grupos')
    let qtd = Number(document.getElementById('grupqtd').value)
    let conf = document.getElementById("config")
    //conf.style.display = "none"
    grup.innerHTML = ""
    let i
    for(i = 0; i < qtd; i++){
        grup.innerHTML += `<div class="caixgrup">
        <h2>Grupo ${i}</h2>
        <div class="alunogrup"></div>
        <div id="pontos">
        <input type="button" value="Pontos">
        <p>Pontuação do grupo: </p>
        </div>`
        let caixgrup = document.getElementsByClassName("caixgrup")[i]
        caixgrup.style.display = "block"
        caixgrup.style.background = "rgb(72," +Math.random()*255+","+Math.random()*255+ ")"
    }
    j = i
     
}
function quiz(){
    quiz = document.getElementById('quiz')
    quiz.style.display = 'block'
}
function add(){
    Text = document.getElementById('inserir')
    let q = [];
    q.push(Text.value)
    quiz = document.getElementById('quiz')
   for(i = 0; i<q.length; i++){
    quiz.innerHTML += `<p class="pergunta">${q[i]}</p>`
   }
}
let esc = JSON.parse(localStorage.getItem("escolha"))
let grupesc = JSON.parse(localStorage.getItem("escolha"))
function escolher(){
    if(j >= 0 && grupesc.length > 0){
        for(i = 0; i < j; i++){
        let al = document.getElementsByClassName("alunogrup")[i]
        e = Math.floor(Math.random()*grupesc.length)
        if(grupesc[e].length > 0){
        al.innerHTML += `<p>${grupesc[e]}</p>`
        grupesc.splice(e,1) 
        }
        } 
    } else {
        e = Math.floor(Math.random()*esc.length)
    escolha = document.getElementById('sorteio')
    escolha.innerHTML = `<input type="button" class="bot" onclick="escolher()">
    <p>${esc[e]}</p>
    <img src="seletor.png">`
     esc.splice(e,1) 
    }
    
}
function pts(){
    
}



