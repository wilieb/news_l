const delayTime = 30000;
let clicked = false;

function redirectHome (){
    window.location.href = "index.html";
}

setTimeout(() => {
    if(!clicked){
        redirectHome;
    }
}, delayTime);

const scsButton = document.getElementById('scs-btn');
scsButton.addEventListener('click', (e) => {
    e.preventDefault();
    clicked = true;
    window.location.href = "index.html"
})