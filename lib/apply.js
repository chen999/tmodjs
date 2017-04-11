function getdepartNameO(obj) {
	var value = obj.options[obj.options.selectedIndex].text;
	$('#departmentOut').attr("value", value);
}
function getdepartNameI(obj) {
	var value = obj.options[obj.options.selectedIndex].text;
	$('#departmentIn').attr("value", value);
	$.ajax({
		url : "/apply/getgroup.htm",
		data : "id=" + obj.options[obj.options.selectedIndex].value,
		type : "post",
		success : function(data) {
			var obj = eval("("+data+")");
			var list = obj.list;
			var group = $("select[name=groupId]")[0];
			group.options.length=0;
			var obj=list[0];
			
			/*if(list.length==0){*/
				$('#medicalGroup').attr("value","未选组医疗组");
			/*}else{
				$('#medicalGroup').attr("value",obj.group);
			}*/
				var varItem = new Option();
			for (var i = 0; i < list.length; i++) {
				var o = list[i];
				varItem = new Option(o.group, o.group_id);      
				group.options.add(varItem);  
			}
		}
	});
}

function getdepartNameG(obj) {
	var value = obj.options[obj.options.selectedIndex].text;
	if(value == '未选组医疗组') {
		$('#medicalGroup').attr("value", "未选组医疗组");
	} else {
		$('#medicalGroup').attr("value", value);
	}

}
var licount = 0;
function change() {
	var selectedvalue = $("input[name='isolationRequirements']:checked").val();
	if (parseInt(new Number(selectedvalue)) == 1) {
		$('#gelilu li ').attr("disabled", false);
		$('#qita').attr("disabled", false);
		licount = 1;
	} else {
		li();
		$('#require').attr("value", "");
		$('#qita').attr("disabled", "disabled");
		$('#qita').attr("value", "");
		$('#gelilu li ').attr("disabled", "disabled");
		licount = 0;
	}
};
$(function() {
	change();
});

$('#gelilu li ').click(function() {
	if (licount == 1) {
		li();
		$(this).addClass("geli gclick");
		$('#qita').attr("value", "");
		$('#qita').removeClass('geli gclick');
		var value = $(this).text();
		$('#require').attr("value", value);
	}
});

function li() {
	$('#lia').removeClass('geli gclick');
	$('#lib').removeClass('geli gclick');
	$('#lic').removeClass('geli gclick');
	$('#lia').addClass('geli');
	$('#lib').addClass('geli');
	$('#lic').addClass('geli');
};

