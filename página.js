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
    aluno = ['Matheus','Fátima', 'Lucas','Luan','Jefferson','Felipe','Vinicius','Stella','Carmen','Wingryd','Karine','Letícia','Samuel','Fernanda','Alana','Daniele','P','Micaele']
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
function criar(){
    let turmas = document.getElementById('inic')
    turmas.innerHTML = ``
    let alun = document.getElementById('alunos')
    for(i = 0; i < aluno.length; i++){
    alun.innerHTML += `<div class="aluno">
                <p class="matriculado">${aluno[i]}<input type="checkbox" name="pres"></p>
                <p>Biblia: <input type="checkbox"  class="bib"> Revista: <input type="checkbox" class="rev"></p>
            </div>`
    }
    alun.innerHTML += `<div id="visitant"> 
    <p>Visitantes: <input type="number" id="visit"></p><input type="button" value="COMPUTAR" id="computar" onclick="comp()"> 
</div>`
alun.innerHTML +=`<input type="button" value="Voltar" id="computar" onclick="voltar()">`
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
let presentes = 0
let totb = 0
let totr = 0
let p = []
for(i = 0; i < aluno.length; i++){
    if(pres[i].checked){
    presentes += 1
    p.push(aluno[i])

} if(b[i].checked){
    totb += 1
}
 if(r[i].checked){
     totr += 1
 }
}   
let totass = p.length + n
    res.innerHTML = `<p>PRESENTES: ${p.length}</p><div id="present" ></div>
    <p>MATRICULADOS: ${aluno.length}</p>
    <p>AUSENTES: ${aluno.length - p.length}  </p>
    <p>TOTAL DE BÍBLIAS: ${totb}</p>
    <p>TOTAL DE REVISTAS: ${totr} </p>
    <p>VISITANTES: ${n} </p>
    <p>TOTAL DE ASSISTÊNCIA: ${totass}</p>`
    let sel = document.getElementById('present')
    for(i = 0; i < p.length; i++){
    sel.innerHTML += `<p>${i+1} ${p[i]}</p>`
    }
}

