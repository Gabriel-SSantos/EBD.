function Aluno(nome){
    this.nome = nome;
}
let o = new Aluno('gabriel')
o.nome
matriculados1.innerHTML = `${o.nome}`