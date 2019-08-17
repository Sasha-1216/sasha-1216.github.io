	function showHideDiv(eleSiderbar, eleContent) {
		var infoElementToShow = document.getElementById(eleContent);
		var sideButtonToBeSelected = document.getElementById(eleSiderbar)

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
	}

//function toggle() {
//  var yes = document.getElementsByClassName ('code-test-button')
//  var x = document.getElementsByClassName('toggle');
//	
//	if (yes.clicked === true) {
//		x.style.display = 'block';
//	} else {
//		x.style.dispaly = 'none';
//	}
//}

// display greetings based on time 

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
	














































	// JavaScript Document
