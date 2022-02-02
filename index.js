import { Cliente } from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente('Natália',11122233309);
const cliente2 = new Cliente('Alice',11322233309);
const cliente3 = new Cliente('Ricardo',11422233309);


const contaCorrenteRicardo = new ContaCorrente (cliente3 , 1001);

contaCorrenteRicardo.depositar (500);

const conta2 = new ContaCorrente(cliente1,102);


contaCorrenteRicardo.transferir(200, conta2);
console.log(conta2);
console.log(ContaCorrente.numeroDeContas);
