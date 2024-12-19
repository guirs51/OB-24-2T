// caso 2 

class Funcionario {
    nome: string
     public cpf: string
    constructor( nome: string, cpf: string){
        this.nome = nome
        this.cpf = cpf
    }

    metodoDePagamento(): string {
        return `${this.nome} recebe por: ???`
    }
}

class Horista extends Funcionario {
    constructor(nome: string, cpf:string){
        super(nome, cpf)
    }
    metodoDePagamento(): string {
        return `${this.nome} Recebe por hora trabalhada`
    }
}

class Assalariado extends Funcionario {
    constructor(nome: string, cpf: string){
        super(nome, cpf)
    }
    metodoDePagamento(): string {
        return `${this.nome} Recebe por mensalmente uma quantia `
    }
}

class Comissionado extends Funcionario {
    constructor(nome: string, cpf:string){
        super(nome, cpf)
    }

    metodoDePagamento(): string {
        return `${this.nome} Recebe por venda`
    }
}

class Ativos {
    nomeEquipamneto: string
    status: 'disponivel' | 'em manutenção' 
    atribuidoA: object

    constructor(nomeEquipamento: string, status: 'disponivel' | 'em manutenção', atribuidoA: object){
        this.nomeEquipamneto = nomeEquipamento
        this.status = status
        this.atribuidoA = atribuidoA
    }
}

class Projetos {
    nome: string
    inicio: string
    fimPrevisto: string
    funcionario: object[] = []

    constructor(nome: string, inicio: string, fimPrevisto: string){
        this.nome = nome
        this.inicio = inicio
        this.fimPrevisto = fimPrevisto 
    }

    adicionarFuncionario(funci: object){
        this.funcionario.push(funci)
    }
}


class BaseDeDados {
    funcionario: object[] = []
    ativos: Ativos[] = []
    projetos: Projetos[] = []

    adicionarAtivos(ativo: Ativos){
        this.ativos.push(ativo)
    }

    adicionarFuncionario(funci: object){
        this.funcionario.push(funci)
    }

    adicionarProjetos(projctes: Projetos){
        this.projetos.push(projctes)
    }
} 

const hosri = new Horista( "gustavo" , "000.000.000-00")
//console.log(hosri , hosri.metodoDePagamento())

const assa = new Assalariado("pedro", "000.000.000-01")
//console.log(assa, assa.metodoDePagamento())

const comis = new Comissionado("arthur", "000.000.000-02")
//console.log(comis, comis.metodoDePagamento())

const computador = new Ativos("notebook", 'disponivel', assa )
//console.log(computador)

const projeto1 = new Projetos("rumo a marte", "2024/02/01" , "2025/02/01")
projeto1.adicionarFuncionario(hosri)
projeto1.adicionarFuncionario(assa)
//console.log(projeto1)

const projeto2 = new Projetos("rumo a venus", "2025/02/01" , "2026/02/01")
projeto2.adicionarFuncionario(hosri)
projeto2.adicionarFuncionario(comis)
//console.log(projeto2)

const dados = new BaseDeDados()
dados.adicionarFuncionario(comis)
dados.adicionarFuncionario(hosri)
dados.adicionarFuncionario(assa)
dados.adicionarAtivos(computador)
dados.adicionarProjetos(projeto1)
dados.adicionarProjetos(projeto2)
console.log(dados)
