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

function thankYou(){
	document.getElementById("createAnother").innerHTML = "Create another card";
	$("#thankYouText").css('display','inline-block');
	$("#replaceText").css('visibility','hidden');
	$("#replaceSendText").css('display','none');
}

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
                   "The big red monster is in town", "It's that time of the month"]
var currentNounPhrase = 1




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


    <!------------------------------------------------------------------------------------------------- -->
    <!------------------------------------------------------------------------------------------------- -->
    <!------------------------------------------------------------------------------------------------- -->
    <!------------------------------------------------------------------------------------------------- -->
    <!------------------------------------------------------------------------------------------------- -->
    <!------------------------------------------------------------------------------------------------- -->
    <!------------------------------------------------------------------------------------------------- -->



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
    
    $("#redColorButton").css('border-color','be1e2d');
    $("#yellowColorButton").css('border-color','e3ba22');
    $("#pinkColorButton").css('border-color','d91b5b');
    
    //$("#blueColorButton").css('outline-style','solid');
    //$("#blueColorButton").css('outline-width','5px');
    //$("#blueColorButton").css('outline-color','white');

});

$('#pinkColorButton').click(function(){
    $("#imageOption").css('background-color','#d91b5b');
    $("input").css('border-color','#d91b5b');
    $(".md-content").css('color','#d91b5b');
    
    $("#pinkColorButton").css('border-color','white');
    $("#redColorButton").css('border-color','be1e2d');
    $("#yellowColorButton").css('border-color','e3ba22');
    $("#blueColorButton").css('border-color','27a9e1');
});

$('#yellowColorButton').click(function(){
    $("#imageOption").css('background-color','#e3ba22');
    $("input").css('border-color','#e3ba22');
    $(".md-content").css('color','#e3ba22');
    
        $("#yellowColorButton").css('border-color','white');
    $("#redColorButton").css('border-color','be1e2d');
    $("#pinkColorButton").css('border-color','d91b5b');
    $("#blueColorButton").css('border-color','27a9e1');
});

$('#redColorButton').click(function(){
    $("#imageOption").css('background-color','#be1e2d');
    $("input").css('border-color','#be1e2d');
    $(".md-content").css('color','#be1e2d');
    
    $("#redColorButton").css('border-color','white');
    $("#yellowColorButton").css('border-color','e3ba22');
    $("#pinkColorButton").css('border-color','d91b5b');
    $("#blueColorButton").css('border-color','27a9e1');
});


// CHANGE NOUN PHRASE ON CLICK
var verbPhrases = ["Talk to", "Discuss with", "Explain to", "Buy", "Sell", "Give", "Lend"]
var currentVerbPhrase = 0
$('#verbPhrase').click(function(){
    currentVerbPhrase = currentVerbPhrase%7
    $('#verbPhrase').text(verbPhrases[currentVerbPhrase]);
    $('#verbPhrase').css('color', 'white');
    currentVerbPhrase++;
});

var subjectPhrases = ["It", "What to do", "Tampons", "Pads", "Pooter plugs", "Bloodplugs", "Rags", "P's", "T's"]
var currentSubjectPhrase = 0

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
    currentSubjectPhrase++
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
});