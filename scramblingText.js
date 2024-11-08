

const text = document.getElementById('welcomeText')
const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const charsLength = chars.length
//Oh no, you just learned the secret true name
var string = 'Welcome to the world of <br>Nudy2'.split('');

let process = setInterval(scrambling,100)




function scrambling(){

    string[28 + Math.floor(Math.random() * 5)] = chars.charAt(Math.floor(Math.random() * charsLength))

    text.innerHTML = string.join('');
}