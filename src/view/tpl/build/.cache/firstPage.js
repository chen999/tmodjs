/*TMODJS:{"version":4,"md5":"cdbced19a19bccae587aa13578441eab"}*/
template('firstPage',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$out='';include('./public/firstPage-title');
$out+=' ';
include('./public/applyResult-table');
$out+=' ';
return new String($out);
});