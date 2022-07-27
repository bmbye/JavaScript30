function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    console.log("transition removed")
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}


const keys = document.querySelectorAll('.key');
console.log(keys)
keys.forEach(k => k.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);