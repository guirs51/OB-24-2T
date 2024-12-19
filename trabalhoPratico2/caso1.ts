/* no caso 1  eu usei o chat gpt para ter uma base ja que estava com dificuldade, o polimorfismo eu fiz sozinho sem ajuda da IA  */

// Cliente.ts
class Cliente {
    nome: string;
    public cnpj: string;
    endereco: string;

    constructor(nome: string, cnpj: string, endereco: string) {
        this.nome = nome;
        this.cnpj = cnpj;
        this.endereco = endereco;
    }

    informacaDoCliente(): string{
        return `${this.nome} dono do cnpj "${this.cnpj}" comprou... `
    }
}

class ClienteContratante extends Cliente {
    descontoFrequencia: number;

    constructor(nome: string, cnpj: string, endereco: string, descontoFrequencia: number) {
        super(nome, cnpj, endereco);
        this.descontoFrequencia = descontoFrequencia;
    }

    informacaDoCliente(): string{
        return `O clinte ${this.nome}, que compra frequentimente ganhou um desconto de ${this.descontoFrequencia}`
    }
}

class ClienteEsporadico extends Cliente {
    taxaAdicional: number;

    constructor(nome: string, cnpj: string, endereco: string, taxaAdicional: number) {
        super(nome, cnpj, endereco);
        this.taxaAdicional = taxaAdicional;
    }

    informacaDoCliente():string{
        return `O cliente ${this.nome} dono do cnpj "${this.cnpj}" teve uma taxa adicional de ${this.taxaAdicional}`
    }
}

// Veiculo.ts
class Veiculo {
    placa: string;
    modelo: string;
    capacidadeCarga: number;
    tipoCarga: 'seco' | 'refrigerado' | 'perigoso';
    status: 'disponível' | 'em manutenção' | 'em rota';

    constructor(
        placa: string,
        modelo: string,
        capacidadeCarga: number,
        tipoCarga: 'seco' | 'refrigerado' | 'perigoso',
        status: 'disponível' | 'em manutenção' | 'em rota'
    ) {
        this.placa = placa;
        this.modelo = modelo;
        this.capacidadeCarga = capacidadeCarga;
        this.tipoCarga = tipoCarga;
        this.status = status;
    }
}

// Carga.ts
class Carga {
    peso: number;
    volume: number;
    tipo: string;
    origem: string;
    destino: string;
    dataEmbarquePrevista: Date;
    dataEntregaPrevista: Date;

    constructor(
        peso: number,
        volume: number,
        tipo: string,
        origem: string,
        destino: string,
        dataEmbarquePrevista: Date,
        dataEntregaPrevista: Date
    ) {
        this.peso = peso;
        this.volume = volume;
        this.tipo = tipo;
        this.origem = origem;
        this.destino = destino;
        this.dataEmbarquePrevista = dataEmbarquePrevista;
        this.dataEntregaPrevista = dataEntregaPrevista;
    }
}

// Motorista.ts
class Motorista {
    nome: string;
    cnh: string;
    categoria: string;
    experiencia: number;
    veiculoAtribuido: Veiculo | null;

    constructor(nome: string, cnh: string, categoria: string, experiencia: number, veiculoAtribuido: Veiculo | null) {
        this.nome = nome;
        this.cnh = cnh;
        this.categoria = categoria;
        this.experiencia = experiencia;
        this.veiculoAtribuido = veiculoAtribuido;
    }
}

// Rota.ts
class Rota {
    origem: string;
    destino: string;
    distancia: number;
    tempoEstimado: number;
    veiculosPercorridos: Veiculo[];

    constructor(
        origem: string,
        destino: string,
        distancia: number,
        tempoEstimado: number,
        veiculosPercorridos: Veiculo[]
    ) {
        this.origem = origem;
        this.destino = destino;
        this.distancia = distancia;
        this.tempoEstimado = tempoEstimado;
        this.veiculosPercorridos = veiculosPercorridos;
    }
}

