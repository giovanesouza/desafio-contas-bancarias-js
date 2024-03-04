// Declaração da classe Conta
class Conta {

    // To DO: Realize os ajustes conforme solicitado
    constructor(titular, cpf, numConta) {
        this.agencia = // defina um valor padrão para representar a sua agencia;
        this.banco = // defina um valor para representar o nº do banco ;
        this.numConta = numConta;
        this.tipo = 'comum';
        this.saldo = 0;
        this.extrato = []; // Utilize para armazenar todas as transações do cliente
        this.titular = titular;
        this.cpf = cpf;
        this.totalSaquesRealizados = 0;
    }


    /* 
    To Do: Implemente os métodos:
        
        verSaldo(),
        verExtrato(),
        depositar(valor), 
        sacar(valor) e 
        transferir(ContaDestino, valor)

    Atenção às orientações fornecidas na documentação do projeto
    */



};

module.exports = Conta; // Exportação da Classe Conta
