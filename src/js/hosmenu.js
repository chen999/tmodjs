window.onload = myfun;

function myfun() {
	var other_applyId = $('#other_applyId').val();
	var other_inout = $('#other_inout').val();
	var url ="/apply/look.htm?applyId="+other_applyId+"&inOut="+other_inout+"&pageNo=&pageSize=&currentNo=$d";
	if(other_inout == '1') {
		document.getElementById("1").click();console.log(parent.document.getElementById("content"));
		setTimeout(function(){
			$("#content", parent.document).attr("src", url);
			
		},500);; console.log(parent.document.getElementById("content"));
		readApply();
	} else if(other_inout == '2') {
		document.getElementById("2").click(); 
		setTimeout(function(){
			$("#content", parent.document).attr("src", url);
			
		},500);
		/* parent.document.getElementById("content").src=url; */ console.log(parent.document.getElementById("content"));
	}
	
	/* if (other_applyId != "" && other_inout != "") {
		alert(other_inout);
	} */
	permission();
}

function clickCss(v){
	$('#1').removeClass("topic-hover");
	$('#2').removeClass("topic-hover");
	$('#3').removeClass("topic-hover");
	$('#4').removeClass("topic-hover");
	$('#5').removeClass("topic-hover");
	$('.topicimg'+1).css('background','url(../images/leftMenu/topicbg0'+1+'.png) no-repeat');
	$('.topicimg'+2).css('background','url(../images/leftMenu/topicbg0'+2+'.png) no-repeat');
	$('.topicimg'+3).css('background','url(../images/leftMenu/topicbg0'+3+'.png) no-repeat');
	$('.topicimg'+4).css('background','url(../images/leftMenu/topicbg0'+4+'.png) no-repeat');
	$('.topicimg'+5).css('background','url(../images/leftMenu/topicbg0'+5+'.png) no-repeat');
	$('.z'+1).css('color','#333');
	$('.z'+2).css('color','#333');
	$('.z'+3).css('color','#333');
	$('.z'+4).css('color','#333');
	$('.z'+5).css('color','#333');
	$("#"+v).addClass("litopic topic-hover");
	var i=v;
	mouse=i;
	$('.topicimg'+i).css('background','url(../images/leftMenu/topicbg1'+i+'.png) no-repeat');
	$('.z'+i).css('color','#fff');
}


function gotoUrlNew(v,url,target){
	$.ajax({
		type : "get",
		url : '/login/error.htm',
		dataType : "text",
		success : function(data) {
			$('#1').removeClass("topic-hover");
			$('#2').removeClass("topic-hover");
			$('#3').removeClass("topic-hover");
			$('#4').removeClass("topic-hover");
			$('#5').removeClass("topic-hover");
			$('.topicimg'+1).css('background','url(../images/leftMenu/topicbg0'+1+'.png) no-repeat');
			$('.topicimg'+2).css('background','url(../images/leftMenu/topicbg0'+2+'.png) no-repeat');
			$('.topicimg'+3).css('background','url(../images/leftMenu/topicbg0'+3+'.png) no-repeat');
			$('.topicimg'+4).css('background','url(../images/leftMenu/topicbg0'+4+'.png) no-repeat');
			$('.topicimg'+5).css('background','url(../images/leftMenu/topicbg0'+5+'.png) no-repeat');
			$('.z'+1).css('color','#333');
			$('.z'+2).css('color','#333');
			$('.z'+3).css('color','#333');
			$('.z'+4).css('color','#333');
			$('.z'+5).css('color','#333');
			v.className="litopic topic-hover";
			var i=v.id;
			mouse=i;
			$('.topicimg'+i).css('background','url(../images/leftMenu/topicbg1'+i+'.png) no-repeat');
			$('.z'+i).css('color','#fff');
			var obj = data;
			if(obj==0){
				$("#"+target,parent.document).attr("src",url);
			}else{
				gotoPtUrl(window,$("#url").val());
			}
		
		},
		error : function() {
			gotoPtUrl(window,$("#url").val())
		}
	});
}
$(document).ready(function(){
	var myli = document.getElementById("1");
	$('#topic2').hide();
	$('#topic1').show();
});

function getTopic2(obj){
	obj.className="litopic topic-hover";
	var i=obj.id;
	$('.z'+i).css('color','#fff');
}
function outTopic2(obj){
	obj.className="litopic";
	var i=obj.id;
	$('.z'+i).css('color','#333');
}
function shpic(){
	var i=0;
	i++;
	
}
function readApply(){
	$.ajax({
		type : "get",
		url : '/hospitals/read.htm',
		dataType : "text",
		success : function(data) {
			var obj =eval("("+ data+")");
			$(".z1").text("本院转入"+obj.count);
		}
	});
}
function draft(){
	$.ajax({
		type : "get",
		url : '/hospitals/draft.htm',
		dataType : "text",
		success : function(data) {
			var obj =eval("("+ data+")");
			var t= $(".z2").text();
			$(".z2").text(t.substring(0,4)+obj.count);
		}
	});
}
function gotoPtUrl(obj, ptUrl){
	if(obj == obj.parent){
		obj.location.href = ptUrl;
		return;
	} else {
		return gotoPtUrl(obj.parent, ptUrl);
	}
}
function read(){
	$.ajax({
		type : "get",
		url : '/hospitals/read.htm',
		dataType : "text",
		success : function(data) {
			var obj =eval("("+ data+")");
			$(".z2").text("本院转入"+obj.count);
		}
	});
}
var myDate = new Date();
var year = myDate.getFullYear();
var time = "Copyright © "+year+".<br>杭州卓健信息科技有限公司";
$("#Copyright").html(time);