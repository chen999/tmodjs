var countHtml=0;
$(document).ready(function(){
	var tab = $(".dHtml");
	for(var i=0;i<tab.length;i++){
		tab[i].style.zoom="0.7";
	}
	$("#yijieshou").mouseover(function(){
		$(".zzd_timebg").css("display","block");
	});
	$("#yijieshou").mouseout(function(){
		$(".zzd_timebg").css("display","none");
	});

//		$(".rightli").hide();
	$("#li1").show();
	$(".con_left #bclul #1").addClass("bclliclick")
	$(".con_left #bclul #1").find('a').css('color','#fff');
	$(".con_left #bclul #1").find(".bclman").addClass("bclman2")
	$('.con_left #bclul li').click(function(){
		$(".con_left #bclul li").removeClass("bclliclick")
		$('.con_left #bclul li a').css('color','#3598d9');
		$(".con_left #bclul li").find(".bclman").removeClass("bclman2");
		$(this).addClass("bclliclick")
		$(this).find('a').css('color','#fff');
		$(this).find(".bclman").addClass("bclman2");
		$('.rightli').hide();
		$('#li'+this.id).show();
		console.log($('#li'+this.id));
		countHtml=parseInt(this.id)-1;
	});
})
function newHtml(){
	window.open("/check/chakanbclHtml.htm?id="+$("#apply").val()+"&count="+countHtml);  
}