# Desafio: Desenvolvimento de Contas Bancárias com JavaScript (POO)

## ℹ️ Sobre o desafio:

Por meio deste programa você deve permitir que o usuário consiga criar `3 tipos de conta bancária`: '**comum**', '**cc**' e '**cp**', que terão funcionalidades para a realização de procedimentos bancários como **depositar**, **sacar**, **transferir**, **ver saldo** e **ver extrato**.

Para tanto, você deverá criar uma classe chamada `Conta`, que será a classe mãe e terá o tipo de conta = '**comum**'. Além disso, crie mais duas classes: `ContaCorrente` (tipo de conta = '**cc**') e `ContaPoupanca` (tipo de conta = '**cp**') que deverão herdar da classe `Conta`, além de realizar algumas implementações específicas - Veja o que deve ter em cada classe em **⚙️ Funcionalidades**;

Por fim, você deve criar o `index.js` para realizar as operações descritas em **📊 Resultados esperados**.

### 🎯 Para a resolução deste desafio você precisará ter conhecimentos sobre:

- [x] Declaração de variáveis;
- [x] Operadores de comparação;
- [x] Condicional Switch, IF e/ou Ternário;
- [x] Manipulação de Array;
- [x] Objeto Literal;
- [x] Classes/POO;
- [x] Funções;
- [x] Importação/Exportação;
* [x] Dependência: `readline-sync` para pegar as informações do usuário.


## Pré-requesitos para resolução do desafio

