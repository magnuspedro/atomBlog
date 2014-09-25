$(document).ready(function(){
  $( "#menuBar" ).click(function() {
    $(".previous").animate({left: 210},"slow");
    $(".menuBody").animate({left: 0});
  });
  $(".previous").click(function(){
    $(".previous").animate({left: -40});
    $(".menuBody").animate({left: -210},"slow");
  });
  var ver = 0;
  //Sign-up
  $("#openSign-up").click(function(){
    $("#sign-up").animate({top: "40%"},500)
    $(".exitSign").animate({top: "39%"},600)
    if(ver == false){
    $("#login").animate({top: -180},500)
    $(".exit").animate({top: -180},600)
    ver = true;
    }
  });
  $(".exitSign").click(function(){
    $("#sign-up").animate({top: -250},500)
    $(".exitSign").animate({top: -250},600)
  });
  //Login
  $("#openLogin").click(function(){
    $("#login").animate({top: "50%"},500)
    $(".exit").animate({top: "49%"},600)
    if(ver == true){
      $("#sign-up").animate({top: -250},500)
      $(".exitSign").animate({top: -250},600)
      ver = false;
    }
  });
  $(".exit").click(function(){
    $("#login").animate({top: -180},500)
    $(".exit").animate({top: -180},600)
  });
  $(".color").change(function(){
    var color = $(".color").val();
    $("body").css({background: color});
  });
  $("#login").draggable();
  $("#sign-up").draggable();
  $(".plus").click(function(){
      $(".allLi").fadeIn(0);
     $(".previous").animate({left: -40});
     $(".menuBody").animate({left: -210},"slow");
  });
  $(".downSQN").click(function(){
      $(".allLi").fadeOut(0);
  });
  /*$(".menuBody").bind("contextmenu", function(e) {
      return false;
  });*/    
var edit = false;
$("#edit").click(function(){
    $(".allLi").fadeIn(0);
    $(".previous").animate({left: -40});
    $(".menuBody").animate({left: -210},"slow");
    alert($(".menuBody").html());
    edit = true;
});
 $(".createLi li").click(function(){
    var className = $(this).attr('class');
    $(".iconLi").attr("value", className);
 });
$(".subLi").click(function(){
    var valName = $(".nameLi").val();
    var valLink = $(".linkLi").val();
    var valIcon = $(".iconLi").val();
    if(valName == "" || valLink == "" || valIcon == ""){
        $(".names").animate({height: 410},500).delay(2600).animate({height: 390},500);
        $(".preen").fadeIn(600).delay(2000).fadeOut(600);
    }else{
        if(edit == false){
            $(".menuBody").append("<li class="+valIcon+" contextmenu='menu'>&nbsp;<a href="+valLink+" target='iframe'>"+valName+"</a></li>");
        
            $(".names").animate({height: 410},500).delay(2600).animate({height: 390},500);
            $(".created").fadeIn(600).delay(2000).fadeOut(600);
        }else{
            
        }
    }
});
});
