/*TMODJS:{"version":2,"md5":"b3ae1a6c231acea2686da0d97c36242f"}*/
template('msg',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$out='';include('./public/msg-person');
$out+=' ';
include('./public/msg-disease');
$out+=' ';
include('./public/msg-referred');
$out+=' ';
include('./public/msg-enter');
return new String($out);
});