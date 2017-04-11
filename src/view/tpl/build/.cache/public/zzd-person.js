/*TMODJS:{"version":1,"md5":"a10c357ff320f95a293b17a917ac9108"}*/
template('public/zzd-person',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,list1=$data.list1,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,list2=$data.list2,$out='';$out+='<fieldset class="y-fieldset"> <legend><span class="leaf"></span>&nbsp;基本信息</legend> <div class="align-center clearfloat"> <table class="zzd_tb1" cellspacing="0" cellpadding="0"> <tbody> ';
$each(list1,function($value,$index){
$out+=' <tr><td>姓名：</td><td>';
$out+=$escape($value.name);
$out+='</td></tr> <tr><td>年龄：</td><td>';
$out+=$escape($value.age);
$out+='</td></tr> <tr><td>身份证号：</td><td>';
$out+=$escape($value.num);
$out+='</td></tr> <tr><td>家属联系电话：</td><td>';
$out+=$escape($value.phoneFamily);
$out+='</td></tr> <tr><td>家庭地址：</td><td>';
$out+=$escape($value.address);
$out+='</td></tr> ';
});
$out+=' </tbody></table> <table class="zzd_tb1" cellspacing="0" cellpadding="0"> <tbody> ';
$each(list2,function($value,$index){
$out+=' <tr><td>性别：</td><td>';
$out+=$escape($value.sex);
$out+='</td></tr> <tr v="2"><td>出生年月：</td><td>';
$out+=$escape($value.birth);
$out+='</td></tr> <tr><td>本院病历号：</td><td>';
$out+=$escape($value.num);
$out+='</td></tr> <tr><td>联系电话：</td><td>';
$out+=$escape($value.phoneSelf);
$out+='</td></tr> <tr><td></td><td></td></tr> ';
});
$out+=' </tbody></table> </div> </fieldset>';
return new String($out);
});