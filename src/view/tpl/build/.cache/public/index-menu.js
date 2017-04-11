/*TMODJS:{"version":1,"md5":"a157bdb0aac6edf93b86f6513674c743"}*/
template('public/index-menu',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,list1=$data.list1,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+='<div class="div2"> ';
$each(list1,function($value,$index){
$out+=' <div class="m-sqd_div3 ';
$out+=$escape($value.className);
$out+='" id="div2_';
$out+=$escape($value.id);
$out+='"><span>';
$out+=$escape($value.msg);
$out+='</span></div> <div class="shuangjt"></div> ';
});
$out+=' </div>';
return new String($out);
});