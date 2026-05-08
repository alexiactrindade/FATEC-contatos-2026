
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
