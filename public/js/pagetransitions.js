/**
 * modalEffects.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */


var ModalEffects = (function() {

	function init() {

		var overlay = document.querySelector( '.md-overlay' );

		[].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {

			var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
				close = modal.querySelector( '.md-close' );

			function removeModal( hasPerspective ) {
				classie.remove( modal, 'md-show' );

				if( hasPerspective ) {
					$(".cancel").css('visibility','');
					document.getElementById("createAnother").innerHTML = "Cancel";
					classie.remove( document.documentElement, 'md-perspective' );
				}
			}

			function removeModalHandler() {
				removeModal( classie.has( el, 'md-setperspective' ) ); 
			}

			el.addEventListener( 'click', function( ev ) {
				$(".cancel").css('visibility','hidden');
				$("#thankYouText").css('display','none');
				$("#replaceText").css('visibility','');
				$("#replaceSendText").css('display','');
				classie.add( modal, 'md-show' );
				overlay.removeEventListener( 'click', removeModalHandler );
				overlay.addEventListener( 'click', removeModalHandler );

				if( classie.has( el, 'md-setperspective' ) ) {
					setTimeout( function() {
						classie.add( document.documentElement, 'md-perspective' );
					}, 25 );
				}
			});

			close.addEventListener( 'click', function( ev ) {
				
				ev.stopPropagation();
				removeModalHandler();
			});
            

		} );

	}

	init();

})();

var nounPhrases = ["I'm on my period", "It's shark week", "I'm parting the red sea", "There's a crime scene in my pants", "Auntie Flo is in the house",
                  "Mother nature gave me a gift", "I'm walking down the red carpet", "I'm riding the crimson wave", "I'm raising the red Flag", 
                   "The big red monster is in town", "It's that time of the month"];
var currentNounPhrase = 0;

var verbPhrases = ["talk to", "discuss with", "explain to", "buy", "sell", "give", "lend"];
var currentVerbPhrase = 0;

var subjectPhrases = ["it", "what to do", "tampons", "pads", "pooter plugs", "bloodplugs", "rags", "P's", "T's"];
var currentSubjectPhrase = 0;

var currentColor = "pink";

function getColor(){
	switch(currentColor){
	case "blue":
			return '#27a9e1';
	case "red":
			return '#be1e2d';
	case "pink":
			return '#d91b5b';
	case "yellow":
			return '#e3ba22';
	}
	
	return '#be1e2d';
}

function modifySubPhrase(){
    currentSubjectPhrase = (currentSubjectPhrase-1)%9
    if(currentVerbPhrase == 0||currentVerbPhrase == 1|| currentVerbPhrase == 2){
        return "about " + subjectPhrases[currentSubjectPhrase];
    }
    else{
        if(currentSubjectPhrase>1){
            return subjectPhrases[currentSubjectPhrase];
        }
        else{
            currentSubjectPhrase = 2;
            return subjectPhrases[currentSubjectPhrase];
        }
    }
	
	return "NULL";
}

function getImage(){
    var currentPhrase = (currentNounPhrase-1)%11
    switch(currentPhrase){
			
        case 0:
            $('#imageOption').css('background-image', 'none');
            //alert('image option zero is working');
            break;
        case 1:
			console.log("getImage() is returning 1");
            return "http://i62.tinypic.com/2ilhhme.png"; //absolute path in static, relative path in node e.g. ../img/shark.png
            //alert('image option zero is working');
            break;
        case 2:
			console.log("getImage() is returning 2");
            return "http://i60.tinypic.com/2ro14j4.png"; //wave
            //alert('image option zero is working');
            break;
        case 3:
			console.log("getImage() is returning 3");
            return "http://i57.tinypic.com/2i9g6u.png"; //crime
            //alert('image option zero is working');
            break;
        case 4:
			console.log("getImage() is returning 4");
            return  "http://i59.tinypic.com/11c6y6b.png";
            //alert('image option zero is working');
            break;
        case 5:
			console.log("getImage() is returning 5");
            return "http://i61.tinypic.com/jl5vue.png";
            //alert('image option zero is working');
            break;
        case 6:
			console.log("getImage() is returning 6");
            return "http://i59.tinypic.com/2w1sjmv.png"; //carpet
            //alert('image option zero is working');
            break;
        case 7:
			console.log("getImage() is returning 7");
           return "http://i61.tinypic.com/2gua8t0.jpg"; //surf
            //alert('image option zero is working');
            break;
        case 8:
			console.log("getImage() is returning 8");
            return "http://i57.tinypic.com/t6sehf.png"; //flag
            //alert('image option zero is working');
            break;
        case 9:
			console.log("getImage() is returning 9");
            return "http://i59.tinypic.com/11c6y6b.png"; //mother
            //alert('image option zero is working');
            break;
        case 10:
			console.log("getImage() is returning 10");
            return "http://i61.tinypic.com/2wecly0.png"; //clock
            //alert('image option zero is working');
            break;
        
    }
	console.log("getImage() is returning default case, should not happen");
	return "http://i61.tinypic.com/2wecly0.png";
}



