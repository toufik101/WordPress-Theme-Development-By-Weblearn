$(document).ready(function () {
  $(".btn").click(function(){
      $("a[target!='_blank']").css({"font-size":"20px","color":"red", "text-decoration:":"none"}).fadeToggle(100,function(){
        alert("Is calling")
      })
  });
 
  $(".btn").click(function () {
    $("#div").animate({
      left: "300px",
      opacity: "0.5",
      height: "150px",
      width: "150px",
    });
  });

   $(".addClassBtn").click(function(){
      $("#div2").toggleClass("activeRot")
  });
});
