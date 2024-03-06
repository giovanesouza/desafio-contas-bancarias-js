// Declaração da classe Conta
class Conta {

    constructor(titular, cpf, numConta) {
        this.agencia = '0001';
        this.banco = '2024';
        this.numConta = numConta;
        this.tipo = 'comum';
        this.saldo = 0;
        this.extrato = [];
        this.titular = titular;
        this.cpf = cpf;
        this.totalSaquesRealizados = 0;
    };

    verSaldo() {
        console.log(`💰 Seu saldo atual é de R$ ${this.saldo.toFixed(2)}.`);
    };

    verExtrato() {
        this.extrato.length !== 0 ? console.log(this.extrato) : console.log('Não há transações bancárias em seu histórico.');
    };

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor; // Incrementa valor no saldo
            console.log(`✅ Depósito de R$ ${valor.toFixed(2)} realizado com sucesso!`);

            // Adiciona operacao realizada ao extrato
            this.extrato.push(
                {
                    nomeTransacao: 'Depósito',
                    valor: valor,
                    data: new Date()
                });

        } else console.log('ℹ️ Informe um valor positivo diferente de 0.');

    };

    sacar(valor) {
        // Verifica se o valor é positivo e maior do que 0
        if(valor > 0) {
            // Verifica se há saldo disponível
            if (this.saldo >= valor) {
                this.saldo -= valor; // Decrementa valor do saldo
                console.log(`✅ Saque de R$ ${valor.toFixed(2)} realizado com sucesso!`);
    
                // Adiciona operacao realizada ao extrato
                this.extrato.push(
                    {
                        nomeTransacao: 'Saque',
                        valor: valor,
                        taxa: 0,
                        data: new Date()
                    });
    
                this.totalSaquesRealizados++; // Incrementa 1 a cada saque realizado com sucesso
            } else console.log('❌ Saldo insuficiente para saque.');

        } else console.log('⚠️ Informe um valor maior do que 0.');

    };


    transferir(ContaDestino, valor) {
        // Verifica se as contas são diferentes
        if (this.numConta != ContaDestino.numConta) {

            // Verifica se há saldo disponível
            if (this.saldo >= valor) {

                this.saldo -= valor; // Decrementa valor da conta de origem
                ContaDestino.saldo += valor; // Transfere valor para o destinatário

                console.log(`💸 Valor de R$ ${valor.toFixed(2)} transferido com sucesso para ${ContaDestino.titular}.`);

                // Objeto com as informações da transferência
                const infoTransacao = {
                    nomeTransacao: 'Transferência',
                    de: { nomeTransferente: this.titular, numeroConta: this.numConta },
                    para: { nomeRecebedor: ContaDestino.titular, numeroConta: ContaDestino.numConta },
                    valor: valor,
                    taxa: 0,
                    data: new Date()
                };

                this.extrato.push(infoTransacao); // Adiciona operação realizada ao extrato do Transferente
                ContaDestino.extrato.push(infoTransacao); // Adiciona operação realizada ao extrato do Recebedor

            } else console.log('Saldo insuficiente!');

        } else console.log('Operação inválida! Só é possível realizar transferências para outras contas.');
    };

};

module.exports = Conta; // Exportação da Classe Conta
