<!DOCTYPE html>
<html>
	<head>
		<title>In A Galaxy Far Far Away...</title>
		<!==============================================================={BootStrap V3.3.7}=============================================================\>
		<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
		<!/============================================================{Custom Style Sheet}=============================================================\>
		<link rel="stylesheet" type="text/css" href="/interactiveResume/css/interactiveResume.css">
		<!/============================================================{Google Font}====================================================================\>
		<link href="https://fonts.googleapis.com/css?family=Tillana" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Arapey" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Bad+Script" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Bungee+Hairline" rel="stylesheet">
		<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.min.css">
		<link rel="stylesheet" type="text/css" href="/interactiveResume/projects/css/calculatorPersonalSite.css">
		<link rel="stylesheet" type="text/css" href="/interactiveResume/projects/css/colorClockPersonalSite.css">
	</head>
	<body>
		<div class="stars"></div>
		<div class="twinkling"></div>
		<div class="wrapper">
			<div class="container">
				<div class="row">
					<div class="col-sm-3 col-sm-offset-3 circleContainer">
						<img src="/interactiveResume/img/ropeBorder.png" class="ropeBorder">
						<div class="innerCircle">
							<div id="innerCircleTextDiv" class="displayTable">
								<!-- <p id="welcomeText">
								Hello There!<br>
								It's Nice To Meet You
								</p> -->
								<div id="myProjectText">
									<video id="calcVideo" class="video">
										<source src="/interactiveResume/vid/calculatorProjectDemo.mp4" type='video/mp4'></source>"
									</video>
									<video id="colorClockVideo" class="video">
										<source src="/interactiveResume/vid/colorClockProjectDemo.mp4" type='video/mp4'></source>"
									</video>
									<video id="simpleSimonVideo" class="video">
										<source src="/interactiveResume/vid/simpleSimonProjectDemo.mp4" type='video/mp4'></source>"
									</video>
									<video id="weatherMapVideo" class="video">
										<source src="/interactiveResume/vid/weatherMapProjectDemo.mp4" type='video/mp4'></source>"
									</video>
								</div>
								<p id="careerStoryText">
									This is My Career Story
								</p>
								<p id="contactMeText">
									Contact Me
								</p>
							</div>
						</div>
						<div class="outerCircle"></div>
						<a href="#calcAnimatedModal" id="calcModal">
							<div id=videoOverlayCalc class="videoOverlay"></div>
						</a>
						<a href="#colorClockAnimatedModal" id="colorClockModal">
							<div id=videoOverlayColorClock class="videoOverlay"></div>
						</a>
						<a href="#simpleSimonAnimatedModal" id="simpleSimonModal">
							<div id=videoOverlaySimpleSimon class="videoOverlay"></div>
						</a>
						<a href="#" data-toggle="modal" data-target="weatherMapModal">
							<div id=videoOverlayWeatherMap class="videoOverlay"></div>
						</a>
						<a href="#"><img src="/interactiveResume/img/rightMenuArrow.png" id="rightMenuArrow"></a>
						<a href="#"><img src="/interactiveResume/img/leftMenuArrow.png" id="leftMenuArrow"></a>
						<a href="#"><div id="pageIndicator1" class="pageIndicator"></div></a>
						<a href="#"><div id="pageIndicator2" class="pageIndicator"></div></a>
						<a href="#"><div id="pageIndicator3" class="pageIndicator"></div></a>
						<a href="#"><div id="pageIndicator4" class="pageIndicator"></div></a>
						<div class="row">
							<a href="#" id="welcomeClick"><h1 id="firstHeading">Welcome!</h1></a>
						</div>
						<div class="row">
							<a href="#" id="myProjectsClick"><h1 id="secondHeading">• My Projects •</h1></a>
						</div>
						<div class="row">
							<a href="#" id="careerStoryClick"><h1 id="thirdHeading">• Career Story •</h1></a>
						</div>
						<div class="row">
							<a href="#" id="contactMeClick"><h1 id="fourthHeading">• Contact Me •</h1></a>
						</div>
					</div>
				</div>
			</div>
		</div>

<!//==============================================================={Modals}==============================================================\>

    <!--Calc Modal-->
    <div id="calcAnimatedModal" class="animated animateModal-off bounceOutDown">
        <!--THIS IS IMPORTANT! to close the modal, the class name has to match the name given on the ID  class="close-animatedModal" -->
        <div class="modal-content" id="calcModalContent">
	        <div class="close-calcAnimatedModal"> 
		        <button id="calcVideoClose">Close Modal</button>
	        </div>
            <?php include "interactiveResume/projects/calculatorPersonalSite.html" ?>    
        </div>
    </div>
	<!--ColorClock Modal-->
    <div id="colorClockAnimatedModal" class="animated animateModal-off bounceOutDown">
        <div class="modal-content" id="colorClockModalContent">
        	<div class="close-colorClockAnimatedModal"> 
	            <button id="colorClockVideoClose">Close Modal</button>
	        </div>
            <?php include "interactiveResume/projects/colorClockPersonalSite.html" ?>    
        </div>
    </div>
		

		<!/=============================================================={Jquery V2.1.3}================================================================\>
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
		<!//==============================================================={Jquery Ui V1.12}===========================================================\>
			<script   src="https://code.jquery.com/ui/1.12.0/jquery-ui.js"   integrity="sha256-0YPKAwZP7Mp3ALMRVB2i8GXeEndvCq3eSl/WsAl1Ryk="   crossorigin="anonymous"></script>
		<!//==================================================={BootStrap JavaScript V3.3.7}============================================================\>
			<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		<!//==============================================================={Arc Text Library}===========================================================\>
			<script src="/interactiveResume/arctext/js/jquery.arctext.js"></script>
			<script src="/interactiveResume/js/animatedModal.min.js"></script>
		<!//============================================================={Custom JavaScript}============================================================\>
			<script src="/interactiveResume/js/interactiveResume.js"></script>
	</body>
</html>