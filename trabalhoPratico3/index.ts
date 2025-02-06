// sistema de gerenciamento dos tigres branco
/* TEMA: lookims*/


//Gerenciamento de PEssoas e Organização

class Pessoa {
    nome: "não indentificado" | string
    cep:  "não indentificado" | string 
    apelido: "não indentificado" | string 
    idade: "não indentificado" | number
    geracao: "Geração Zero" | "Primeira Geração" | "Segunda Geração" | "Terceira Geração" | "não indentificado"
    estado: "Vivo" | "Morto"
    constructor( nome: "não indentificado" | string, cep:  "não indentificado" | string , apelido: "não indentificado" | string , idade: "não indentificado" | number, geracao: "Geração Zero" | "Primeira Geração" | "Segunda Geração" | "Terceira Geração" | "não indentificado", estado: "Vivo" | "Morto"){
        this.nome = nome
        this.cep = cep
        this.apelido = apelido
        this.idade = idade 
        this.geracao = geracao
        this.estado = estado
    }
}


class Organizacao {
    nome: string
    lider: object | null
    membros: object[] = []
    cep: "não indentificado" | string
    constructor(nome: string, lider: object | null, cep: "não indentificado" | string){
        this.nome = nome
        this.lider = lider
        this.cep = cep
    }

    adicionarMembro(membro: object){
        this.membros.push(membro)
    }
}

class Lideres {
    lideres: Pessoa[] = []

    adicionarLideres(lider: Pessoa){
        this.lideres.push(lider)
    }
}

class Relacoes { 
   rop: object  // ROP significa "Relação entre organizações ou pessoas"
   rop2: object
   relacao: "Ruim" | "Bom" | "Neutro" | "Otimo" | "Pessimo"
   historia: string
   constructor( rop: object, rop2: object, relacao: "Ruim" | "Bom" | "Neutro" | "Otimo" | "Pessimo", historia: string){
    this.rop = rop
    this.rop2 = rop2
    this.relacao = relacao
    this.historia = historia
   }
}

//Gerenciamento de funcionarios

class Funcionarios extends Pessoa {
    cargo: string 
    tempoNaEmpressa: string
    constructor(cargo: string, tempoNaEmpressa: string,  nome: string, cep:  "não indentificado" | string , apelido: "não indentificado" | string , idade: "não indentificado" | number, geracao: "Geração Zero" | "Primeira Geração" | "Segunda Geração" | "Terceira Geração" , estado: "Vivo" | "Morto"){
        super(nome,cep,apelido,idade,geracao,estado)
        this.cargo = cargo
        this.tempoNaEmpressa = tempoNaEmpressa
    }
}

//Gerenciamento De Servicos e Pagamento

class Pedido {
    cliente: object 
    servico: String | "oculto"
    valor: number 
    constructor(  cliente: object, servico: String | "oculto",  valor: number ,){
        this.cliente = cliente
        this.servico =servico
        this.valor = valor
    }
}

class Pagamento {
    Pedido: Pedido
    pagamento: "Pix" | "Check" | "Outro"
    constructor(pedido: Pedido, pagamento: "Pix" | "Check" | "Outro"){
        this.Pedido = pedido
        this.pagamento = pagamento
    }

    private pagamentoPrivado(){
        console.log( 'cliente fez pagamento atraves de outra pessoa em sigilo para serviços Especias. tipo de pagamento não é registrado para segurança de ambos lados')
    }

    tipoDePagamento(){
        const pix = "Pix"
        const check = "Check"
        const outro = "Outro"
        if(pix === this.pagamento){
            console.log(`pagamento feito por Pix` )
        } else if(check === this.pagamento){
            console.log( `Pagamento feito por check`)
        }else if(outro === this.pagamento){
            console.log(this.pagamentoPrivado())
        }
    }
}


class Servico {
    pedido: Pedido 
    funcionariosNesseServico: Funcionarios[] = []
    constructor(pedido: Pedido){
        this.pedido = pedido 
    }

   adicionarFuncionario(funcionario: Funcionarios){
    this.funcionariosNesseServico.push(funcionario)
   }
}

class HistoricoDeServicos {
    servicos: Servico[] = []

    adicionarServico(servico: Servico){
        this.servicos.push(servico)
    }
}

class HistoricoDepagamentos {
    pagamentos: Pagamento[] = []

    adicionarPagamento(pagamento: Pagamento){
        this.pagamentos.push(pagamento)
    }
}

class HistoricoDePedidos {
    pedidos: Pedido[] = []
    
