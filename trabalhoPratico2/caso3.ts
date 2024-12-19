//CASO 3 

class Cliente {
    formaDePagamento: string
    combustivelComprado: string
    quantidade: string
    valorPago: number

    constructor(formaDePagamento: string, combustivelComprado: string, quantidade: string, valorPago: number){
        this.formaDePagamento = formaDePagamento
        this.combustivelComprado = combustivelComprado
        this.quantidade = quantidade
        this.valorPago = valorPago
    }

    informacao(): string{
        return `A forma de pagamento foi ${this.formaDePagamento}.`
    }
}

class Frota extends Cliente {
    quantidadeDeVeiculos: number

    constructor(quantidadeDeVeiculo: number, formaDepagamento: string, combustivelComprado: string, quantidade: string, valorPago: number){
        super(formaDepagamento, combustivelComprado, quantidade, valorPago)
        this.quantidadeDeVeiculos = quantidadeDeVeiculo
    }

    informacao(): string{
        return `A quantidade de carros abastecidos foi de ${this.quantidadeDeVeiculos}, e a forma de pagamento foi de ${this.formaDePagamento}.`
    }
    
}

class NotaFiscal extends Frota {
  public cpf: string
  constructor(cpf: string, quantidadeDeVeiculo: number, formaDepagamento: string, combustivelComprado: string, quantidade: string, valorPago: number){
    super(quantidadeDeVeiculo, formaDepagamento, combustivelComprado, quantidade, valorPago)
    this.cpf = cpf
  }
}

class Informacoes {
    notasFiscais: NotaFiscal[] = []

    adicionarInformacao(nota: NotaFiscal){
        this.notasFiscais.push(nota)
    }
}

const fiat = new Cliente("pix" , "etanol" , "5 litros", 100)
//console.log(fiat,fiat.informacao())

const skai = new Frota(55, "check", 'normal', "100 litro", 610)
//console.log(skai,skai.informacao())

const fiscalNota = new NotaFiscal("000.000.000-00", 1, "pix", "aditivada" , "5litros", 31.45)
console.log(fiscalNota)

const informacoesGerais = new Informacoes()
informacoesGerais.adicionarInformacao(fiscalNota)
console.log(informacoesGerais)