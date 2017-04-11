/*TMODJS:{"version":1,"md5":"37d03e93a0d4f185e3f5c23655215012"}*/
template('public/table-searchResult-title',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,resultNum1=$data.resultNum1,resultNum2=$data.resultNum2,$out='';$out+='<div class="bsearch f-sixteen"> <span id="ssresult" style="display: none;">搜索结果&nbsp;<span id="count" class="orange">';
$out+=$escape(resultNum1);
$out+='</span>&nbsp;项&nbsp;&nbsp;</span> 共有<span class="orange" v="1">';
$out+=$escape(resultNum1);
$out+='</span>项 <div class="weishenpi"> 未提交<span class="orange">';
$out+=$escape(resultNum2);
$out+='</span>项 </div> </div>';
return new String($out);
});