function sendMail(){
	
	console.log(nounPhrases[currentNounPhrase]);
	console.log(verbPhrases[currentVerbPhrase]);
	console.log(subjectPhrases[currentSubjectPhrase]);
	
	var rawHtml = '<link href="http://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css"><div style = "background-color: '+ getColor()+'; height: 700px; width: 1200px; background-image:url(' + getImage() +  ');background-position: left bottom;background-repeat: no-repeat;"><img src = "http://i61.tinypic.com/2rtkp.png" height= "30px" width = "auto" style = "margin: 15px;"><div style = "text-align: center; font-size: 35px; color: white;"><h1 style = "color: white;">' + nounPhrases[currentNounPhrase-1] + ' </h1><h1 style = "color: white;">and I want you to ' + verbPhrases[currentVerbPhrase-1] +'</h1><h1 style = "color: white;"> me ' + modifySubPhrase() + '</h1></div></div>';
	console.log(rawHtml);
	
	var senderName = document.getElementById("senderName").value;
	var receiverEmail = document.getElementById("receiverEmail").value;
	var receiverName = document.getElementById("receiverName").value;
	
  $.ajax({
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
      'key': 'eMSqdATj1O_p4lAQTeY8Kg',
      'message': {
        'from_email': 'BloodBud@BloodBud.com',
        'to': [
          {
            'email': receiverEmail,
            'name': receiverName,
            'type': 'to'
          }
        ],
        'subject': senderName,
        'html': 	rawHtml
      }
    }
  });
	
	document.getElementById("createAnother").innerHTML = "Create another card";
	$("#thankYouText").css('display','inline-block');
	$("#replaceText").css('visibility','hidden');
	$("#replaceSendText").css('display','none');

}




var PageTransitions = (function() {
	var $main = $( '#pt-main' ),
		$pages = $main.children( 'div.pt-page' ),
		$iterate = $( '#iterateEffects' ),
		animcursor = 1,
		pagesCount = $pages.length,
		current = 0,
		isAnimating = false,
		endCurrPage = false,
		endNextPage = false,
		animEndEventNames = {
			'WebkitAnimation' : 'webkitAnimationEnd',
			'OAnimation' : 'oAnimationEnd',
			'msAnimation' : 'MSAnimationEnd',
			'animation' : 'animationend'
		},
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
		// support css animations
		support = Modernizr.cssanimations;
	
	function init() {

		$pages.each( function() {
			var $page = $( this );
			$page.data( 'originalClassList', $page.attr( 'class' ) );
		} );

		$pages.eq( current ).addClass( 'pt-page-current' );

		$iterate.on( 'click', function() {
			if( isAnimating ) {
				return false;
			}
			if( true ) {
				animcursor = 1;
			}
			nextPage( animcursor );
		} );

	}
	
	function nextPage(options ) {
		var animation = (options.animation) ? options.animation : options;

		if( isAnimating ) { //If the page is currently sliding, don't animate
			return false;
		}

		isAnimating = true; //otherwise, the page will animate when you click this button
		
		var $currPage = $pages.eq( current ); //the current page is the div that we are currently on

		if(true){
			if( current == 1) { //if the screen is currently showing the second page
				current = 1; // set the page equal to the second page
			}
			else {
				current = 1; // set the page equal to the second page
			}
		}
        
        var $currPage = $pages.eq( current ); //the current page is the div that we are currently on
        
        
         console.log("First slide transition: " + current);

		var $nextPage = $pages.eq( current ).addClass( 'pt-page-current' ),
			outClass = '', inClass = '';

		switch( animation ) {

			case 1:
				outClass = 'pt-page-moveToTop';
				inClass = 'pt-page-moveFromBottom';
				break;

		}

		$currPage.addClass( outClass ).on( animEndEventName, function() {
			$currPage.off( animEndEventName );
			endCurrPage = true;
			if( endNextPage ) {
				onEndAnimation( $currPage, $nextPage );
			}
		} );

		$nextPage.addClass( inClass ).on( animEndEventName, function() {
			$nextPage.off( animEndEventName );
			endNextPage = true;
			if( endCurrPage ) {
				onEndAnimation( $currPage, $nextPage );
			}
		} );

		if( !support ) {
			onEndAnimation( $currPage, $nextPage );
		}

	}

	function onEndAnimation( $outpage, $inpage ) {
		endCurrPage = false;
		endNextPage = false;
		resetPage( $outpage, $inpage ); //at end of animation, locks into next screen
		isAnimating = false;
	}

	function resetPage( $outpage, $inpage ) {
		$outpage.attr( 'class', $outpage.data( 'originalClassList' ) );
		$inpage.attr( 'class', $inpage.data( 'originalClassList' ) + ' pt-page-current' );
	}

	init();

	return { 
		init : init,
		nextPage : nextPage,
	};

})();

