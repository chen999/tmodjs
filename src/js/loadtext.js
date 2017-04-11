	function addtextimg(){
		$("#addtext").hide();
		$("#textin").show();
	}
	function textinout(){
			var str = $("#textin").val();
			if(str!==""){
				$("#addtext span").html(str);
				$("#addtext span").css("color","#333");
				supplement();
			}else{
				$("#addtext span").css("color","#ff7d0c");
				$("#addtext span").html("<span>请添加（选填）");
			}
			$("#textin").hide();
			$("#addtext").show();
	}
	function addtext1img(){
		$("#addtext1").hide();
		$("#textin1").show();
		
	}
	function textin1out(){
			var str = $("#textin1").val();
			if(str!==""){
				$("#addtext1 span").html(str);
				$("#addtext1 span").css("color","#333");
				supplement();
			}else{
				$("#addtext1 span").css("color","#ff7d0c");
				$("#addtext1 span").html("<span>请添加（选填）");
			}
			$("#textin1").hide();
			$("#addtext1").show();
	}
	function addtext2img(){
		$("body").unbind("click");
		$("#addtext2").hide();
		$("#textin2").show();
	}
	function textin2out(){
			var str = $("#textin2").val();
			if(str!==""){
				$("#addtext2 span").html(str);
				$("#addtext2 span").css("color","#333");
				supplement();
			}else{
				$("#addtext2 span").css("color","#ff7d0c");
				$("#addtext2 span").html("<span>请添加（选填）");
			}
			$("#textin2").hide();
			$("#addtext2").show();
	}
	function addtext3img(){
		$("#addtext3").hide();
		$("#textin3").show();
	}
	function textin3out(){
		$("body").click(function(){
			var str = $("#textin3").val();
			if(str!==""){
				$("#addtext3 span").html(str);
				$("#addtext3 span").css("color","#333");
				supplement();
			}else{
				$("#addtext3 span").css("color","#ff7d0c");
				$("#addtext3 span").html("<span>请添加（选填）");
			}
			$("#textin3").hide();
			$("#addtext3").show();
		})
	}
	function addtext4img(){
		$("#addtext4").hide();
		$("#textin4").show();
	}
	function textin4out(){
			var str = $("#textin4").val();
			if(str!==""){
				$("#addtext4 span").html(str);
				$("#addtext4 span").css("color","#333");
				supplement();
			}else{
				$("#addtext4 span").css("color","#ff7d0c");
				$("#addtext4 span").html("<span>请添加（选填）");
			}
			$("#textin4").hide();
			$("#addtext4").show();
	}
	function tsclose1(){
		$(".loadts").hide();
	}

/**
 * 转出下载pdf
 */
function loadPdf(v){
	$.ajax({
		   type: "POST",
		   url:"/word/downloadpdf.htm?typePdf="+v+"",
		   data:$('#formId').serialize(),// 要提交的表单
		   success: function(msg) {
			   var obj = eval("("+msg+")");
			   var url = obj.url;
			   var name = obj.fileName;
			   $('#loadA').attr("href",url);
			   document.getElementById("loadA").click();
			   $('#loadA').click();
		   }
		});
}
/**
 * 保存pdf单上的部分信息
 */
function supplement(){
	$.ajax({
		   type: "POST",
		   url:"/word/supplement.htm",
		   data:$('#formId').serialize(),// 要提交的表单
		   success: function(msg) {
		   }
		});
}
/**
 * 网页打印   调整web的样式
 */
