/*TMODJS:{"version":2,"md5":"f5ba65b9ce6bf8c27232de4c073b33b9"}*/
template('public/msg-referred',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,list4=$data.list4,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,list5=$data.list5,list6=$data.list6,list7=$data.list7,$out='';$out+='<fieldset class="y-fieldset"> <legend><span class="leaf"></span>&nbsp;转诊信息</legend> <div class="pale-green-bg clearfloat"><div class="little-title">[转出相关信息]</div> <table class="zzd_tb1" cellspacing="0" cellpadding="0"> <tbody> ';
$each(list4,function($value,$index){
$out+=' <tr v="319" c="2"><td>转出医院：</td><td>';
$out+=$escape($value.item1);
$out+='</td></tr> <tr><td>申请转入医院：</td><td>';
$out+=$escape($value.item2);
$out+='</td></tr> <tr><td>经治医生：</td><td>';
$out+=$escape($value.item3);
$out+='</td></tr> <tr><td>转运工具：</td><td>';
$out+=$escape($value.item4);
$out+='</td></tr> ';
});
$out+=' </tbody> </table> <table class="zzd_tb1" cellspacing="0" cellpadding="0"> <tbody> ';
$each(list5,function($value,$index){
$out+=' <tr><td>转出科室：</td><td>';
$out+=$escape($value.item1);
$out+='</td></tr> <tr><td>申请转入科室：</td><td>';
$out+=$escape($value.item2);
$out+='</td></tr> <tr><td>经治医生电话：</td><td>';
$out+=$escape($value.item3);
$out+='</td></tr> ';
});
$out+=' </tbody> </table> <div class="blx" style="width:90%;margin-bottom:20px;"></div> <div class="little-title">[申请入院信息]</div> <table class="zzd_tb1" cellspacing="0" cellpadding="0"> <tbody> ';
$each(list6,function($value,$index){
$out+=' <tr><td>紧急程度：</td><td>';
$out+=$escape($value.item1);
$out+='</td></tr> <tr><td>床位类型：</td><td>';
$out+=$escape($value.item2);
$out+='</td></tr> <tr><td>申请入住时间：</td><td>';
$out+=$escape($value.item3);
$out+='</td></tr> <tr><td>医疗组：</td><td>';
$out+=$escape($value.item4);
$out+='</td></tr> ';
});
$out+=' </tbody> </table> <table class="zzd_tb1" cellspacing="0" cellpadding="0"> <tbody> ';
$each(list7,function($value,$index){
$out+=' <tr><td>入院类别：</td><td>';
$out+=$escape($value.item1);
$out+='</td></tr> <tr><td>病情要求：</td><td>';
$out+=$escape($value.item2);
$out+='</tr> <tr><td>预计住院：</td><td>';
$out+=$escape($value.item3);
$out+='</td></tr> <tr><td>申请转诊时间：</td><td>';
$out+=$escape($value.item4);
$out+='</td></tr> ';
});
$out+=' </tbody> </table> </fieldset>';
return new String($out);
});