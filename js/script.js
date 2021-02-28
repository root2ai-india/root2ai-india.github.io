// //----------------------------------- Create Cookie-----------------------------------------------------
// function randomStringGenerator(length) {
// 	var result           = '';
// 	var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-_)(*&^%$#@!~';
// 	var charactersLength = characters.length;
// 	for ( var i = 0; i < length; i++ ) {
// 	   result += characters.charAt(Math.floor(Math.random() * charactersLength));
// 	}
// 	return result;
//  }

// var today = new Date();
// var random_string = randomStringGenerator(50) + today;
// var user = "";

// function setCookie(name,value,days) {
//     var expires = "";
//     if (days) {
//         var date = new Date();
//         date.setTime(date.getTime() + (days*24*60*60*1000));
//         expires = "; expires=" + date.toUTCString();
// 	}
// 	document.cookie = name + "=" + (value || "test")  + expires + "; path=/";
// }
// function getCookie(name) {
//     var nameEQ = name + "=";
//     var ca = document.cookie.split(';');
//     for(var i=0;i < ca.length;i++) {
//         var c = ca[i];
//         while (c.charAt(0)==' ') c = c.substring(1,c.length);
//         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
//     }
//     return null;
// }
// function eraseCookie(name) {   
//     document.cookie = name+'=; Max-Age=-99999999;';  
// }

// var x = getCookie('ppkcookie');

// if (x) {
// 	console.log("Cookie is already set");
// 	user = x;
// }
// else{
// 	console.log("Setting New Cookie")
// 	setCookie('ppkcookie',random_string,180);
// 	user = getCookie('ppkcookie');
// }



// // on input/text enter--------------------------------------------------------------------------------------
// $('.usrInput').on('keyup keypress', function (e) {
// 	var keyCode = e.keyCode || e.which;
// 	var text = $(".usrInput").val();
// 	if (keyCode === 13) {
// 		if (text == "" || $.trim(text) == '') {
// 			e.preventDefault();
// 			return false;
// 		} else {
// 			// $(".usrInput").blur();
// 			setUserResponse(text);
// 			send(text);
// 			e.preventDefault();
// 			return false;
// 		}
// 	}
// });


// function sendMsg(){
// 	$(".usrInput").focus();
// 	var text = $(".usrInput").val();
// 		if (text == "" || $.trim(text) == '') {
// 			return false;
// 		} else {
// 			setUserResponse(text);
// 			send(text);
// 			return false;
// 		}
// }


// //------------------------------------- Set user response------------------------------------
// function setUserResponse(val) {
// 	var UserResponse = '<img class="userAvatar" src=' + "./images/user-icon.png" + '><p class="userMsg">' + val + ' </p><div class="clearfix"></div>';
// 	$(UserResponse).appendTo('.chats').show('slow');
// 	$(".usrInput").val('');
// 	scrollToBottomOfResults();
// 	$('.suggestions').remove();
// }

// //---------------------------------- Scroll to the bottom of the chats-------------------------------
// function scrollToBottomOfResults() {
// 	var terminalResultsDiv = document.getElementById('chats');
// 	terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
// }

// function send(message) {
// 	console.log("User Message:", message)
// 	$.ajax({
// 		url: 'http://localhost:5005/webhooks/rest/webhook',
// 		type: 'POST',
// 		crossDomain: true,
// 		contentType: 'application/json',
// 		data: JSON.stringify({
// 			"message": message,
// 			"sender": user
// 		}),
// 		success: function (data, textStatus) {
// 			setBotResponse(data);
// 			console.log("Rasa Response: ", data, "\n Status:", textStatus)
// 		},
// 		error: function (errorMessage) {
// 			setBotResponse("");
// 			console.log('Error hi' + errorMessage);

// 		}
// 	});
// }

// function chatbot_contact_deatils(){
// 	var form_data = $('#chatbot_contact').serialize();
// 	form_data = "chatbot contact deatils "+form_data
// 	console.log(form_data);
// 	send(form_data);
// }

// //------------------------------------ Set bot response -------------------------------------
// function setBotResponse(val) {
// 	setTimeout(function () {
// 		if (val.length < 1) {
// 			//if there is no response from Rasa
// 			msg = 'I couldn\'t get that. Let\' try something else!';

// 			var BotResponse = '<img class="botAvatar" src="./images/chatbot-icon.png"><p class="botMsg">' + msg + '</p><div class="clearfix"></div>';
// 			$(BotResponse).appendTo('.chats').hide().fadeIn(1000);
// 			scrollToBottomOfResults();

// 		} else {
// 			//console.log(val);
// 			//if we get response from Rasa
// 			for (i = 0; i < val.length; i++) {
// 				//check if there is text message
// 				if (val[i].hasOwnProperty("text")) {
// 					console.log(val[i].text + " i "+i)
// 					var BotResponse = '<img class="botAvatar" src="./images/chatbot-icon.png"><span class="botMsg">' + val[i].text + '</span><div class="clearfix"></div>';
// 					$(BotResponse).appendTo('.chats').hide().fadeIn(1000);
// 				}

// 				//check if there is image
// 				if (val[i].hasOwnProperty("image")) {
// 					var BotResponse = '<div class="singleCard">' +
// 						'<img class="imgcard" src="' + val[i].image + '">' +
// 						'</div><div class="clearfix">'
// 					$(BotResponse).appendTo('.chats').hide().fadeIn(1000);
// 				}

