	function showHideDiv(eleSiderbar, eleContent) {
		var infoElementToShow = document.getElementById(eleContent);
		var sideButtonToBeSelected = document.getElementById(eleSiderbar);

		var infoElements = document.getElementsByClassName('info');
		for (let infoElement of infoElements) {
			infoElement.style.display = 'none';
		}
		infoElementToShow.style.display = 'block';


		var sideButtons = document.getElementsByClassName('sidebar-button');
		for (let sideButton of sideButtons) {
			console.log(sideButton);
			sideButton.className = 'sidebar-button';
		}
		sideButtonToBeSelected.className = 'sidebar-button selected-button';
		
		
		
		
		 /*************************events LISTNERS *************************/
		
		
		// set up event listner to call itemDone() on click
		var el = document.getElementById('shoppingList'); // get shopping list
		if (el.addEventListener) { // if event listners work
			el.addEventListener('click', function (e) {
				itemDone(e);
			}, false);
		} else {
			el.attachEvent('onClick', function (e) {
				itemDone(e);
			});
		}
		
		
		
		
		setupCheckUsername();
		setupSetUp();
//		setUpcheckUsername2();
		setUpSystemMaintance();
		setupPosition();
		setupWhichkeyPress();
		setupMembershipForm();
	}




	function greeting() {
		var today = new Date(); // Create a new date object </span> 
		var hourNow = today.getHours(); // Find the current hour </span> 
		var greeting; 

		if (hourNow > 18) { 
			greeting = 'Good evening'; 
			} else
		if (hourNow > 12) { 
			greeting = 'Good afternoon'; 
		} else if (hourNow > 0) { 
			greeting = 'Good morning'; 
		} else { 
			greeting = 'Welcome';
		} 
			document.getElementById("greeting").innerHTML = greeting; 

	}



// function store a number

    function storeNumber(){
		var price;
		var quantity;
		var total;
		
		price = 5;
		quantity = 14;
		total = price * quantity;
		
		var el = document.getElementById('cost');
		el.textContent = '$' + total;
	}


// function store a string

    function storeString(){
		var userName;
		var message;
		userName = 'Molly';
		message = 'See our upcoming range';
		
		var elName = document.getElementById('name');
		elName.textContent = userName;
		
		var elMessage = document.getElementById('message');
		elMessage.textContent = message;
	}


// function store a string
	function storeBoolean() {
		var inStock;
		var shipping;
		inStock = true;
		shipping = false;
		
		var elStock = document.getElementById('stock');
		elStock.className = inStock;
		
		var elShipping = document.getElementById('shipping');
		elShipping.className = shipping;
		
	}

// basic example
	function basicExample(){
		var greeting = 'Howdy';
		var name = ' Molly';
		var message = ' , please check your order: ';
		var welcome = greeting + name + message;
		
		var sign = 'Montague House';
		var tiles = sign.length;
		var subTotal = tiles * 5;
		var shipping = 7;
		var grandTotal = subTotal + shipping;
		
		var el = document.getElementById ('greeting-2');
		el.textContent = welcome;
		
		var elSign = document.getElementById('userSign');
		elSign.textContent = sign;
		
		var elTile = document.getElementById('tiles');
		elTile.textContent = tiles;
		
		var elSubTotal = document.getElementById('subTotal');
		elSubTotal.textContent = '$' + subTotal;
		
		var elGrandTotal = document.getElementById('grandTotal');
		elGrandTotal.textContent = '$' + grandTotal;
	}

// function check hotel availability
	function checkAvailability(){
		var hotel = {
			name: 'Quay',
			rooms: 40,
			booked: 25,
			checkAvailability: function() {
				return this.rooms - this.booked;
			}
		};
		
		var elName = document.getElementById('hotelName');
		elName.textContent = hotel.name;
		
		var elRooms = document.getElementById('rooms');
		elRooms.textContent = hotel.checkAvailability();
	}


