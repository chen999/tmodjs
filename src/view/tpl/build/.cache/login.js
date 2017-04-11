/*TMODJS:{"version":15,"md5":"c698ede069ce2ca3fb8f3d97d86db0d1"}*/
template('login',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$out='';include('./public/login-menu');
$out+=' ';
return new String($out);
});