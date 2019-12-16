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
   <script src="confirmation.js"></script> 
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
    <li><a class="nav-selected" href="contact.html">Contact</a></li>
  </ul>
</nav>

<!--|||||||||  main section wrapper|||||||||||
|||||||||||||||||||||||||||||||||||||||||-->
<main class="wrapper">

  <!--|||||||||  hero image and captoin   |||||||||||
|||||||||||||||||||||||||||||||||||||||||||-->
  <div class="hero" id="contact-hero">
    <h1><span>Welcome to SDSU<br>
      </span> Natural<br>
      History <br>
      Museum</h1>

      

	 <?php
   // var_dump ($_SESSION);
   // exit();

       $firstname = $_SESSION ['firstname'];
       $lastname = $_SESSION ['lastname'];
       $gender = $_SESSION ['gender'];
       $phone = $_SESSION ['phone'];
       $email = $_SESSION ['email'];
       $event = $_SESSION ['event'];
       $numAttendees = $_SESSION ['numAttendees'];
       $under_5= $_SESSION ['under_5'];
       $between_5_12= $_SESSION ['between_5_12'];
       $between_13_17= $_SESSION ['between_13_17'];
       $above_18 = $_SESSION ['above_18'];

       $relation_to_sdsu = $_SESSION['relation_to_sdsu'];
       $interest1 =  $_SESSION['interest1'];
       $interest2 =  $_SESSION['interest2'];
       $interest3 =  $_SESSION['interest3'];
       $interest4 =  $_SESSION['interest4'];
       $interest5 =  $_SESSION['interest5'];
       $interest6 =  $_SESSION['interest6'];
       $Other_Areas = $_SESSION['Other_Areas'];

      ?>


      <div class="form-newsletter">

      <form id="form-heading">
        <h3>Your submission has been received</h3>
        <p id="greeting"></p>
        <?php

//        echo "Hello, " .$firstname ." ".$lastname."<br /><br />";
          
        echo "<script type='text/javascript'>";
        echo "var firstname = '$firstname';";
        echo "var lastname = '$lastname';";
        echo "</script>";
        
        
        echo "Thank you for joining our newsletter.<br />";
        echo "Here is a summary of your submssion: <br /><br />";
        ?>



        <div id="summary">        
           <b> <p id="nameInfo"></p></b>
          
         <?php    
        echo "<b>Gender: </b> ".$gender."<br />";
        echo "<b>Phone: </b>".$phone."<br />";
        echo "<b>Email: </b>".$email."<br /><br />";

        if ($event != "unknown") {
            echo "<b>Event Name:</b> ".$event."<br />";
        }


        echo "You have " .$numAttendees ." people would attend the event including: <br />";


                    if ($under_5) {
                        echo $under_5." person under 5 years old <br />";
                    }

                    if ($between_5_12) {
                        echo $between_5_12." person between 5-12 years old <br />";
                    }

                    if ($between_13_17) {
                        echo $between_13_17." person between 13-17 years old <br />";
                    }

                    if ($above_18) {
                        echo $above_18." person 18 years old <br />";
                    }

          // max number is 5 in each subcatagory group, and max number is 20 in total
          // if the number is above 5 or above 20 in total return further assistance message
         $max = 5;
         $maxTotal = 20;

        if ($numAttendees > $maxTotal ||
            $under_5 > $max ||
            $between_5_12 > $max ||
            $between_13_17 > $max ||
            $above_18 > $max) {
            echo " You should contact our admistration for further assistance <br />
                     Here are the contact information: <br />
                     619.594.5200 <br />
                     nhmuseum@sdsu.edu  <br /> <br />";
        }


        $interests = array_filter(array($interest1, $interest2, $interest3, $interest4, $interest5, $interest6));

        if ($relation_to_sdsu != "unknown") {
            echo "<b>Relationship with SDSU:</b> " . $relation_to_sdsu . "<br>";
        }

        if (!$interests) {
            echo "<b>Interests:</b> None<br>";
        } else {
            echo "<b>You are interested in: </b>";
            echo join(", ", $interests);
            echo ". <br />";
        }



        if (!$Other_Areas) {
            echo "Additional interests: </b> None<br>";
        } else {
            trim($Other_Areas);
            echo "<b>Additional Interests:</b> " . $Other_Areas;

        }



    ?>

    </div>

    <?php
    echo "San Diego State Univeristy <br />
         Natural History Museum.<br />";

    echo date('d, F, Y');

    ?>




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
