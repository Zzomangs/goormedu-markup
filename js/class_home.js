//const nav_atags = document.querySelectorAll('.nav li a');

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
  	$(".cla-sub-list").toggle();
  });
  //클릭된요소의 하위요소들 펼치기
  $('.cla-list > li > .cla-cont').click(function(e){
    e.stopPropagation();
    $(this).next($('.cla-sub-list')).slideToggle();
  })
  //영상 클릭 시 본 흔적남기기
  $('.cla-contents').click(function(){
    $(this).children($('.cla-watched')).addClass('active');
  })
  // $("li > a").blur(function(){
  //   $(this).removeClass('selec');
  // })
});
