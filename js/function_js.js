var year;
var month;
var week;
var dayWeek;
var day;
var hour = 12;
var minute = 59;
var second = 59;

function print(text)   { document.write(text); }
function println(text) { document.write("<br>" + text); }   

function bodyColor(){
    var col = prompt("Ввод цвета body по кодировке #0000 или английским названием!");
    $("body").css("background", col);
}
         
function userName(){
   var uName = prompt("Как вас звать?");
    if(uName){
        $("#hdOne").text("Приветствую, " + uName + "!");
    }else{ 
        $("#hdOne").text("ВВЕСТИ ИМЯ");
    }
}     
         
function hideMenu(){
    $("#headMenu").hide(800, function(){
        $("#hide").hide(300);
        $("#show").show(300);
    });
}
         
function showMenu(){
    $("#headMenu").show(800, function(){
        $("#show").hide(300);
        $("#hide").show(300);
    });
}

function funcBefore(){ $("#info").text("Ожидание данных..."); }

function funcSuccess(data){ $("#info").text(data); }

function dataPHP (){
        $.ajax({
            url: "echo.php",
            type: "POST",
            data: ({name: "admin", number: 5}),
            dataType: "html",
            beforeSend: funcBefore,
            success: funcSuccess
        });
}
         
$(document).ready(function(){
    showMenu();
    
    $("#hdOne").show(400);
    $("#hdTwo").show(600);
    $("#hdThr").show(800);
    
    $("#hdThr").text(hour+":"+minute+":"+second);
    
    $("#hide").bind("click", hideMenu);
    $("#show").bind("click", showMenu);
    
    $(".part1").bind("click", bodyColor);
    $(".part3").bind("click", dataPHP);
});
