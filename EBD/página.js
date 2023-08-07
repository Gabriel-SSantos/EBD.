let ativado = false
function configuracoes(){
    let inicio = document.getElementById('inic')
    let parteb = document.getElementById('seg')
    if(ativado){
        inicio.style.display = 'flex' 
        parteb.style.display = 'flex'
        ativado = false
    }else{
        parteb.style.display = 'none'
        inicio.style.display = 'none'
        ativado = true
    }
}
let aluno = []
function matricular(){
    let nome = document.getElementById('inserirnome').value  
    aluno = localStorage.getItem("matriculados")
    localStorage.matriculados = JSON.stringify(aluno.push(nome))
     
}

let alun = document.getElementById('seg')
let turmas = document.getElementById('inic')
function adolescentes(){
    aluno = ['aluno1','aluno2']
    criar(alun, turmas)
}
function crianças(){
    aluno = ['aluno1','aluno2']
    criar(alun,turmas)
}
function jovens(){
    aluno = ['Stella','Fernanda','Wingredy','Alana','Vinicius','Felipe','Filipe','Carmen','Jefferson','Luís','Wanderson','Joao Wesley','Catarina']
    criar(alun,turmas)
}
function mulheres(){
    aluno = ['aluno1','aluno2']
    criar(alun,turmas)
}
function homens(){
    aluno = ['aluno1','aluno2']
    criar(alun,turmas)
}

function criar(al, turm){
    turm.innerHTML = ``
    al.innerHTML = ''
    for(i = 0; i < aluno.length; i++){
    al.innerHTML += `<div class="aluno">
                <p class="matriculado">${aluno[i]}<input type="checkbox" name="pres"></p>
                <p>Biblia: <input type="checkbox"  class="bib"> Revista: <input type="checkbox" class="rev"> x<input type="checkbox" class="desmatriculado"></p>
            </div>`
    }
    add(alun)
    al.innerHTML += `<div id="recursos"> 
    <div id="visitant">
    <p>Visitantes: <input type="number" id="visit"> 
    </div>
    <div>
    </p><input type="button" value="COMPUTAR" id="computar" onclick="comp()"> 
    </div>
</div>`
al.innerHTML +=`<input type="button" value="Voltar" id="computar" onclick="voltar(turmas)"> `
}
function add(al){
    al.innerHTML += '<p> Novo aluno? Insira o nome: <input type="text" id="Novo" value ="nome..."></input> <input type="button" value="adicionar" onclick="adicionar()">'
} 
function adicionar(){
    let novo = document.querySelector('input#Novo')
    aluno.push(novo.value)
    criar(alun, turmas)
}
function voltar(turm){
    turm.innerHTML = `<div id="turmas">
    <p class="p">SELECIONE A TURMA </p>
    <p class="p" onclick="adolescentes()">ADOLESCENTES</p>
    <p class="p" onclick="crianças()">CRIANÇAS</p>
    <p class="p" onclick="jovens()">JOVENS</p>
    <p class="p" onclick="mulheres()">MULHERES</p>
    <p class="p" onclick="homens()">HOMENS</p>
</div>`
let seg = document.getElementById('seg')
seg.innerHTML = `<div id="alunos"> 
</div>`
let res = document.getElementById('res')
res.innerHTML = ``
}

function comp(){
    
    localStorage.removeItem("escolha")
let p = []
let n = Number(document.getElementById('visit').value)
let res = document.getElementById('res')
let b = document.getElementsByClassName('bib')
let pres = document.getElementsByName('pres')
let r = document.getElementsByClassName('rev')
let f = document.getElementsByClassName('desmatriculado')
let matriculados = aluno.length;
let presentes = 0
let totb = 0
let totr = 0
for(i = 0; i < aluno.length; i++){
    if(pres[i].checked && !(f[i].checked)){
    presentes += 1
    p.push(aluno[i])

} if(b[i].checked && !(f[i].checked)){
    totb += 1
}
 if(r[i].checked && !(f[i].checked)){
     totr += 1
}
if(f[i].checked){
       matriculados--
    }
}
   
let totass = p.length + n
    res.innerHTML = `<p>PRESENTES: ${p.length}</p><div id="present" ></div>
    <p>MATRICULADOS: ${matriculados}</p>
    <p>AUSENTES: ${matriculados - p.length}  </p>
    <p>TOTAL DE BÍBLIAS: ${totb}</p>
    <p>TOTAL DE REVISTAS: ${totr} </p>
    <p>VISITANTES: ${n} </p>
    <p>TOTAL DE ASSISTÊNCIA: ${totass}</p><a href="play.html" rel="next"><input type="button" id="play"></a>`
    let sel = document.getElementById('present')
    for(i = 0; i < p.length; i++){
    sel.innerHTML += `<p>${i+1} ${p[i]}</p>`
    }
    localStorage.escolha = JSON.stringify(p)
}

