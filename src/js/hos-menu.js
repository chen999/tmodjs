// JavaScript Document

// 控制系统菜单展开按钮
var comnum=0;
showcommenu();
function showcommenu(){	
	if(comnum==0){
		$("#com-menu").show();
		comnum=1;
		}
	else{
		if(comnum==1){
		$("#com-menu").hide();
		comnum=0;}
		}

	}
var docnum=0;
showdocmenu();
function showdocmenu(){	
	if(docnum==0){
		$("#doc-menu").show();
		docnum=1;
		}
	else{
		if(docnum==1){
		$("#doc-menu").hide();
		docnum=0;}
		}

	}