// function check hotel availability
// Create the template for objects that are hotels
function checkHotelAvailability(){
	function Hotel(name, rooms, booked) {
	  this.name = name;
	  this.rooms = rooms;
	  this.booked = booked;
	  this.checkAvailability = function() {
		return this.rooms - this.booked;
	  };
	}


	// Create two hotel objects
	var quayHotel = new Hotel('Quay', 40, 25);
	var parkHotel = new Hotel('Park', 120, 77);


	// Update the HTML for the page
	var details1 = quayHotel.name + ' rooms: ';
		details1 += quayHotel.checkAvailability();
	var elHotel1 = document.getElementById('hotel1');
	elHotel1.textContent = details1;

	var details2 = parkHotel.name + ' rooms: ';
		details2 += parkHotel.checkAvailability();
	var elHotel2 = document.getElementById('hotel2');
	elHotel2.textContent = details2;
}

function removeHotelProperties() {
	var hotel = {
		name : 'park',
		rooms : 120,
		booked: 77,
	};
	
	hotel.gym = true;
	hotel.pool = false;
	delete hotel.booked;
	
	var elName = document.getElementById('hotelName-2');
	elName.textContent = hotel.name;
	
	var elPool = document.getElementById('pool');
	elPool.className = 'Pool: ' + hotel.pool;
	
	var elGym = document.getElementById('gym');
	elGym.className = 'Gym: ' + hotel.gym;
}

function msgBOM(){
	var msg1 = 'width: ' + window.innerWidth;
	var msg2 = 'height: ' + window.innerHeight;
	var msg3 = 'history: ' + window.history.length;
	var msg4 = 'screen: ' + window.screen.width;
	var msg5 = 'screen: ' + window.screen.height;
	
	var el1 = document.getElementById('msg-1-1');
	el1.innerHTML = msg1 + ' / ' + msg2;
	
	
	var el2 = document.getElementById('msg-2-2');
	el2.innerHTML = msg3;
	
	
	var el3 = document.getElementById('msg-3-3');
	el3.innerHTML = msg4 + ' / ' + msg5;
}


function msgNUM(){
	var orginalNumber = 10.23456;
	var num1 = orginalNumber;
	var num2 = orginalNumber.toFixed(3);
	var num3 = orginalNumber.toPrecision(3);
	
	var el1 = document.getElementById('num1');
	el1.innerHTML = num1;
	
	
	var el2 = document.getElementById('num2');
	el2.innerHTML = num2;
	
	
	var el3 = document.getElementById('num3');
	el3.innerHTML = num3;
}

function ranNumber(){
	var randomNum = Math.floor((Math.random() * 10) + 1);
	var el = document.getElementById('ranNum');
	el.innerHTML = randomNum;
}

function hotelDeal() {
	// this script is placed inside an immediately invoked function expression which helps protect the scope of variables
	(function(){
		
		// create hotel object and write out the offter details
		var hotel = {
			name: 'park',
			roomRate: 240,
			discount: 15,
			offerPrice: function(){
				var offerRate = this.roomRate * ((100-this.discount)/100);
				return offerRate;
			}
		};
			
		// write out the hotel name, standard rate, and the speical rate	
		// decalare variables
		var hotelName, roomRate, specialRate;
		// get elements
		hotelName = document.getElementById('hotelName-3');
		roomRate = document.getElementById('roomRate');
		specialRate = document.getElementById('specialRate');
			
		// write out hotel name, room rate, offer price
		hotelName.textContent = hotel.name;
		roomRate.textContent = '$' + hotel.roomRate.toFixed(2); // round up 2 decimal places
		specialRate.textContent = '$' + hotel.offerPrice();
	 }());
	
	// calculate and write out the expiry details for the offer
	var expiryMsg;
	var today;
	var elEnds;
	
	function offerExpires(today){
		//declare variables within the function for local scope
		var weekFromToday, day, date, month, year, dayNames, monthNames;
		
		//add 7 days time (added in milliseconds)
		weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
		
		//create arrays to hold the names of days / months
		dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		
		//collect the parts of the date to show on the page
		day = dayNames[weekFromToday.getDay()]; // returns the day of week (0-6)
		date = weekFromToday.getDate(); // return/sets the day of the month (1-31)
		month = monthNames[weekFromToday.getMonth()]; 
		year = weekFromToday.getFullYear(); // return /sets the year (4 digits)
		
		//create the message
		expiryMsg = 'Offer expires next ';
		expiryMsg += day + '<br />(' + date + ' ' + month + ' ' + year + ')';
		return expiryMsg;
	}
	
		today = new Date(); // put today's date in variable
		elEnds = document.getElementById('offerEnds'); // get the offerEnds element
		elEnds.innerHTML = offerExpires(today); // add the expiry message
	
}

