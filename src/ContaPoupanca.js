const Conta = require('./Conta'); // Importação da classe mãe

// Declaração da classe ContaPoupanca herdando tudo da classe Conta
class ContaPoupanca extends Conta {
    
    constructor(titular, cpf, numConta) {
        super(titular, cpf, numConta);
        this.tipo = 'cp'; // Alteração no tipo de conta
    };

    // Método sobrescrito
    transferir(ContaDestino, valor) {
        let taxa;

        // Verifica o tipo da conta para aplicar taxa de 1% - aplicável às contas comum e corrente
        (this.tipo !== ContaDestino.tipo) ? taxa = valor * 0.01 : taxa = 0;

        let valorTotal = valor + taxa;

        // Verifica se a conta é diferente
        if (this.numConta !== ContaDestino.numConta) {
            // this sozinho representa a classe/objeto como um todo
            return this.realizarTransferencia(this, ContaDestino, valor, valorTotal, taxa);

        } else console.log('❌ Operação não realizada! A conta de destino não pode ser a mesma da transferência.');

    };

    // Método auxiliar para realizar a transferência
    realizarTransferencia(ContaTransferente, ContaDestino, valorSemTaxa, valorComTaxa, taxa) {

        // Verifica se há saldo suficiente para transferir
        if (ContaTransferente.saldo >= valorComTaxa) {
            ContaTransferente.saldo -= valorComTaxa; // Decrementa na conta transferente
            ContaDestino.saldo += valorSemTaxa; // Incrementa na conta do destinatário

            // Imprime o valor transferido com o nome do recebedor
            console.log(`💸 Valor de R$ ${valorSemTaxa.toFixed(2)} transferido com sucesso para ${ContaDestino.titular}.`);

            // Objeto com as informações da operação
            const infoTransacao = {
                nomeTransacao: 'Transferência',
                de: { nomeTransferente: ContaTransferente.titular, numeroConta: ContaTransferente.numConta },
                para: { nomeRecebedor: ContaDestino.titular, numeroConta: ContaDestino.numConta },
                valor: valorSemTaxa,
                taxa: taxa,
                data: new Date()
            };

            ContaTransferente.extrato.push(infoTransacao); // Adiciona operacao realizada ao extrato do Transferente
            ContaDestino.extrato.push(infoTransacao); // Adiciona operacao realizada ao extrato do Recebedor

        } else console.log('Saldo indisponível!');

    };

    // Extrato sobrescrito para exibição diferente das demais contas (**Não foi solicitado na documentação**)
    verExtrato() {
        // Mapeia as chaves originais para os nomes modificados
        const nomesChaves = {
            nomeTransacao: 'Nome transação',
            nomeTransferente: 'Nome',
            nomeRecebedor: 'Nome',
            numeroConta: 'Número da conta',
            de: 'Dados transferente',
            para: 'Dados recebedor',
            valor: 'Valor R$',
            taxa: 'Taxa R$',
            data: 'Data'
        };

        console.log(`${'='.repeat(28)} EXTRATO BANCÁRIO CP ${'='.repeat(29)}`);

        // Verifica se há extrato e realiza impressão conforme retorno
        this.extrato.length !== 0 ? 
      
        // Percorre os objetos
        this.extrato.map(objeto => {
                console.log('-'.repeat(78));

                // Itera sobre as chaves e valores do objeto
                for (const chave in objeto) {

                    // Se a chave estiver mapeada, imprime o nome modificado
                    const nomeChave = nomesChaves[chave] || chave;

                    // Se a chave for "de" ou "para", imprime suas informações separadamente
                    if (chave === 'de' || chave === 'para') {
                        console.log(`${nomeChave}:`);
                        
                        for (const subChave in objeto[chave]) {
                            // Se a subChave estiver mapeada, imprime o nome modificado
                            const nomeSubChave = nomesChaves[subChave] || subChave;
                            console.log(`   ${nomeSubChave}: ${objeto[chave][subChave]}`);
                        }
                    } else {
                        console.log(`${nomeChave}: ${objeto[chave]}`);
                    }
                };

            }) : console.log('Não há transações bancárias em seu histórico.');

            console.log('-'.repeat(78));
    };

};

module.exports = ContaPoupanca; // Exportação ContaPoupanca