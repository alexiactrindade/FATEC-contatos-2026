'use strict'

import { navegarPara } from '../app.js'

function verificarLogin(usuario, senha) {

    if (
        usuario.value === 'alexia' &&
        senha.value === '123'
    ) {

        navegarPara('dashboard')

    } else {

        alert('Usuário ou senha incorretos!')
    }
}

export function criarLogin() {

    const container = document.createElement('section')
    container.id = 'container-login'

    const titulo = document.createElement('h2')
    titulo.textContent = 'Login'

    const labelUsuario = document.createElement('label')
    labelUsuario.textContent = 'E-mail'

    const usuario = document.createElement('input')
    usuario.type = 'text'
    usuario.placeholder = 'Digite seu usuário'

    const labelSenha = document.createElement('label')
    labelSenha.textContent = 'Senha'

    const senha = document.createElement('input')
    senha.type = 'password'
    senha.placeholder = 'Digite sua senha'

    const botao = document.createElement('button')
    botao.id = 'botao-login'
    botao.type = 'button'
    botao.textContent = 'Entrar'

    botao.onclick = () => verificarLogin(usuario, senha)

    const mensagem = document.createElement('p')
    mensagem.id = 'mensagem-login'

    container.append(
        titulo,
        labelUsuario,
        usuario,
        labelSenha,
        senha,
        botao,
        mensagem
    )

    return container
}