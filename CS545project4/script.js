// add event listener that calls func if element with id match exist
function setUpEventListener(type, id, func) {
  var el = document.getElementById(id);
  if (el) {
    el.addEventListener(type, func, false);
  }
}


window.addEventListener('load', function(){
    var elMsg = document.getElementById('lastModify');
    var x = document.lastModified;
    elMsg.textContent = 'Page last modify is ' + x;

 
});

// wait for page to load 
window.addEventListener('load', function () {

  setUpEventListener('blur', 'firstname', checkFirstName);
  setUpEventListener('blur', 'lastname', checkLastName);
  setUpEventListener('blur', 'phone', checkPhone);
  setUpEventListener('blur', 'email', checkEmail);
  setUpEventListener('input', 'numAttendees', checkNumAttendees);
  setUpEventListener('')
  
  setUpEventListener('input', 'under_5', function () {
    checkSubAttendees('under_5')
  });
  setUpEventListener('input', 'between_5_12', function () {
    checkSubAttendees('between_5_12')
  });
  setUpEventListener('input', 'between_13_17', function () {
    checkSubAttendees('between_13_17')
  });
  setUpEventListener('input', 'above_18', function () {
    checkSubAttendees('above_18')
  });

});


//-------------functions for name--------------//

//check if the input name contains special character or numbers
// only A-Z a-z space dot hyphen apostrophe allowed
function validName(id) {

  //    get first name or last name 
  var name = document.getElementById(id).value;

  //unacceptable chars and numbers
  var pattern = new RegExp(/[~`!@#$%\^&*+=\[\]\;,\/{}|\":<>\?0-9]/);
  if (pattern.test(name)) {
    return true;
  }
  return false; //good user input
}


// check first name if it's empty or special characters
function checkFirstName() {
  var elMsg = document.getElementById('firstNameErr');
  if (this.value.length < 1) { // If element is less than 1 character
    elMsg.textContent = 'First name is required'; // Set message
  } else if (validName('firstname')) {
    elMsg.textContent = 'Special characters are not allowed';
  } else { // Otherwise
    elMsg.textContent = ''; // Clear message
  }
}


// check last name if it's empty or special characters
function checkLastName() {
  var elMsg = document.getElementById('lastNameErr');

  if (this.value.length < 1) { //  If element is less than 1 character
    elMsg.textContent = 'Last name is required'; // Set message
  } else if (validName('lastname')) {
    elMsg.textContent = 'Special characters are not allowed';
  } else { // Otherwise
    elMsg.textContent = ''; // Clear message
  }

}


//-------------functions for phone number--------------//

//check if the input phone number contains special character or white space
// only 0-9 hyphen allowed
function validPhone(id) {

  //    get phone number
  var phone = document.getElementById(id).value;

  //unacceptable chars and numbers
  var pattern = new RegExp(/[~`''\s!@#$%\^&*+=\[\]\;,\/{}|\":<>.\?]/);
  if (pattern.test(phone)) {
    return true;
  }
  return false; //good user input
}


// check phone number if it's empty or special characters
function checkPhone() {
  var elMsg = document.getElementById('phoneErr');
  if (this.value.length < 1) { // If element is less than 1 character
    elMsg.textContent = 'Phone number is required'; // Set message
  } else if (validPhone('phone')) {
    elMsg.textContent = 'Special characters are not allowed';
  } else { // Otherwise
    elMsg.textContent = ''; // Clear message
  }

}


//-------------functions for email--------------//

//check if the input email contains special characters
//! # $ % & ‘ * + – / = ? ^ ` . { | } ~ characters are legal in the local part of an e-mail address
function validEmail(id) {

  var email = document.getElementById(id).value;

  //unacceptable chars and numbers
  var pattern = new RegExp(/^\w+([\.-]?\w+)*\w+([\-]?\w+)*(\.\w{2,3})+$/);
  if (pattern.test(email)) {
    return true;
  }
  return false; //good user input
}


// check email if it's empty or must contain @ . or special characters
function checkEmail() {
  var elMsg = document.getElementById('emailErr');

  if (this.value.length < 1) { // If email is less than 1 character
    elMsg.textContent = 'Email is required'; // Set message
  } else if (!this.value.includes('@') || !this.value.includes('.')) { // if email address does not  contain @ or dot 
    elMsg.textContent = 'Email is not valid'; // Set message
  } else if (validEmail('email')) {
    elMsg.textContent = 'Special characters are not allowed';
  } else { // Otherwise
    elMsg.textContent = ''; // Clear message
  }

}


//-------------functions for attendees--------------//

//check if the input contains special characters
//check if input is only integer
function validNum(id) {

  var num = document.getElementById(id).value;

  //unacceptable chars and numbers
  var pattern = new RegExp(/^[0-9]*$/);
  if (pattern.test(num.trim())) {
    return true; //good user input
  }
  return false;
}

// input number of attendees is a required filed, and must be a positive integer number and greater than 1
// cannot have special characters
// call the function to compare user input number to the total of the sub-attendees
function checkNumAttendees() {
  var elMsg = document.getElementById('numAttendeesErr');
  var num = document.getElementById('numAttendees').value;

  if (this.value.length < 1) { // If input is less than 1 character
    elMsg.textContent = 'Number of attendees is required'; // Set message
  } else if (!validNum('numAttendees')) { // check if input contain special characters
    elMsg.textContent = 'Not a valid number of attendees';
  } else if (parseInt(num) < 1) {
    elMsg.textContent = 'Attendees must be 1 or more';
  } else {
    elMsg.textContent = ''; // Clear message                                
    addsUp();
  }
}

// check if the sub attendees contains special characters, and must be a integer number
// can be an empty string which will not be added up into the total
function checkSubAttendees(id) {
  var elMsg = document.getElementById(id + 'Err');
  var elMsgNumAttendees = document.getElementById('numAttendeesErr');

  if (!validNum(id)) {
    elMsg.textContent = 'Attendees must be non-negative Integer number';
  } else {
    elMsg.textContent = ''; // Clear message 
    elMsgNumAttendees.textContent = '';
    addsUp();
  }

}

// cast all the user input string to numbers, and then compare the user input total
// with user input sub catagory total
function addsUp() {
  var elMsgNumAttendees = document.getElementById('numAttendeesErr');
  var total = 0;
  var num_attendees = document.getElementById('numAttendees');
  var num_under_5 = document.getElementById('under_5');
  var num_between_5_12 = document.getElementById('between_5_12');
  var num_between_13_17 = document.getElementById('between_13_17');
  var num_above_18 = document.getElementById('above_18');

  var parse_num_attendees = 0;
  var parse_num_under_5 = 0;
  var parse_num_between_5_12 = 0;
  var parse_num_between_13_17 = 0;
  var parse_num_above_18 = 0;

  if (num_attendees && num_attendees.value) {
    parse_num_attendees = parseInt(num_attendees.value);
  }

  if (num_under_5 && num_under_5.value) {
    parse_num_under_5 = parseInt(num_under_5.value);
  }

  if (num_between_5_12 && num_between_5_12.value) {
    parse_num_between_5_12 = parseInt(num_between_5_12.value);

  }

  if (num_between_13_17 && num_between_13_17.value) {
    parse_num_between_13_17 = parseInt(num_between_13_17.value);

  }

  if (num_above_18 && num_above_18.value) {
    parse_num_above_18 = parseInt(num_above_18.value);

  }

  total = parse_num_under_5
    + parse_num_between_5_12
    + parse_num_between_13_17
    + parse_num_above_18;
  if (total != parse_num_attendees) {
    elMsgNumAttendees.textContent = "Number does not add up";
  }
}

