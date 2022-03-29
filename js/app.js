const select = (e) => document.getElementById(e)

const btMobile = select('menu-mobile')
const navMenu = select('menu')

function togleMenu(event){
    let menuAtivo = navMenu.classList.contains('active')
    navMenu.classList.toggle('active')

    if (event.type == 'touchstart') {
        event.preventDefault()
    }

    //QUEM CHAMOU O EVENTO
    event.currentTarget.setAttribute('aria-expanded', menuAtivo)
    if(menuAtivo){
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
    else{
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    }
    
}


btMobile.addEventListener('click', togleMenu)