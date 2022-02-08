import { Cliente } from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente('Ricardo',11422233309);


const contaCorrenteRicardo = new ContaCorrente (cliente1 , 1001);
const contapoupanca = new ContaPoupanca (50 , cliente1, 1001);
//const conta = new Conta(0, cliente1, 1001);
const contaSalario = new ContaSalario (cliente1);

contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario);
//console.log(contaCorrenteRicardo);
