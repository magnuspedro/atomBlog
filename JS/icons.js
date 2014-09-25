$(document).ready(function(){
    $(".createLi li").click(function(){
        var className = $(this).attr('class');
        $(".iconLi").attr("value", className);
    });
});