> [!IMPORTANT]
>
> - [x] Ter uma IDE/editor de código, o Node e o git instalados na máquina;
> - [x] Clique em `Fork` para realizar uma cópia do projeto para você ![Fork](./images/fork.jpg "Fork") - `caso tenha alguma dúvida assista ao vídeo clicando no link a seguir`: [▶️Explicação sobre o Fork e Clonagem de repositório](https://youtu.be/L6HX3Kw359A)
> - [x] No seu computador, `clone a cópia do projeto que está em seu repositório` - **também mostro no link acima**:
>   ```shell
>   git clone suaURL
>   ```
> - [x] Com o projeto em sua máquina, abra a pasta dele na sua IDE e siga as orientações fornecidas abaixo.
> 

## ⚙️ Funcionalidades:

> Crie uma pasta com nome `src` e crie todas as classes dentro dele. O arquivo `index.js` deve ficar na pasta raiz do projeto.

### Criação das classes

#### 1. Conta

Crie o arquivo `Conta.js` para escrever a classe que será utilizada como base para as demais - classe mãe/superclass.

`Atributos necessários`:

```js
    // Apenas 3 parâmetros devem ser passados ao instanciar a classe Conta
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
```

`Métodos obrigatórios`:

* **verSaldo()**: Por meio deste método você deve exibir o saldo da conta do cliente. Ex.: `'Seu saldo atual é de R$ valor'` - formate o valor para ter 2 casas decimais;

* **verExtrato()**: Exiba todas as transações bancárias realizadas. Caso não tenha, imprima a mensagem: `'Não há transações bancárias em seu histórico.'`;

* **depositar(valor)**: Por meio deste método você deverá criar a lógica necessária para inserir um valor em contas. Este valor deve ser recebido via parâmetro e deve ser positivo e diferente de 0 - `salve o procedimento no extrato informando o nome da transação, valor, taxa e a data de realização`;

* **sacar(valor)**: Neste método você deverá receber um valor para saque e verificar se há saldo disponível para concluir a operação desejada. Se tiver saldo suficiente, imprima: `'Depósito de R$ valor realizado com sucesso!'`  - formate o valor para ter 2 casas decimais, caso contrário, imprima: `'Saldo insuficiente para saque.'` - **realize o incremento de 1 em this.totalSaquesRealizados** -`salve o procedimento no extrato informando o nome da transação, valor, taxa e a data de realização`. ⚠️ o valor informado deve ser MAIOR do que zero (0);

* **transferir(ContaDestino, valor)**: Neste método você deverá receber dois parâmetros, sendo o `1º a conta destino` e, o `2º o valor a ser transferido`.

    * **Operações necessárias para realizar a transferência**: <br/>
    1. `Verifique se a conta do transferente e destinatário são diferentes` - não é possível transferir para a mesma conta; <br/> <br/>
    2. `Verifique se há saldo disponível`: Caso tenha, decremente o valor passado na conta do transferente e incremente o valor na conta do destinatário, imprima a mensagem: `'Valor de R$ valor transferido com sucesso para NomeDestinatario.'`, **além disso, insira as informações abaixo no extrato da conta do transferente e do destinatário**:
    <pre>
        nomeTransacao: 'Transferência',
        de: { nomeTransferente: Nome Transferente, numeroConta: numConta transferente },
        para: { nomeRecebedor: Nome Destinatário, numeroConta: numConta recebedor },
        valor: // valor transferido,
        taxa: 0,
        data: // sete a data de forma automática -> utilize a classe Date;
    </pre>
    caso tente enviar um valor para a mesma conta, imprima: `'Operação inválida! Só é possível realizar transferências para outras contas.'` e, **caso não haja saldo suficiente**, imprima: `'Saldo insuficiente!'`; <br/><br/>


⚠️ Nesta classe (`Conta`) não há cobrança de taxas.



**Exporte a classe** para que ela possa ser utilizada em outro arquivo, como o index.js. `Realize este mesmo procedimento nas demais classes`.

```js
module.exports = Conta; // Exportação da Classe Conta
```


#### 2. ContaCorrente

Crie o arquivo `ContaCorrente.js` para escrever a classe `ContaCorrente` que deve herdar tudo da classe `Conta`.

> Importe o readline-sync neste arquivo.


* **Construtor**: Deve receber os mesmos 3 parâmetros da classe mãe - `titular, cpf, numConta`. <br/>
Além disso, o tipo da conta deve ser = `'cc'` e um `novo atributo` deve ser criado para definir o total de saques permitidos por dia - utilize o valor `3` - `Exemplo: totalSaquesPorDia = 3`;


* Método **sacar(valor)**: realize a **sobrescrita** deste método que vem da classe mãe, verificando se o `totalSaquesRealizados` é menor do que o `totalSaquesPorDia`. Caso tenha excedido o total de saques permitidos por dia, uma `taxa de R$ 5.00 deve ser cobrada` (informe sobre a taxa a ser cobrada e solicite que o usuário confirme se realmente deseja sacar (Se positivo, insira a taxa no extrato)) - caso ele cancele, imprima: `'Saque cancelado!'`, além disso, realize as mesmas verificações realizadas no método sacar(valor) da classe Conta;

> Caso veja que há a necessidade de criar outro método para ajudar no processo de saque, fique a vontade para implementá-lo.



#### 3. ContaPoupanca

Crie o arquivo `ContaPoupanca.js` para escrever a classe `ContaPoupanca` que deve herdar tudo da classe `Conta`.

* **Construtor**: Deve receber os mesmos 3 parâmetros da classe mãe - `titular, cpf, numConta`. <br/>
Além disso, o tipo da conta deve ser = `'cp'`;


* Método **transferir(ContaDestino, valor)**: realize a **sobrescrita** deste método. A implementação é semelhante à da classe mãe, porém para `transferências realizadas entre contas com tipos diferentes deve haver uma taxa de 1%` para cada transferência realizada. <br/>
**Ou seja, todas as transferências realizadas por meio de uma ContaPoupanca para uma conta 'comum' ou 'cc' deve haver uma taxa de 1% em cima do valor a ser transferido**.



## 📊 Resultados esperados

### As operações abaixo devem ser realizadas no `index.js`

> - [x] Importe todas as classes no `index.js`;
> - [x] Para executar o programa digite o comando a seguir: `node index` ou `node .`;


### Operações realizadas com a classe Conta

Após implementar todos os métodos na classe `Conta`, insira o código abaixo no `index.js` para testar as operações:

```js
// CONTA

// Instâncias de Conta (tipo comum)
contaComum1 = new Conta('Fulano Oliveira da Fonseca', '12345698741', '85698745');
contaComum2 = new Conta('Ciclano da Fonseca Oliveira', '21345698741', '58698745');

// Utilizando os métodos da Conta
contaComum1.depositar(450);
contaComum1.sacar(20);
contaComum1.sacar(30);
contaComum1.transferir(contaComum2, 150);

console.log('=== SALDO CONTA 1 ===')
contaComum1.verSaldo();
console.log('=== SALDO CONTA 2 ===')
contaComum2.verSaldo();

console.log('=== EXTRATO CONTA 1 ===')
contaComum1.verExtrato();
console.log('=== EXTRATO CONTA 2 ===')
contaComum2.verExtrato();
```


> Como resultado, a saída deve ser igual a exibida abaixo:

```shell
✅ Depósito de R$ 450.00 realizado com sucesso!
✅ Saque de R$ 20.00 realizado com sucesso!
✅ Saque de R$ 30.00 realizado com sucesso!
💸 Valor de R$ 150.00 transferido com sucesso para Ciclano da Fonseca Oliveira.

=== SALDO CONTA 1 ===
💰 Seu saldo atual é de R$ 250.00.
=== SALDO CONTA 2 ===
💰 Seu saldo atual é de R$ 150.00.

=== EXTRATO CONTA 1 ===
[
  {
    nomeTransacao: 'Depósito',
    valor: 450,
    data: 2024-03-03T16:21:42.441Z
  },
  {
    nomeTransacao: 'Saque',
    valor: 20,
    taxa: 0,
    data: 2024-03-03T16:21:42.442Z
  },
  {
    nomeTransacao: 'Saque',
    valor: 30,
    taxa: 0,
    data: 2024-03-03T16:21:42.442Z
  },
  {
    nomeTransacao: 'Transferência',
    de: {
      nomeTransferente: 'Fulano Oliveira da Fonseca',
      numeroConta: '85698745'
    },
    para: {
      nomeRecebedor: 'Ciclano da Fonseca Oliveira',
      numeroConta: '58698745'
    },
    valor: 150,
    taxa: 0,
    data: 2024-03-03T16:21:42.442Z
  }
]

=== EXTRATO CONTA 2 ===
[
  {
    nomeTransacao: 'Transferência',
    de: {
      nomeTransferente: 'Fulano Oliveira da Fonseca',
      numeroConta: '85698745'
    },
    para: {
      nomeRecebedor: 'Ciclano da Fonseca Oliveira',
      numeroConta: '58698745'
    },
    valor: 150,
    taxa: 0,
    data: 2024-03-03T16:21:42.442Z
  }
]
```


<br/>

Após realizar as implementações na classe `ContaCorrente`, insira o código abaixo no `index.js` para testar as operações - ⚠️ comente o código anterior sobre a classe `Conta`:

```js
// CONTA CORRENTE
contaCorrente = new ContaCorrente('Fulano Oliveira da Fonseca', '12345698741', '85698745');

contaCorrente.depositar(735);
contaCorrente.sacar(0); 
contaCorrente.sacar(5); 
contaCorrente.sacar(10); 
contaCorrente.sacar(50);
contaCorrente.sacar(35);

console.log('=== SALDO CONTA CORRENTE ===');
contaCorrente.verSaldo();

console.log('=== EXTRATO CONTA CORRENTE ===');
contaCorrente.verExtrato();
```

> Como resultado, a saída deve ser igual a exibida abaixo:

```shell
✅ Depósito de R$ 735.00 realizado com sucesso!
⚠️ Informe um valor maior do que 0.
✅ Saque de R$ 5.00 realizado com sucesso!
✅ Saque de R$ 10.00 realizado com sucesso!
✅ Saque de R$ 50.00 realizado com sucesso!
⚠️ Atenção! Você excedeu o limite diário para saques.
Para prosseguir, será cobrada uma taxa de R$ 5,00.
Deseja continuar?
Digite 1 para confirmar ou 2 para cancelar: 1 # Observe que a opção selecionada foi a 1.
✅ Saque de R$ 35.00 realizado com sucesso!
=== SALDO CONTA CORRENTE ===
💰 Seu saldo atual é de R$ 630.00.
=== EXTRATO CONTA CORRENTE ===
[
  {
    nomeTransacao: 'Depósito',
    valor: 735,
    data: 2024-03-03T17:05:22.650Z
  },
  {
    nomeTransacao: 'Saque',
    valor: 5,
    taxa: 0,
    data: 2024-03-03T17:05:22.651Z
  },
  {
    nomeTransacao: 'Saque',
    valor: 10,
    taxa: 0,
    data: 2024-03-03T17:05:22.651Z
  },
  {
    nomeTransacao: 'Saque',
    valor: 50,
    taxa: 0,
    data: 2024-03-03T17:05:22.651Z
  },
  {
    nomeTransacao: 'Saque',
    valor: 35,
    taxa: 5,
    data: 2024-03-03T17:05:24.150Z
  }
]
```

**OU**

```shell
✅ Depósito de R$ 735.00 realizado com sucesso!
⚠️ Informe um valor maior do que 0.
✅ Saque de R$ 5.00 realizado com sucesso!
✅ Saque de R$ 10.00 realizado com sucesso!
✅ Saque de R$ 50.00 realizado com sucesso!
⚠️ Atenção! Você excedeu o limite diário para saques.
Para prosseguir, será cobrada uma taxa de R$ 5,00.
Deseja continuar?
Digite 1 para confirmar ou 2 para cancelar: 2 # Observe que a opção selecionada foi a 2, portanto o resultado é diferente.
Saque cancelado!
=== SALDO CONTA CORRENTE ===
💰 Seu saldo atual é de R$ 670.00.
=== EXTRATO CONTA CORRENTE ===
[
  {
    nomeTransacao: 'Depósito',
    valor: 735,
    data: 2024-03-03T17:08:31.348Z
  },
  {
    nomeTransacao: 'Saque',
    valor: 5,
    taxa: 0,
    data: 2024-03-03T17:08:31.349Z
  },
  {
    nomeTransacao: 'Saque',
    valor: 10,
    taxa: 0,
    data: 2024-03-03T17:08:31.349Z
  },
  {
    nomeTransacao: 'Saque',
    valor: 50,
    taxa: 0,
    data: 2024-03-03T17:08:31.349Z
  }
]
```


<br/>

Após realizar as implementações na classe `ContaPoupanca`, insira o código abaixo no `index.js` para testar as operações - ⚠️ comente o código anterior sobre a classe `ContaCorrente`:

```js
// CONTA POUPANÇA

// Instâncias de ContaPoupanca
poupanca1 = new ContaPoupanca('Fulano Oliveira da Fonseca', '12345698741', '85698745');
poupanca2 = new ContaPoupanca('Ciclano da Fonseca Oliveira', '21345698741', '58698542');

// Instância de ContaCorrente
corrente = new ContaCorrente('Beltrano da Silva', '65984532147', '84965423');


poupanca1.depositar(1000); 
poupanca1.transferir(corrente, 100); 
poupanca1.transferir(poupanca2, 100); 

console.log('=== SALDO CONTA POUPANCA 1 ===');
poupanca1.verSaldo(); 

console.log('=== EXTRATO CONTA POUPANCA 1 ===');
console.log(poupanca1.verExtrato()); 


console.log('=== SALDO CONTA CORRENTE ===');
corrente.verSaldo(); 

console.log('=== EXTRATO CONTA CORRENTE ===');
console.log(corrente.verExtrato()); 


console.log('=== SALDO CONTA POUPANCA 2 ===');
poupanca2.verSaldo(); 

console.log('=== EXTRATO CONTA POUPANCA 2 ===');
console.log(poupanca2.verExtrato()); 
```


> Como resultado, a saída deve ser igual a exibida abaixo:


```shell
✅ Depósito de R$ 1000.00 realizado com sucesso!
💸 Valor de R$ 100.00 transferido com sucesso para Beltrano da Silva.
💸 Valor de R$ 100.00 transferido com sucesso para Ciclano da Fonseca Oliveira.
=== SALDO CONTA POUPANCA 1 ===
💰 Seu saldo atual é de R$ 799.00.
=== EXTRATO CONTA POUPANCA 1 ===
============================ EXTRATO BANCÁRIO CP =============================
------------------------------------------------------------------------------
Nome transação: Depósito
Valor R$: 1000
Data: Sun Mar 03 2024 14:34:25 GMT-0300 (Horário Padrão de Brasília)
------------------------------------------------------------------------------
Nome transação: Transferência
Dados transferente:
   Nome: Fulano Oliveira da Fonseca
   Número da conta: 85698745
Dados recebedor:
   Nome: Beltrano da Silva
   Número da conta: 84965423
Valor R$: 100
Taxa R$: 1
Data: Sun Mar 03 2024 14:34:25 GMT-0300 (Horário Padrão de Brasília)
------------------------------------------------------------------------------
Nome transação: Transferência
Dados transferente:
   Nome: Fulano Oliveira da Fonseca
   Número da conta: 85698745
Dados recebedor:
   Nome: Ciclano da Fonseca Oliveira
   Número da conta: 58698542
Valor R$: 100
Taxa R$: 0
Data: Sun Mar 03 2024 14:34:25 GMT-0300 (Horário Padrão de Brasília)
------------------------------------------------------------------------------

=== SALDO CONTA CORRENTE ===
💰 Seu saldo atual é de R$ 100.00.
=== EXTRATO CONTA CORRENTE ===
[
  {
    nomeTransacao: 'Transferência',
    de: {
      nomeTransferente: 'Fulano Oliveira da Fonseca',
      numeroConta: '85698745'
    },
    para: { nomeRecebedor: 'Beltrano da Silva', numeroConta: '84965423' },
    valor: 100,
    taxa: 1,
    data: 2024-03-03T17:34:25.510Z
  }
]

=== SALDO CONTA POUPANCA 2 ===
💰 Seu saldo atual é de R$ 100.00.
=== EXTRATO CONTA POUPANCA 2 ===
============================ EXTRATO BANCÁRIO CP =============================
------------------------------------------------------------------------------
Nome transação: Transferência
Dados transferente:
   Nome: Fulano Oliveira da Fonseca
   Número da conta: 85698745
Dados recebedor:
   Nome: Ciclano da Fonseca Oliveira
   Número da conta: 58698542
Valor R$: 100
Taxa R$: 0
Data: Sun Mar 03 2024 14:34:25 GMT-0300 (Horário Padrão de Brasília)
------------------------------------------------------------------------------
```