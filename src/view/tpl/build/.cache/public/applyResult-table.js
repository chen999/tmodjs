/*TMODJS:{"version":15,"md5":"fe2f371b5d05fa1d4c8d2c8dcba4ccb2"}*/
template('public/applyResult-table',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,list=$data.list,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' ';
$each(list,function($value,$index){
$out+=' <div style="margin-left:20px;display:inline-block;margin-bottom: 10px;text-align: left;"> <div class="m-sy_zr"> <div class="m-bybg"><span class="byzhuanru">本月';
$out+=$escape($value.title);
$out+='</span></div> <div class="m-rollout">';
$out+=$escape($value.title);
$out+='</div> </div>  <div class="m-benyue"> <div class="shenqing">本月共';
$out+=$escape($value.way);
$out+=':<br><span class="sdcount" id="';
$out+=$escape($value.id);
$out+='">';
$out+=$escape($value.num);
$out+='</span>例申请</div> <div class="zuojt"><img src="../images/leftMenu/sy_zuojt.jpg"></div> <div style="width:300px;float:left;" class="';
$out+=$escape($value.className);
$out+='"> <table width="100%"> <tbody><tr><th>';
$out+=$escape($value.title1);
$out+='</th><th>';
$out+=$escape($value.title2);
$out+='</th></tr> ';
$each($value.list,function($value,$index){
$out+=' <tr class="';
$out+=$escape($value.className);
$out+='"><td>';
$out+=$escape($value.title1);
$out+='：<span style="color:#ff7d0c" id="';
$out+=$escape($value.id1);
$out+='">';
$out+=$escape($value.num1);
$out+='</span></td><td>';
$out+=$escape($value.title2);
$out+='：<span style="color:#ff7d0c" id="';
$out+=$escape($value.id2);
$out+='">';
$out+=$escape($value.num2);
$out+='</span></td></tr> ';
});
$out+=' </tbody></table> </div> <div style="clear:both;"></div> </div> </div> ';
});
$out+=' ';
return new String($out);
});