
const niceMsgs = [
    'You are amazing',
    'You came a long way',
    'You can do this!',
    'You are helpful'
]

let niceMsg = niceMsgs[Math.floor(Math.random() * niceMsgs.length)];

console.log(Math.floor(Math.random() * niceMsgs.length));

document.querySelector('.msg').append(niceMsg);