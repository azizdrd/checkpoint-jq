var target = document.getElementById("ta");
function boldText(){
    if( target.style.fontWeight == "bolder" ) {
        target.style.fontWeight = "normal";
    } else {
        target.style.fontWeight = "bolder";
    }
}
function italicText(){
    if( target.style.fontStyle == "italic" ) {
        target.style.fontStyle = "normal";
    } else {
        target.style.fontStyle = "italic";
    }
}
function undrText(){
    if( target.style.textDecoration == "underline" ) {
        target.style.textDecoration = "none";
    } else {
        target.style.textDecoration = "underline";
    }
}
var selectSize=document.getElementById("size");
function changeSize(){
    target.style.fontSize=selectSize.value;
}
function changefont(){
    target.style.fontFamily=document.getElementById("fnt").value;
}
document.getElementById("bld").addEventListener("click", boldText);
document.getElementById("itlc").addEventListener("click", italicText);
document.getElementById("undr").addEventListener("click", undrText);
document.getElementById("size").addEventListener("change", changeSize);
document.getElementById("fnt").addEventListener("change", changefont);


$(".course1").hover(function(){
    $(".bntcourses").show();
    $(this).css("opacity","0.5");
    },function(){
    $(".bntcourses").hide();
    $(this).css("opacity","1")
    });

    $(".course2").hover(function(){
    $(".bntcourses1").show();
    $(this).css("opacity","0.5");
    },function(){
    $(".bntcourses1").hide();
    $(this).css("opacity","1")
    });

    $(".course3").hover(function(){
    $(".bntcourses2").show();
    $(this).css("opacity","0.5");
    },function(){
    $(".bntcourses2").hide();
    $(this).css("opacity","1")
    });

    $(".course4").hover(function(){
    $(".bntcourses3").show();
    $(this).css("opacity","0.5");
    },function(){
    $(".bntcourses3").hide();
    $(this).css("opacity","1")
    });

    $(".course5").hover(function(){
    $(".bntcourses4").show();
    $(this).css("opacity","0.5");
    },function(){
    $(".bntcourses4").hide();
    $(this).css("opacity","1")
    });

    $(".course6").hover(function(){
    $(".bntcourses5").show();
    $(this).css("opacity","0.5");
    },function(){
    $(".bntcourses5").hide();
    $(this).css("opacity","1")
    });

    $(".course7").hover(function(){
    $(".bntcourses6").show();
    $(this).css("opacity","0.5");
    },function(){
    $(".bntcourses6").hide();
    $(this).css("opacity","1")
    });

    $(".course8").hover(function(){
    $(".bntcourses7").show();
    $(this).css("opacity","0.5");
    },function(){
    $(".bntcourses7").hide();
    $(this).css("opacity","1")
    });

    $(".course9").hover(function(){
    $(".bntcourses8").show();
    $(this).css("opacity","0.5");
    },function(){
    $(".bntcourses8").hide();
    $(this).css("opacity","1")
    });