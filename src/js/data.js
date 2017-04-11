$(document).ready(function(){
	var height=$(window.parent).height();
	$(".databg").css("height",height);
	$("#closediv").css("height",height);
	$("#dataimg1").click(function(){
		$("#databg1").css("right","0");
		/*$("body").css("overflow","hidden");*/
		$("#closediv").show();
	})
	$("#dataimg2").click(function(){
		$("#databg2").css("right","0");
		/*$("body").css("overflow","hidden");*/
		$("#closediv").show();
	})
	$("#dataimg3").click(function(){
		$("#databg3").css("right","0");
		/*$("body").css("overflow","hidden");*/
		$("#closediv").show();
	})
	$("#dataimg4").click(function(){
		$("#databg4").css("right","0");
		$("body").css("overflow","hidden");
		$("#closediv").show();
	})
	$("#dataimg5").click(function(){
		$("#databg5").css("right","0");
		/*$("body").css("overflow","hidden");*/
		$("#closediv").show();
	})
	$("#dataimg6").click(function(){
		$("#databg6").css("right","0");
		/*$("body").css("overflow","hidden");*/
		$("#closediv").show();
	})
	$(".close").click(function(){
		$(this).parent().parent().css("right","-80%");
		$("body").css("overflow","auto");
	})
	$("#closediv").click(function(){
		$(this).hide();
		$(".databg").css("right","-80%");
		$("body").css("overflow","auto");
	})
	
})
var label1,label2;
var labels = new Array();
var datt = new Array();
var datt2 = new Array();
$("#sheetdata").find("thead").find("tr:first-child").each(function(){
	label1 = $(this).children("th:nth-child(2)").html();
	label2 = $(this).children("th:nth-child(3)").html();
})
$("#sheetdata").find("tbody").find("tr").each(function(){
	labels.push($(this).children("td:nth-child(1)").html());
	datt.push($(this).children("td:nth-child(2)").html());
	datt2.push($(this).children("td:nth-child(3)").html());
})
/*图表*/
var lineChartData = {
	labels: labels,
	datasets : [
		{
			label: label2,
			fillColor : "rgba(170,170,170,0.2)",
			strokeColor : "rgba(170,170,170,1)",
			pointColor : "rgba(170,170,170,1)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(220,220,220,1)",
			data : datt2
		},{
			label: label1,
			fillColor : "rgba(236,120,121,0.2)",
			strokeColor : "rgba(236,120,121,1)",
			pointColor : "rgba(236,120,121,1)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(220,220,220,1)",
			data : datt
		}
	]
}
var datt6 = new Array();
var labels2 = new Array();
$("#sheetdata6").find("tbody").find("tr").each(function(){
	labels2.push($(this).children("td:nth-child(1)").html());
	datt6.push($(this).children("td:nth-child(2)").html());
})
var barChartData = {
	labels: labels2,
	datasets: [{
		fillColor: "rgba(161,205,247,0.5)",
		strokeColor: "rgba(161,205,247,0.8)",
		highlightFill: "rgba(161,205,247,0.75)",
		highlightStroke: "rgba(161,205,247,1)",
		scaleFontSize:10,
		scaleFontColor : "#666",
		data: datt6
	}]
}
var  inNum =$('#inNum').text();
var  outNum= $('#outNum').text();
var inIng= $('#inIng').text();
var inSuccess=$('#inSuccess').text();
var inFalse=$('#inFalse').text();
var inIng1=$('#inIng1').text();
var inSuccess1=$('#inSuccess1').text();
var inFalse1=$('#inFalse1').text();
var smNum=$('#smNum').text();
var sxNum=$('#sxNum').text();
var a=$('#1').text();
var s=$('#2').text();
var d=$('#3').text();
var f=$('#4').text();
var g=$('#5').text();
var h=$('#6').text();
var j=$('#7').text();
var pieData = [{
	value: inNum,
	color: "#ec7879",
	highlight: "#FF5A5E",
	label: "转入量"
}, {
	value: outNum,
	color: "#aaa",
	highlight: "#5AD3D1",
	label: "转出量"
}];
var pieData4 = [{
	value: inIng,
	color: "#fd7d27",
	highlight: "#FF5A5E",
	label: "进行中"
}, {
	value: inSuccess,
	color: "#89cf55",
	highlight: "#5AD3D1",
	label: "成功"
}, {
	value: inFalse,
	color: "#aaa",
	highlight: "#A8B3C5",
	label: "失败"
}];
var pieData5 = [{
	value: inIng1,
	color: "#fd7d27",
	highlight: "#FF5A5E",
	label: "进行中"
}, {
	value: inSuccess1,
	color: "#89cf55",
	highlight: "#5AD3D1",
	label: "成功"
}, {
	value: inFalse1,
	color: "#aaa",
	highlight: "#A8B3C5",
	label: "失败"
}];
var pieData6 = [{
	value: smNum,
	color: "#0193de",
	highlight: "#FF5A5E",
	label: "三门转入量"
}, {
	value: sxNum,
	color: "#30a58a",
	highlight: "#5AD3D1",
	label: "绍兴转入量"
}];
var pieData7 = [{
	value: a,
	color: "#79b5eb",
	highlight: "#FF5A5E",
	label: "待处理"
}, {
	value: s,
	color: "#35bcb7",
	highlight: "#5AD3D1",
	label: "已待床"
}, {
	value: d,
	color: "#ec7879",
	highlight: "#A8B3C5",
	label: "拒绝申请"
}, {
	value: f,
	color: "#fd7d27",
	highlight: "#616774",
	label: "预收住"
}, {
	value: g,
	color: "#89cf55",
	highlight: "#616774",
	label: "办理入院"
}, {
	value: h,
	color: "#aaa",
	highlight: "#616774",
	label: "取消入院"
}, {
	value: j,
	color: "#aaa",
	highlight: "#616774",
	label: "已出院"
}];


