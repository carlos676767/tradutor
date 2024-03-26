
let idiomaPrincipal:string
const selecionarIdiomaPrincipal = () => {
  const selectIdiomaPrincipal = document.getElementById("selectIdiomaPrincipal") as HTMLSelectElement
  const options = selectIdiomaPrincipal.options
  selectIdiomaPrincipal.addEventListener("change", () => {
    if (options[1].selected) {
      idiomaPrincipal = "en"
    }else if (options[2].selected) {
      idiomaPrincipal = "es"
    }else if (options[3].selected) {
      idiomaPrincipal = "ru"
    }else{
      idiomaPrincipal = "ptbr"
    }
  })
}



let idiomaDestinatario: string
const funcaoIidomaDestinatrio = () => {
  const selectIdiomaDeestinatorio = document.getElementById("idiomaParaTraduzir") as HTMLSelectElement
  const options = selectIdiomaDeestinatorio.options
  selectIdiomaDeestinatorio.addEventListener("change", () => {
    if (options[1].selected) {
      idiomaDestinatario = "en"
    }else if (options[2].selected) {
      idiomaDestinatario = "es"
    }else if (options[3].selected) {
      idiomaDestinatario = "ru"
    }else{
      idiomaDestinatario = "ptbr"
    }
  })
}



selecionarIdiomaPrincipal();
funcaoIidomaDestinatrio()

const buscarIdiomas = async ()  => {
  try {
    console.log("buscando")
    const response = await fetch(`https://api.mymemory.translated.net/get?q=ola mundo&langpair=${idiomaPrincipal}|${idiomaDestinatario}`,{
      method: "POST",
    })
    const data = await response.json()
    console.log("dados encontrados");
    const {responseData } = data
    console.log(responseData.translatedText);
  } catch (error) {
    console.log(error); 
  }
}



const button = document.querySelector("button") as HTMLButtonElement
button.addEventListener("click", () => {
  buscarIdiomas()
})
