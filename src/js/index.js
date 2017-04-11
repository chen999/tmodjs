$(document).ready(function(){
	 $("#ifr1", window.parent.document).contents().find("#3b").click();
	var d = new Date(),str = '';
	 str += d.getFullYear()+'-';
	 str  += d.getMonth() + 1+'-';
	 str  += d.getDate();
$('#csTime').datetimepicker({		
    lang:'ch',
    format:'Y-m-d',
    formatDate:'Y-m-d',
    timepicker:false,
	maxDate: str
}
);

$('#livingTime').datetimepicker({		
    lang:'ch',
    format:'Y-m-d',
    formatDate:'Y-m-d',
    timepicker:false,
	minDate: str
}
);

$('#admissionTime').datetimepicker({		
    lang:'ch',
    format:'Y-m-d H:m:s',
    formatDate:'Y-m-d H:m:s',
}
);
$('#dischargeTime').datetimepicker({		
    lang:'ch',
    format:'Y-m-d H:m:s',
    formatDate:'Y-m-d H:m:s',
}
);
function submitByEnter(e) {
	var id=$("#getcheckhId").val();
	 e = e || window.event;
	 var key = e ? (e.charCode || e.keyCode) : 0;
	 if(key == 13) {
	  //alert('Enter key pressed!');
	  getPatientInfo(id);  //这儿是你的提交函数
	 }
	}

	function listen() {
	var id=$("#getcheckhId").val();
	var aa = document.getElementById('pId');
	 try{
	   aa.addEventListener('keyup', submitByEnter, true);
	 } catch(ex) {
	   aa.attachEvent('onkeyup', submitByEnter);
	 }
	}
});