    adicionarPedido(pedido: Pedido){
        this.pedidos.push(pedido)
    }
}

//Gerenciamento das comissões dos funcionarios e lucros da empressa

class Comissao {
    funcionario: Funcionarios
    servico: Servico
    comissao: "10%"
    constructor(funcionario: Funcionarios, servico: Servico, comissao: "10%"){
        this.funcionario = funcionario
        this.servico = servico
        this.comissao = comissao
    }
    comissaoDoFuncionario(){
        const comissao = 0.1 * this.servico.pedido.valor
        return comissao
    }
}

class Lucro {
    servico: Servico
    constructor(servico: Servico){
        this.servico = servico
    }

    lucroDaCentral(){
        const lucro = 0.9 * this.servico.pedido.valor
        return lucro
    }
}

class HistoricoDeComissoes {
   comissoes: Comissao[] = []

   adcionarComissao(comissao: Comissao){
    this.comissoes.push(comissao)
   }
}

class HistoricoDeLucros {
    lucros: Lucro[] = []

    adiconarLucros(lucro: Lucro){
        this.lucros.push(lucro)
    }
}

//Teste 

//Allied

const danielCF = new Pessoa("Daniel Park", "Seul", "Cantidado a Lenda", 18, "Segunda Geração", "Vivo")
const zack = new Pessoa("Zack Lee", "Seul", "Boxeador de Ferro", 18, "Segunda Geração", "Vivo")
const jay = new Pessoa("Jay", "Seul", "nâo indentificado", "não indentificado", "Segunda Geração", "Vivo")
const vasco = new Pessoa("Vasco", "Seul", "heroi", 18, "Segunda Geração", "Vivo")
const hobin = new Pessoa("Jin Hobin", "Seul", "Rei dos Ceus", "não indentificado", "Segunda Geração", "Vivo")
const hudson = new Pessoa("Hundson Hyung","Ansan", "Sol de Ansan", 19, "Segunda Geração", "Vivo")
const danielLitte = new Pessoa("Daniel Park", "Seul", "Obra-Prima", 18, "Segunda Geração", "Vivo")
 
const allied = new Organizacao("Allied", danielLitte, "Centro de Seul")
allied.adicionarMembro(danielCF)
allied.adicionarMembro(zack)
allied.adicionarMembro(jay)
allied.adicionarMembro(vasco)
allied.adicionarMembro(hobin)
allied.adicionarMembro(hudson)

//Works 

const eugen = new Pessoa("eugene", "Seul", "não identificado", "não indentificado", "Segunda Geração", "Vivo")
const madak = new Pessoa("Madak", "Seul", "nâo indentificado", "não indentificado", "Segunda Geração", "Vivo")
const kogiro = new Pessoa("Kogiro", "Japao", "não indentificado", "não indentificado", "Segunda Geração", "Vivo")
const sorridente = new Pessoa("não indentificado", " Seul", "não indentificado", "não indentificado", "Segunda Geração", "Vivo")

const works = new Organizacao("Workes", eugen, "Gangnam")
works.adicionarMembro(madak)
works.adicionarMembro(kogiro)
works.adicionarMembro(sorridente)

//gangbuk Do Oeste 

const kim = new Pessoa("kim shooyom", "Gangbuk", "Kim da Regata", "não indentificado", "Terceira Geração", "Vivo")
const elDiablo = new Pessoa("Gojak", "Gangbuk", "EL Diablo Yakuza", "não indentificado", "Terceira Geração", "Vivo")
const hajun = new Pessoa("Goo Hajun", "Gangbuk", "Rei Soberano", "não indentificado", "Terceira Geração", "Vivo")
const meioAMeio = new Pessoa("Sung Haru","Gangbuk", "não indentificado", "não indentificado", "Terceira Geração", "Vivo")

const gangbukOeste = new Organizacao("Gangbuk do Oeste",kim, "Gangbuk")

//Big Deal 

const jake = new Pessoa("Jake Kim", "Seul", "não indentificado", "não indentificado", "Segunda Geração", "Vivo")
const kown = new Pessoa("Kown Tae", "Seul", "Espada de jake", "não indentificado", "Segunda Geração","Vivo")
const sinu = new Pessoa("Sinu Han", "Seul", "O garoto da Promessa", "não indentificado", "não indentificado", "Vivo")

const bigDeal = new Organizacao("Big Deal", jake,"Gangseo")
bigDeal.adicionarMembro(kown)
bigDeal.adicionarMembro(sinu)

//Punhos de Gapryong

