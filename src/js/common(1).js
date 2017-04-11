function onlynum(tt) {
	var v = tt.value;
	if(v.length > 11) {
		tt.value = v.substring(0, 11);
	}
	if(isNaN(tt.value)) {
		tt.value = "";

	}
}

$(document).ready(
	function() {
		$("#xxbefore2").click(function() {
			$(this).parent().parent().hide();
			$(this).parent().parent().prev().show();
			$(".m-sqd_div3").removeClass("div3_xuan");
			$("#div2_2").addClass("div3_xuan");
			$("#topto").click();
			document.getElementById("topto").click();
		});
		$("#xxbefore3").click(function() {
			$(this).parent().parent().hide();
			$(this).parent().parent().prev().show();
			$(".m-sqd_div3").removeClass("div3_xuan");
			$("#div2_3").addClass("div3_xuan");
			$("#topto").click();
			document.getElementById("topto").click();
		});
		$("#autoDiv").click(function() {
			var h = $(document).height();
			var h1 = $(window).height();
			var h2 = $("#cxlr_tc").css("height");
			var top = [parseInt(h1) - parseInt(h2)] / 2;
			if(top > 0) {
				$("#cxlr_tc").css("top", top);
			} else {
				$("#cxlr_tc").css("top", "0");
			}
			$("#cxlr_pop").show();
		});
		$("#yes")
			.click(
				function() {
					var patientId = $('#pId').val();
					if(patientId == "") {
						$('#pId').addClass("checkinput");
						return false;
					}
					var backGroupColor = $("#yes").css("background-color");
					$
						.ajax({
							type: "post",
							url: '/check/info.htm',
							data: "&patientId=" +
								patientId,
							dataType: "text",
							beforeSend: function() {
								// 禁用按钮防止重复提交
								$("#yes")
									.css(
										"background-color",
										"#C1E0F3");
								$("#yes").attr(
									"disabled",
									true);
							},
							success: function(data) {
								var obj = eval("(" +
									data + ")");
								if(obj.R != '200') {
									$('#obj')
										.attr(
											"value",
											"");
									$('#pId')
										.addClass(
											"checkinput");
									$('#spanName')
										.html("");
									$('#spanSex').html(
										"");
									$('#spanMedical')
										.html("");
									$('#spanIdCard')
										.html("");
									alert("未查到信息");
									return false;
								}
								$("#cxlr_pop").hide();
								$("#luru").css(
									'display',
									'none');
								$("#hzxxym").css(
									'display',
									'block');
								$(".m-sqd_div3")
									.removeClass(
										"div3_xuan");
								$("#div2_2").addClass(
									"div3_xuan");
								$('#hisPatientId')
									.attr(
										"value",
										obj.info2.patient_id);
								$('#name')
									.attr(
										"value",
										obj.info.patient_name);
								$('#csTime').attr(
									"value",
									obj.birthday);
								$('#idCard')
									.attr(
										"value",
										obj.info.id_card);
								if(obj.info2.age == "") {
									if(obj.info.id_card != null &&
										obj.info.id_card != "") {
										var birthYear = obj.info.id_card
											.substring(
												6,
												10);
										var birthMonth = obj.info.id_card
											.substring(
												10,
												12);
										var birthDay = obj.info.id_card
											.substring(
												12,
												14);

										var d = new Date();
										var nowYear = d
											.getFullYear();
										var nowMonth = d
											.getMonth() + 1;
										var nowDay = d
											.getDate();

										age = nowYear -
											birthYear;
										if(nowMonth -
											birthMonth < 0) {
											age = age - 1;
										} else if(nowMonth == birthMonth &&
											nowDay -
											birthDay < 0) {
											age = age - 1;
										}
										$('#age').attr(
											"value",
											age);
									}
								} else {
									$('#age')
										.attr(
											"value",
											obj.info2.age);
								}
								if(obj.info.sex == '1' ||
									obj.info.sex == '男') {
									$(
											"input[name='sex'][value='男']")
										.attr(
											"checked",
											true);
								} else {
									$(
											"input[name='sex'][value='女']")
										.attr(
											"checked",
											true);
								}
								$('#otherPhone')
									.attr(
										"value",
										obj.info.family_phone);
								$('#phone')
									.attr(
										"value",
										obj.info.patient_phone);
								$('#address')
									.attr(
										"value",
										obj.info.address);
								$('#doctorName')
									.attr(
										"value",
										obj.info2.doctor_name);
								$('#hospitalizationId')
									.attr(
										"value",
										obj.info2.visit_id);
								//生命体征
								$('#vitalSignsT')
									.attr(
										"value",
										obj.info2.temperature);
								$('#vitalSignsP').attr(
									"value",
									obj.info2.pulse);
								$('#vitalSignsR').attr(
									"value",
									obj.info2.breath);
								$('#vitalSignsB').attr(
									"value",
									obj.info2.systolic_pressure);
								$('#vitalSignsS').attr(
									"value",
									obj.info2.diastolic_pressure);
								$('#mainTell')
									.attr(
										"value",
										obj.info2.self_reported);
								$('#mainDiagnosis')
									.attr(
										"value",
										obj.info2.discharge_diagnosis);
								//将入院诊断赋值到病情简介
								$('#trIllnessAndReason')
									.attr(
										"value",
										obj.info2.admission_diagnosis);
								$('#temp5')
									.attr(
										"value",
										obj.info2.ucmed_clinic_id);
								$('#temp6')
									.attr(
										"value",
										obj.info2.ucmed_patient_id);
								/*
								 * $('#medicalGroup').attr(
								 * "value", "未选组医疗组");
								 */
							},
							complete: function() {
								$("#yes").removeAttr(
									"disabled");
								$("#yes")
									.css(
										"background-color",
										backGroupColor);
							}
						});
				});
		/* 弹窗取消、点x点击动作 */
		$("#no,#cxlr_close").click(function() {
			$('#pId').attr("value", "");
			$('#idCard1').attr("value", "");
			$('#spanName').html("");
			$('#spanSex').html("");
			$('#spanMedical').html("");
			$('#spanIdCard').html("");
			$("#cxlr_pop").hide();
		});
		$("#xxbefore1").click(
			function() {
				var v = $('#wherefrom').val();
				if(v == 'update') {
					var pre_url = $('#pre_url').val();
					if(pre_url != '') {
						window.location.href = pre_url;
						$("#ifr1", window.parent.document)
							.contents().find("#2b").click();
					} else {
						$("#ifr1", window.parent.document)
							.contents().find("#3").click();
					}
					// history.back(-1);

				} else {
					$("#ifr1", window.parent.document)
						.contents().find("#3").click();
				}

				$("#topto").click();
				document.getElementById("topto").click();
			});
	})

