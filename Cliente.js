// toda vez que se criar um arquivo com letra maiuscula que dizer que estou criando um arquivo que representa uma classe

export class Cliente {
    

    get cpf(){
        return this._cpf;
    }

    // tipo constructor , acessado durante a criação do obj

    constructor (nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}
