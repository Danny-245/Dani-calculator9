const percentBtn = document.querySelector('.modal-btn');

const openPercent = document.querySelector('#percentOpen');
const mainDiv = document.querySelector('.main');
const exitDiv = document.querySelector('.exit-btndivision');
const calc = document.querySelector('.calculator');

let closeBtn = document.querySelector('.sxit');

openPercent.addEventListener('click', function(){
    mainDiv.style.display = 'block';
});

closeBtn.addEventListener('click', function(){
    mainDiv.style.display = 'none';
})

window.addEventListener('click', function(e){
    if(e.target === mainDiv) {
        mainDiv.style.display = 'none'
    }
})


function myFunction() {
    var percent = document.getElementById('percent').value;
    var num = document.getElementById('num').value;
    document.getElementById('value').value = (percent/100) * num;
}
let dMod = document.getElementById('dl-mod');
let body = document.querySelector('body');

dMod.addEventListener('click',function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')) {
        body.style.backgroundColor = 'rgba(0,0,0,0.2)';
        body.style.transition = '2s';
    }else {
        body.style.backgroundColor = 'rgba(0,0,0,0.8)';
        body.style.transition = '2s';
    }
});

