interface IexpansaoD {
    espandir():void;
    usarHabilidadeInata():void;

}


class Xama  implements IexpansaoD{
    nome: string
    idade: number 
    classe: 'quarta classe' | 'terceira classe' | 'segunda classe' | 'primeira classe' | 'classe Especial'
    habilidadeInata: string
    nomeExpansao: string | null
    constructor(nome: string, idade: number, classe: 'quarta classe' | 'terceira classe' | 'segunda classe' | 'primeira classe' | 'classe Especial', habilidadeInata: string, nomeExpansao: string | null){
        this.nome = nome
        this.idade = idade
        this.classe = classe
       this.habilidadeInata = habilidadeInata
        this.nomeExpansao = nomeExpansao
    }

    espandir(){
        if(this.nomeExpansao){
            return `${this.nome} usou ${this.nomeExpansao}`
        }else {
            return `${this.nome} não tem uma Espanção de dominio`
        }
    }

    usarHabilidadeInata(){
        return `${this.nome} usou ${this.habilidadeInata}`
    }
}

const  sukuna = new Xama("Sukuna", 1000, "classe Especial", "desmantelar", "Santuario Malevolente")
console.log(sukuna.usarHabilidadeInata())
console.log(sukuna.espandir())

const gojo = new Xama("Saturo Gojo", 26, "classe Especial", 'Ilimitado', "Infinito")
console.log(gojo.usarHabilidadeInata())
console.log(gojo.espandir())