/*TMODJS:{"version":1,"md5":"8e67b8fdfbc9d7f0efbc6dc72feff589"}*/
template('public/index-table',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,list2=$data.list2,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$each(list2,function($value,$index){
$out+=' <div class="m-sqd_cxlr ';
$out+=$escape($value.className);
$out+='" id="';
$out+=$escape($value.id);
$out+='"> <div class="m-sqd_lt"></div> <div class="m-sqd-con"> <div class="first-div clearfloat"> <div class="left-width"></div> <div class="right-width"> <div class="cxlr-title">';
$out+=$escape($value.title);
$out+='</div> <div class="cxlr_con cxlr_con1"> ';
$out+=$escape($value.msg);
$out+=' </div> </div> </div> <div class="second-div"> <table cellpadding="0" cellspacing="0"> <tbody> ';
$each($value.list3,function($value,$index){
$out+=' <tr class="cxlrtr"> <td><div class="sqdxinxi"></div><div>';
$out+=$escape($value.title);
$out+='</div></td> <td><span>';
$out+=$escape($value.way);
$out+='</span></td> </tr> ';
});
$out+=' </tbody></table> </div> </div> <div class="m-cxlr_foot"> <div class="chosejixu" id="cxxz"> 选择并继续<span class="gtright">&nbsp;&gt;</span> </div> </div> </div> ';
});
$out+=' ';
return new String($out);
});