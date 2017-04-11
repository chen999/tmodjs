/*TMODJS:{"version":1,"md5":"d69dd18f87ade6f6c3a0cdf6b33c5769"}*/
template('public/firstPage-table',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,num=$data.num,title1=$data.title1,title2=$data.title2,$each=$utils.$each,list=$data.list,$value=$data.$value,$index=$data.$index,$out='';$out+=' <div style="margin-left:20px;display:inline-block;margin-bottom: 10px;text-align: left;"> <div class="m-sy_zr"> <div class="m-bybg"><span class="byzhuanru">本月转入</span></div> <div class="m-rollout">转入</div> </div>  <div class="m-benyue"> <div class="shenqing">本月共收:<br><span class="sdcount" id="inAll">';
$out+=$escape(num);
$out+='</span>例申请</div> <div class="zuojt"><img src="../images/leftMenu/sy_zuojt.jpg"></div> <div style="width:300px;float:left;"> <table width="100%"> <tbody><tr><th>';
$out+=$escape(title1);
$out+='</th><th>';
$out+=$escape(title2);
$out+='</th></tr> ';
$each(list,function($value,$index){
$out+=' <tr class="trbg" style="height:48px;"><td>';
$out+=$escape($value.title1);
$out+='：<span style="color:#ff7d0c" id="agreeIn">';
$out+=$escape($value.num1);
$out+='</span></td><td>';
$out+=$escape($value.title2);
$out+='：<span style="color:#ff7d0c">';
$out+=$escape($value.num2);
$out+='</span></td></tr> ';
});
$out+=' </tbody></table> </div> <div style="clear:both;"></div> </div> </div> ';
return new String($out);
});