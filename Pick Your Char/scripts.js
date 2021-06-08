const charM = document.getElementById ('charM');
const charF = document.getElementById ('charF');
const char = document.getElementById ('charimg');

function charSelectM () {
    char.src ='./images/111.png';
}

function charSelectF () {
    char.src = './images/222.jpg';
}


charM.addEventListener('click', charSelectM);

charF.addEventListener('click', charSelectF);