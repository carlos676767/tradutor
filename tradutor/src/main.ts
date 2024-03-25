const buscarIdiomas = async ()  => {
  try {
    console.log("buscando")
    const response = await fetch(`https://api.mymemory.translated.net/get?q=ola mundo&langpair=pt|en`,{
      method: "POST",
    })
    
    const data = await response.json()
    console.log("dados encontrados");
    console.log(data)
  } catch (error) {
    console.log(error); 
  }
}
buscarIdiomas()


const idiomaPrincipalInput = document.querySelector("textarea") as HTMLTextAreaElement



