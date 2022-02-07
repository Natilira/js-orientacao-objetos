import { Cliente } from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente('Ricardo',11422233309);


const contaCorrenteRicardo = new ContaCorrente (cliente1 , 1001);
contaCorrenteRicardo.depositar (500);
contaCorrenteRicardo.sacar (100);

const contapoupanca = new ContaPoupanca (50 , cliente1, 1001);
contapoupanca.sacar(10);

console.log(contapoupanca);
console.log(contaCorrenteRicardo);
