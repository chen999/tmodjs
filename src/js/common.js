function search(id){
	window.location.href="search.htm?key="+$("#"+id).val();
	
}

function searchAu(id){
	window.location.href="searchAuditDoctor.htm?key="+$("#"+id).val();
	
}
var mouse=0;
function getTopic(obj){
	obj.className="litopic topic-hover";
	var i=obj.id;
	$('.topicimg'+i).css('background','url(/gulptech/src/images/leftMenu/topicbg1'+i+'.png) no-repeat');
	$('.z'+i).css('color','#fff');
}
function outTopic(obj){
	var i=obj.id;
	if(mouse!=i){
	obj.className="litopic";
	$('.topicimg'+i).css('background','url(/gulptech/src/images/leftMenu/topicbg0'+i+'.png) no-repeat');
	$('.z'+i).css('color','#333');
	}
}

function gotoUr1(url,target){
	$.ajax({
		type : "get",
		url : '/login/error.htm',
		dataType : "text",
		success : function(data) {
			var obj = data;
			if(obj==0){
				$("#"+target,parent.document).attr("src",url);
				/*$("#ifr1").attr('src','/transfer/iframe.htm');*/
				$('#ifr1').contents().find('#topic1').hide();
				$('#ifr1').contents().find('#topic2').show();
			}else{
				window.parent.location.href="/login/index.htm";
			}

		},
		error : function() {
			alert("失败");
		}
	});
}
function gotoUrl(url,target){
	console.log(url);
	$.ajax({
		type : "get",
		url : '/login/error.htm',
		dataType : "text",
		success : function(data) {
			var obj = data;
			if(obj==0){
				$("#"+target,parent.document).attr("src",url);
			}else{
				window.parent.location.href="/login/index.htm";
			}

		},
		error : function() {
			alert("失败");
		}
	});
}

