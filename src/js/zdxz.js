$(function () {
    var s = $(window).height();
    $(".g-login-bodyall").css("height", 6 * s);
    $("[class^=g-login-bodynr_]").css("height", s);
    $(".g-login-nrbox").css("height", s - 80);

    $("[id^=num_]").bind("click", function () {
        var index = this.id.split("num_")[1];
        $(".g-login-bodyall").css("top", -(index - 1) * s);
        $("[id^=num_]").removeClass("on");
        $("#num_" + index).addClass("on");
        $("#page").val(index);
        changepage();
    })
    $("[id^=top_]").bind("click", function () {
        var index = this.id.split("top_")[1];
        $(".g-login-bodyall").css("top", -(index - 1) * s);
        $("[id^=num_]").removeClass("on");
        $("#num_" + index).addClass("on");
        $("#page").val(index);
        changepage();
    })

    $("#hoverDiv").hover(function () {
        $("#top_6").removeClass("m-login-headabs_div").addClass("hoverStyle_headabs_div");

        var $div = $("#applyAddBox");
        t = setInterval(function () {
            $div.fadeIn(300)
        }, 300);
    }, function () {
        clearInterval(t);
    });

    $("#hoverDiv").bind("mouseleave", function () {
        $("#applyAddBox").hide();
        $("#top_6").removeClass("hoverStyle_headabs_div").addClass("m-login-headabs_div");
    });

    var swh = $(".swiper-slide").css("width").split("px")[0] * 2 / 3;
    $(".swiper-container").css("height", swh);
    $(window).bind('mousewheel', function (event, delta) {
        var dir = delta > 0 ? 'Up' : 'Down';
        var index = $("#page").val();
        if (dir == "Up") {
            if (index > 1) {
                index--;
                $(".g-login-bodyall").css("top", -(index - 1) * s);
                $("[id^=num_]").removeClass("on");
                $("#num_" + index).addClass("on");
                $("#page").val(index);
                changepage();
            }
        } else if (dir == "Down") {
            if (index < 6) {
                index++;
                $(".g-login-bodyall").css("top", -(index - 1) * s);
                $("[id^=num_]").removeClass("on");
                $("#num_" + index).addClass("on");
                $("#page").val(index);
                changepage();
            }
        }
    });
})

function changepage(){
	var index = $("#page").val();
	$(".g-login-bodynr_"+index).find(".g-login-nrbox").addClass("action");
	$(".g-login-bodynr_"+index).siblings().find(".g-login-nrbox").removeClass("action");
	if(index==2||index==4){
		$("#pagenum").addClass("pagestyle");
		$("#pagenum").removeClass("pageblackstyle")
	}else if(index==3){
		$("#pagenum").addClass("pageblackstyle");
	}else{
		$("#pagenum").removeClass("pagestyle");
		$("#pagenum").removeClass("pageblackstyle")
	}
	
	if(index==3){
		$("#header").addClass("headstyle_2");
		$("#header").removeClass("headstyle_3");
	}else if(index==5){
		$("#header").addClass("headstyle_3");
		$("#header").removeClass("headstyle_2");
	}else{
		$("#header").removeClass("headstyle_2");
		$("#header").removeClass("headstyle_3");
	}
	
	if(index>=2&&index<=5){
		$("#top_"+index).addClass("current");
		$("#top_"+index).siblings().removeClass("current");
	}else{
		$("[id^=top_]").removeClass("current");
	}
	
	if(index==5){
		swiper.startAutoplay();
	}else{
		swiper.stopAutoplay();
	}
}
function qiepian(id){
	$("#qiepian_"+id).addClass("current");
	$("#qiepian_"+id).siblings().removeClass("current");
	if(id==1){
		$(".page3_bottom").css("opacity","1");
		$("#page3img_1").removeClass("page3_opacity");
		$("#page3img_1").siblings().addClass("page3_opacity");
	}else{
		$(".page3_bottom").css("opacity","0");
		$("#page3img_2").removeClass("page3_opacity");
		$("#page3img_2").siblings().addClass("page3_opacity");
	}
}
function getqiepian(id){
	if(id==1){
		$("#page3img_1").removeClass("page3_opacity");
		$("#page3img_1").siblings().addClass("page3_opacity");
	}else if(id==2){
		$("#page3img_3").removeClass("page3_opacity");
		$("#page3img_3").siblings().addClass("page3_opacity");
	}else{
		$("#page3img_4").removeClass("page3_opacity");
		$("#page3img_4").siblings().addClass("page3_opacity");
	}
}
