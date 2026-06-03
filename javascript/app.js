'use strict'

import { criarLogin } from './pages/login.js'
import { criarForms } from './pages/forms.js'

const paginas = {
    login: {
        titulo: 'LOGIN',
        renderizar: criarLogin
    },

    dashboard: {
        titulo: 'FATEC MODELS',
        renderizar: criarForms
    }
}

export function navegarPara(pagina) {
    window.location.hash = pagina
}

export function renderizarPagina() {

    const nomePagina =
        window.location.hash.replace('#', '')

    const pagina = paginas[nomePagina]

    const conteudo = pagina.renderizar()

    document.getElementById('titulo').textContent =
        pagina.titulo

    document
        .getElementById('app-main')
        .replaceChildren(conteudo)
}

window.addEventListener(
    'hashchange',
    renderizarPagina
)

navegarPara('login')
renderizarPagina()