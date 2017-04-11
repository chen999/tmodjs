/*TMODJS:{"version":1,"md5":"ad023cbd0e2a4e106127202413bc6bf8"}*/
template('hosmenu',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$out='';include('./public/hosmenuNav');
$out+=' ';
include('./public/hosmenuFooter');
return new String($out);
});