function switchStatement(){
	var msg; // message 
	
	// get user level
	var level = parseInt(document.getElementById('userLevel').value);
	document.getElementById('switchStatementTest').id = level;
	
	// determin message based on level
	switch(level) {
		case 1:
			msg = 'Good luck on the first test';
			break;
		case 2:
			msg = 'Second of three - keep going';
			break;
		case 3:
			msg = 'Final round, almost there!';
			break;
		default:
			msg = 'Good luck!';
			break;
				}
	var el = document.getElementById(level);
	el.textContent = msg;
	el.id = 'switchStatementTest';
}




function forLoop(){
	var score = [24, 32, 17];
	var arrayLength = score.length;
	var roundNumber = 0;
	
	var msg = '';
	var i;
	
	// loop through the items in the array
	for (i=0; i<arrayLength; i++){
		
		//arrays are zero based (so 0 is round 1)
		//add 1 to the current round
		roundNumber = (i+1);
		
		//write down the current round to message
		msg += 'Round ' + roundNumber + ': ';
		
		//get the score from the scores array
		msg += score[i] + '<br />';
	}
	
	document.getElementById('forLoopTest').innerHTML = msg;
	

}


function doWhileLoop(){
	
	var i = 1;
	var msg = '';
	
	//store 5 times table in a variable
	do {
		msg += i + ' x 5 =' + i * 5 + '<br />';
		i++;
	}while(i<1);
	
	document.getElementById('doWhileLoopTest').innerHTML = msg;
}


	
function decisionLoopTest() {
	
	var operator = document.getElementById('userOperator').value;
	document.getElementById('decisionLoopTest').value = operator;
	
	var table = 3;
//	var operator = 'addition';
	var i = 1;
	var msg = '';
	
	if (operator === 'addition') {
		while (i<11) {
			msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
			i++;
		}
	}else {
		while (i<11) {
			msg += i + ' x ' + table + ' = ' + (i * table) + ' <br />';
			i++;
		}
	}
	
	var el = document.getElementById('decisionLoopTest');
	el.innerHTML = msg;
}
	
function buyGroceries() {
	
	// adding items to start and end of list
	// get the ul elements
	var list = document.getElementsByClassName('listking-list')[0];
	
	// add new item to end of list
	var newItemLast = document.createElement('li');  //create element
	var newTextLast = document.createTextNode('cream');  // create text node
	newItemLast.appendChild(newTextLast); // add text node to element
	list.appendChild(newItemLast); // add element of the list
	
	// add new item starts of list 
	var newItemFirst = document.createElement('li'); // create element
	var newTextFirst = document.createTextNode('kale');  // create text node
	newItemFirst.appendChild(newTextFirst);   // add text node to element
	list.insertBefore(newItemFirst, list.firstChild);  //add element of the list
	
	//get ul element by id
	var ulNode = document.querySelector('#listking-list');
	// get the list of li in the ul element
	var listItems = ulNode.querySelectorAll('li');

	// add class cool to the list of li element
	var i;
	for(i = 0; i < listItems.length; i++) {
		listItems[i].className = 'cool';
	}
	
	// add number of items in the list to the heading
	var heading = document.getElementsByClassName('listking-heading')[0];
	var totalItems = listItems.length;
	
	// create a span element
	var newSpan = document.createElement('span');
	
	// get span style by its css id 
	newSpan.id = 'span';
	
	// create textNode
	var newText = document.createTextNode(totalItems);
	
	// add text node to span element
	newSpan.appendChild(newText);	
	
	// add span element to the heading
	heading.appendChild(newSpan);
}

