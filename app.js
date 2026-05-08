import { getContatoss, criarContato, atualizarContato, deletarContato} from "./contatos.js"

const id = document.getElementById("campo-id")
const nome = document.getElementById("campo-nome")
const celular = document.getElementById("campo-celular")
const email = document.getElementById("campo-email")
const foto = document.getElementById("campo-foto")
const endereco = document.getElementById("campo-endereco")
const cidade = document.getElementById("campo-cidade")

const corpoTabela = document.getElementById("corpo-tabela")
const mensagemLista = document.getElementById("mensagem-lista")

const botaoSalvar = document.getElementById("botao-salvar")
const botaoCancelar = document.getElementById("botao-cancelar")
const botaoAtualizar = document.getElementById("botao-atualizar")



async function carregarContatos() {

  mensagemLista.textContent = "Carregando contatos..."

  corpoTabela.replaceChildren()

  const contatos = await getContatoss()

  contatos.forEach(contato => {

    const linha = document.createElement("tr")

    const colunaFoto = document.createElement("td")
    const imagem = document.createElement("img")

    imagem.src = contato.foto
    imagem.alt = contato.nome

    colunaFoto.appendChild(imagem)

    const colunaNome = document.createElement("td")
    colunaNome.textContent = contato.nome

    const colunaCelular = document.createElement("td")
    colunaCelular.textContent = contato.celular

    const colunaEmail = document.createElement("td")
    colunaEmail.textContent = contato.email

    const colunaEndereco = document.createElement("td")
    colunaEndereco.textContent = contato.endereco

    const colunaCidade = document.createElement("td")
    colunaCidade.textContent = contato.cidade

    const colunaAcoes = document.createElement("td")

    const botaoEditar = document.createElement("button")
    botaoEditar.textContent = "Editar"

    botaoEditar.addEventListener("click", () => {
      preencherFormulario(contato)
    })

    const botaoExcluir = document.createElement("button")
    botaoExcluir.textContent = "Excluir"

    botaoExcluir.addEventListener("click", async () => {

      const confirmar = confirm("Deseja excluir este contato?")

      if (confirmar) {
        await deletarContato(contato.id)
        carregarContatos()
      }
    })

    colunaAcoes.appendChild(botaoEditar)
    colunaAcoes.appendChild(botaoExcluir)

    linha.appendChild(colunaFoto)
    linha.appendChild(colunaNome)
    linha.appendChild(colunaCelular)
    linha.appendChild(colunaEmail)
    linha.appendChild(colunaEndereco)
    linha.appendChild(colunaCidade)
    linha.appendChild(colunaAcoes)

    corpoTabela.appendChild(linha)
  })

  mensagemLista.textContent = ""
}


function preencherFormulario(contato) {

  id.value = contato.id
  nome.value = contato.nome
  celular.value = contato.celular
  email.value = contato.email
  foto.value = contato.foto
  endereco.value = contato.endereco
  cidade.value = contato.cidade
}