const gapryon = new Pessoa("Kim Gapryong", "Seul", "Lenda da Geração Zero", "não indentificado", "Geração Zero", "Morto")
const baek = new Pessoa("baekho", "Seul", "nâo indentificado", "não indentificado", "Geração Zero", "Morto")

const punhosKIm = new Organizacao("Punhos de Gapryong", gapryon, "Toda korea")
punhosKIm.adicionarMembro(baek)

// Yamazaki

const gun = new Pessoa("Yamazaki Jong Gun", "Japão", "Shiro Oni","não indentificado", "não indentificado","Vivo")
const toraOni = new Pessoa("Yamazaki Shigen", "Japão", "Tora Oni", "não indentificado", "Geração Zero", "Morto")
const shintaro = new Pessoa("Yamazaki Shintaro", "Japão", "não indentificado", "não indentificado", "Geração Zero", "Morto")
const shinji = new Pessoa("Yamazaki Shinji", "Japão", "não indentificado", "não indentificado", "não indentificado", "Morto")

const yamazaki = new Organizacao("Familia Yamazaki", gun, "Japão")
yamazaki.adicionarMembro(toraOni)
yamazaki.adicionarMembro(shintaro)
yamazaki.adicionarMembro(shinji)



//imprimindo no console todos os objetos que foram formados da classe Organizacao

//console.log(yamazaki,punhosKIm, bigDeal, gangbukOeste, works,allied)

//Lideres 


const lideres = new Lideres()
lideres.adicionarLideres(danielLitte)
lideres.adicionarLideres(eugen)
lideres.adicionarLideres(kim)
lideres.adicionarLideres(gapryon)
lideres.adicionarLideres(jake)
lideres.adicionarLideres(gun)

//console.log(lideres)

//Relações  

const gooXZack = new Relacoes(hajun, zack, "Bom", "de acordo com as informações Zack Ajudou Goo Hajun em um treino, ensinando algo")
const familia = new Relacoes(elDiablo, yamazaki, "Neutro", "EL diablo é parente distante, e desconhecido, dos. isso o torna uma possivel ameaça")
const famila2 = new Relacoes(kown, baek, "Bom", "kown tae é filho do falecido beakho")
const famila3 = new Relacoes(jake, gapryon, "Ruim", "jake é filho do falecido gapryong. filho mais novo")
const workesXBigdel = new Relacoes(works, bigDeal, "Neutro", "Tiveram problemas passados, mas fizeram uma uniao para caçar o oni branco")
const gunXdaniel = new Relacoes(danielLitte, gun, "Otimo", "Treino o danile por tempo, são mestre e aluno mas tem relação de irmão. e possivel parentesco familiar")


//Funcionarios 

const goddog = new Funcionarios("Assintente", "3 mês", "Eun han", "Gangbuk", "God dog", 18, "Segunda Geração", "Vivo")
const gerenteKIm = new Funcionarios("Gerente", "Mais de 2 anos", "Kim", "Seul", "codigo 66", 55,"Geração Zero","Vivo")


//Pedidos

const pedido = new Pedido(eugen, "oculto", 500000)

const pedido2 = new Pedido(eugen,"um segurança para  terceira filliam dos workes", 100000)

//Pagamentos 

const pagamento = new Pagamento(pedido, "Outro")
//pagamento.tipoDePagamento()

const pagamento2 = new Pagamento(pedido2, "Check")
//pagamento2.tipoDePagamento()

//serviços
const servico = new Servico(pedido)
servico.adicionarFuncionario(gerenteKIm)

const servico2 = new Servico(pedido2)
servico2.adicionarFuncionario(gerenteKIm)
servico2.adicionarFuncionario(goddog)
//console.log(servico2.funcionariosNesseServico)


//Comissão

const comissao = new Comissao(gerenteKIm, servico,"10%")
//console.log(comissao.comissaoDoFuncionario())

const comissao2  = new Comissao(gerenteKIm, servico2, "10%" )
//console.log(comissao.comissaoDoFuncionario())

//Lucro

const lucro = new Lucro(servico)
//console.log(lucro.lucroDaCentral())

const lucro2 = new Lucro(servico2)
//console.log(lucro.lucroDaCentral())

//Historico de comissão

const historicoDeComissoes = new HistoricoDeComissoes()
historicoDeComissoes.adcionarComissao(comissao)
historicoDeComissoes.adcionarComissao(comissao2)
//console.log(historicoDeComissoes.comissoes)

//Historico de lucros

const lucros = new HistoricoDeLucros()
lucros.adiconarLucros(lucro)
lucros.adiconarLucros(lucro2)
//console.log(lucros)