// Entrega.ts
class Entrega {
    data: Date;
    hora: string;
    cliente: Cliente;
    carga: Carga;
    veiculo: Veiculo;
    motorista: Motorista;
    status: 'pendente' | 'em andamento' | 'entregue';
    observacoes: string;

    constructor(
        data: Date,
        hora: string,
        cliente: Cliente,
        carga: Carga,
        veiculo: Veiculo,
        motorista: Motorista,
        status: 'pendente' | 'em andamento' | 'entregue',
        observacoes: string
    ) {
        this.data = data;
        this.hora = hora;
        this.cliente = cliente;
        this.carga = carga;
        this.veiculo = veiculo;
        this.motorista = motorista;
        this.status = status;
        this.observacoes = observacoes;
    }
}

// NotaFiscal.ts
class NotaFiscal {
    numero: string;
    dataEmissao: Date;
    cliente: Cliente;
    itens: Carga[];
    valorTotal: number;
    formaPagamento: string;

    constructor(
        numero: string,
        dataEmissao: Date,
        cliente: Cliente,
        itens: Carga[],
        valorTotal: number,
        formaPagamento: string
    ) {
        this.numero = numero;
        this.dataEmissao = dataEmissao;
        this.cliente = cliente;
        this.itens = itens;
        this.valorTotal = valorTotal;
        this.formaPagamento = formaPagamento;
    }
}

// Importando classes (se estiver usando módulos, remova os comentários de importação)
// import { Cliente, ClienteContratante, ClienteEsporádico } from './Cliente';
// import { Veiculo } from './Veiculo';
// import { Carga } from './Carga';
// import { Motorista } from './Motorista';
// import { Rota } from './Rota';
// import { Entrega } from './Entrega';
// import { NotaFiscal } from './NotaFiscal';

// Criando clientes
const cliente1 = new ClienteContratante("Transporte Ltda", "12.345.678/0001-90", "Rua Principal, 123", 10);
const cliente2 = new ClienteEsporadico("Loja de Artigos", "98.765.432/0001-00", "Avenida Secundária, 456", 15);

console.log("Clientes:");
console.log(cliente1.informacaDoCliente());
console.log(cliente2.informacaDoCliente());

/*
// Criando veículos
const veiculo1 = new Veiculo("ABC-1234", "Caminhão Baú", 5000, "seco", "disponível");
const veiculo2 = new Veiculo("XYZ-9876", "Caminhão Frigorífico", 3000, "refrigerado", "em manutenção");

console.log("\nVeículos:");
console.log(veiculo1);
console.log(veiculo2);

// Criando cargas
const carga1 = new Carga(1000, 15, "alimentos", "São Paulo", "Rio de Janeiro", new Date("2024-12-01"), new Date("2024-12-03"));
const carga2 = new Carga(2000, 25, "eletrônicos", "Curitiba", "Porto Alegre", new Date("2024-12-02"), new Date("2024-12-05"));

console.log("\nCargas:");
console.log(carga1);
console.log(carga2);

// Criando motorista
const motorista1 = new Motorista("Carlos Silva", "123456789", "E", 10, veiculo1);

console.log("\nMotorista:");
console.log(motorista1);

// Criando rota
const rota1 = new Rota("São Paulo", "Rio de Janeiro", 430, 7, [veiculo1]);

console.log("\nRota:");
console.log(rota1);

// Criando entrega
const entrega1 = new Entrega(new Date("2024-12-01"), "08:00", cliente1, carga1, veiculo1, motorista1, "pendente", "Carga refrigerada");

console.log("\nEntrega:");
console.log(entrega1);

// Criando nota fiscal
const notaFiscal1 = new NotaFiscal(
    "NF-001",
    new Date("2024-12-01"),
    cliente1,
    [carga1, carga2],
    5000.00,
    "Cartão de Crédito"
);

console.log("\nNota Fiscal:");
console.log(notaFiscal1);

*/