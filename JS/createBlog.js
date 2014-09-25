function makeBold() {
  document.execCommand( "bold" );
  if ( document.getElementById( "bold" ).isToggled ) {
    document.getElementById( "bold" )
    document.getElementById( "bold" ).isToggled = false;
  } else {
    document.getElementById( "bold" )
    document.getElementById( "bold" ).isToggled = true;
  }
}

function makeItalic() {
  document.execCommand( "italic" );
   if ( document.getElementById( "italic" ).isToggled ) {
    document.getElementById( "italic" )
    document.getElementById( "italic" ).isToggled = false;
  } else {
    document.getElementById( "italic" );
    document.getElementById( "italic" ).isToggled = true;
  }
}

function doUnderline() {
  document.execCommand( "underline" );
   if ( document.getElementById( "underline" ).isToggled ) {
    document.getElementById( "underline" )
    document.getElementById( "underline" ).isToggled = false;
  } else {
    document.getElementById( "underline" )
    document.getElementById( "underline" ).isToggled = true;
  }
}

function doAddImage() {
  var imageUrl = prompt( "Image URL:" );
  $(".imgPost").attr("src",imageUrl)
    //Subistituindo por uma função expecifica
  if (imageUrl != "") {
      $(".imgprin").css('background-image', 'url(' + imageUrl + ')');
      $(".form").css({position: "absolute",
                      top: 320,
                      width: "100%",
                      height: "50%"
                     });
  } else {
    alert( "You must set a URL!" );
  }
}

function justifyLeft() {
  document.execCommand( "justifyLeft" );
}

function justifyCenter() {
  document.execCommand( "justifyCenter" );
}

function justifyRight() {
  document.execCommand( "justifyRight" );
}


$(document).ready(function(){
    var font = ["Arial","sans-serif","Times New Roman","serif","Courier New","Comic Sans","cursive"];
    var i = 0;
    $(".color").change(function(){
      var color = $(".color").val();
      document.execCommand( "foreColor", false, color);
      });
    $("#fontUp").click(function(){
      document.execCommand("increaseFontSize");
    });
    $("#fontDown").click(function(){
      document.execCommand("decreaseFontSize");
    });
    $("#fontName").click(function(){
      document.execCommand("fontName", false, font[i]);
      $(".error").fadeIn(0).delay(500).fadeOut(0);
      $(".error").html(font[i]);                  
      if(font[i] == "cursive") i = -1;
      i++;
    });
    $("#justify").click(function(){
        document.execCommand("justifyFull");
    })
    $("#link").click(function(){
        var linkURL = prompt('Enter a URL:', 'http://www.');
        var sText = document.getSelection();
        document.execCommand('insertHTML', false, '<a href="' + linkURL + '" target="_blank">' + sText + '</a>');
    });
    $("#unlink").click(function(){
        document.execCommand("unLink");
    });
    var ver = 0;
    $(".edit").click(function(){
        if(ver == 0){
            $('.content').attr('contenteditable','true');
        ver = 1;
        }else{
            $('.content').attr('contenteditable','false');
                        ver = 0;
ver = 0;
ver = 0;
        }
        $("#toolbar").toggle();
    });
});
