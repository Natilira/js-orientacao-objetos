class Cliente {
    nome;
    cpf; 
}

class ContaCorrente {
    agencia;
    _saldo = 0;   //existe uma proposta  que diz que colocar o # deixa o atributo privado 
             //https://github.com/tc39/proposal-class-fields#private-fields
            //  mas será mais comum vc ver _atributo  ( que diz que o atributo é privado)    

    //função ou metodo  ação(parametro){}
    sacar(valor) {
        if (this._saldo > valor){
            this._saldo -=valor;
            return valor;
        }   
    }

    depositar(valor) {
        if(valor <= 0){ 
            return; // early return
        }                // com apenas um comando não é necessário as {} do if
        this._saldo += valor;
    }
}

const cliente1 = new Cliente();
cliente1.nome = 'Natália';
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = 'João';
cliente2.cpf = 11322233309;

const cliente3 = new Cliente();
cliente3.nome = 'Pedro';
cliente3.cpf = 11422233309;

const contaCorrenteRicardo = new ContaCorrente ();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar (100);
contaCorrenteRicardo.depositar (100);
contaCorrenteRicardo.depositar (100);
const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteRicardo);

//console.log(cliente1);
//console.log(cliente2);