let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLInputElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLInputElement;
let soma = document.getElementById('soma') as HTMLElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLElement;


function somarAoSaldo(soma: number) {
    let temp = Number(campoSaldo.innerHTML.toString) + soma;
    campoSaldo.innerHTML = String(temp);
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.innerHTML.toString));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
