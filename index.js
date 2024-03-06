// Importação das classes
const Conta = require('./src/Conta');
const ContaCorrente = require('./src/ContaCorrente');
const ContaPoupanca = require('./src/ContaPoupanca');


/* ===== OPERAÇÕES POR TIPO DE CONTA ===== */

// CONTA
// Instâncias de Conta (tipo comum)
/*
contaComum1 = new Conta('Fulano Oliveira da Fonseca', '12345698741', '85698745');
contaComum2 = new Conta('Ciclano da Fonseca Oliveira', '21345698741', '58698745');

// Utilizando os métodos da Conta
contaComum1.depositar(450); // saldo = 450
contaComum1.sacar(20); // saldo = 430
contaComum1.sacar(30); // saldo = 400
contaComum1.transferir(contaComum2, 150); // saldo = 250

console.log('=== SALDO CONTA 1 ===')
contaComum1.verSaldo(); // saldo = 250
console.log('=== SALDO CONTA 2 ===')
contaComum2.verSaldo(); // saldo = 150

console.log('=== EXTRATO CONTA 1 ===')
contaComum1.verExtrato(); // Deve exibir as transações: 1 'Depósito', 2 'Saques', 1 'Transferência'.
console.log('=== EXTRATO CONTA 2 ===')
contaComum2.verExtrato(); // Deve exibir as transações: 1 'Transferência'
*/


// CONTA CORRENTE
/*
contaCorrente = new ContaCorrente('Fulano Oliveira da Fonseca', '12345698741', '85698745');

contaCorrente.depositar(735);
contaCorrente.sacar(0); // imprime: 'Informe um valor maior do que 0.' deve ser exibida e não entra no extrato
contaCorrente.sacar(5); // saldo = 730
contaCorrente.sacar(10); // saldo = 720
contaCorrente.sacar(50); // saldo = 670
contaCorrente.sacar(35); // 4º saque do dia -> responder se deseja ou não sacar com taxa de R$ 5.00

console.log('=== SALDO CONTA CORRENTE ===');
contaCorrente.verSaldo(); // saldo = 670 (Resposta negativa para saque com taxa) OU 630 (Resposta positiva)

console.log('=== EXTRATO CONTA CORRENTE ===');
contaCorrente.verExtrato(); // Deve exibir as transações: 1 'Depósito', (3 OU 4 'Saques').
*/



// CONTA POUPANÇA
/*
// Instâncias de ContaPoupanca
poupanca1 = new ContaPoupanca('Fulano Oliveira da Fonseca', '12345698741', '85698745');
poupanca2 = new ContaPoupanca('Ciclano da Fonseca Oliveira', '21345698741', '58698542');

// Instância de ContaCorrente
corrente = new ContaCorrente('Beltrano da Silva', '65984532147', '84965423');


poupanca1.depositar(1000); // saldo = 1000
poupanca1.transferir(corrente, 100); // saldo: poupanca1 = 899 (100 + taxa de 1%) | corrente = 100
poupanca1.transferir(poupanca2, 100); // saldo: poupanca1 = 799 (taxa = 0) | poupanca2 = 100

console.log('=== SALDO CONTA POUPANCA 1 ===');
poupanca1.verSaldo(); // saldo = 799

console.log('=== EXTRATO CONTA POUPANCA 1 ===');
console.log(poupanca1.verExtrato()); // Deve exibir as transações: 1 'Depósito' e 2 'Transferência'.


console.log('=== SALDO CONTA CORRENTE ===');
corrente.verSaldo(); // saldo = 100

console.log('=== EXTRATO CONTA CORRENTE ===');
console.log(corrente.verExtrato()); // Deve exibir as transações: 1 'Transferência'.


console.log('=== SALDO CONTA POUPANCA 2 ===');
poupanca2.verSaldo(); // saldo = 100

console.log('=== EXTRATO CONTA POUPANCA 2 ===');
console.log(poupanca2.verExtrato()); // Deve exibir as transações: 1 'Transferência'.
*/