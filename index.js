import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

//const cliente3 = new Cliente('Natália',11122233309);
//const cliente2 = new Cliente('Alice',11322233309);
const cliente1 = new Cliente('Ricardo',11422233309);


const contaCorrenteRicardo = new Conta (0, cliente1 , 1001);
contaCorrenteRicardo.depositar (500);
contaCorrenteRicardo.sacar (100);
//const conta2 = new ContaCorrente(cliente1,102);

//console.log(conta2);
//console.log(ContaCorrente.numeroDeContas);

const contapoupanca = new Conta (50 , cliente1, 1001);
console.log(contapoupanca);
console.log(contaCorrenteRicardo);
