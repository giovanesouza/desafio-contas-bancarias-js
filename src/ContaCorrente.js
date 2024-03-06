const Conta = require('./Conta'); // Importação da classe mãe
const input = require('readline-sync'); // Importação do readline para entrada de dados

// Declaração da classe ContaCorrente herdando tudo da classe Conta
class ContaCorrente extends Conta {

    constructor(titular, cpf, numConta) {
        super(titular, cpf, numConta);
        this.tipo = 'cc'; // Alteração no tipo de conta
        this.totalSaquesPorDia = 3; // Atributo utilizado para definir o total de saques SEM taxa por dia
    };


    // Método sobrescrito
    sacar(valor) {
        if (this.totalSaquesRealizados < this.totalSaquesPorDia) {

            // Verifica se há saldo para realizar saque SEM taxa
            this.saldo >= valor ? this.efetuarSaque(valor, 0) : console.log('❌ Saldo insuficiente para saque.');

        } else {
            console.log('⚠️ Atenção! Você excedeu o limite diário para saques.');
            console.log('Para prosseguir, será cobrada uma taxa de R$ 5,00.\nDeseja continuar?');

            // Solicita resposta ao usuário
            const resposta = input.questionInt('Digite 1 para confirmar ou 2 para cancelar: ');

            // Verifica se há saldo para realizar saque COM taxa de 5 reais
            switch (resposta) {
                case 1:
                    const valorComTaxa = valor + 5;
                    this.saldo >= valorComTaxa ? this.efetuarSaque(valor, 5) : console.log('❌ Saldo insuficiente para saque.');
                    break;
                case 2:
                    console.log('Saque cancelado!');
                    break;
                default:
                    console.log('Opção inválida!');
                    break;
            };
        };
    };

    // Método auxiliar para realizar o saque
    efetuarSaque(valor, taxa) {
        if(valor > 0) {
            this.saldo -= (valor + taxa);
            console.log(`✅ Saque de R$ ${valor.toFixed(2)} realizado com sucesso!`);

            this.totalSaquesRealizados++; // Incrementa saque

            // Adiciona operacao realizada ao extrato
            this.extrato.push({
                nomeTransacao: 'Saque',
                valor: valor,
                taxa: taxa,
                data: new Date()
            });
           
        } else console.log('⚠️ Informe um valor maior do que 0.');
    };

};


module.exports = ContaCorrente; // Exportação da ContaCorrente