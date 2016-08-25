// (function(){
"use strict";

//==============================================================={Curve Text}======================================================================\

$('#firstHeading').arctext({radius: 300})
$('#secondHeading').arctext({radius: 300})
$('#thirdHeading').arctext({radius: 300, dir: -1})
$('#fourthHeading').arctext({radius: 300})

//==================================================================================================================================================\

//==============================================================={Click Functions}==================================================================\

$('#myProjectsClick').click(function(){
	$('#welcomeText').remove();
	var myProjectTextDiv = $('#myProjectTextDiv').html(); 
	$('#welcomeTextDiv').html(myProjectTextDiv);
})
















// })();