/*TMODJS:{"version":1,"md5":"c9a66b0c6c11ee504baabd0d203cff99"}*/
template('public/table-searchResult-table',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,title=$data.title,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,list=$data.list,$out='';$out+='<div class="g-foot-con"> <table width="100%" cellspacing="0" cellpadding="0"> <tbody><tr class="bftr1"> ';
$each(title,function($value,$index){
$out+=' <th>';
$out+=$escape($value.title1);
$out+='</th> <th>';
$out+=$escape($value.title2);
$out+='</th> <th>';
$out+=$escape($value.title3);
$out+='</th> <th>';
$out+=$escape($value.title4);
$out+='</th> <th>';
$out+=$escape($value.title5);
$out+='</th> <th>';
$out+=$escape($value.title6);
$out+='</th> <th>';
$out+=$escape($value.title7);
$out+='</th> <th>';
$out+=$escape($value.title8);
$out+='</th> <th>';
$out+=$escape($value.title9);
$out+='</th> <th>';
$out+=$escape($value.title10);
$out+='</th> <th class="opera-width">';
$out+=$escape($value.title11);
$out+='</th> ';
});
$out+=' </tr> </tbody><tbody id="btable"> ';
$each(list,function($value,$index){
$out+=' <tr class="bftr2 color-grey"> <td>';
$out+=$escape($value.item1);
$out+='</td> <td>';
$out+=$escape($value.item2);
$out+='</td> <td>';
$out+=$escape($value.item3);
$out+='</td> <td>';
$out+=$escape($value.item4);
$out+='</td> <td>';
$out+=$escape($value.item5);
$out+='</td> <td><span class="green">';
$out+=$escape($value.item6);
$out+='</span></td> <td>';
$out+=$escape($value.item7);
$out+=' </td> <td>';
$out+=$escape($value.item8);
$out+='</td> <td>';
$out+=$escape($value.item9);
$out+='</td> <td class="relative"><span class="circle cir_gray"></span> ';
$out+=$escape($value.item10);
$out+=' </td> <td> <ul> <li class="caozuoli"> <a name="1" href="" id="act1"><div class="caozuo" title="查看"><img src="../images/page/caozuoimg07.png"></div></a> </li> <li class="caozuoli"> <div class="caozuo" title="删除" style="cursor:pointer;"> <img src="../images/page/caozuoimg08.png" onclick="deleteCase(&#39;1683&#39;)"> </div> </li> </ul> </td> </tr> ';
});
$out+=' </tbody> </table> </div> ';
return new String($out);
});