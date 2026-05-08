
import { getContatoss, criarContato, atualizarContato, deletarContato} from "./contatos.js"

const id = document.getElementById("campo-id")
const nome = document.getElementById("campo-nome")
const celular = document.getElementById("campo-celular")
const email = document.getElementById("campo-email")
const foto = document.getElementById("campo-foto")
const endereco = document.getElementById("campo-endereco")
const cidade = document.getElementById("campo-cidade")
const corpoTabela = document.getElementById("corpo-tabela")
const mensagemFeedback = document.getElementById("mensagem-feedback")
const mensagemLista = document.getElementById("mensagem-lista")
const botaoSalvar = document.getElementById("botao-salvar")
const botaoCancelar = document.getElementById("botao-cancelar")
const botaoCarregar = document.getElementById("botao-atualizar")

async function carregarContatos() {

  mensagemLista.textContent = "Carregando contatos..."
  corpoTabela.textContent = ""

  const contatos = await getContatoss()

  contatos.forEach(contato => {

    const linha = document.createElement("tr")
    const tdFoto = document.createElement("td")
    const imagem = document.createElement("img")
    imagem.src = contato.foto
    imagem.alt = contato.nome
    tdFoto.appendChild(imagem)

    const tdNome = document.createElement("td")
    tdNome.textContent = contato.nome

    const tdCelular = document.createElement("td")
    tdCelular.textContent = contato.celular

    const tdEmail = document.createElement("td")
    tdEmail.textContent = contato.email

    const tdEndereco = document.createElement("td")
    tdEndereco.textContent = contato.endereco

    const tdCidade = document.createElement("td")
    tdCidade.textContent = contato.cidade

    const tdAcoes = document.createElement("td")
    const botaoEditar = document.createElement("button")

    botaoEditar.textContent = "Editar"
    botaoEditar.addEventListener("click", () => { preencherFormulario(contato)})

    const botaoExcluir = document.createElement("button")
    botaoExcluir.textContent = "Excluir"
  
    botaoExcluir.addEventListener("click", async () => {
      const confirmar = confirm("Deseja deletar este contato?")

      if (confirmar) {
        await deletarContato(contato.id)
        carregarContatos()
      }
    })

    tdAcoes.appendChild(botaoEditar)
    tdAcoes.appendChild(botaoExcluir)
    linha.appendChild(tdFoto)
    linha.appendChild(tdNome)
    linha.appendChild(tdCelular)
    linha.appendChild(tdEmail)
    linha.appendChild(tdEndereco)
    linha.appendChild(tdCidade)
    linha.appendChild(tdAcoes)
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
