const header_s = document.querySelector('.header-s');
const go_logo = document.querySelector('.header-nav a');
var atags = header_s.querySelectorAll('li a');

atags[0].onclick = () => {
    location.href = 'sign-in.html';
}

atags[1].onclick = () => {
    location.href = 'sign-up.html';
}

go_logo.onclick = () =>{
    location.href = 'index.html';
}