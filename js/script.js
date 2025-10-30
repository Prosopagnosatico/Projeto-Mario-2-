//Variavel que vai guardar a imagem do Mario, o querySelevtor serve para isso, procurar algo no html
const mario = document.querySelector('.mario')

const pipe = document.querySelector('.pipe')

//o => significa função, ta transformando o jump em um função 
const jump = () => {
    //Isso ta pegando o colocando a classe jump criada no css np mario
    mario.classList.add('jump')

    //isso ta tirando o jump do mario ápos 0.5 segundos do seu pulo 
    setTimeout(() => { 
        mario.classList.remove('jump')
    }, 500);
};

//Coloca que para jump acontecer, uma tecla tem que ser pressionada
document.addEventListener('keydown', jump);


//esse loop vai de tempos em tempos verificar se o mario ta no left 120px, ou seja, não pulou
const loop = setInterval(() =>{
    //O offsetLeft verifica a distancia da esquerda do item pai(container) e da esquerda do pipe
    const pipePosition = pipe.offsetLeft
    //Já que só o px ia dar numero undefined, eu pego e tiro o px, mas ainda sim deixando um numero
    const marioPosition = +getComputedStyle(mario).bottom.replace('px', "")

    console.log(marioPosition)

    //If para checar se a posição do cano é 120 E se 0 mario tá em 110, ou não, se for para tudo
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 110){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = './imagens/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft   = '50px'

        //Para o loop de ver as posições, pois mesmo após o game over ele continua funcionando
        clearInterval(loop)
    }
}, 10 )
//PAREI NO SLIDE 28 