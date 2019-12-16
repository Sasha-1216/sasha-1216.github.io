
<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<!--
Shasha, Wang
CS545_00
Assignment #3
Fall 2019
-->

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="stylesheet.css" rel="stylesheet">
<link href="form.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Josefin+Sans:600%7CLato&display=swap" rel="stylesheet">
<script src="script.js"></script>

<title>contact</title>
</head>

<body>


<!--|||||||||  header section |||||||||||
|||||||||||||||||||||||||||||||||||||-->
<header> <a href="index.html"><img class="logo" id="sdsuLogo" src="img/SDSU_logo_horz_Color_white_text.png" alt="SDSU logo">
  <h1>| Natural History Museum</h1>
  </a> </header>

<!--|||||||||  nav section |||||||||||
|||||||||||||||||||||||||||||||||||||-->
<nav>
  <ul>
    <li><a href="exibition.html">Exibiton</a></li>
    <li><a href="events.html">Events</a></li>
    <li><a href="science.html">Science</a></li>
    <li><a href="donate.html">Donate</a></li>
    <li><a href="about.html">About</a></li>
    <li><a class="nav-selected" href="contact.php">Contact</a></li>
  </ul>
</nav>

<!--|||||||||  main section wrapper|||||||||||
|||||||||||||||||||||||||||||||||||||||||-->
<main class="wrapper">
  <div class="hero" id="contact-hero">
    <h1><span>Welcome to SDSU<br>
      </span> Natural<br>
      History <br>
      Museum</h1>


	  <?php

      $firstname = $lastname = $address = $phone = $email = "";
      $sumAttendees = $numAttendees = $under_5 = $between_5_12 = $between_13_17 = $above_18 = 0;
      $gender = $relation_to_sdsu = "";
      $interest1 = $interest2 = $interest3 = "";
      $interest4 = $interest5 = $interest6 = "";
      $Other_Areas = "";

      $firstnameErr = $lastnameErr = $emailErr = $phoneErr = $numAttendeesErr = "";

        function test_input($data)
        {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
        }



    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $valid = true;

        if (empty(filter_input(INPUT_POST, "firstname"))) {
            $valid = false;
            $firstnameErr = "First name is required";
        } else {
            $_SESSION['firstname'] = test_input(filter_input(INPUT_POST, "firstname"));
            $firstname = $_SESSION['firstname'];
        }


        if (empty(filter_input(INPUT_POST, "lastname"))) {
            $valid = false;
            $lastnameErr = "Last name is required";
        } else {
            $_SESSION['lastname'] = test_input(filter_input(INPUT_POST, "lastname"));
            $lastname = $_SESSION['lastname'] ;
        }

        if (empty(filter_input(INPUT_POST, "phone"))) {
            $valid = false;
            $phoneErr = "Phone number is required";
        } else {
            $_SESSION['phone'] = test_input(filter_input(INPUT_POST, "phone"));
            $phone = test_input(filter_input(INPUT_POST, "phone"));
        }

        if (empty(filter_input(INPUT_POST, "email"))) {
            $valid = false;
            $emailErr = "Email is required";
        } else {
            $_SESSION['email'] = test_input(filter_input(INPUT_POST, "email"));
            $email = test_input(filter_input(INPUT_POST, "email"));
        }

        // check if e-mail address is well-formed
        if (!filter_var($_SESSION['email'], FILTER_VALIDATE_EMAIL)) {
            $valid = false;
            $emailErr = "Invalid email format, please enter valid email";
        }







        //  number of different age of attendees

        if (empty(filter_input(INPUT_POST, "under_5"))) {
            $_SESSION['under_5'] = "";
        } else {
            $_SESSION['under_5'] = test_input(filter_input(INPUT_POST, "under_5"));
            $under_5 = $_SESSION['under_5'];
        }

        if (empty(filter_input(INPUT_POST, "between_5_12"))) {
            $_SESSION['between_5_12'] = "";
        } else {
            $_SESSION['between_5_12'] = test_input(filter_input(INPUT_POST, "between_5_12"));
            $between_5_12 =   $_SESSION['between_5_12'];
        }

        if (empty(filter_input(INPUT_POST, "between_13_17"))) {
            $_SESSION['between_13_17'] = "";
        } else {
            $_SESSION['between_13_17'] = test_input(filter_input(INPUT_POST, "between_13_17"));
            $between_13_17 = $_SESSION['between_13_17'];
        }

        if (empty(filter_input(INPUT_POST, "above_18"))) {
            $_SESSION['above_18'] = "";
        } else {
            $_SESSION['above_18'] = test_input(filter_input(INPUT_POST, "above_18"));
            $above_18 = $_SESSION["above_18"];
        }

        // totoal attendees that the user enter must match the total of each subcatogry

        $numAttendees = test_input(filter_input(INPUT_POST, 'numAttendees'));
        $sumAttendees = (int)($under_5 + $between_5_12 + $between_13_17 + $above_18);


        if (empty($numAttendees)) {
            $valid = false;
            $numAttendeesErr = "number is required";
        } elseif ($numAttendees <= 0) {
            $valid = false;
            $numAttendeesErr = "Number of Attendees must be a positive number";
        } elseif ($sumAttendees != $numAttendees) {
            $valid = false;
            $numAttendeesErr = "Total number of attendees doesn't add up";
        } else {
            $_SESSION ['numAttendees'] = $numAttendees;
        }





        // event

        if (empty(filter_input(INPUT_POST, "event"))) {
            $_SESSION['event'] = "";
        } else {
            $_SESSION['event'] = test_input(filter_input(INPUT_POST, "event"));
        }

        // gender

        if (empty(filter_input(INPUT_POST, "gender"))) {
            $_SESSION['gender'] = "";
        } else {
            $_SESSION['gender'] = test_input(filter_input(INPUT_POST, "gender"));
        }

        // primary relationship with SDSU

        if (empty(filter_input(INPUT_POST, "relation_to_sdsu"))) {
            $_SESSION['relation_to_sdsu'] = "";
        } else {
            $_SESSION['relation_to_sdsu'] = test_input(filter_input(INPUT_POST, "relation_to_sdsu"));
        }

        //interestes

        if (empty(filter_input(INPUT_POST, "interest1"))) {
            $_SESSION['interest1'] = "";
        } else {
            $_SESSION['interest1'] = test_input(filter_input(INPUT_POST, "interest1"));
            $interest1 =  $_SESSION['interest1'];
        }
        if (empty(filter_input(INPUT_POST, "interest2"))) {
            $_SESSION['interest2'] = "";
        } else {
            $_SESSION['interest2'] = test_input(filter_input(INPUT_POST, "interest2"));
            $interest1 =  $_SESSION['interest2'];
        }
        if (empty(filter_input(INPUT_POST, "interest3"))) {
            $_SESSION['interest3'] = "";
        } else {
            $_SESSION['interest3'] = test_input(filter_input(INPUT_POST, "interest3"));
            $interest3 =  $_SESSION['interest3'];
        }
        if (empty(filter_input(INPUT_POST, "interest4"))) {
            $_SESSION['interest4'] = "";
        } else {
            $_SESSION['interest4'] = test_input(filter_input(INPUT_POST, "interest4"));
            $interest4 =  $_SESSION['interest4'];
        }
        if (empty(filter_input(INPUT_POST, "interest5"))) {
            $_SESSION['interest5'] = "";
        } else {
            $_SESSION['interest5'] = test_input(filter_input(INPUT_POST, "interest5"));
            $interest5 =  $_SESSION['interest5'];
        }
        if (empty(filter_input(INPUT_POST, "interest6"))) {
            $_SESSION['interest6'] = "";
        } else {
            $_SESSION['interest6'] = test_input(filter_input(INPUT_POST, "interest6"));
            $interest6 =  $_SESSION['interest6'];
        }
        if (empty(filter_input(INPUT_POST, "Other_Areas"))) {
            $_SESSION['Other_Areas'] = "";
        } else {
            $_SESSION['Other_Areas'] = test_input(filter_input(INPUT_POST, "Other_Areas"));
            $Other_Areas = test_input(filter_input(INPUT_POST, "Other_Areas"));
        }

        if ($valid) {
            header("location:formconfirmation.php");
            exit();
        }
    }

    ?>



    <div class="form-newsletter">
        <form name="form-newsletter" action = "<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post" >

        <h3>JOIN OUR NEWSLETTER</h3>
        <fieldset>
          <legend>Personal Information</legend>
          <label for="firstname">First name
              <input type="text" name="firstname" placeholder="enter your first name here" id="firstname" value="<?php echo $firstname; ?>" >
          </label>
          <span class="required">*</span><br />
          <span class = "error" id="firstNameErr"><?php echo " " . $firstnameErr;?></span><br /><br />

          <label for="lastname">Last name
             <input type="text" name="lastname" placeholder="enter your last name here" id="lastname" value="<?php echo $lastname; ?>">
          </label>
          <span class="required">*</span><br />
          <span class = "error" id="lastNameErr"><?php echo" " .$lastnameErr ?></span><br /><br />

      Gender:<br>
          <input type="radio" name="gender" id="male" value="male"> <label for="male">Male</label><br />
          <input type="radio" name="gender" id="female" value="female"> <label for="female">Female</label><br />
          <input type="radio" name="gender" id="non_binary" value="non-binary"> <label for="non_binary">Non-Binary</label><br /><br />
		  </fieldset>
        <br>

        <fieldset>
          <legend>Contact Information</legend>
          <label>Address</label>
          <input type="text" name="address" placeholder="enter your address here" value="<?php echo $address; ?>" >
          <br>
          <label>Phone</label>
          <input type="text" name="phone" id="phone" placeholder="enter your phone number here" value="<?php echo $phone; ?>" >
          <span class="required">*</span><br />
          <span class = "error" id="phoneErr"><?php echo" " .$phoneErr ?></span><br />

          <label>Email</label>
          <input type="text" name="email" id="email" placeholder="enter your emaill here" value="<?php echo $email; ?>" >
          <span class="required">*</span><br />
          <span class = "error" id="emailErr"><?php echo" " .$emailErr ?></span><br />

        </fieldset>
        <br>
        <fieldset>
          <legend>Event Information</legend>
          <p>Which event would you like to go?</p>
          <select name="event" id="event">
            <option value="unknown" selected>Please select</option>
            <option value="binational_expeditions">Binational Expeditions</option>
            <option value="minerals">Minerals</option>
            <option value="brcc_mission">BRCC Mission</option>
            <option value="hidden_gems">Hidden Gems</option>
            <option value="baja_wild_life">Baja's Wild Life</option>
          </select>
        </fieldset>
        <fieldset>
          <label>How many people would attend the event? </label>
          <input type="text" name="numAttendees"  id="numAttendees" value="<?php if ($numAttendees !=0) {
        echo $numAttendees;
    } ?>" placeholder="enter your number here">
          <span class="required">*</span><br />
            <span class = "error" id="numAttendeesErr"><?php echo " " . $numAttendeesErr;?></span><br />
          <br>
          <br>
          <label>Under 5 years old</label>
          <input type="text" name="under_5" id="under_5" value="<?php if ($under_5 !=0) {
        echo $_SESSION['under_5'];
    } ?>" placeholder="enter your number here">
          <br>
         <span class = "error" id="under_5Err"></span><br />

          <br>
          <label>Between 5-12 years old</label>
          <input type="text" name="between_5_12" id="between_5_12" value="<?php if ($between_5_12 !=0) {
        echo $between_5_12;
    } ?>" placeholder="enter your number here">
          <br>
           <span class = "error" id="between_5_12Err"></span><br />
          <br>
            
            
          <label>Between 13-17 years old</label>
          <input type="text" name="between_13_17" id="between_13_17"value="<?php if ($between_13_17 !=0) {
        echo $between_13_17;
    } ?>" placeholder="enter your number here">
          <br>
          <span class = "error" id="between_13_17Err"></span><br />

          <br>
          <label>Above 18</label>
          <input type="text" name="above_18" id="above_18" value="<?php  if ($above_18 !=0) {
        echo $above_18;
    } ?>" placeholder="enter your number here">
          <br>
        <span class = "error" id="above_18Err"></span><br />

          <br>
        </fieldset>

        <fieldset>
          <label for="relation_to_sdsu">What is your primary relationship with SDSU?</label>
          <br>
          <br>
          <select name="relation_to_sdsu" id="relation_to_sdsu">
            <option value="unknown" selected>Please select</option>
            <option value="student at SDSU">I am a student at SDSU</option>
            <option value="student at another university">I am a student at another university</option>
            <option value="community college student">I am a community college student</option>
            <option value="high school student">I am a high school student</option>
            <option value="work at SDSU">I work at SDSU</option>
            <option value="work at another school">I work at another university, college or school</option>
            <option value="San Diego community member">I am a San Diego community member</option>
            <option value="visiting from out of town">I am visiting from out of town</option>
          </select>
        </fieldset>


        <fieldset>
          <legend>Interests:</legend>

          <input type="checkbox" name="interest1" id="Desert" value="Desert" > <label for="Desert">Desert</label><br />
          <input type="checkbox" name="interest2" id="Dinosaurs" value="Dinosaurs" > <label for="Dinosaurs">Dinosaurs</label><br />
          <input type="checkbox" name="interest3" id="Minerals" value="Minerals" > <label for="Minerals">Minerals and Gems</label><br />
          <input type="checkbox" name="interest4" id="People" value="People" > <label for="People">Indigenous Peoples</label><br />
          <input type="checkbox" name="interest5" id="Baja" value="Baja" > <label for="Baja">The Baja</label><br />
          <input type="checkbox" name="interest6" id="Conservation" value="Conservation" > <label for="Conservation">Conservation of our natural resources</label><br /><br />



          <br />
          <br />
          <label for="Other_Areas">What other areas interest you?</label><br />
          <br />
          <textarea name="Other_Areas" id="Other_Areas" rows="5" cols="60"><?php echo $Other_Areas; ?></textarea>
        </fieldset>
        <input type="submit" value="submit" name="submit">
        <br>
        <span id="lastModify"></span>
      </form>
    </div>
  </div>