var PageTransitions = (function() {

	var $main = $( '#pt-main' ),
		$pages = $main.children( 'div.pt-page' ),
		$iterate = $( '#iterateEffects1' ),
		animcursor = 1,
		pagesCount = $pages.length,
		current = 0,
		isAnimating = false,
		endCurrPage = false,
		endNextPage = false,
		animEndEventNames = {
			'WebkitAnimation' : 'webkitAnimationEnd',
			'OAnimation' : 'oAnimationEnd',
			'msAnimation' : 'MSAnimationEnd',
			'animation' : 'animationend'
		},
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
		// support css animations
		support = Modernizr.cssanimations;
	
	function init() {

		$pages.each( function() {
			var $page = $( this );
			$page.data( 'originalClassList', $page.attr( 'class' ) );
		} );

		$pages.eq( current ).addClass( 'pt-page-current' );


		$iterate.on( 'click', function() {
			if( isAnimating ) {
				return false;
			}
			if( true ) {
				animcursor = 1;
			}
			nextPage( animcursor );
		} );

	}

	function nextPage(options ) {
		var animation = (options.animation) ? options.animation : options;

		if( isAnimating ) {
			return false;
		}

		isAnimating = true;
		
		

		if(true){
			if( current == 1) {
				current = 1;
                console.log("if statement triggered");
			}
			else {
				current = 1;
                console.log("else statement triggered");
			}
		}
        
        var $currPage = $pages.eq( current );
        console.log("Second slide transition: " + current);

		var $nextPage = $pages.eq( current ).addClass( 'pt-page-current' ),
			outClass = '', inClass = '';

		switch( animation ) {

			case 1:
				outClass = 'pt-page-moveToBottom';
				inClass = 'pt-page-moveFromTop';
				break;
		}

		$currPage.addClass( outClass ).on( animEndEventName, function() {
			$currPage.off( animEndEventName );
			endCurrPage = true;
			if( endNextPage ) {
				onEndAnimation( $currPage, $nextPage );
			}
		} );

		$nextPage.addClass( inClass ).on( animEndEventName, function() {
			$nextPage.off( animEndEventName );
			endNextPage = true;
			if( endCurrPage ) {
				onEndAnimation( $currPage, $nextPage );
                console.log($currPage)
			}
		} );

		if( !support ) {
			onEndAnimation( $currPage, $nextPage );
		}

	}

	function onEndAnimation( $outpage, $inpage ) {
		endCurrPage = false;
		endNextPage = false;
		resetPage( $outpage, $inpage );
		isAnimating = false;
	}

	function resetPage( $outpage, $inpage ) {
		$outpage.attr( 'class', $outpage.data( 'originalClassList' ) + ' pt-page-current');
		$inpage.attr( 'class', $inpage.data( 'originalClassList' )  );
	}

	init();

	return { 
		init : init,
		nextPage : nextPage,
	};

})();

// COLOR JAVASCRIPT


$('#blueColorButton').click(function(){
    $("#imageOption").css('background-color','#27a9e1');
    $("input").css('border-color','#27a9e1');
    $(".md-content").css('color','#27a9e1');
    $("#blueColorButton").css('border-color','white');
    
    $("#redColorButton").css('border-color','#be1e2d');
    $("#yellowColorButton").css('border-color','#e3ba22');
    $("#pinkColorButton").css('border-color','#d91b5b');
	currentColor = "blue";
    
    //$("#blueColorButton").css('outline-style','solid');
    //$("#blueColorButton").css('outline-width','5px');
    //$("#blueColorButton").css('outline-color','white');

});

