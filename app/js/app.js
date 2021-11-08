const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');

btnHamburger.addEventListener('click', function(){//close hmg menu
    console.log('open');
    if(header.classList.contains('open')){
        header.classList.remove('open');
        body.classList.remove('noscroll');
    }
    else{ //open hmg menu
        header.classList.add('open');
        body.classList.add('noscroll');
    }
});