function getTarget(e) {        // declare function
	if (!e) {                  // if there is no event object
		e = window.event;      // use old IE event object
	}
	return e.target || e.srcElement; // get the target of the event
}

function itemDone(e) {
	
	 var target;
    target = getTarget(e);
	
	var elListItem, elList;
    if ( target.nodeName.toLowerCase() == "a" ) {  // If user clicked on an a element
        elListItem = target.parentNode;              // Get its li element
        elList = elListItem.parentNode;              // Get the ul element
        elList.removeChild(elListItem);              // Remove list item from list
    }
    if ( target.nodeName.toLowerCase() == "em" ) { // If the user clicked on an em element
        elListItem = target.parentNode.parentNode;   // Get its li element
        elList = elListItem.parentNode;              // Get the ul element
        elList.removeChild(elListItem);              // Remove list item from list
    }

    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}




function checkUsername() {                             // Declare function
  var elMsg = document.getElementById('feedback');     // Get feedback element
  if (this.value.length < 5) {                         // If username too short
    elMsg.textContent = 'Username must be 5 characters or more'; // Set msg
  } else {                                             // Otherwise
    elMsg.textContent = '';                            // Clear msg
  }
}

function setupCheckUsername() {
	var elUsername = document.getElementById('username'); // Get username input
	// When it loses focus call checkUsername()
	if (elUsername) {
		elUsername.addEventListener('blur', checkUsername, false);
	}
}






function setUp() {            // decalre function
	var textInput;            // create variable
	textInput = document.getElementById('username1');  // get username input
	textInput.focus();  //give username focus
}

function setupSetUp(){
	window.addEventListener('load', setUp, false); // when page loaded call setup()
}










  // element to hold message 


	
	
	function setUpSystemMaintance(){
	// create HTML for the mssage
//	<div> id = system-msg 
//	<div> header + a 
//	<div> 
	var msg = '<div><a id=\"close\" href="#">close X </a><div>';
	msg += '<div><h2>System Maintenance</h2>';
	msg += 'Our servers are being updated between 3 and 4 a.m. ';
	msg += 'During this time, there may be minor discruptions to service.</div>';
	
	var elNote = document.createElement('div');
	elNote.setAttribute('id', 'system-msg');
	elNote.id = 'system-msg';
	elNote.innerHTML = msg;
	var parent = document.getElementById('system-msg-container');
	parent.appendChild(elNote);
	
	function dismissNote() {
	 parent.removeChild(elNote);
	}
		
//	function locateContainer() {
//		var fixed = document.getElementById('locate-container');
//
//		fixed.addEventListener('touchmove', function(e) {
//
//        e.preventDefault();
//
//		}, false);
//	}
	
		
	var elClose = document.getElementById('close');
	elClose.addEventListener('click', function(e) {
		dismissNote(e);
		setUpcheckUsername2(e);
//		locateContainer(e);
	}, false);
		
		
		
		
		function setUpcheckUsername2() {

		function checkUsername2() {             // declare function
		var username = el.value;               // store username in a variable
		if (username.length < 5 ) {            // if username < 5 characters
			elMsg.className = 'warning';       // change class on message
			elMsg.textContent = 'Not long enough, yet...';     // update message
		} else {
			elMsg.textContent = '';                           // clear the message
		}
	}

		function tipUsername () {                 // declare function
		elMsg.className = 'tip';                  // change class for message
		elMsg.innerHTML = 'Username must be at least 5 characters';  // add message
	}

		var el = document.getElementById('username2');      // username input
		var elMsg = document.getElementById('feedback2');   // element to hold the message

		// when the username input gains / lose focus call function above: 
		el.addEventListener('focus', tipUsername, false);      // focus call tipUsername
		el.addEventListener('blur', checkUsername2, false);   // blur call checkusername
		}
		
	}






