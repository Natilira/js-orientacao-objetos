import { Conta } from "./Conta.js";

// extends --> por baixo dos panos o js vai pegar tudo da classe conta e usar aqui como se estivesse escrito aqui
// desta maneira todo o comportamento será o mesmo já que estou herdando da classe Conta

export class ContaCorrente extends Conta{
    static numeroDeContas = 0; 
    constructor(cliente, agencia){
        super(0,cliente, agencia); // O super está sempre refenciando a classe mãe
        ContaCorrente.numeroDeContas += 1; 
    }     
    
    // sobreescrevendo o comportamento de saca
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}
