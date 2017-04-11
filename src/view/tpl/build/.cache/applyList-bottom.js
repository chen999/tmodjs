/*TMODJS:{"version":4,"md5":"df838dae3ffd8f93b4fe10ad9ec6a529"}*/
template('applyList-bottom',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$out='';include('./public/applyList-bottom-title');
$out+=' ';
include('./public/applyList-bottom-table');
$out+=' ';
include('./public/applyList-bottom-page');
return new String($out);
});