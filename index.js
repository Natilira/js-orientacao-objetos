import { Cliente } from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = 'Natália';
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = 'João';
cliente2.cpf = 11322233309;

const cliente3 = new Cliente();
cliente3.nome = 'Ricardo';
cliente3.cpf = 11422233309;

const contaCorrenteRicardo = new ContaCorrente ();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente3;
contaCorrenteRicardo.depositar (500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;
console.log(conta2);


contaCorrenteRicardo.transferir(200, conta2);
console.log(conta2);
console.log(contaCorrenteRicardo);