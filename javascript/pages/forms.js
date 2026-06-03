'use strict'

import {
    getContatoss,
    criarContato,
    atualizarContato,
    deletarContato
} from '../contatos.js'
import { ativarPreview } from '../preview.js'

export function criarForms() {

    const dashboard = document.createElement('main')


    const painelFormulario = document.createElement('aside')
    painelFormulario.id = 'painel-formulario'

    const tituloFormulario = document.createElement('h2')
    tituloFormulario.textContent = 'Nova Candidata'

    const campoId = document.createElement('input')
    campoId.type = 'hidden'
    campoId.id = 'campo-id'


    const labelNome = document.createElement('label')
    labelNome.htmlFor = 'campo-nome'
    labelNome.textContent = 'Nome completo'

    const campoNome = document.createElement('input')
    campoNome.type = 'text'
    campoNome.id = 'campo-nome'


    const labelCelular = document.createElement('label')
    labelCelular.htmlFor = 'campo-celular'
    labelCelular.textContent = 'Celular'

    const campoCelular = document.createElement('input')
    campoCelular.type = 'tel'
    campoCelular.id = 'campo-celular'


    const labelEmail = document.createElement('label')
    labelEmail.htmlFor = 'campo-email'
    labelEmail.textContent = 'E-mail'

    const campoEmail = document.createElement('input')
    campoEmail.type = 'email'
    campoEmail.id = 'campo-email'


    const labelEndereco = document.createElement('label')
    labelEndereco.htmlFor = 'campo-endereco'
    labelEndereco.textContent = 'Endereço'

    const campoEndereco = document.createElement('input')
    campoEndereco.type = 'text'
    campoEndereco.id = 'campo-endereco'


    const uploadContainer = document.createElement('div')
    uploadContainer.className = 'upload-container'

    const textoUpload = document.createElement('span')
    textoUpload.className = 'texto-upload'
    textoUpload.textContent = 'Deixe sua foto para nossa avaliação:'

    const campoFoto = document.createElement('input')
    campoFoto.type = 'file'
    campoFoto.id = 'campo-foto'
    campoFoto.accept = 'image/*'
    campoFoto.hidden = true

    const labelFoto = document.createElement('label')
    labelFoto.htmlFor = 'campo-foto'
    labelFoto.className = 'botao-upload'

    const previewImagem = document.createElement('img')
    previewImagem.id = 'preview-imagem'
    previewImagem.src = './img/upload.svg'
    previewImagem.alt = 'Upload de imagem'

    labelFoto.appendChild(previewImagem)

    uploadContainer.append(
        textoUpload,
        campoFoto,
        labelFoto
    )

    ativarPreview(campoFoto, previewImagem)

    const botaoSalvar = document.createElement('button')
    botaoSalvar.type = 'button'
    botaoSalvar.id = 'botao-salvar'
    botaoSalvar.className = 'botao-salvar'
    botaoSalvar.textContent = 'Salvar'

    const botaoCancelar = document.createElement('button')
    botaoCancelar.type = 'button'
    botaoCancelar.id = 'botao-cancelar'
    botaoCancelar.className = 'botao-cancelar'
    botaoCancelar.textContent = 'Cancelar'

    const mensagemFeedback = document.createElement('p')
    mensagemFeedback.id = 'mensagem-feedback'


    const painelLista = document.createElement('section')
    painelLista.id = 'painel-lista'

    const tituloLista = document.createElement('h2')
    tituloLista.textContent = 'Candidatas'

    const tabela = document.createElement('table')
    tabela.id = 'tabela-contatos'

    const thead = document.createElement('thead')
    const trHead = document.createElement('tr')

    const thNome = document.createElement('th')
    thNome.textContent = 'Nome'

    const thCelular = document.createElement('th')
    thCelular.textContent = 'Celular'

    const thEmail = document.createElement('th')
    thEmail.textContent = 'Email'

    const thEndereco = document.createElement('th')
    thEndereco.textContent = 'Endereço'

    trHead.append(thNome, thCelular, thEmail, thEndereco)
    thead.appendChild(trHead)

    const corpoTabela = document.createElement('tbody')
    corpoTabela.id = 'corpo-tabela'

    tabela.append(thead, corpoTabela)

    painelLista.append(
        tituloLista,
        tabela
    )


    painelFormulario.append(
        tituloFormulario,
        campoId,

        labelNome,
        campoNome,

        labelCelular,
        campoCelular,

        labelEmail,
        campoEmail,

        labelEndereco,
        campoEndereco,

        uploadContainer,

        botaoSalvar,
        botaoCancelar,

        mensagemFeedback
    )

    dashboard.append(
        painelFormulario,
        painelLista
    )


    botaoSalvar.addEventListener('click', salvarContato)
    botaoCancelar.addEventListener('click', limparFormulario)

    carregarContatos()

    return dashboard
}


async function carregarContatos() {

    const corpoTabela = document.getElementById('corpo-tabela')

    if (!corpoTabela) return

    corpoTabela.replaceChildren()

    const contatos = await getContatoss()

    contatos.forEach(contato => {

        const linha = document.createElement('tr')

        const colunaFoto = document.createElement('td')

        const img = document.createElement('img')
        img.src = contato.foto || './img/upload.svg'
        img.alt = contato.nome

        colunaFoto.appendChild(img)

        const colunaNome = document.createElement('td')
        colunaNome.textContent = contato.nome

        const colunaCelular = document.createElement('td')
        colunaCelular.textContent = contato.celular

        const colunaEmail = document.createElement('td')
        colunaEmail.textContent = contato.email

        const colunaEndereco = document.createElement('td')
        colunaEndereco.textContent = contato.endereco


        const colunaAcoes = document.createElement('td')

        const botaoEditar = document.createElement('button')
        botaoEditar.textContent = 'Editar'
        botaoEditar.className = 'editar'

        botaoEditar.onclick = () => preencherFormulario(contato)

        const botaoExcluir = document.createElement('button')
        botaoExcluir.textContent = 'Excluir'
        botaoExcluir.className = 'excluir'

        botaoExcluir.onclick = async () => {
            await deletarContato(contato.id)
            carregarContatos()
        }

        colunaAcoes.append(botaoEditar, botaoExcluir)

        linha.append(
            colunaFoto,
            colunaNome,
            colunaCelular,
            colunaEmail,
            colunaEndereco,
            colunaAcoes
        )

        corpoTabela.appendChild(linha)
    })
}

async function salvarContato() {

    const nome = document.getElementById('campo-nome')
    const celular = document.getElementById('campo-celular')
    const email = document.getElementById('campo-email')
    const endereco = document.getElementById('campo-endereco')

    const contato = {
        nome: nome.value,
        celular: celular.value,
        email: email.value,
        endereco: endereco.value
    }

    await criarContato(contato)

    limparFormulario()
    carregarContatos()
}

function limparFormulario() {

    document.getElementById('campo-nome').value = ''
    document.getElementById('campo-celular').value = ''
    document.getElementById('campo-email').value = ''
    document.getElementById('campo-endereco').value = ''
    document.getElementById('campo-id').value = ''
}

function preencherFormulario(contato) {

    document.getElementById('campo-id').value = contato.id
    document.getElementById('campo-nome').value = contato.nome
    document.getElementById('campo-celular').value = contato.celular
    document.getElementById('campo-email').value = contato.email
    document.getElementById('campo-endereco').value = contato.endereco

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}