function setupPosition(){

var sx = document.getElementById('sx');        // Element to hold screenX
var sy = document.getElementById('sy');        // Element to hold screenY
var px = document.getElementById('px');        // Element to hold pageX
var py = document.getElementById('py');        // Element to hold pageY
var cx = document.getElementById('cx');        // Element to hold clientX
var cy = document.getElementById('cy');        // Element to hold clientY

	function showPosition(event) {                 // Declare function
	  sx.value = event.screenX;                    // Update element with screenX
	  sy.value = event.screenY;                    // Update element with screenY
	  px.value = event.pageX;                      // Update element with pageX
	  py.value = event.pageY;                      // Update element with pageY
	  cx.value = event.clientX;                    // Update element with clientX
	  cy.value = event.clientY;                    // Update element with clientY
	}

var el = document.getElementById('show-position');      // Get body Element
el.addEventListener('mousemove', function(e) {
	showPosition(e);
	
},false); // Move updates position


}

function setupWhichkeyPress() {
	var el;    // declare variable
	
	function charCount(e){
		var textEntered, charDisplay, counter, lastKey;   // declare variables
		textEntered = document.getElementById('user-message').value;  // user text
		charDisplay = document.getElementById('char-counter');  // counter element
		counter = (180- (textEntered.length));      	// num of chars left
		charDisplay.textContent = counter + ' characters';     			 // show chars left
		
		lastKey = document.getElementById('last-key-ASCII');      // get lst key used
		lastKey.textContent = 'Last key in ASCII code: ' + e.keyCode;  // create msg
	}
	
	el = document.getElementById('user-message');    // get msg element
	el.addEventListener('keypress', charCount, false);  // Keypress event
}




// <form method="post" action="http://www.example.org/register" id="formSignup" >
//                  <label for="package" class="selectbox"> Select a package: </label>
//       				 <select id="package">
//          					<option value="annual">1 year ($50)</option>
//          					<option value="monthly">1 month ($5)</option>
//        				</select>
//        		<div id="packageHint" class="tip"></div>
//				<input type="checkbox" id="terms" />
//       		    <label for="terms" class="checkbox"> Check to agree to terms &amp; conditions</label>
//                <div id="termsHint" class="warning"></div>
//               <input type="submit" value="next" />
//        </form>

function setupMembershipForm() {
	
	// declare variables
	var elForm, elSelectedPackage, elPackageHint, elTerms, elTermsHint; 
	// store elements
    elForm = document.getElementById('formSignup');
	elSelectedPackage = document.getElementById('package');
	elPackageHint = document.getElementById('packageHint');
	elTerms = document.getElementById('terms');
	elTermsHint = document.getElementById('termsHint');
	
	function packageHint() {
		var pack = this.options[this.selectedIndex].value;
	    if(pack === 'monthly'){
			elPackageHint.innerHTML = 'Save $10 if you pay for 1 year!';  // show this msg
		} else {
			elPackageHint.innerHTML = 'Wise choice!';
		}
	}
	
	function checkTerms(event) {
		if(!elTerms.checked) {
		  elTermsHint.innerHTML = 'You must agree to the terms.'; // show this msg
		  event.preventDefault(); // don't submit form
		}
	}
	
	// create event listners: sumbmit calls checkTerms(), packageHint()
	elForm.addEventListener('submit', checkTerms, false);
	elSelectedPackage.addEventListener('change', packageHint, false);
}







































	// JavaScript Document
