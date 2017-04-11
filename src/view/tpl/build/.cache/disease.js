/*TMODJS:{"version":1,"md5":"d31adac6240e61f12d566716ba8278fe"}*/
template('disease',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$out='';include('./public/disease-list');
return new String($out);
});