function myfunction() {
	var v = $('#wherefrom').val();
	if(v == 'update') {
		$("#xxbefore1").val("返回");
		$("#cxlr_pop").hide();
		$("#luru").css('display', 'none');
		$("#hzxxym").css('display', 'block');
		$(".m-sqd_div3").removeClass("div3_xuan");
		$("#div2_2").addClass("div3_xuan");
	}
}

function hiddenDiv() {
	$("#cxlr_pop").hide();
	$("#luru").css('display', 'none');
	$("#hzxxym").css('display', 'block');
	$(".m-sqd_div3").removeClass("div3_xuan");
	$("#div2_2").addClass("div3_xuan");
}

function getPatientInfo(v) {
	var patientId = $('#pId').val();
	if(patientId == "") {
		$('#pId').addClass("checkinput");
		return false;
	}
	var backGroupColor = $("#chaxun").css("background-color");
	$.ajax({
		type: "post",
		url: '/check/info.htm',
		data: "&patientId=" + patientId,
		dataType: "text",
		beforeSend: function() {
			// 禁用按钮防止重复提交
			$("#chaxun").attr("disabled", true);
			$("#chaxun").css("background-color", "#C1E0F3");
			$("#chaxun").attr("value", "查询中...");
		},
		success: function(data) {
			var obj = eval("(" + data + ")");
			if(obj.R != '200') {
				$('#obj').attr("value", "");
				$('#pId').addClass("checkinput");
				$('#spanName').html("");
				$('#spanSex').html("");
				$('#spanMedical').html("");
				$('#spanIdCard').html("");
				alert("未查到信息");
				return false;
			}
			$('#spanName').html(obj.info.patient_name);
			$('#obj').attr("value", obj);
			if(obj.info.sex == '1' || obj.info.sex == '男') {
				$('#spanSex').html("男");
			} else if(obj.info.sex == '2' || obj.info.sex == '女') {
				$('#spanSex').html("女");
			}
			$('#spanMedical').html(obj.info2.patient_id);
			$('#spanIdCard').html(obj.info.id_card);
		},
		complete: function() {
			$("#chaxun").removeAttr("disabled");
			$("#chaxun").css("background-color", backGroupColor);
			$("#chaxun").attr("value", "查询");
		}
	});

}

function getdepartNameH(obj) {
	var value = obj.options[obj.options.selectedIndex].text;
	$('#hospitalIn').attr("value", value);
	var val = obj.value;
	$('#departmentInId').empty();
	$.ajax({
		type: "post",
		url: '/apply/getlist1.htm',
		data: "hId=" + val,
		dataType: "text",
		success: function(data) {
			var obj = eval("(" + data + ")");
			var list = obj.list;
			$('#departmentIn').attr("value", list[0].SectionName);
			$(list).each(
				function(index) {
					var val = list[index];
					$('#departmentInId').append(
						"<option  value=" + val.Id + " >" +
						val.SectionName + "</option>");
				});
		}
	});
}

function getdepartNameO(obj) {
	var value = obj.options[obj.options.selectedIndex].text;
	$('#departmentOut').attr("value", value);
}