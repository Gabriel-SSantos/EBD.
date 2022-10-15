
function sorteio(){
    sort = document.getElementById('sorteio')
    sort.style.display = 'block'
}

function grupos(){
    grup = document.getElementById('grupos')
    grup.style.display = 'flex'
}
function cronometro(){
    let relogio = document.getElementById('relogio').style.display="flex"
}
let j = -1
function criagrupos(){
    let Abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    
    grup = document.getElementById('grupos')
    let qtd = Number(document.getElementById('grupqtd').value)
    grup.innerHTML = ""
    let i

    for(i = 0; i < qtd; i++){
        grup.innerHTML += `<div class="caixgrup">
        <h2>Grupo ${Abc[i]}</h2>
        <div class="alunogrup"></div>
        <div>
        <input type="button" value="Pontos" onclick="pontuar(${i})">
        <p class="pontos">Pontuação do grupo: </p>
        </div>`
        let caixgrup = document.getElementsByClassName("caixgrup")[i]
        caixgrup.style.display = "block"
        caixgrup.style.background = "rgb(72," +Math.random()*255+","+Math.random()*255+ ")"
    }
    j = i
    pontos(qtd)
     
}
function quiz(){
    quiz = document.getElementById('quizconfi')
    quiz.style.display = 'block'
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


let Tdgrupos = [{grupo: 0, pnts: 0},{grupo: 1, pnts: 0}]
function pontos(qtd) {
    let grupo = {}
    for(i = 0; i < qtd; i++){
    grupo = {
        grupo: i,
        pnts: 0
    }
    Tdgrupos.push(grupo) 
}
}
function pontuar(i){
    let pontostot = 1000
    pnts = document.getElementsByClassName("pontos")
    if(segundosTot() != 0){
       Tdgrupos[i].pnts += Math.round(pontostot/segundosTot())
    }else{
        Tdgrupos[i].pnts += 5
    }
    pnts[Tdgrupos[i].grupo].innerText = `Pontuação do grupo: ${Tdgrupos[i].pnts}`
}

let perguntas = []
var px = 513
let q = [];
function add(){
    Text = document.getElementById('inserir')
    q.push(Text.value)
    quest = document.getElementById('quest')
    quest.innerHTML = ""
   for(i = 0; i < q.length; i++){
    quest.innerHTML += `<p class="pergunta">${q[i]}</p>`
   }
   px += 50
   let pessoas = document.getElementById("pessoas")   
   pessoas.style.top = `${px}px` 
}

function salvar(){
    localStorage.quest = JSON.stringify(q)
    quest = document.getElementById('quest')
    quest.innerHTML = ""
    quiz = document.getElementById('quizconfi')
    quiz.style.display = 'none'
    
   let pessoas = document.getElementById("pessoas")   
   pessoas.style.top = `513px`
    alert("Salvamento concluído com sucesso!")
}

let sort = true
function sortearquiz(){
    quest = document.getElementById("quest")
    quest.display = "flex"
    if(sort){
        perguntas = JSON.parse(localStorage.getItem('quest'))
        sort = false
    }
    if(perguntas.length > 0){
        quest = document.getElementById('quest')
        let e = Math.floor(Math.random()*perguntas.length)
        var pergunta = document.createElement("p")
        pergunta.className = "pergunta"
        pergunta.textContent = perguntas[e]
        q.push(perguntas[e])
        quest.appendChild(pergunta)
        //quest.innerHTML += `<p class="pergunta">${perguntas[e]}</p>`    
        perguntas.splice(e,1) 
        let pessoas = document.getElementById("pessoas")  
        px += 50 
        pessoas.style.top = `${px}px`
    }

}
function gerarpdf(){
    const data = new Date()
    const doc = new jsPDF()
    let dia = "Aula do dia " + data.getFullYear

    doc.text(dia, 30,10)
    doc.text(JSON.parse(localStorage.getItem('quest')), 10, 20)
    doc.output("dataurlnewwindow")
}