</main>

<!--|||||||||  footer section |||||||||||
||||||||||||||||||||||||||||||||||||-->
<footer>

  <!--|||||||||  footer contains 5 divs
   newsletter, hours, site-map, important links, contact info
  |||||||||||-->
  <section class="footer-container">
    <div class="newsletter">
      <h4>Newsletter</h4>
      <p>Receive the latest information about our new exhibitions, programs, events, and more.</p>
      <input type="text">
      <a>Subscribe</a> </div>
    <div class="hours">
      <h4>Museum Hours</h4>
      <p>Daily 10 AM to 5 PM </p>
      <p>Closed when the campus is closed.<br>
        Hours subject to change. </p>
    </div>
    <div class="site-map">
      <h4>Sitemap</h4>
      <ul>
        <li><a href="exibition.html">Exibiton</a></li>
        <li><a href="events.html">Events</a></li>
        <li><a href="science.html">Science</a></li>
        <li><a href="donate.html">Donate</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="imp-links">
      <h4>Important Links</h4>
      <ul>
        <li><a href="#">Become a Member </a></li>
        <li><a href="#">It's the natural thing to do.</a></li>
        <li><a href="#">Discover more.</a></li>
        <li><a href="#">Experience more.</a></li>
        <li><a href="#">And save more, every time you visit.</a></li>
      </ul>
    </div>
    <div class="contact-info">
      <h4>Contact Us</h4>
      <p>San Diego State University<br>
        Natural History Museum<br>
      </p>
      <p>San Diego, CA 92182-0000<br>
        619.594.5200<br>
        nhmuseum@sdsu.edu<br>
      </p>
    </div>
  </section>
  <!--|||||||||  end of footer contains 5 divs |||||||||||-->

  <!--|||||||||  footer logo |||||||||||-->
  <div class="parent">
    <div class="inner"><img src="img/SDSU_logo_horz_Color_white_text.png" alt="SDSU logo"></div>
    <div class="inner">
      <h1>| Natural History Museum</h1>
    </div>
    <p>&copy; 2019. Design by Sasha Wang.</p>
  </div>
</footer>

</body>
</html>
