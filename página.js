let aluno = []
function adolescentes(){
    aluno = ['aluno1','aluno2']
    criar()
}
function crianças(){
    aluno = ['aluno1','aluno2']
    criar()
}
function jovens(){
    aluno = ['Stella','Fátima', 'Matheus','Luan','Lucas','Samuel','Carmem','Fernanda','Karine','wingredy','Alana','Vinicius','Micaele','felipe','Loyde','Ana','Gustavo','Milena','Karol']
    criar()
}
function mulheres(){
    aluno = ['aluno1','aluno2']
    criar()
}
function homens(){
    aluno = ['aluno1','aluno2']
    criar()
}
let turmas = document.getElementById('inic')
    turmas.innerHTML = ``
    let alun = document.getElementById('alunos')
let novo
function criar(){
    alun.innerHTML = ''
    for(i = 0; i < aluno.length; i++){
    alun.innerHTML += `<div class="aluno">
                <p class="matriculado">${aluno[i]}<input type="checkbox" name="pres"></p>
                <p>Biblia: <input type="checkbox"  class="bib"> Revista: <input type="checkbox" class="rev"> x<input type="checkbox" class="desmatriculado"></p>
            </div>`
    }
    add()
    alun.innerHTML += `<div id="recursos"> 
    <div id="visitant">
    <p>Visitantes: <input type="number" id="visit"> 
    </div>
    <div>
    </p><input type="button" value="COMPUTAR" id="computar" onclick="comp()"> 
    </div>
</div>`
alun.innerHTML +=`<input type="button" value="Voltar" id="computar" onclick="voltar()"> `
}
function add(){
    alun.innerHTML += '<p> Novo aluno? Insira o nome: <input type="text" id="Novo" value ="nome..."></input> <input type="button" value="adicionar" onclick="adicionar()">'
} 
function adicionar(){
    novo = document.querySelector('input#Novo')
    aluno.push(novo.value)
    criar()
    
}
function voltar(){
    let turmas = document.getElementById('inic')
    turmas.innerHTML = `<div id="turmas">
    <p class="p">SELECIONE A TURMA </p>
    <p class="p" onclick="adolescentes()">ADOLESCENTES</p>
    <p class="p" onclick="crianças()">CR</p>
    <p class="p" onclick="jovens()">JO</p>
    <p class="p" onclick="mulheres()">MU</p>
    <p class="p" onclick="homens()">HO</p>
</div>`
let seg = document.getElementById('seg')
seg.innerHTML = `<div id="alunos"> 
</div>`
let res = document.getElementById('res')
res.innerHTML = ``
}
function comp(){
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
let p = []
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
    <p>TOTAL DE ASSISTÊNCIA: ${totass}</p>`
    let sel = document.getElementById('present')
    for(i = 0; i < p.length; i++){
    sel.innerHTML += `<p>${i+1} ${p[i]}</p>`
    }
}


