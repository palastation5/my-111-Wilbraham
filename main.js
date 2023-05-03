// pegamos nossa API de reconhecimento de fala e jogamos na variável
var SpeechRecognition = window.webkitSpeechRecognition;

// criamos uma nova API para ser usada no nosso site
var recognition = new SpeechRecognition();

// armazenamos a textbox no HTML
var Textbox = document.getElementById("textbox"); 

// sempre que clicamos no botão ele chama a função Start
function start()
{
    // deixa a caixa de texto vazia
    Textbox.innerHTML = ""; 
    
    // inicia a nossa API que converte fala em texto
    recognition.start(); 
} 
 
// onresult contém a fala convertida em texto
recognition.onresult = function(event) {

    // veremos o que tem no evento...
    console.log(event);

    // pegamos o que foi falado e jogamos na variável content
    var Content = event.results[0][0].transcript;

    // exibimos o conteúdo na tela dentro da textBox
    Textbox.innerHTML = Content;

    // PROXIMA AULA...
    if(Content =="take my selfie")
    {
        speak();
    }
}


function speak(){
    var synth = window.speechSynthesis

    speakData="Tirando sua selfie em 4 segybdos";

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function()
    {
        takeSelfie();
        save();
    }, 4000);
    
}

camera = documet.getElementById("camera");
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 91
 });
function takeSelfie()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfieImage" src="'+data_uri+'"/>';
    })
}

function save()
{
    link = document.getElementById("link")

    image = document.getElementById("selfieImage").src;

    link.href=image;

    link.click();
}
