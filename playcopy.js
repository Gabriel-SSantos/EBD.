
let esc = []
function sorteio(){
    sort = document.getElementById('sorteio')
    sort.style.display = 'block'
    let matriculados = ['Isa','Letícia','Felipe','Malu Xavier','Alana','Karol','Ana Lívia','Samuel','Luan','Milena','Luís Gustavo','Sara Carvalho','Stella','Marcos Facundes','Fabricia','Fernanda','Alisson','Hélia','Sara','Wingredy','Daniel Cruz','Jefferson','Karine','Vinicius']
    esc = matriculados
}

function grupos(){
    grup = document.getElementById('grupos')
    grup.style.display = 'flex'
    let qtd = Number(document.getElementById('grupqtd').value)
    pontos(3)
}
function cronometro(){
    let relogio = document.getElementById('relogio').style.display="block"
}
let j = -1
function criagrupos(){
    let Abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    
    grup = document.getElementById('grupos')
    let qtd = Number(document.getElementById('grupqtd').value)
    let conf = document.getElementById("config")
    //conf.style.display = "none"
    grup.innerHTML = ""
    let i

    for(i = 0; i < qtd; i++){
        grup.innerHTML += `<div class="caixgrup">
        <h2>Grupo ${Abc[i]}</h2>
        <div class="alunogrup"></div>
        <div >
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
    quest = document.getElementById('quiz')
    quest.style.display = 'block'
}
let q = [];
function add(){
    Text = document.getElementById('inserir')
    q.push(Text.value)
    quest = document.getElementById('quest')
    quest.innerHTML = ""
   for(i = 0; i < q.length; i++){
    quest.innerHTML += `<p class="pergunta">${q[i]}</p>`
   }
}

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
let Tdgrupos = []
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
    let pontostot = 10000
    let pnts = document.getElementsByClassName("pontos")
    if(segundosTot() != 0){
        Tdgrupos[i].pnts += Math.round( pontostot/segundosTot())
    }else{
        Tdgrupos[i].pnts += 5
    }
    pnts[Tdgrupos[i].grupo].innerText = `Pontuação do grupo: ${Tdgrupos[i].pnts}`
}
let perguntas = []
function salvar(){
    localStorage.quest = JSON.stringify(q)
}
let sort = true
function sortearquiz(){
    if(sort){
        perguntas = JSON.parse(localStorage.getItem('quest'))
        sort = false
    }
    quest = document.getElementById('quest')
    let e = Math.floor(Math.random()*perguntas.length)
        quest.innerHTML += `<p class="pergunta">${perguntas[e]}</p>`
    perguntas.splice(e,1) 
    
}





