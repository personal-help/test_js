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
    
    
    $("#topMenu_1").bind("click",function(){ for(var i=1;i<=6;i++){if(i!=1){
        if($(".headerMenu_"+i)!=""){ $(".headerMenu_"+i).slideUp('slow');} $(".headerMenu_1").slideDown('slow');}}});
    
    $("#topMenu_2").bind("click",function(){ for(var i=1;i<=6;i++){if(i!=2){
        if($(".headerMenu_"+i)!=""){ $(".headerMenu_"+i).slideUp('slow');} $(".headerMenu_2").slideDown('slow');}}});
    
    $("#topMenu_3").bind("click",function(){ for(var i=1;i<=6;i++){if(i!=3){
        if($(".headerMenu_"+i)!=""){ $(".headerMenu_"+i).slideUp('slow');} $(".headerMenu_3").slideDown('slow');}}});
    
    $("#topMenu_4").bind("click",function(){ for(var i=1;i<=6;i++){if(i!=4){
        if($(".headerMenu_"+i)!=""){ $(".headerMenu_"+i).slideUp('slow');} $(".headerMenu_4").slideDown('slow');}}});
    
    $("#topMenu_5").bind("click",function(){ for(var i=1;i<=6;i++){if(i!=5){
        if($(".headerMenu_"+i)!=""){ $(".headerMenu_"+i).slideUp('slow');} $(".headerMenu_5").slideDown('slow');}}});
    
    $("#topMenu_6").bind("click",function(){ for(var i=1;i<=6;i++){if(i!=6){
        if($(".headerMenu_"+i)!=""){ $(".headerMenu_"+i).slideUp('slow');} $(".headerMenu_6").slideDown('slow');}}});
    
    
    
    
    
    $("#menu_1").bind("click",function(){ for(var i=1;i<=6;i++){if(i!=1){
        if($("#menu_"+i+"Content")!=""){ $("#menu_"+i+"Content").slideUp('slow');} $("#menu_1Content").slideDown('slow');}}});
    
    $("#menu_2").bind("click",function(){ for(var i=1;i<=6;i++){if(i!=2){
        if($("#menu_"+i+"Content")!=""){ $("#menu_"+i+"Content").slideUp('slow');} $("#menu_2Content").slideDown('slow');}}});
    
    $("#menu_3").bind("click",function(){ for(var i=1;i<=6;i++){if(i!=3){
        if($("#menu_"+i+"Content")!=""){ $("#menu_"+i+"Content").slideUp('slow');} $("#menu_3Content").slideDown('slow');}}});
    
    $("#menu_4").bind("click",function(){ for(var i=1;i<=6;i++){if(i!=4){
        if($("#menu_"+i+"Content")!=""){ $("#menu_"+i+"Content").slideUp('slow');} $("#menu_4Content").slideDown('slow');}}});
    
    $("#menu_5").bind("click",function(){ for(var i=1;i<=6;i++){if(i!=5){
        if($("#menu_"+i+"Content")!=""){ $("#menu_"+i+"Content").slideUp('slow');} $("#menu_5Content").slideDown('slow');}}});
    
    $("#menu_6").bind("click",function(){ for(var i=1;i<=6;i++){if(i!=6){
        if($("#menu_"+i+"Content")!=""){ $("#menu_"+i+"Content").slideUp('slow');} $("#menu_6Content").slideDown('slow');}}});
    
});