$(function(){
/*	var ctx = document.getElementById("canvas").getContext("2d");
	window.myBar = new Chart(ctx).Bar(barChartData, {
		responsive: true
	});
	var ctx2 = document.getElementById("canvas2").getContext("2d");
	window.myLine = new Chart(ctx2).Line(lineChartData, {
		responsive: true
	});
	var ctx3 = document.getElementById("canvas3").getContext("2d");
	window.myPie = new Chart(ctx3).Pie(pieData);
	var ctx4 = document.getElementById("canvas4").getContext("2d");
	window.myPie = new Chart(ctx4).Pie(pieData4);
	var ctx5 = document.getElementById("canvas5").getContext("2d");
	window.myPie = new Chart(ctx5).Pie(pieData5);
	var ctx6 = document.getElementById("canvas6").getContext("2d");
	window.myPie = new Chart(ctx6).Pie(pieData6);
	
	var ctx7 = document.getElementById("canvas7").getContext("2d");
	window.myDoughnut = new Chart(ctx7).Doughnut(pieData7);*/
})
function changePageMedicalRecord(iframeId){
	$(".bclhfy").find("span").eq(0).click(function(){
		var src = $("#"+iframeId, window.parent.document).attr("src");
		var no = $(this).next().text();
		no = parseInt(no) -1;
		if(no<1){
			return false;
		}
		if(src.indexOf("pageNo")<0){
			src = src+"&pageNo="+no;
		}else{
			src = src.substring(0,src.indexOf("pageNo"))+"&pageNo="+no;
		}
		$("#"+iframeId, window.parent.document).attr("src",src)
	})
		$(".bclhfy").find("span").eq(3).click(function(){
		var src = $("#"+iframeId, window.parent.document).attr("src");
		var noTotal = $(this).prev().text();
		var no = $(this).prev().prev().text();
		no = parseInt(no)+1;
		if(parseInt(no)>parseInt(noTotal)){
			return false;
		}
		if(src.indexOf("pageNo")<0){
			src = src+"&pageNo="+no;
		}else{
			src = src.substring(0,src.indexOf("pageNo"))+"&pageNo="+no;
		}
		$("#"+iframeId, window.parent.document).attr("src",src)
	})
	var length = $(".bclhfy").find("span").eq(2).text().length;
	var widthBclhfy = 37+parseInt(length)*9;
	$(".bclhfy").css("width",widthBclhfy);
}