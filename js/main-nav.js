$(function (){
	$("#btn_toggle").click(function (){
  	$("#Toggle").toggle();
      $("#toggle").show();
  });
});

$(function (){
	$("#btn_Toggle").click(function (){
  	$("#toggle").toggle();
      $("#toggle2").hide();
      $("#toggle3").hide();

  });
});

$(function (){
	$("#btn_Toggle2").click(function (){
  	$("#toggle2").toggle();
      $("#toggle").hide();
      $("#toggle3").hide();
  });
});

$(function (){
	$("#btn_Toggle3").click(function (){
  	$("#toggle3").toggle();
      $("#toggle").hide();
      $("#toggle2").hide();

  });
});