// 				//check if there is  button message
// 				if (val[i].hasOwnProperty("buttons")) {
// 					addSuggestion(val[i].buttons);
// 				}

// 			}
// 			scrollToBottomOfResults();
// 		}

// 	}, 500);
// }

// var click_counter = 0;
// // ------------------------------------------ Toggle chatbot -----------------------------------------------
// $('.profile_div').click(function () {
// 	if (click_counter == 0 ){
// 		send("Hi")
// 		click_counter = click_counter + 1
// 	}
// 	//$('.profile_div').toggle();
	
// 	$('.widget').toggle();
// 	$(".usrInput").focus();
// 	scrollToBottomOfResults();

// 	// if($('.widget').css('display') == 'none'){
// 	// 	$('.profile_div').empty();
// 	// 	$('.profile_div').append('<img class = "imgProfile" src="images/botAvatar.png" />');
// 	// }

// 	// if($('.widget').css('display') == 'block'){
// 	// 	$('.profile_div').empty();
// 	// 	//var close = '<span style="color:white;" class = "imgProfile" id="close"><i class="material-icons">close</i>';
// 	// 	$('.profile_div').append('<img class = "imgProfile" height = "10%" src="images/flaticon-svg/svg/close.svg" />');
// 	// }



// });

// $('#close').click(function () {
// 	//$('.profile_div').show();
// 	$('.widget').toggle();
	
// });


// // ------------------------------------------ Suggestions -----------------------------------------------

// function addSuggestion(textToAdd) {
// 	setTimeout(function () {
// 		var suggestions = textToAdd;
// 		var suggLength = textToAdd.length;
// 		$(' <div class="singleCard"> <div class="suggestions"><div class="menu"></div></div></diV>').appendTo('.chats').hide().fadeIn(1000);
// 		// Loop through suggestions
// 		for (i = 0; i < suggLength; i++) {
// 			$('<div class="menuChips">' + suggestions[i].title + '</div>').appendTo('.menu');
// 		}
// 		scrollToBottomOfResults();
// 	}, 1000);
// }


// // on click of suggestions, get the value and send to rasa
// $(document).on("click", ".menu .menuChips", function () {
// 	var text = this.innerText;
// 	setUserResponse(text);
// 	send(text);
// 	$('.suggestions').remove(); //delete the suggestions 
// });

// function changeChatImage(){
// if($('.widget').is("visible")){
// 	console.log("in")
// 	$('.imgProfile').css('background-image', 'url(images/botAvatar_1.png)');
// }else{
// 	$('.imgProfile').css('background-image', 'url(images/botAvatar.png)');
// }
// }


//  function toggleChatButton ()
// {
//   // Get the button
//   const btn = document.getElementById( 'btn' );
  
//   // Add click event
//   btn.addEventListener( 'click', function () {
    
//     // Toggle button class active 
//     this.classList.toggle( 'active' );
    
//   });
// }

// $(".widget").css("height", screen.height - (screen.height*0.3));

// $(function() {
// 	var header_text_fullScreen ='<span style="">root2ai</span>';
// 	$("#bot_name").empty();
// 	$("#bot_name").append(header_text_fullScreen);

// 	var header_text = '<span>root2ai</span>';
// 	var header_text_1 = '<span style="color:white;margin-right: 5px;float:right;margin-top: 5px;" id="close"><i class="material-icons">close</i>';
	      
	
// 	let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
//     if (isMobile) {
// 		$('.widget').css({
// 			'width': '100%',
// 			'height': '100%',
// 			'right':'0px',
// 			'z-index': '100',
// 			'bottom':'0%',
// 			'margin-bottom': '0px',
// 			'border-radius': '0px 0px 0px 0px',
// 			'box-shadow': '0px 0px 10px 0px #a09f9f'
// 		});

// 		$('.chat_header ').css({
// 			'height': '50px',
// 			'background': '#fd7e14',
// 			'border-radius': '0px 0px 0px 0px',
// 			'padding': '5px',
// 			'font-size': '20px',
// 			'font-weight': '200',
// 		});

// 		$("#bot_name").empty();
// 		$("#bot_name").append(header_text);

// 		$("#close").empty();
// 		$("#close").append(header_text_1);
// 	}
// 	else{
// 		toggleChatButton();
// 	}
//  });

//  //var cf = '<div class="row"><div class="col-md-12 mb-2">  <form action="formSubmission.php" method="POST" class="p-5 bg-white"><h2 class="h4 text-black mb-5">Contact Form</h2> <div class="row form-group"><div class="col-md-6 mb-3 mb-md-0"><label class="text-black" for="fname">First Name</label><input type="text" required id="fname" name = "fname" class="form-control"></div><div class="col-md-6"><label class="text-black" for="lname">Last Name</label><input type="text" required id="lname" name = "lname" class="form-control"></div></div><div class="row form-group"><div class="col-md-6"><label class="text-black" for="email">Email</label> <input type="email" required name = "email" id="email" class="form-control"></div><div class="col-md-6"><label class="text-black" for="email">Contact Number</label> <input type="text" required name = "telephone" id="telephone" class="form-control"></div></div><div class="row form-group">  <div class="col-md-12"><label class="text-black" for="subject">Subject</label> <input type="subject" required id="subject" class="form-control"></div></div><div class="row form-group"><div class="col-md-12"><input type="submit" value="Send Message" class="btn btn-primary btn-md text-white"></div></div></form></div></div>'
 
