class Usuario {
    private nome: string
    private sobrenome: string
    constructor(nome: string, sobrenome: string){
        this.nome = nome
        this.sobrenome = sobrenome
    }
     public SetNome(nome: string){
        this.nome = nome
     }

     public GetNome(): string{
        return this.nome
     }
}
let usuario = new Usuario("Gustavo", "bened")
console.log(usuario.GetNome())

usuario.SetNome("juca")
console.log(usuario.GetNome())