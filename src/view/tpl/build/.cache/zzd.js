/*TMODJS:{"version":1,"md5":"61efbe1c8813b8669200a2ef6fb360ee"}*/
template('zzd',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$out='';include('./public/zzd-person');
$out+=' ';
include('./public/zzd-disease');
$out+=' ';
include('./public/zzd-referred');
$out+=' ';
include('./public/zzd-enter');
return new String($out);
});