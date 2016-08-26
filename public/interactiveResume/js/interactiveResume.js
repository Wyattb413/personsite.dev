// (function(){
"use strict";

//==============================================================={Curve Text}======================================================================\

$('#firstHeading').arctext({radius: 300})
$('#secondHeading').arctext({radius: 300})
$('#thirdHeading').arctext({radius: 300, dir: -1})
$('#fourthHeading').arctext({radius: 300})

//==================================================================================================================================================\

//==============================================================={Click Functions}==================================================================\

$('#welcomeClick').click(function(){
	$('#myProjectText').fadeOut();
	$('#careerStoryText').fadeOut();
	$('#contactMeText').fadeOut();
	setTimeout(function(){
		$('#welcomeText').fadeIn();
	},500);
})
$('#myProjectsClick').click(function(){
	$('#welcomeText').fadeOut();
	$('#careerStoryText').fadeOut();
	$('#contactMeText').fadeOut();
	setTimeout(function(){
	$('#myProjectText').fadeIn();
	},500);
	$('#calculatorVid').get(0).load();
	$('#calculatorVid').get(0).play();
})
$('#careerStoryClick').click(function(){
	$('#welcomeText').fadeOut();
	$('#myProjectText').fadeOut();
	$('#contactMeText').fadeOut();	
	setTimeout(function(){
	$('#careerStoryText').fadeIn();
	},500);
})
$('#contactMeClick').click(function(){
	$('#welcomeText').fadeOut();
	$('#myProjectText').fadeOut();
	$('#careerStoryText').fadeOut();
	setTimeout(function(){
	$('#contactMeText').fadeIn();	
	},500);
})
















// })();