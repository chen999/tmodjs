/*TMODJS:{"version":1,"md5":"fad516589386e114d0b170e42839cc30"}*/
template('public/firstPage-title',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,name=$data.name,$out='';$out+=' <div class="m-shouye_topic"><span>';
$out+=$escape(name);
$out+='</span><br>欢迎回到双向转诊医疗平台！</div>';
return new String($out);
});