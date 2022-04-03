const select = (e) => document.getElementById(e)
const imgLogo =''
const imgLogFacebookFooter =''
const imgLogoInstagramFooter =''
const imgLogoEmailFooter =''


const header = select('header')
const headerIner = `
        <div id="conteiner-logo">
            <div id="logo">
                <img src="${imgLogo}" alt="logo do Projeto Arte Sim">
            </div>
            <h1>Projeto Arte Sim!</h1>
        </div>

        <nav id="menu">
            <button id="menu-mobile" aria-haspopup="true" aria-controls="menu" aria-expanded="true" aria-label="Abrir Menu">
                <span id="hamburguer"></span>
            </button>

            <ul  id="lista-menu">
                <li><a href="../index.html">Ínicio</a></li>
                <li><a href="../paginas/sobre-nos.html">Sobre nós</a></li>
                <li><a href="../paginas/cursos.html">Cursos</a></li>
                <li><a href="../paginas/atue.html">Atue</a></li>
                <li><a href="../paginas/parceiros.html">parceiros</a></li>
                <li><a href="">Contato</a></li>
            </ul>

        </nav>
`
const footer = select('footer')
const footerIner = `
        <span id="footer-span">Clique no ícones abaixo para mais informações</span>
        <div id="footer-conteiner">
            <div class="img-footer"><a href="https://www.facebook.com/projetoartesim/about" target="_blank" rel="noopener noreferrer">
                <img src="${imgLogFacebookFooter} alt="Logo do facebook">
            </a></div>
            <div class="img-footer"><a href="https://www.instagram.com/projeto_artesim/?igshid=671xjn5v2i25" target="_blank" rel="noopener noreferrer">
                <img src="${imgLogoInstagramFooter}" alt="Logo do instagram">
            </a></div>
            <div class="img-footer"><a href="mailto:projetoartesim@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src="${imgLogoEmailFooter} alt="Logo do email">
            </a></div>
        </div>
`
header.innerHTML = headerIner
footer.innerHTML = footerIner
