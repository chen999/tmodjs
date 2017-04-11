/*TMODJS:{"version":1,"md5":"5ad505cbe87da80ccc68324440381595"}*/
template('public/pageMenu',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,listPage=$data.listPage,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+='<div class="m-pages clearfloat" v=""> <div class="m-yn clearfloat"> <button class="next float-left" onclick="backurl();">上一页</button> <input type="hidden" name="url1" id="url2" value="/pathology/applylist.htm?pageNo=1&amp;pageSize=10"> <button class="next c-left-ten" onclick="lasturl();">尾页</button> <button class="next" onclick="gourl();">下一页</button> <input type="hidden" name="url1" id="url1" value="/pathology/applylist.htm?pageNo=2&amp;pageSize=10"> <div class="yema"> <ul> ';
$each(listPage,function($value,$index){
$out+=' <li class="licount"><a href="" class="color-grey ';
$out+=$escape($value.className);
$out+='">';
$out+=$escape($value.num);
$out+='</a></li> ';
});
$out+=' </ul> </div> </div> <input type="hidden" id="pagetotal" value="4"> <div class="m-nn"> <input type="text" id="changePage" class="next u-skip"> <input type="hidden" id="cPage" value="/pathology/applylist.htm?pageSize=10&amp;pageNo="> <button class="next" onclick="pageChange();">GO</button> </div> </div>';
return new String($out);
});