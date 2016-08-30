// (function(){
"use strict";

//==============================================================={Curve Text}======================================================================\

$('#firstHeading').arctext({radius: 300})
$('#secondHeading').arctext({radius: 300})
$('#thirdHeading').arctext({radius: 300, dir: -1})
$('#fourthHeading').arctext({radius: 300})

//==================================================================================================================================================\

//==============================================================={Click Functions}==================================================================\
$('#myProjectText').hide();
$('#careerStoryText').hide();
$('#contactMeText').hide();
$('#rightMenuArrow').hide();
$('#leftMenuArrow').hide();
$('#colorClockVideo').hide();


$('#welcomeClick').click(function(){
	$('#myProjectText').fadeOut();
	$('#careerStoryText').fadeOut();
	$('#contactMeText').fadeOut();
	$('#rightMenuArrow').hide();
	$('#leftMenuArrow').hide();
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
	$('#rightMenuArrow').fadeIn();
	$('#leftMenuArrow').fadeIn();
	},500);
	$('#calcVideo').get(0).load();
	$('#calcVideo').get(0).play();
})
$('#careerStoryClick').click(function(){
	$('#welcomeText').fadeOut();
	$('#myProjectText').fadeOut();
	$('#contactMeText').fadeOut();
	$('#rightMenuArrow').hide();
	$('#leftMenuArrow').hide();	
	setTimeout(function(){
	$('#careerStoryText').fadeIn();
	},500);
})
$('#contactMeClick').click(function(){
	$('#welcomeText').fadeOut();
	$('#myProjectText').fadeOut();
	$('#careerStoryText').fadeOut();
	$('#rightMenuArrow').hide();
	$('#leftMenuArrow').hide();
	setTimeout(function(){
	$('#contactMeText').fadeIn();	
	},500);
})


$('#rightMenuArrow').click(function(){
	$('#calcVideo').fadeOut();
	setTimeout(function(){
	$('#colorClockVideo').fadeIn();
	},500);
	$('#colorClockVideo').get(0).load();
	$('#colorClockVideo').get(0).play();
})
$('#leftMenuArrow').click(function(){
	$('#colorClockVideo').fadeOut();
	setTimeout(function(){
	$('#calcVideo').fadeIn();
	},500);
	$('#calcVideo').get(0).load();
	$('#calcVideo').get(0).play();
})












// })();