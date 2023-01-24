/*>Utilize if/else para escrever um código que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.

Seu código também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

valorCustoTotal = valorCusto + impostoSobreOCusto;
lucro = valorVenda - valorCustoTotal (lucro de um produto);*/
const custo_produto = 12;
const valor_venda = 33;
    let lucro=0;
    let venda=0;
    let imposto=0;
    if(custo_produto<=0 || valor_venda<=0){
        console.log('Valor invalido!');
    }else{
        imposto = (20*custo_produto)/100
        lucro = ((custo_produto+imposto)-(valor_venda*1000));
        console.log('Lucros da venda de mil produtos: '+lucro);
    }