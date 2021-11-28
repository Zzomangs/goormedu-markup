const header_s = document.querySelector('.header-s');

var atags = header_s.querySelectorAll('li a');

atags[0].onclick = () => {
    location.href = 'sign-in.html';
}

atags[1].onclick = () => {
    location.href = 'sign-up.html';
}