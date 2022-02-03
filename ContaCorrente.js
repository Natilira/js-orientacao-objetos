import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0; // static esse valor , irá para todas as contas 

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }
    
    // sempre que usar o acessor (saldo) ultilizar sem o underline
    get saldo(){
        return this._saldo;
    }

    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numeroDeContas +=1; // forma de acessar um componente estatico da nossa classe
    }
                
    sacar(valor) {
        if (this._saldo > valor){
            this._saldo -=valor;
            return valor;
        }   
    }

    depositar(valor) {
        if(valor <= 0){ 
            return; 
        }                
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
       

    }
}