function dayin(){
    if($('#spantext1').text()=='请添加（选填）'){
    	$('#spantext1').text("");
    }
    if($('#spantext2').text()=='请添加（选填）'){
    	$('#spantext2').text("");
    }
    if($('#spantext3').text()=='请添加（选填）'){
    	$('#spantext3').text("");
    }
    if($('#spantext4').text()=='请添加（选填）'){
    	$('#spantext4').text("");
    }
    if($('#spantext5').text()=='请添加（选填）'){
    	$('#spantext5').text("");
    }
    bdhtml=window.document.body.innerHTML;
    var htm="<boby style=\"width:120%\"><div class=\"zzd-topic1\">"+$('.zzd-topic1').html()+"</div>";
    htm=htm+"<div class=\"zzd-hos\">"+$('.zzd-hos').html()+"</div>";
    htm=htm+"<div class=\"zzdhoscon\">"+$('.zzdhoscon').html()+"</div></body>";
    htm=htm+"<link href=\"/css/sxzz/zzdload.css\" rel=\"stylesheet\" />";
    
    var str="<style>"+
    "@-moz-document url-prefix(){ .dayin1{padding-left: 100px;}}"+
    			".dayin1{"+
    			"margin-left: -13%;"+
    			"}";
    if($('#spantext1').text()=='请添加（选填）'){
    	str = str+".spantext1{"+
		"display: none"+
		"}";
    	}
    if($('#spantext2').text()=='请添加（选填）'){
    	str = str+".spantext2{"+
		"display: none"+
		"}";
    	}
    if($('#spantext3').text()=='请添加（选填）'){
    	str = str+".spantext3{"+
		"display: none"+
		"}";
    	}
    if($('#spantext4').text()=='请添加（选填）'){
    	str = str+".spantext4{"+
		"display: none"+
		"}";
    	}
    if($('#spantext5').text()=='请添加（选填）'){
    	str = str+".spantext5{"+
		"display: none"+
		"}";
    	}
    			str = str+".dayin2{"+
    			"margin-left: -2%;"+
    			"}"+
    			"@-moz-document url-prefix(){ .dayin2{padding-left: 20px;}}"+
    			".dayin3{"+
    			"margin-left: -9%"+
    			"}"+
    			".dayin4{"+
    			"display: none"+
    			"}"+
    			".dayin5{"+
    			"margin-left: -6%"+
    			"}"+
    			"</style>"
    			htm=htm+str;
    window.document.body.innerHTML=htm; 
    window.print();
    window.document.body.innerHTML=bdhtml;
}
//时间为空则不显示
function showBlock(cla,time){
	time.replace(/(^\s*)|(\s*$)/g, "");
	if(time!=""){
	$("."+cla).css("display", "block");
	$("."+cla).css("text-align","center");
	$("."+cla).text("");
	$("."+cla).text(time);
	}
}

//鼠标掠过进度条显示时间
$(document).ready(function() {
$(".tysq").mouseover(function() {
	var time=$(this).attr("time");
	$(".zzd_timebg").css("left", "160px");
	showBlock("zzd_timebg",time)
});
$(".sdsq").mouseover(function() {
	var time=$(this).attr("time");
	$(".zzd_timebg").css("left", "0");
	showBlock("zzd_timebg",time)
});
$(".zzd_san").mouseout(function() {
	$(".zzd_timebg").css("display", "none");
});
$("#jcd_1 #jujue").mouseover(function() {
	var time=$(this).attr("time");
	$(".jcd_timebg").css("display", "block");
	$(".zzd_timebg").css("text-align","center");
	$("#refuseTime").text("");
	$("#refuseTime").text(time);
});
$("#jcd_1 #jujue").mouseout(function() {
	$(".jcd_timebg").css("display", "none");
});
$(".ysz").mouseover(function() {
	var time=$(this).attr("time");
	$(".zzd_timebg").css("left", "320px");
	showBlock("zzd_timebg",time);
});
$(".qxry").mouseover(function() {
	var cancel = $("#cancelTime").text().replace(/(^\s*)|(\s*$)/g, "");
	if(cancel!=""){
	$(".jcd_timebg").css("display", "block");
	/*$(".jcd_timebg").css("left", "420px");*/
	}
});
$(".qxry").mouseout(function() {
	$(".jcd_timebg").css("display", "none");

});
$(".blry").mouseover(function() {
	var time=$(this).attr("time");
	$(".zzd_timebg").css("left", "480px");
	showBlock("zzd_timebg",time);
});
$(".weijieshou").mouseover(function() {
	var time=$(this).attr("time");
	$(".zzd_timebg").css("left", "320px");
	showBlock("zzd_timebg",time);
});
$(".ycy").mouseover(function() {
	var time=$(this).attr("time");
	$(".zzd_timebg").css("left", "620px");
	showBlock("zzd_timebg",time);
});
});
//检查患者电子信息是否还在加载中
function addAttribute(v){
	var id=v.id;
	var index =v.id.substring(id.length-1,id.length);
	$('#'+v.id).parent().attr("status",1);
	var count = $(".navspan_click").attr("tab");
	if(index=='1'){
		var clientHeight = $("#zzdIfra1").contents().find("body").height() + 50;
		$('#zzdIfra1').css("height",clientHeight);
	}
	if(index==count){
		$('#tool' + index).show();
		$('#tool8').hide();
		setTimeout(function(){
			var clientHeight = $("#zzdIfra"+index).contents().find("body").height()+50;
		    $('#zzdIfra'+index).height(clientHeight);
			}
		    ,0);
	}
}
//刷新做菜单栏的未读数量
function readApply(){
	$("#ifr1", window.parent.document).contents().find("#readButton").click();
}