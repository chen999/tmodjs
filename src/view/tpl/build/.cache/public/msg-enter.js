/*TMODJS:{"version":3,"md5":"5cdb9f64fbab1e0a75193cd18b23fbff"}*/
template('public/msg-enter',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,list8=$data.list8,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,list9=$data.list9,$out='';$out+='<fieldset class="y-fieldset"> <legend><span class="leaf"></span>&nbsp;入院追踪信息</legend> <div class="text-center"> <table class="zzd_tb1" cellspacing="0" cellpadding="0"> <tbody> ';
$each(list8,function($value,$index){
$out+=' <tr><td>实际转入科室：</td><td>';
$out+=$escape($value.item1);
$out+='</td></tr> <tr><td>病房：</td><td>';
$out+=$escape($value.item2);
$out+='</td></tr> ';
});
$out+=' </tbody> </table> <table class="zzd_tb1" cellspacing="0" cellpadding="0"> <tbody> ';
$each(list9,function($value,$index){
$out+=' <tr><td>当地病历号：</td><td>';
$out+=$escape($value.item1);
$out+='</td></tr> ';
});
$out+=' </tbody> </table> </div> </fieldset>';
return new String($out);
});