let matriculado1 = document.getElementsByClassName('matriculado')[0]
let matriculado2 = document.getElementsByClassName('matriculado')[1]
let matriculado3 = document.getElementsByClassName('matriculado')[2]
let matriculado4 = document.getElementsByClassName('matriculado')[3]
let matriculado5 = document.getElementsByClassName('matriculado')[4]
let matriculado6 = document.getElementsByClassName('matriculado')[5]
let matriculado7 = document.getElementsByClassName('matriculado')[6]
let matriculado8 = document.getElementsByClassName('matriculado')[7]
let matriculado9 = document.getElementsByClassName('matriculado')[8]
let aluno = ['Aluno 1', 'Aluno 2', 'Aluno 3', 'Aluno 4', 'Aluno 5', 'Aluno 6', 'Aluno 7', 'aluno 8', 'Aluno 9']
function criar(){
    matriculado1.innerHTML = `${aluno[0]}<input type="checkbox" name="pres">`
    matriculado2.innerHTML = `${aluno[1]}<input type="checkbox" name="pres">`
    matriculado3.innerHTML = `${aluno[2]}<input type="checkbox" name="pres">`
    matriculado4.innerHTML = `${aluno[3]}<input type="checkbox" name="pres">`
    matriculado5.innerHTML = `${aluno[4]}<input type="checkbox" name="pres">`
    matriculado6.innerHTML = `${aluno[5]}<input type="checkbox" name="pres">`
    matriculado7.innerHTML = `${aluno[6]}<input type="checkbox" name="pres">`
    matriculado8.innerHTML = `${aluno[7]}<input type="checkbox" name="pres">`
    matriculado9.innerHTML = `${aluno[8]}<input type="checkbox" name="pres">`
}

function comp(){
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
    res.innerHTML = `<p>PRESENTES: ${p.length}</p><select  id="selct" size="20"></select>
    <p>MATRICULADOS: ${aluno.length}</p>
    <p>AUSENTES: ${aluno.length - p.length}  </p>
    <p>TOTAL DE BÍBLIAS: ${totb}</p>
    <p>TOTAL DE REVISTAS: ${totr} </p>
    <p>VISITANTES: </p>
    <p>TOTAL DE ASSISTÊNCIA: </p>`
    let sel = document.getElementById('selct')
    for(i = 0; i < p.length; i++){
    let pr = document.createElement('option')
    pr.text = `${p[i]}`
    selct.appendChild(pr) 
    }
}
