/*TMODJS:{"version":1,"md5":"fed614b1a6347362fb1a845ee1eb1b6b"}*/
template('public/disease-list',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,currentPage=$data.currentPage,pages=$data.pages,$each=$utils.$each,list=$data.list,$value=$data.$value,$index=$data.$index,msg=$data.msg,$out='';$out+='<input type="hidden" id="permission" name="permission" value=""> <div class="c-margin-twentyfive"> <div class="con_left" style="overflow:auto;"> <div class="bclbmiddle"> <div class="bclm"><span class="f-sixteen tcolor bcltopic" v="319">查看病程录</span> <input id="currrent" value="1" type="hidden"> <input id="apply" value="1269" type="hidden"> <input id="patientId" type="hidden" value=""> <span class="bclhfy" style="width: 46px;"><span id="lsz" style=" color:#bcbcc4;">&lt;</span><span>';
$out+=$escape(currentPage);
$out+='</span>/<span id="totalPage">';
$out+=$escape(pages);
$out+='</span><span style=" color:#3598d9; cursor:pointer;">&gt;</span></span> </div> </div> <ul style="margin:0;" id="bclul"> ';
$each(list,function($value,$index){
$out+=' <li class="bclli color-grey ';
$out+=$escape($value.className);
$out+='" id="';
$out+=$escape($value.id);
$out+='" style="margin-top: 10px;"> <div class="bcldiv"> <div><a href="javascript:;" class="f-sixteen">';
$out+=$escape($value.title);
$out+='</a><span style="float:right">';
$out+=$escape($value.num);
$out+='</span></div> <div style="margin-top:10px;"><span>';
$out+=$escape($value.doctor);
$out+='</span><span style="float:right;">';
$out+=$escape($value.time);
$out+='</span></div> </div> </li> ';
});
$out+=' </ul> </div> <div class="bclimg"><img src="bclimg.jpg" width="26px"></div> <div class="bclright" style="overflow-y:auto;"> <ul> ';
$each(msg,function($value,$index){
$out+=' <li class="rightli" id="li';
$out+=$escape($value.id);
$out+='" style="display: ';
$out+=$escape($value.zt);
$out+=';"> <div><span class="ritopic">';
$out+=$escape($value.title);
$out+='</span>(<span class="bclsdian">';
$out+=$escape($value.num);
$out+='</span>)</div> <textarea class="ricon">';
$out+=$escape($value.msg);
$out+='</textarea> <div style="text-align:right;font-size:14px;padding:2px 0;">';
$out+=$escape($value.doctor);
$out+='</div> <div style="text-align:right;color:gray;padding:2px 0;">';
$out+=$escape($value.time);
$out+='</div> </li> ';
});
$out+=' </ul> </div> <div style="clear:both;"></div> </div>';
return new String($out);
});