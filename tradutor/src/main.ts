const idiomaPrincipalInput = document.getElementById("idiomaPrincipal") as HTMLTextAreaElement
const idiomaTraduzido = document.getElementById("idiomaTraduzido") as HTMLTextAreaElement
const idiomaParaTraduzir =  document.getElementById("idiomaParaTraduzir") as HTMLSelectElement


let armazenarIidomaOriginal: string = ""
const idiomaOriginal = () => {
  const selectIdiomaPrincipal = document.getElementById("selectIdiomaPrincipal") as HTMLSelectElement;
  selectIdiomaPrincipal.addEventListener("change", () => {
    const options = selectIdiomaPrincipal.options;
    if (options[1].selected) {
      alert("gay");
    }
  });
};

const buscarIdiomas = async (idiomaPrincipal: string, idiomaTraduzido:string)  => {
  try {
    console.log("buscando")
    const response = await fetch(`https://api.mymemory.translated.net/get?q=ola mundo&langpair=${idiomaPrincipal}|${idiomaTraduzido}`,{
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


buscarIdiomas("en", "pt")