function tijiao() {
	var isolationRequirements = $(
			'input:radio[name="isolationRequirements"]:checked').val();
	var h = $("#hospitalInId").find("option:selected").text();
	$("#hospitalIn").attr("value",h);
	h = $("#departmentInId").find("option:selected").text();
	$("#departmentIn").attr("value",h);
	h = $("#departmentOutId").find("option:selected").text();
	$("#departmentOut").attr("value",h);
	var name = $('#name').val();
	if (name == '') {
		alert("病人姓名不能为空");
		return false;
	}
	var age = $('#age').val();
	if (age == '') {
		alert("病人年龄不能为空");
		return false;
	}
	var idCard = $('#idCard').val();
	if (idCard == '') {
		alert("身份证不能为空");
		return false;
	}
	var hospitalizationId = $('#hospitalizationId').val();
	if (hospitalizationId == '') {
		alert("住院号不能为空");
		return false;
	}
	var address = $('#address').val();
	if (address == '') {
		alert("病人地址不能为空");
		return false;
	}
	var phone = $('#phone').val();
	if (phone == '') {
		alert("病人电话不能为空");
		return false;
	}

	var mainTell = $('#mainTell').val();
	if (mainTell == '') {
		alert("主诉不能为空");
		return false;
	}
	var mainDiagnosis = $('#mainDiagnosis').val();
	if (mainDiagnosis == '') {
		alert("主要诊断不能为空");
		return false;
	}
	var vitalSignsT = $('#vitalSignsT').val();
	if (vitalSignsT == '') {
		alert("生命体征不能为空");
		return false;
	}
	var vitalSignsP = $('#vitalSignsP').val();
	if (vitalSignsP == '') {
		alert("生命体征不能为空");
		return false;
	}
	var vitalSignsR = $('#vitalSignsR').val();
	if (vitalSignsR == '') {
		alert("生命体征不能为空");
		return false;
	}
	var vitalSignsB = $('#vitalSignsB').val();
	if (vitalSignsB == '') {
		alert("生命体征不能为空");
		return false;
	}
	var illnessAndReason = $('#illnessAndReason').val();
	if (illnessAndReason == '') {
		alert("病情简要介绍及转出理由不能为空");
		return false;
	}
	var doctorName = $('#doctorName').val();
	if (doctorName == '') {
		alert("医生姓名不能为空");
		return false;
	}
	var doctorPhone = $('#doctorPhone').val();
	if (doctorPhone == '') {
		alert("医生电话不能为空");
		return false;
	}
	var applyTime = $('#applyTime').val();
	if (applyTime == '') {
		alert("申请时间不能为空");
		return false;
	}

	var advanceTime = $('#advanceTime').val();
	if (advanceTime == '') {
		alert("预计住院天数不能为空");
		return false;
	}
	var livingTime = $('#livingTime').val();
	if (livingTime == '') {
		alert("申请入住时间不能为空");
		return false;
	}
	var backGroupColor = $("#xxtijiao").css("background-color");
//	$('#formId').submit();
	$.ajax({
		   type: "POST",
		   url:"/apply/update.htm",
		   data:$('#formId').serialize(),// 要提交的表单
		    beforeSend: function () {
		        // 禁用按钮防止重复提交
		        $("#xxtijiao").attr("disabled",true);
		        $("#xxtijiao").css("background-color","#C1E0F3");
		        $("#xxtijiao").attr("value","提交中...");
		    },
		   success: function(msg) {
			   var obj = eval("(" + msg + ")");
               var retCode = obj.ret_code;
               var retInfor = obj.ret_infor;
               if (retCode == 0) {
            	   $("#ifr1", window.parent.document).contents().find("#2").click();
               } else {
            	   alert(retInfor);
               }
		   },
		    complete: function () {
		        $("#xxtijiao").removeAttr("disabled");
		        $("#xxtijiao").css("background-color",backGroupColor);
		        $("#xxtijiao").attr("value","确认并提交");
		    }
		});
}

function protection(obj) {
	var gId = $('#costTypeId').val();
	var value = obj.options[obj.options.selectedIndex].text;
	$('#medicalGroup').attr("value", value);
	$.ajax({
		type : "post",
		url : '/transferCheck/protection.htm',
		data : "id=" + gId,
		dataType : "text",
		success : function(data) {
			var obj = eval("(" + data + ")");
			var list = obj.list;
			$('#feeType').empty();
			$(list).each(
					function(index) {
						var val = list[index];
						$('#feeType').append(
								"<option  value=" + val.id + " >"
										+ val.towProtection + "</option>")

					});
		}
	});
}

function checkRad(v) {
	$('#' + v).attr("checked", true);
}

/* 刷新父页面 */
function myrefresh() {
	parent.location.reload();
}

function onlynum(tt) {
	var v = tt.value;
	if (v.length > 11) {
		tt.value = v.substring(0, 11);
	}
	if (isNaN(tt.value)) {
		tt.value = "";

	}
}

function getTimeBe(v) {
	var applyTime = $('#time').val();
	var time = $('#' + v).val();
	if (applyTime != '') {
		var beginTime = time;
		var endTime = applyTime;
		var beginTimes = beginTime.substring(0, 10).split('-');
		var endTimes = endTime.substring(0, 10).split('-');
		beginTime = beginTimes[1] + '/' + beginTimes[2] + '/' + beginTimes[0]
				+ ' ' + beginTime.substring(10, 19);
		endTime = endTimes[1] + '/' + endTimes[2] + '/' + endTimes[0] + ' '
				+ endTime.substring(10, 19);
		var a = (Date.parse(endTime) - Date.parse(beginTime)) / 3600 / 1000;
		if (a < 0) {
			alert("出生日期错误!");
			$('#' + v).attr("value", "")
		} else if (a > 0) {
		} else if (a == 0) {
		} else {
			return 'exception'
		}
	}
}



function jixu(applyId) {
	$.ajax({
		   type: "get",
		   url:"/apply/update.htm?applyId=" + applyId,
		   success: function(msg) {
			   var obj = eval("(" + msg + ")");
               var retCode = obj.ret_code;
               var retInfor = obj.ret_infor;
               if (retCode == 0) {
            	   
               } else {
            	   alert(retInfor);
               }
		   },
		});
}
