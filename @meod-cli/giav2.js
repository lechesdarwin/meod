/**
 * Esta funcion puede ser utilizada solo en google chrome
 * pero gia.js es compatible con la mayoria de los navegadores
 * lea su dumentacion en annyang.com
 * necesita incluir la libreia de jquery para eso
 */
function listen(callback) {
    /*//const recognition = window.webkitSpeechRecognition;*/
    var Speech = window.webkitSpeechRecognition || window.SpeechRecognition;
    var recognition = new Speech();
    /*//si devuelve resultados por cada resultado semejante defecto false
    //recognition.continuous=true
    //Si devuelve resultados relacionados pero que no fueron considerados a la hora de la salida
    //recognition.interimResults=true*/
    recognition.lang = "es-MX";
    recognition.start();
    recognition.addEventListener("result", (e) => {
        callback(e, e.results[0][0].transcript);
    });
}
function speak(mensage) {
    var msg = new SpeechSynthesisUtterance(mensage);
    window.speechSynthesis.speak(msg);
}
