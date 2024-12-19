class Mesa {
    numero: number
    capacidade: string
    status: 'livre' | 'ocupado'

    constructor(numero: number, capacidade: string, status: 'livre' | 'ocupado'){
        this.numero = numero
        this.capacidade = capacidade
        this.status = status
    }
}

class Cliente {
    nome: string
    telefone: number

    constructor(nome: string, telefone: number){
        this.nome = nome
        this.telefone = telefone
    }
}

class Prato {
    nome: string
    preco: number 
    ingredientes: string

    constructor(nome: string, preco: number, ingredientes: string){
        this.nome = nome
        this.preco = preco
        this.ingredientes = ingredientes
    }
}

// fazer uma herança de prato

class ItemPedido {
    prato: Prato
    quantidade: number

    constructor(prato: Prato, quantidade: number){
        this.prato = prato
        this.quantidade = quantidade
    }
}

class Pedido {
    numero: number
    data: string
    mesa: Mesa 
    listaDeItens: ItemPedido[] = []

    constructor(numero: number, data: string, mesa: Mesa){
        this.numero = numero
        this.data = data
        this.mesa = mesa
    } 
 
    adicionarItem(item: ItemPedido){
        this.listaDeItens.push(item)
    }
}

class Garcom {
    nome: string
    codigo: number

    constructor(nome: string, codigo: number){
        this.nome = nome
        this.codigo = codigo
    }
}