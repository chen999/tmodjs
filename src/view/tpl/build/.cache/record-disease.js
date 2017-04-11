/*TMODJS:{"version":2,"md5":"95e2f6bd722e57d55904eb5197e66c7c"}*/
template('record-disease',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$out='';include('./public/record-disease-list');
return new String($out);
});