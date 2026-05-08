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


    function preencherFormulario(contato) {

             id.value = contato.id
            nome.value = contato.nome
            celular.value = contato.celular
            email.value = contato.email
            foto.value = contato.foto
            endereco.value = contato.endereco
            cidade.value = contato.cidade
    }
async function salvarContato() {
const contato = {

    nome: nome.value,
    celular: celular.value,
    email: email.value,
    foto: foto.value,
    endereco: endereco.value,
    cidade: cidade.value
  }
} 