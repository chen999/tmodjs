/*TMODJS:{"version":1,"md5":"dbf1af6539dea59a69e9cb594b81a879"}*/
template('public/hosmenuNav',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,list=$data.list,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+='  <div style="width:172px;margin-top:13px;margin-left:auto;margin-right:auto; " v="true" id="topic1"> <input type="hidden" id="permission" name="permission" value=""> <input type="hidden" onclick="clickCss(&#39;2&#39;)" id="2b"> <input type="hidden" onclick="clickCss(&#39;3&#39;)" id="3b"> <input type="hidden" id="url" value="http://zyylxz.zwjk.com/Home/Login"> <input type="hidden" id="other_applyId" name="other_applyId" value="null"> <input type="hidden" id="other_inout" name="other_inout" value="null"> <input type="button" id="readButton" style="display: none;" onclick="readApply()"> <ul> ';
$each(list,function($value,$index){
$out+=' <li class="litopic" onmouseover="getTopic(this)" onmouseout="outTopic(this)" id="';
$out+=$escape($value.num);
$out+='" onclick="gotoUrlNew(this,&#39;';
$out+=$escape($value.url);
$out+='&#39;,&#39;content&#39;)"> <div class="topicbg topicimg';
$out+=$escape($value.num);
$out+='"></div> <span class="topic z';
$out+=$escape($value.num);
$out+='">';
$out+=$escape($value.title);
$out+='</span> </li> ';
});
$out+=' </ul> </div>  ';
return new String($out);
});