$('#pinkColorButton').click(function(){
    $("#imageOption").css('background-color','#d91b5b');
    $("input").css('border-color','#d91b5b');
    $(".md-content").css('color','#d91b5b');
    
    $("#pinkColorButton").css('border-color','white');
    $("#redColorButton").css('border-color','#be1e2d');
    $("#yellowColorButton").css('border-color','#e3ba22');
    $("#blueColorButton").css('border-color','#27a9e1');
	currentColor = "pink";
});

$('#yellowColorButton').click(function(){
    $("#imageOption").css('background-color','#e3ba22');
    $("input").css('border-color','#e3ba22');
    $(".md-content").css('color','#e3ba22');
    
        $("#yellowColorButton").css('border-color','white');
    $("#redColorButton").css('border-color','#be1e2d');
    $("#pinkColorButton").css('border-color','#d91b5b');
    $("#blueColorButton").css('border-color','#27a9e1');
	currentColor = "yellow";
});

$('#redColorButton').click(function(){
    $("#imageOption").css('background-color','#be1e2d');
    $("input").css('border-color','#be1e2d');
    $(".md-content").css('color','#be1e2d');
    
    $("#redColorButton").css('border-color','white');
    $("#yellowColorButton").css('border-color','#e3ba22');
    $("#pinkColorButton").css('border-color','#d91b5b');
    $("#blueColorButton").css('border-color','#27a9e1');
	currentColor = "red";
});


// CHANGE NOUN PHRASE ON CLICK
$('#verbPhrase').click(function(){
    currentVerbPhrase = currentVerbPhrase%7
    $('#verbPhrase').text(verbPhrases[currentVerbPhrase]);
    $('#verbPhrase').css('color', 'white');
    currentVerbPhrase++;
	Console.log("current verb phrase is " + currentVerbPhrase + " " +verbPhrases[currentVerbPhrase]);
});


$('#subjectPhrase').click(function(){
    $('#subjectPhrase').css('color', 'white');
    currentSubjectPhrase = currentSubjectPhrase%9
    if(currentVerbPhrase == 0||currentVerbPhrase == 1|| currentVerbPhrase == 2){
        $('#subjectPhrase').text("about " + subjectPhrases[currentSubjectPhrase]);
    }
    else{
        if(currentSubjectPhrase>1){
            $('#subjectPhrase').text(subjectPhrases[currentSubjectPhrase]);
        }
        else{
            currentSubjectPhrase = 2;
            $('#subjectPhrase').text(subjectPhrases[currentSubjectPhrase]);
        }
    }
    currentSubjectPhrase++;
	Console.log("current subject phrase is " + currentSubjectPhrase+ " " + subjectPhrases[currentSubjectPhrase]);
});


$('#nounPhrase').click(function(){
    $('#nounPhrase').css('color', 'white');
    var currentPhrase = currentNounPhrase%11
    $('#nounPhrase').text(nounPhrases[currentPhrase]);
});

$('#nounPhrase').click(function(){
    var currentPhrase = currentNounPhrase%11
    switch(currentPhrase){
        case 0:
            $('#imageOption').css('background-image', 'none');
            //alert('image option zero is working');
            break;
        case 1:
            $('#imageOption').css('background-image', 'url(img/shark.png)'); //absolute path in static, relative path in node e.g. ../img/shark.png
            //alert('image option zero is working');
            break;
        case 2:
            $('#imageOption').css('background-image', 'url(img/wave.png)');
            //alert('image option zero is working');
            break;
        case 3:
            $('#imageOption').css('background-image', 'url(img/crimescene.png)');
            //alert('image option zero is working');
            break;
        case 4:
            $('#imageOption').css('background-image', 'url(img/mothernature.png)');
            //alert('image option zero is working');
            break;
        case 5:
            $('#imageOption').css('background-image', 'url(img/gift.png)');
            //alert('image option zero is working');
            break;
        case 6:
            $('#imageOption').css('background-image', 'url(img/redcarpet.png)');
            //alert('image option zero is working');
            break;
        case 7:
            $('#imageOption').css('background-image', 'url(img/surf.png)');
            //alert('image option zero is working');
            break;
        case 8:
            $('#imageOption').css('background-image', 'url(img/flag.png)');
            //alert('image option zero is working');
            break;
        case 9:
            $('#imageOption').css('background-image', 'url(img/monster.png)');
            //alert('image option zero is working');
            break;
        case 10:
            $('#imageOption').css('background-image', 'url(img/clock.png)');
            //alert('image option zero is working');
            break;
        
    }
    currentNounPhrase++;
	Console.log("current noun phrase is " + currentNounPhrase + " " + nounPhrases[currentNounPhrase]);
});

