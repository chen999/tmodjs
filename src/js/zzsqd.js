$(document)
		.ready(
				
				function() {
					changeWord();
					function changeWord() {
						var v = $('#wherefrom').val();
						if (v == 'update') {
							$('#xxbefore1').attr("value","返回");
						}
					}

					$("#xxbefore4").click(function() {
						$(this).parent().parent().hide();
						$(this).parent().parent().prev().show();
						$(".m-sqd_div3").removeClass("div3_xuan");
						$("#div2_4").addClass("div3_xuan");
						$("#topto").click();
						document.getElementById("topto").click();
					});
					/* 点击下一步的按钮动作 */
					$("#xxnext1")
							.click(
									function() {
										var name = $('#name').val();
										$('#trName').html(name);
										var age = $('#age').val();
										$('#trAge').html(age);
										var idCard = $('#idCard').val();
										$('#trIdCard').html(idCard);
										var address = $('#address').val();
										$('#trAddress').html(address);
										var otherPhone = $('#otherPhone').val();
										$('#trOtherPhone').html(otherPhone);
										var birthday = $('#csTime').val();
										$('#trBirthday').html(birthday);
										var hospitalizationId = $(
												'#hospitalizationId').val();
										$('#trHospitalizationId').html(
												hospitalizationId);
										var phone = $('#phone').val();
										$('#trPhone').html(phone);
										var sex = $(
												'input:radio[name="sex"]:checked')
												.val();
										$('#trSex').html(sex);
										if (name == "") {
											alert("姓名不能为空");
											$('#name').addClass("checkinput");
											return false;
										}
										if (age == "") {

											$('#age').addClass("checkinput");
											alert("年龄不能为空");
											return false;
										}
										if (birthday == "") {
											$('#csTime').addClass("checkinput");
											alert("出生日期不能为空");
											return false;
										}
										if (idCard == "") {
											$('#idCard').addClass("checkinput");
											alert("身份证不能为空");
											return false;
										}
										;
										if (hospitalizationId == "") {
											$('#hospitalizationId').addClass(
													"checkinput");
											alert("本院住院号不能为空");
											return false;
										}
										if (address == "") {
											$('#address')
													.addClass("checkinput");
											alert("地址不能为空");
											return false;
										}
										if (phone == "") {
											$('#phone').addClass("checkinput");
											alert("联系电话不能为空");
											return false;
										}
										if (phone.length != 11
												&& phone.length != 7
												&& phone.length != 8) {
											$('#phone').addClass("checkinput");
											alert("联系电话位数有误");
											return false;
										}
										if (otherPhone == "") {
											$('#otherPhone').addClass(
													"checkinput");
											alert("家属电话不能为空");
											return false;
										}
										if (otherPhone.length != 11
												&& otherPhone.length != 7
												&& otherPhone.length != 8) {
											$('#otherPhone').addClass(
													"checkinput");
											alert("家属电话位数有误");
											return false;
										}
										if (sex == "") {
											alert("性别不能为空");
											return false;
										}
										/*var backGroupColor = $("#xxnext1").css("background-color");
										$.ajax({
													type : "post",
													url : '/apply/apply.htm',
													data : $('#formId')
															.serialize(),
													dataType : "text",
												    beforeSend: function () {
												        // 禁用按钮防止重复提交
												        $("#xxnext1").attr("disabled",true);
												        $("#xxnext1").css("background-color","#C1E0F3");
												        $("#xxnext1").attr("value","进入中...");
												    },
													success : function(data) {
														var obj = eval("("
																+ data + ")");
														if (obj.code == 0) {
															alert("身份证有误");
															$('#idCard')
																	.addClass(
																			"checkinput");
														} else if (obj.code == 2) {
															alert("查无此人");
															$('#idCard')
																	.addClass(
																			"checkinput");
														} else if (obj.code == 5) {
															alert(obj.ret_infor);
														} else {
															$('#patientId')
																	.attr(
																			"value",
																			obj.patientId);*/
															$('#applyId').attr(
																	"value",
																	obj.id);
															$("#xxnext1")
																	.parent()
																	.parent()
																	.hide();
															$("#xxnext1")
																	.parent()
																	.parent()
																	.next()
																	.show();
															$(".m-sqd_div3")
																	.removeClass(
																			"div3_xuan");
															$("#div2_3")
																	.addClass(
																			"div3_xuan");
														/*}
														document
																.getElementById(
																		"topto")
																.click();
													},
												    complete: function () {
												        $("#xxnext1").removeAttr("disabled");
												        $("#xxnext1").css("background-color",backGroupColor);
												        $("#xxnext1").attr("value","保存并下一步");
												    },
													error : function() {
														alert("失败");
													}
												});*/
									});
					$("#xxnext2")
							.click(
									function() {
										var isAble = true;
										$(".isblable").removeClass('isblable');
										$(".qpname")
												.each(
														function() {
															var value = $(this)
																	.val()
																	.trim();
															if (value != "") {
																$(this)
																		.parent()
																		.parent()
																		.addClass(
																				"isblable");
																var value2 = $(
																		this)
																		.parent()
																		.next()
																		.find(
																				"input")
																		.val()
																		.trim();
																var value3 = $(
																		this)
																		.parent()
																		.next()
																		.next()
																		.find(
																				"input")
																		.val()
																		.trim();
																if (value2 == ""
																		|| value3 == "") {
																	isAble = false;
																}
															}
														});
										$(".qpname1")
												.each(
														function() {
															var value = $(this)
																	.val()
																	.trim();
															if (value != "") {
																$(this)
																		.parent()
																		.parent()
																		.addClass(
																				"isblable");
																var value2 = $(
																		this)
																		.parent()
																		.next()
																		.find(
																				"input")
																		.val()
																		.trim();
																var value3 = $(
																		this)
																		.parent()
																		.prev()
																		.find(
																				"input")
																		.val()
																		.trim();
																if (value2 == ""
																		|| value3 == "") {
																	isAble = false;
																}
															}
														});
										$(".qptime")
												.each(
														function() {
															var value = $(this)
																	.val()
																	.trim();
															if (value != "") {
																$(this)
																		.parent()
																		.parent()
																		.addClass(
																				"isblable");
																var value2 = $(
																		this)
																		.parent()
																		.prev()
																		.find(
																				"input")
																		.val()
																		.trim();
																var value3 = $(
																		this)
																		.parent()
																		.prev()
																		.prev()
																		.find(
																				"input")
																		.val()
																		.trim();
																if (value2 == ""
																		|| value3 == "") {
																	isAble = false;
																}
															}
														});
										var mainDiagnosis = $('#mainDiagnosis')
												.val();
										$('#trMainDiagnosis').html(
												mainDiagnosis);
										var dangerLevel = $(
												'input:radio[name="dangerLevel"]:checked')
												.val();
										$('#trDangerLevel').html(dangerLevel);
										var illnessAndReason = $(
												'#illnessAndReason').val();
										$('#trIllnessAndReason').html(
												illnessAndReason);
										var reason = $('#reason').val();
										$('#trReason').html(reason);
										var isolationRequirements = $(
												'input:radio[name="isolationRequirements"]:checked')
												.val();
										if (isolationRequirements == "0") {
											$('#trIsolationRequirements').html(
													"无");
										} else {
											var qt = $('#qita').val();
											if (qt != "") {
												$('#trIsolationRequirements')
														.html(qt);
											} else {
												var isolationRequirements = $(
														"#require").val();
												$('#trIsolationRequirements')
														.html(
																isolationRequirements);
											}
										}
										var vitalSignsT = $('#vitalSignsT')
												.val();
										var vitalSignsP = $('#vitalSignsP')
												.val();
										var vitalSignsR = $('#vitalSignsR')
												.val();
										var vitalSignsB = $('#vitalSignsB')
												.val();
										var vitalSignsS = $('#vitalSignsS')
												.val();
										$('#trVitalSigns').html(
												"T:" + vitalSignsT + "℃，P/HR:"
														+ vitalSignsP
														+ "P次/分，R:"
														+ vitalSignsR
														+ "次/分，BP:"
														+ vitalSignsB + "/"
														+ vitalSignsS + "mmHg");
										var birthday = $('#mainTell').val();
										$('#trMainTell').html(birthday);

										var mainTell = $('#mainTell').val();
										if (!isAble) {
											alert("请完成病理切片填写");
											return false;
										}
										$("#blqpdiv").html("");
										$(".isblable").each(
												function(index) {
													var blbh = $(this).find(
															"td").find("input")
															.val();
													var blname = $(this).find(
															"td").next().find(
															"input").val();
													var bltime = $(this).find(
															"td").next().next()
															.find("input")
															.val();
													var blnr = blbh + " / "
															+ blname + " / "
															+ bltime + "<br/>";
													$("#blqpdiv").append(blnr);
												});
										if ($("#blqpdiv").html() == "") {
											$("#blqpdiv").html("暂无");
										}

										if (mainTell == '') {
											$('#mainTell	').addClass(
													"checkinput");
											alert("主诉不能为空");
											return false;
										}

										var mainDiagnosis = $('#mainDiagnosis')
												.val();
										if (mainDiagnosis == '') {
											$('#mainDiagnosis').addClass(
													"checkinput");
											alert("主要诊断不能为空");
											return false;
										}
										var vitalSignsT = $('#vitalSignsT')
												.val();
										if (vitalSignsT == '') {
											$('#vitalSignsT').addClass(
													"checkinput");
											alert("体温不能为空");
											return false;
										}
										var vitalSignsP = $('#vitalSignsP')
												.val();
										if (vitalSignsP == '') {
											$('#vitalSignsP').addClass(
													"checkinput");
											alert("脉搏不能为空");
											return false;
										}
										var vitalSignsR = $('#vitalSignsR')
												.val();
										if (vitalSignsR == '') {
											$('#vitalSignsR').addClass(
													"checkinput");
											alert("呼吸不能为空");
											return false;
										}
										var vitalSignsB = $('#vitalSignsB')
												.val();
										if (vitalSignsB == '') {
											$('#vitalSignsB').addClass(
													"checkinput");
											alert("血压不能为空");
											return false;
										}
										var vitalSignsB = $('#vitalSignsB')
												.val();
										if (vitalSignsB == '') {
											$('#vitalSignsS').addClass(
													"checkinput");
											alert("血压不能为空");
											return false;
										}
										var illnessAndReason = $(
												'#illnessAndReason').val();
										if (illnessAndReason == '') {
											$('#illnessAndReason').addClass(
													"checkinput");
											alert("病情简介");
											return false;
										}
										var reason = $('#reason').val();
										if (reason == '') {
											$('#reason').addClass("checkinput");
											alert("转出理由不能为空");
											return false;
										}
										var assessment = $(
												'input:radio[name="assessment"]:checked')
												.val();
										$('#trAssessment').html(assessment);
										var val = $(
												'input:radio[name="assessment"]:checked')
												.val();
										if (val == null) {
											alert("转运评估不能为空");
											return false;
										}

										var isolationRequirements = $(
												'input:radio[name="isolationRequirements"]:checked')
												.val();
										require = $('#require').val();
										if (isolationRequirements == "1") {
											var qita = $('#qita').val();
											if (require == "" && qita == "") {
												alert("请选择隔离要求");
												return false;
											}
										}

										var temp3 = $('#temp3').val();
										$('#temp31').html(temp3);
										/*
										 * if (temp3 == '') {
										 * $('#temp3').addClass( "checkinput");
										 * alert("其他要求不能为空"); return false; }
										 */
										/*var backGroupColor = $("#xxnext2").css("background-color");
										$.ajax({
													type : "post",
													url : '/apply/apply.htm',
													data : $('#formId')
															.serialize(),
													dataType : "text",
												    beforeSend: function () {
												        // 禁用按钮防止重复提交
												        $("#xxnext2").attr("disabled",true);
												        $("#xxnext2").css("background-color","#C1E0F3");
												        $("#xxnext2").attr("value","进入中...");
												    },
													success : function(data) {
														var obj = eval("("
																+ data + ")");
														if (obj.code == 5) {
															alert(obj.ret_infor);
														} else {
															$('#applyId').attr(
																	"value",
																	obj.id);*/
															$('#xxnext2')
																	.parent()
																	.parent()
																	.hide();
															$('#xxnext2')
																	.parent()
																	.parent()
																	.next()
																	.show();
															$(".m-sqd_div3")
																	.removeClass(
																			"div3_xuan");
															$("#div2_4")
																	.addClass(
																			"div3_xuan");
															/*document
																	.getElementById(
																			"topto")
																	.click();
														}
													},
												    complete: function () {
												        $("#xxnext2").removeAttr("disabled");
												        $("#xxnext2").css("background-color",backGroupColor);
												        $("#xxnext2").attr("value","保存并下一步");
												    },
													error : function() {
														alert("失败");
													}
												});*/
									});
					$("#xxnext3")
							.click(
									function() {
										var medicalGroup = $("#groupId").find("option:selected").text();
										$('#medicalGroup')
												.val(medicalGroup);
										$('#trMedicalGroup').html(medicalGroup);
										var hospitalOut = $('#hospitalOut')
												.val();
										$('#trHospitalOut').html(hospitalOut);
										var doctorName = $('#doctorName').val();
										$('#trDoctorName').html(doctorName);

										var doctorPhone = $('#doctorPhone')
												.val();
										$('#trDoctorPhone').html(doctorPhone);

										var tool = $(
												'input:radio[name="tool"]:checked')
												.val();
										if (tool == "0") {
											$('#trTool').html("救护车");
										} else {
											$('#trTool').html("患者自己转运");
										}

										/*
										 * var assessment =
										 * $('#assessment').val(); if
										 * (assessment == "0") {
										 * $('#trAssessment').html("未完成"); }
										 * else { $('#trAssessment').html("完成"); }
										 */

										var degree = $("#degree").find(
												"option:selected").text();
										$('#trDegree').html(degree);

										var hospitalIn = $("#hospitalIn").val();
										$('#trHospitalIn').html(hospitalIn);

										var departmentIn = $("#departmentInId")
												.find("option:selected").text();
										$("#departmentIn").val(departmentIn);
										$('#trDepartmentIn').html(departmentIn);
										var departmentOut = $("#departmentOutId")
										.find("option:selected").text();
										$("#departmentOut").val(departmentOut);
										$('#trDepartmentOut').html(departmentOut);
										var departmentInAlter = $(
												"#departmentInIdAlter").find(
												"option:selected").text();
										$('#trDepartmentInIdAlter').html(
												departmentInAlter);

										var type = $("#type").find(
												"option:selected").text();
										$('#trType').html(type);
										var advanceTime = $("#advanceTime")
												.val();
										$('#trAdvanceTime').html(advanceTime);

										var livingTime = $('#livingTime').val();

										$('#trLivingTime').html(livingTime);
										var str = document
												.getElementsByName("bedType");
										var objarray = str.length;
										var chestr = "";
										var a = "0";
										var b = "0";
										var c = "0";
										var d = "0";
										var temp = "0"
										for (i = 0; i < objarray; i++) {
											if (str[i].checked == true) {
												if (str[i].value == '1') {
													a = '1';
													$('#trBedType').html("普通");
													temp = '1';
												} else if (str[i].value == '2') {
													b = '1';
													if (temp == '0') {
														$('#trBedType').html(
																"100-200/天");
														temp = '1';
													} else {
														$('#trBedType').append(
																",100-200/天");
													}
												} else if (str[i].value == '3') {
													c = '1';
													if (temp == '0') {
														$('#trBedType').html(
																"500/天");
														temp = '1';
													} else {
														$('#trBedType').append(
																",500/天");
													}
												} else if (str[i].value == '4') {
													d = '1';
													if (temp == '0') {
														$('#trBedType').html(
																"1000/天");
														temp = '1';
													} else {
														$('#trBedType').append(
																",1000/天");
													}
												}else if(str[i].value == '5'){
													if (temp == '0') {
														$('#trBedType').html(
																"15-100");
														temp = '1';
													} else {
														$('#trBedType').append(
																",15-100");
													}
												}else if(str[i].value == '6'){
													if (temp == '0') {
														$('#trBedType').html(
																"120-200");
														temp = '1';
													} else {
														$('#trBedType').append(
																",120-200");
													}
												}else if(str[i].value == '7'){
													if (temp == '0') {
														$('#trBedType').html(
																"220-500");
														temp = '1';
													} else {
														$('#trBedType').append(
																",220-500");
													}
												}else if(str[i].value == '8'){
													if (temp == '0') {
														$('#trBedType').html(
																"500以上");
														temp = '1';
													} else {
														$('#trBedType').append(
																",500以上");
													}
												}else if(str[i].value == '9'){
													if (temp == '0') {
														$('#trBedType').html(
																"其它");
														temp = '1';
													} else {
														$('#trBedType').append(
																",其它");
													}
												}
												chestr = a + b + c + d;
											}
										}

										/*
										 * var tool = $(
										 * 'input:radio[name="bedType"]:checked')
										 * .val(); if (tool == '1000') {
										 * $('#trBedType').html("普通"); } if
										 * (tool == '0100') {
										 * $('#trBedType').html("100-200/天"); }
										 * if (tool == '0010') {
										 * $('#trBedType').html("500/天"); } if
										 * (tool == '0001') {
										 * $('#trBedType').html("1000/天"); }
										 */
										var illnessNeed = $(
												'input:radio[name="illnessNeed"]:checked')
												.val();
										if (illnessNeed == '100') {
											$('#trIllnessNeed').html("加床");
										}
										if (illnessNeed == '010') {
											$('#trIllnessNeed').html("普通床");
										}
										if (illnessNeed == '001') {
											$('#trIllnessNeed').html("特护床");
										}
										if (illnessNeed == '110') {
											$('#trIllnessNeed').html("普通&加床");
										}
										var departmentIn = $('#departmentIn')
												.val();
										var medicalGroup = $('#medicalGroup')
												.val();
										if (departmentIn == '空'
												|| medicalGroup == '空') {
											alert("医院服务出错");
											return false;
										}
										var doctorName = $('#doctorName').val();
										if (doctorName == '') {
											$('#doctorName').addClass(
													"checkinput");
											alert("医生姓名不能为空");
											return false;
										}
										var doctorPhone = $('#doctorPhone')
												.val();
										if (doctorPhone == '') {
											$('#doctorPhone').addClass(
													"checkinput");
											alert("医生电话不能为空");
											return false;
										}

										var medicalGroup = $('#medicalGroup')
												.val();

										if (doctorPhone.length != 11) {
											$('#doctorPhone').addClass(
													"checkinput");
											alert("联系电话位数有误,请填写正确的手机号");
											return false;
										}

										var advanceTime = $('#advanceTime')
												.val();
										if (advanceTime == '') {
											$('#advanceTime').addClass(
													"checkinput");
											alert("预计住院天数不能为空");
											return false;
										}
										var livingTime = $('#livingTime').val();
										if (livingTime == '') {
											$('#livingTime').addClass(
													"checkinput");
											alert("申请入住时间不能为空");
											return false;
										}

										if (!$("input[type='checkbox']").is(
												':checked')) {
											alert("床位类型不能为空");
											return false;
										}
										;

										if (livingTime != '') {
											var beginTime = $('#time').val();
											var endTime = livingTime;
											var beginTimes = beginTime
													.substring(0, 10)
													.split('-');
											var endTimes = endTime.substring(0,
													10).split('-');
											beginTime = beginTimes[1]
													+ '/'
													+ beginTimes[2]
													+ '/'
													+ beginTimes[0]
													+ ' '
													+ beginTime.substring(10,
															19);
											endTime = endTimes[1] + '/'
													+ endTimes[2] + '/'
													+ endTimes[0] + ' '
													+ endTime.substring(10, 19);
											var a = (Date.parse(endTime) - Date
													.parse(beginTime)) / 3600 / 1000;
											if (a < 0) {
												alert("申请入住时间错误!");
												$('#livingTime').addClass(
														"checkinput");
												$('#livingTime').attr("value",
														"");
												return false;
											} else if (a > 0) {
											} else if (a == 0) {
											} else {
												return 'exception'
											}
										}
										/*var backGroupColor = $("#xxnext3").css("background-color");
										$.ajax({
													type : "post",
													url : '/apply/addTh.htm',
													data : $('#formId')
															.serialize(),
													dataType : "text",
												    beforeSend: function () {
												        // 禁用按钮防止重复提交
												        $("#xxnext3").attr("disabled",true);
												        $("#xxnext3").css("background-color","#C1E0F3");
												        $("#xxnext3").attr("value","进入中...");
												    },
													success : function(data) {
														var obj = eval("("
																+ data + ")");
														if (obj.code == 5) {
															alert(obj.ret_infor);
														} else {
															$('#applyId').attr(
																	"value",
																	obj.id);*/
															$("#xxnext3")
																	.parent()
																	.parent()
																	.hide();
															$("#xxnext3")
																	.parent()
																	.parent()
																	.next()
																	.show();
															$(".m-sqd_div3")
																	.removeClass(
																			"div3_xuan");
															$("#div2_5")
																	.addClass(
																			"div3_xuan");
															var h = parseInt(new Number(
																	$('#formId')
																			.height())) + 300;
															/*document
																	.getElementById(
																			"topto")
																	.click();
														}
													},
												    complete: function () {
												        $("#xxnext3").removeAttr("disabled");
												        $("#xxnext3").attr("value","保存并下一步");
												        $("#xxnext3").css("background-color",backGroupColor);
												    },
													error : function() {
														alert("失败");
													}

												});*/

									});

				});

function checkage() {
	var age = $('#age').val();
	if (isNaN(age)) {
		$('#age').attr("value", "");
	}
	if (parseInt(new Number(age)) > 120 || parseInt(new Number(age)) == 0) {
		$('#age').attr("value", "");
	}
}
/* 刷新父页面 */
function myrefresh() {
	parent.location.reload();
}

