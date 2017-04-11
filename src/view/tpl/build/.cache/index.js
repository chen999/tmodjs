/*TMODJS:{"version":2,"md5":"4e1d691518824573cf8440d7b55e1b23"}*/
template('index',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$out='';$out+='<div class="g-sqd_con g-sqd-margin"> ';
include('./public/index-menu');
$out+=' <div class="g-in-enter clearfloat" id="luru"> ';
include('./public/import-table');
$out+=' </div> </div>';
return new String($out);
});