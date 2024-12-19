class Professor {
    nome: string
    idioma: 'ingles' | 'espanhol' | 'grego' | 'japones'
    idade: number
    sala: '101' | '102' | '103' | 'Sala EAD'
    constructor(nome: string, idioma: 'ingles' | 'espanhol' | 'grego' | 'japones', idade: number, sala: '101' | '102' | '103' | 'Sala EAD') {
        this.nome = nome
        this.idioma = idioma
        this.idade = idade
        this.sala = sala
    }

    informacoes(): string {
        return `O professor ${this.nome} da aula de ${this.idioma}`
    }
}

class Aluno extends Professor {
  public cpf: string
    aulaPersonalizada: string

    constructor(nome: string, idade: number, cpf: string, idioma: 'ingles' | 'espanhol' | 'grego' | 'japones', aulaPersonalizada: string, sala: '101' | '102' | '103' | 'Sala EAD') {
        super(nome, idioma, idade, sala)
        this.cpf = cpf
        this.aulaPersonalizada = aulaPersonalizada
    }

        informacoes(): string{
        return `O aluno ${this.nome} tem aula de ${this.idioma}`
    }
}

class Turma {
    professor: Professor
    alunos: Aluno[] = []
    sala: '101' | '102' | '103' | 'Sala EAD'
    inicioDaTurma: string
    fimDaTurma: string

    constructor(sala: '101' | '102' | '103' | 'Sala EAD', inicioDaTurma: string, fimDaTurma: string, professor: Professor) {
        this.sala = sala
        this.inicioDaTurma = inicioDaTurma
        this.fimDaTurma = fimDaTurma
        this.professor = professor
    }

    adicionarAluno(aluno: Aluno) {
        this.alunos.push(aluno)
    }
}

class Escola {
    nome: string
    cidade: string
    turmas: Turma[] = []

    constructor(nome: string, cidade: string) {
        this.nome = nome
        this.cidade = cidade
    }

    adicionarTurma(turma: Turma) {
        this.turmas.push(turma)
    }
}

const professorDeIngles = new Professor("mariua claudia", "ingles", 29, "102")
const professorDeGrego = new Professor("paulo", "grego", 31, "101")
const professorDeEspanhol = new Professor("jay joul", "espanhol", 28, "103")
const professorDeJapones = new Professor("shintaro", "japones", 19, "Sala EAD")

const aluno1 = new Aluno("Guilherme", 17, "000.000.000-03", "ingles", "focar mais na fala", "102")
const aluno2 = new Aluno("Pedro", 18, "000.000.000-02", "ingles", "ja tem nivel avançado, focar em...", "102")
const aluno3 = new Aluno("Jão", 16, "000.000.000-04", "ingles", "focar mais na escuta", "102")
const aluno4 = new Aluno("Gustavo", 16, "000.000.000-05", "ingles", "focar mais na escuta", "102")
const aluno5 = new Aluno("Ingrid", 16, "000.000.000-07", "ingles", "focar mais na escuta", "102")
const aluno6 = new Aluno("Roberto", 16, "000.000.000-09", "ingles", "focar mais na escuta", "102")
const aluno7 = new Aluno("Roberta", 16, "033.000.000-03", "ingles", "focar mais na escuta", "102")
const aluno8 = new Aluno("Mike", 16, "000.044.000-03", "ingles", "focar mais na escuta", "102")
const aluno9 = new Aluno("Jack", 16, "011.090.000-03", "ingles", "focar mais na escuta", "102")
const aluno10 = new Aluno("Vasco", 16, "000.000.000-00", "ingles", "focar mais na escuta", "102")
const aluno11 = new Aluno("Shelly", 16, "085.050.000-03", "ingles", "focar mais na escuta", "102")
const aluno12 = new Aluno("Dom", 16, "111.990.040-03", "ingles", "focar mais na escuta", "102")

const turma102 = new Turma("102", "01/08/24", "03/03/26", professorDeIngles)
turma102.adicionarAluno(aluno1)
turma102.adicionarAluno(aluno2)
turma102.adicionarAluno(aluno3)

const turma101 = new Turma("101", "01/02/24", "05/05/25", professorDeGrego)
turma101.adicionarAluno(aluno4)
turma101.adicionarAluno(aluno5)
turma101.adicionarAluno(aluno6)

const turma103 = new Turma("103", "23/03/23", "21/03/24", professorDeEspanhol)
turma103.adicionarAluno(aluno7)
turma103.adicionarAluno(aluno8)
turma103.adicionarAluno(aluno9)

const turmaEAD = new Turma("Sala EAD", "11/11/23", "30/04/25", professorDeJapones)
turmaEAD.adicionarAluno(aluno10)
turmaEAD.adicionarAluno(aluno11)
turmaEAD.adicionarAluno(aluno12)

const senac = new Escola("Senac Centro", "Centro de São leopoldo")
senac.adicionarTurma(turma102)
senac.adicionarTurma(turma101)
senac.adicionarTurma(turma103)
senac.adicionarTurma(turmaEAD)

//console.log(senac)

console.log(professorDeEspanhol.informacoes())
console.log(aluno1.informacoes())