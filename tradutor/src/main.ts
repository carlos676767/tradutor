



let idiomaPrincipal:string
const selectIdiomaPrincipal = document.getElementById("selectIdiomaPrincipal") as HTMLSelectElement
const options = selectIdiomaPrincipal.options
const selecionarIdiomaPrincipal = () => {
  selectIdiomaPrincipal.addEventListener("change", () => {
    if (options[1].selected) {
      idiomaPrincipal = "en"
    }else if (options[2].selected) {
      idiomaPrincipal = "es"
    }else if (options[3].selected) {
      idiomaPrincipal = "ru"
    }else{
      idiomaPrincipal = "pt-br"
    }
  })
}



let idiomaDestinatario: string
const selectIdiomaDeestinatorio = document.getElementById("idiomaParaTraduzir") as HTMLSelectElement
const options2 = selectIdiomaDeestinatorio.options

const funcaoIidomaDestinatrio = () => {
  selectIdiomaDeestinatorio.addEventListener("change", () => {
    if (options2[1].selected) {
      idiomaDestinatario = "en"
    }else if (options2[2].selected) {
      idiomaDestinatario = "es"
    }else if (options2[3].selected) {
      idiomaDestinatario = "ru"
    }else{
      idiomaDestinatario = "pt-br"
    }
  })
}



selecionarIdiomaPrincipal();
funcaoIidomaDestinatrio();

const pegarValorDigitado = () => {
  const textNeareaIdiomaPrincipal = document.getElementById("idiomaPrincipal") as HTMLTextAreaElement
  return textNeareaIdiomaPrincipal.value
}

const buscarIdiomas = async ()  => {
  try {
    console.log("buscando")
    const response = await fetch(`https://api.mymemory.translated.net/get?q=${pegarValorDigitado()}&langpair=${idiomaPrincipal}|${idiomaDestinatario}`,{
      method: "POST",
    })
    const data = await response.json()
    console.log("dados encontrados");
    const {responseData } = data
    exibirTextoIdiomaTraduzido(responseData.translatedText)
    mensasagemBotao(responseData.translatedText)
  } catch (error) {
    console.log(error); 
  }
  
}


const exibirTextoIdiomaTraduzido = (traducao: string) => {
  const textNeareaIdiomaSecundario = document.getElementById("idiomaTraduzido") as HTMLTextAreaElement
  textNeareaIdiomaSecundario.innerHTML = traducao
}

const mensasagemBotao = (traducao: string) => {
  const mensagem = new SpeechSynthesisUtterance();
  mensagem.text = traducao
  mensagem.lang = idiomaDestinatario
  speechSynthesis.speak(mensagem);
}


const button = document.querySelector("button") as HTMLButtonElement
button.addEventListener("click", () => {
  buscarIdiomas()
})
