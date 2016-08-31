// (function(){
"use strict";

//==============================================================={Curve Text}======================================================================\

	$('#firstHeading').arctext({radius: 300})
	$('#secondHeading').arctext({radius: 300})
	$('#thirdHeading').arctext({radius: 300, dir: -1})
	$('#fourthHeading').arctext({radius: 300})

//========================================================={Hide Content On Page Load}==============================================================\

	$('#myProjectText').hide();
	$('#careerStoryText').hide();
	$('#contactMeText').hide();
	$('#rightMenuArrow').hide();
	$('#leftMenuArrow').hide();
	$('#colorClockVideo').hide();
	$('#simpleSimonVideo').hide();
	$('#weatherMapVideo').hide();
	$('#pageIndicator1').hide();
	$('#pageIndicator2').hide();
	$('#pageIndicator3').hide();
	$('#pageIndicator4').hide();

//=========================================================={Functions For Page Indicators}=========================================================\

	function hidePageIndicators() {
		$('#pageIndicator1').hide();
		$('#pageIndicator2').hide();
		$('#pageIndicator3').hide();
		$('#pageIndicator4').hide();
	}

	function showPageIndicators() {
		$('#pageIndicator1').fadeIn();
		$('#pageIndicator2').fadeIn();
		$('#pageIndicator3').fadeIn();
		$('#pageIndicator4').fadeIn();
	}

//=========================================================={Functions For Menu Arrows}==============================================================\

	function hideMenuArrows() {
		$('#rightMenuArrow').hide();
		$('#leftMenuArrow').hide();
	}

	function showMenuArrows() {
		$('#rightMenuArrow').fadeIn();
		$('#leftMenuArrow').fadeIn();
	}
	var index = [
		'#calcVideo',
		'#colorClockVideo',
		'#simpleSimonVideo',
		'#weatherMapVideo'
	]

	var pageIndicators = [
		'#pageIndicator1',
		'#pageIndicator2',
		'#pageIndicator3',
		'#pageIndicator4'
	]

	var i = 0;

	$('#rightMenuArrow').click(function(){
		$(index[i]).fadeOut();
		$(pageIndicators[i]).animate({backgroundColor: '#566246'}, '450');
		i += 1;
		if (i >= 4) {
			i = 0;
		}
		setTimeout(function(){
			$(index[i]).fadeIn();
			$(pageIndicators[i]).animate({backgroundColor: '#F4D49C'}, '500');
		},500);
		$(index[i]).get(0).load();
		$(index[i]).get(0).play();
	})

	$('#leftMenuArrow').click(function(){
		$(index[i]).fadeOut();
		$(pageIndicators[i]).animate({backgroundColor: '#566246'}, '450');
		i -= 1;
		if (i <= -1) {
			i = 3;
		}
		setTimeout(function(){
			$(index[i]).fadeIn();
			$(pageIndicators[i]).animate({backgroundColor: '#F4D49C'}, '500');
		},500);
		$(index[i]).get(0).load();
		$(index[i]).get(0).play();
	})



//==========================================================={Function For Page Indicators}==========================================================\

//============================================================={Click Functions For Content}=========================================================\
	$('#welcomeClick').click(function(){
		$('#myProjectText').fadeOut();
		$('#careerStoryText').fadeOut();
		$('#contactMeText').fadeOut();
		hideMenuArrows();
		hidePageIndicators();
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
		showMenuArrows();
		showPageIndicators();
		$(pageIndicators[i]).css('background', '#F4D49C');
		},500);
		$('#calcVideo').get(0).load();
		$('#calcVideo').get(0).play();
	})
	$('#careerStoryClick').click(function(){
		$('#welcomeText').fadeOut();
		$('#myProjectText').fadeOut();
		$('#contactMeText').fadeOut();
		hideMenuArrows();
		hidePageIndicators();
		setTimeout(function(){
		$('#careerStoryText').fadeIn();
		},500);
	})
	$('#contactMeClick').click(function(){
		$('#welcomeText').fadeOut();
		$('#myProjectText').fadeOut();
		$('#careerStoryText').fadeOut();
		hideMenuArrows();
		hidePageIndicators();
		setTimeout(function(){
		$('#contactMeText').fadeIn();	
		},500);
	})














// })();