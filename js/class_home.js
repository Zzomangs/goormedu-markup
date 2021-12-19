const nav_atags = document.querySelectorAll('.nav li a');

// nav_atags[0].onclick = () => {
//     location.href = 'class_home.html'; 
// }
// nav_atags[1].onclick = () => {
//     location.href = 'class_home.html'; 
// }
// nav_atags[2].onclick = () => {
//     location.href = 'class_home.html'; 
// }
// nav_atags[3].onclick = () => {
//     location.href = 'class_home.html'; 
// }

// 모두 펼치고 닫기
$(function (){
	$(".cla-first span:last-child").click(function (){
  	$(".cla-contents").toggle();
  });
});

const contetnts = document.querySelectorAll('.cla-cont');
const contetntsList = document.querySelectorAll('.cla-contents');

for(let i =0; i < contetnts.length; i++){
    contetnts[i].onclick = () =>{
        if(contetnts[i] == contetntsList[i]){
            contetntsList[i].style.display = 'block';
        };
    };
};