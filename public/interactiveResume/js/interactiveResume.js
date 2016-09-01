// (function(){
"use strict";

//==============================================================={Curve Text}======================================================================\

	$('#firstHeading').arctext({radius: 300})
	$('#secondHeading').arctext({radius: 300})
	$('#thirdHeading').arctext({radius: 300, dir: -1})
	$('#fourthHeading').arctext({radius: 300})

//==============================================================={Animated Modal}===================================================================\



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
	$('#videoOverlayCalc').hide();
	$('#videoOverlayColorClock').hide();
	$('#videoOverlaySimpleSimon').hide();
	$('#videoOverlayWeatherMap').hide();

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
	];

	var pageIndicators = [
		'#pageIndicator1',
		'#pageIndicator2',
		'#pageIndicator3',
		'#pageIndicator4'
	];

	var videoOverlays = [
		'#videoOverlayCalc',
		'#videoOverlayColorClock',
		'#videoOverlaySimpleSimon',
		'#videoOverlayWeatherMap'
	]

	var i = 0;

	$('#rightMenuArrow').click(function(){
		$(index[i]).fadeOut();
		$(videoOverlays[i]).fadeOut();
		$(pageIndicators[i]).animate({backgroundColor: '#566246'}, '450');
		i += 1;
		if (i >= 4) {
			i = 0;
		}
		setTimeout(function(){
			$(index[i]).fadeIn();
			$(videoOverlays[i]).fadeIn();
			$(pageIndicators[i]).animate({backgroundColor: '#F4D49C'}, '500');
		},500);
		$(index[i]).get(0).load();
		$(index[i]).get(0).play();
	});

	$('#leftMenuArrow').click(function(){
		$(index[i]).fadeOut();
		$(videoOverlays[i]).fadeOut();
		$(pageIndicators[i]).animate({backgroundColor: '#566246'}, '450');
		i -= 1;
		if (i <= -1) {
			i = 3;
		}
		setTimeout(function(){
			$(index[i]).fadeIn();
			$(videoOverlays[i]).fadeIn();
			$(pageIndicators[i]).animate({backgroundColor: '#F4D49C'}, '500');
		},500);
		$(index[i]).get(0).load();
		$(index[i]).get(0).play();
	});

	$('#pageIndicator1').click(function(){
		$(index[i]).fadeOut();
		$(videoOverlays[i]).fadeOut();
		$(pageIndicators[i]).animate({backgroundColor: '#566246'}, '450');
		i =0
		setTimeout(function(){
			$(index[i]).fadeIn();
			$(videoOverlays[i]).fadeIn();
			$(pageIndicators[i]).animate({backgroundColor: '#F4D49C'}, '500');
		},500);
		$(index[i]).get(0).load();
		$(index[i]).get(0).play();
	});
	$('#pageIndicator2').click(function(){
		$(index[i]).fadeOut();
		$(videoOverlays[i]).fadeOut();
		$(pageIndicators[i]).animate({backgroundColor: '#566246'}, '450');
		i =1
		setTimeout(function(){
			$(index[i]).fadeIn();
			$(videoOverlays[i]).fadeIn();
			$(pageIndicators[i]).animate({backgroundColor: '#F4D49C'}, '500');
		},500);
		$(index[i]).get(0).load();
		$(index[i]).get(0).play();
	});
	$('#pageIndicator3').click(function(){
		$(index[i]).fadeOut();
		$(videoOverlays[i]).fadeOut();
		$(pageIndicators[i]).animate({backgroundColor: '#566246'}, '450');
		i =2
		setTimeout(function(){
			$(index[i]).fadeIn();
			$(videoOverlays[i]).fadeIn();
			$(pageIndicators[i]).animate({backgroundColor: '#F4D49C'}, '500');
		},500);
		$(index[i]).get(0).load();
		$(index[i]).get(0).play();
	});
	$('#pageIndicator4').click(function(){
		$(index[i]).fadeOut();
		$(videoOverlays[i]).fadeOut();
		$(pageIndicators[i]).animate({backgroundColor: '#566246'}, '450');
		i =3
		setTimeout(function(){
			$(index[i]).fadeIn();
			$(videoOverlays[i]).fadeIn();
			$(pageIndicators[i]).animate({backgroundColor: '#F4D49C'}, '500');
		},500);
		$(index[i]).get(0).load();
		$(index[i]).get(0).play();
	});

	function hideVideoOverlays() {
		$('#videoOverlayCalc').hide();
		$('#videoOverlayColorClock').hide();
		$('#videoOverlaySimpleSimon').hide();
		$('#videoOverlayWeatherMap').hide();
	}

	function showVideoOverlay() {
		$(videoOverlays[i]).fadeIn();
	}

//==========================================================={Function For Page Indicators}==========================================================\

//============================================================={Click Functions For Content}=========================================================\
	$('#welcomeClick').click(function(){
		$('#myProjectText').fadeOut();
		$('#careerStoryText').fadeOut();
		$('#contactMeText').fadeOut();
		hideVideoOverlays();
		hideMenuArrows();
		hidePageIndicators();
		setTimeout(function(){
			$('#welcomeText').fadeIn();
		},500);
	});
	$('#myProjectsClick').click(function(){
		$('#welcomeText').fadeOut();
		$('#careerStoryText').fadeOut();
		$('#contactMeText').fadeOut();
		setTimeout(function(){
		$('#myProjectText').fadeIn();
		$('#videoOverlayCalc').fadeIn();
		showVideoOverlay();
		showMenuArrows();
		showPageIndicators();
		$(pageIndicators[i]).css('background', '#F4D49C');
		},500);
		$('#calcVideo').get(0).load();
		$('#calcVideo').get(0).play();
	});
	$('#careerStoryClick').click(function(){
		$('#welcomeText').fadeOut();
		$('#myProjectText').fadeOut();
		$('#contactMeText').fadeOut();
		hideVideoOverlays();
		hideMenuArrows();
		hidePageIndicators();
		setTimeout(function(){
		$('#careerStoryText').fadeIn();
		},500);
	});
	$('#contactMeClick').click(function(){
		$('#welcomeText').fadeOut();
		$('#myProjectText').fadeOut();
		$('#careerStoryText').fadeOut();
		hideVideoOverlays();
		hideMenuArrows();
		hidePageIndicators();
		setTimeout(function(){
		$('#contactMeText').fadeIn();	
		},500);
	});


$('#videoOverlayCalc').click(function(){
	$("#calcModal").animatedModal({
		modalTarget:'calcAnimatedModal',
		animatedIn:'fadeInLeft',
        animatedOut:'bounceOutDown',
        animationDuration:".5s"
	})
	$('#calcModalContent').load('/interactiveResume/projects/calculatorPersonalSite.html');
	$('#calcModalContent').css('background-image: url(/interactiveResume/img/gray-floral.png)');
});
$('#videoOverlayColorClock').click(function(){
	alert('ColorClock');
});
$('#videoOverlaySimpleSimon').click(function(){
	alert('SimpleSimon');
});
$('#videoOverlayWeatherMap').click(function(){
	alert('WeatherMap');
});



//current varible that changes every "page" load





// })();