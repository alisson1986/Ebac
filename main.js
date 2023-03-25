const form = document.getElementById('form');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const primeiroNumero=document.getElementById('first-number');
    const segundoNumero=document.getElementById('second-number');
    let sequenciaInvalida = 'O segundo numero deve ser maior do que o primeiro'
    let mensagemSucesso = '';
    let mensagemErro = document.querySelector('.error-message');

    if(primeiroNumero.value >= segundoNumero.value){
        primeiroNumero.value = ' ';
        segundoNumero.value = ' ';
        mensagemErro.innerHTML = sequenciaInvalida
        mensagemSucesso = document.querySelector('.sucess-message').style.display = 'none';
        mensagemErro = document.querySelector('.error-message').style.display = 'block';


    }else{
        primeiroNumero.value = ' ';
        segundoNumero.value = ' ';
        mensagemSucesso = document.querySelector('.sucess-message').style.display = 'block';
        mensagemErro = document.querySelector('.error-message').style.display = 'none';
    }
})


