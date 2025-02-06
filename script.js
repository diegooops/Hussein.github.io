
const urlSearchParams = new URLSearchParams(window.location.search)

const messageCustom = urlSearchParams.get('message')
const buttonNext = document.querySelector('#next')

if (messageCustom) {

  const mainMessageElement = document.querySelector('#mainMessage')
  mainMessageElement.textContent = decodeURI(messageCustom)
}


const btnOpenElement = document.querySelector('#open')
const btnCloseElement = document.querySelector('#close')
const mainMessageElement = document.querySelector('#mainMessage')
const originalMessage = mainMessageElement.textContent;

btnCloseElement.disabled = true
buttonNext.disabled=true


btnOpenElement.addEventListener('click', ()=> {

  mainMessageElement.style.display = "flex";
  mainMessageElement.style.justifyContent = "flex-start";
  mainMessageElement.style.alignItems = "flex-start";
  mainMessageElement.style.height ="100hv";

  btnOpenElement.disabled = true
  btnCloseElement.disabled = false
  buttonNext.disabled = false
  const coverElement = document.querySelector('.cover')
  coverElement.classList.add('open-cover')

  setTimeout(()=>{

    coverElement.style.zIndex = -1
    
    const paperElement = document.querySelector('.paper')
    paperElement.classList.remove('close-paper')
    paperElement.classList.add('open-paper')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'block'
  
  }, 500)

})


let mensajeIndex = 0;

btnCloseElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = false
  btnCloseElement.disabled = true
  buttonNext.disabled = true

  const coverElement = document.querySelector('.cover')
  const paperElement = document.querySelector('.paper')
  paperElement.classList.remove('open-paper')
  paperElement.classList.add('close-paper')
  
  setTimeout(()=>{
    coverElement.style.zIndex = 0
    coverElement.classList.remove('open-cover')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'none'

    mainMessageElement.textContent = originalMessage;
    mensajeIndex = 0;
  },500)
})



let mensajes = [
  "Voy a cuidar de ti y tu de mi hasta llegar a viejitos 🤭jeje. Este 14 de febrero te invito a pasarla conmigo  y poder seguir creando bonitos recuerdos, comiendo unas ricas piernas del KFC y una película ❤ No estamos en caminos separados, tu eres mi camino y siempre serás mi camino",
  "Siempre e creído en ti y siempre me has llenado de orgullo, eres un ejemplo a seguir y estoy muy feliz de que seas mi enamorada, nuestros hijos no solo saldrán larguito, sinó inteligentes y bella como tú 🤭❤ Te mando un fuerte abrazo desde aquí hasta el lugar donde estas y un besote en tu frentecita.",
  "Te amo mucho mi psicóloga favorita <br>Atentamente: tu paciente favorito 😂🤭"
]



buttonNext.addEventListener('click', () => {
  if (mensajeIndex < mensajes.length) {
    mainMessageElement.innerHTML = mensajes[mensajeIndex];


    if (mensajes[mensajeIndex] === "Te amo mucho mi psicóloga favorita <br>Atentamente: tu paciente favorito 😂🤭") {
      mainMessageElement.style.display = "flex";
      mainMessageElement.style.justifyContent = "center";
      mainMessageElement.style.alignItems = "center";

    }
    else{
      mainMessageElement.style.display = "flex";
      mainMessageElement.style.justifyContent = "flex-start";
      mainMessageElement.style.alignItems = "flex-start";
      mainMessageElement.style.height ="100hv";
    } 
    mensajeIndex++;
  }
});

const audio = document.getElementById('backgroundMusic');
const playPauseBtn = document.getElementById('playPauseBtn');

const volumePercentage = 20;
audio.volume = volumePercentage / 100;


const startTime = 23;

audio.currentTime = startTime;

let isPlaying = false;

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = '🔊';
    } else {
        audio.play();
        playPauseBtn.textContent = '🔇';
    }
    isPlaying = !isPlaying;
});

audio.addEventListener('ended', () => {
    playPauseBtn.textContent = '🔊';
    isPlaying = false;
});
