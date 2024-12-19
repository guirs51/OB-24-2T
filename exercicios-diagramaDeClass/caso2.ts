class Aluno {
    matricula: number
    nome: string
    dataNasci: string
    endereco: string

    constructor(matricula: number, nome: string, dataNasci: string, endereco: string){
        this.dataNasci = dataNasci
        this.endereco = endereco
        this.nome = nome
        this.matricula = matricula
    }
}

class Disciplina {
    codigo: number
    nome: string
    cargaHoraria: string

    constructor(codigo: number, nome: string, carcaHoraria: string){
        this.codigo = codigo
        this.nome = nome
        this.cargaHoraria = carcaHoraria
    }
}

class Professor {
    matricula: number
    nome: string
    areaDeAtuacao: string

    constructor(matricula: number, nome: string, areaDeAtuacao: string){
        this.matricula = matricula
        this.nome = nome
        this.areaDeAtuacao = areaDeAtuacao
    }
}

class Turma {
    codigo: number
    disciplina: string
    professor: Professor
    alunos: Aluno[] = []

    constructor(codigo: number, disciplina: string, professor: Professor){
        this.codigo = codigo
        this.disciplina = disciplina
        this.professor = professor
    }

    adicionarAluno(aluno: Aluno){
        this.alunos.push(aluno)
    }
}