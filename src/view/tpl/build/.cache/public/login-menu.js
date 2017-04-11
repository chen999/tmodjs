/*TMODJS:{"version":3,"md5":"f8a942a5cffe00e016b73b988e8f6a7e"}*/
template('public/login-menu',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,list1=$data.list1,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+='<div id="header" class="g-login-header"> <div class="m-login-headmulu"> <img src="../images/login/toplogo.png"> ';
$each(list1,function($value,$index){
$out+=' <div id="top_';
$out+=$escape($value.id);
$out+='" class="m-login-headlist">';
$out+=$escape($value.title);
$out+='</div> ';
});
$out+=' </div> <div class="m-login-headabs" id="headabs_forHover"> <div class="m-login-headabs_div" id="hoverDiv"> <div id="top_6" class="m-login-headabs_div">申请加入</div> <div class="applyAddBox" id="applyAddBox" style="display: none;"> <div class="applyAddBox_L"> <p>双向转诊</p> <a href="http://yyzz.ylxz.zwjk.com/lowerHospital/apply.htm" target="_blank"><p class="applyAdd_active">立即申请</p></a> <a href="http://yyzz.ylxz.zwjk.com/lowerHospital/verification.htm" target="_blank"><p class="applyAdd_underline">合作协议下载</p></a> </div> <div class="applyAddBox_R"> <p class="applyAdd_gray">其他远程模块</p> <p><span class="phoneImg"><span>申请电话</span></span></p> <p>400-848-1766</p> </div> </div> </div> <div class="m-login-headabs_div" id="top_1"><a style="text-decoration: none; color: inherit;" href="http://ylxz.zwjk.com/Home/Help" target="_blank">帮助中心</a></div> </div> </div>';
return new String($out);
});