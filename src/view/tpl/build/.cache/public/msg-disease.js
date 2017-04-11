/*TMODJS:{"version":2,"md5":"71ade036f4b4d197ff73731bf130e3cf"}*/
template('public/msg-disease',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,list3=$data.list3,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+='<fieldset class="y-fieldset"> <legend><span class="leaf"></span>&nbsp;病情信息</legend> <div class="text-center clearfloat"> <table cellspacing="0" cellpadding="0" class="zzd_tb"> <tbody> ';
$each(list3,function($value,$index){
$out+=' <tr><td style="width:157px;">主诉：</td><td>';
$out+=$escape($value.item1);
$out+='</td></tr> <tr><td>生命体征：</td><td>';
$out+=$escape($value.item2);
$out+='</td></tr> <tr><td>主要诊断：</td><td>';
$out+=$escape($value.item3);
$out+='</td></tr> <tr><td>病情简介：</td><td>';
$out+=$escape($value.item4);
$out+='</td></tr> <tr><td>转出理由：</td><td>';
$out+=$escape($value.item5);
$out+='</td></tr> <tr><td>危重程度：</td><td>';
$out+=$escape($value.item6);
$out+='</td></tr> <tr> <td>隔离要求：</td> <td>';
$out+=$escape($value.item7);
$out+='</td> </tr> <tr><td>转运评估：</td><td id="trAssessment">';
$out+=$escape($value.item8);
$out+='</td></tr> <tr><td>其他要求：</td><td>';
$out+=$escape($value.item9);
$out+='</td></tr> ';
});
$out+=' </tbody> </table> </div> </fieldset>';
return new String($out);
});