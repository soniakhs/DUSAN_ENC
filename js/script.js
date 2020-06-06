$(function () {
    $(".menu_wrap").hover(
        function () {
            $(".sub_back").stop().slideDown();
            $(".sub_menu").stop().slideDown();
        },
        function () {
            $(".sub_back").stop().slideUp();
            $(".sub_menu").stop().slideUp();
        }
    );
    var margin = 0;
    $("#slide_privious").on("click",function(){
       if(margin == 0){
           margin = -2400;
       }else{
           margin += 1200
       }
        $("#slide .slide_wrap").animate({
            marginLeft : margin + "px"
        });
    });
    $("#slide_next").on("click",function(){
       if(margin == -2400){
           margin = 0;
       }else{
           margin -= 1200
       }
        $("#slide .slide_wrap").animate({
            marginLeft : margin + "px"
        });
    });
    $("#business .img_box")
})
