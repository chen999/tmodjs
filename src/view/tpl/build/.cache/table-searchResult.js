/*TMODJS:{"version":4,"md5":"d1464306e1f771304e3fb1d75ee58052"}*/
template('table-searchResult',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$out='';include('./public/table-searchResult-title');
$out+=' ';
include('./public/searchResult-table');
$out+=' ';
include('./public/pageMenu');
return new String($out);
});