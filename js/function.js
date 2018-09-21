$(window).on('load',function(){
    var $predloader = $('#predloader');
    $predloader.delay(1650).fadeOut('slow');
});

$(document).ready(function(){   
    $(".loader").circularProgress({
        color: "#25ffe4",
        line_width: 12,
        height: "350px",
        width: "350px",
        percent: 0,
    }).circularProgress('animate', 100, 1500);
    
    topMenu("#topMenu_1",".headerMenu_1",1);
    topMenu("#topMenu_2",".headerMenu_2",2);
    topMenu("#topMenu_3",".headerMenu_3",3);
    topMenu("#topMenu_4",".headerMenu_4",4);
    topMenu("#topMenu_5",".headerMenu_5",5);
    topMenu("#topMenu_6",".headerMenu_6",6);   
    
    menu("#menu_1","#menu_1Content",1);
    menu("#menu_2","#menu_2Content",2);
    menu("#menu_3","#menu_3Content",3);
    menu("#menu_4","#menu_4Content",4);
    menu("#menu_5","#menu_5Content",5);
    menu("#menu_6","#menu_6Content",6);
});

    function topMenu(thisName,forName,num){
        $(thisName).bind("click",function(){ for(var i=1;i<=6;i++){if(i!=num){
        if($(".headerMenu_"+i)!=""){ $(".headerMenu_"+i).slideUp('slow');} $(forName).slideDown('slow');}}});
    }

    function menu(thisName,forName,num){
        $(thisName).bind("click",function(){ for(var i=1;i<=6;i++){if(i!=num){
        if($("#menu_"+i+"Content")!=""){ $("#menu_"+i+"Content").slideUp('slow');} $(forName).slideDown('slow');}}});
    }