<!doctype html>

<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="stylesheet.css">
<link href="https://fonts.googleapis.com/css?family=Josefin+Sans:700|Love+Ya+Like+A+Sister|Schoolbell|Source+Sans+Pro:300,400,600&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Wellfleet&display=swap" rel="stylesheet">
<title>PHP</title>
</head>

<body>
<script src="script.js"></script>
<div id = "wrapper">
  <div id="header"> <span class = "logo">Learning... Code_ </span> </div>
  
  <!------------ content area ---------------->
  
  <div id= "container"> 
    
    <!--------- nav ------------->
    <div id="nav">
      <ul>
        <li><a href="learning.html" ><img src="images/home.png" width="50px" height="50px" alt="home-icon"></a></li>
        <li><a href="html.html" >HTML</a></li>
        <li><a href="css.html" >CSS</a></li>
        <li><a href="javascript.html" >JavaScript</a></li>
        <li><a href="jquery.html" >jQuery</a></li>
        <li><a href="learning-php.php" class="selected"  >PHP</a></li>
      </ul>
    </div>
    <hr>
    
    <!------------sidebar area ----------------->
    
    <div id="sidebar">
      <ul>
        <div id="hello"> <img src="images/hello.gif" width="100px" height="100px" alt="hello.gif"> </div>
        <div class="sidebar-button" id="button-php-variables">
          <li type="button" value="Show/Hide" > <a href="#" onClick="showHideDiv('button-php-variables', 'php-variables');" >
            <h4>Variables</h4>
            </a></li>
        </div>
        <div class="sidebar-button" id="button-variables">
          <li type="button" value="Show/Hide"  > <a href="#" onClick="showHideDiv('button-php-variables', 'php-variables');" >
            <h4>more</h4>
            </a></li>
        </div>

    </div>
    
    <!--------- notes ------------->
    
    <div id="notes"> 
      
      <!--------- stetement notes ------------->
      
      <div class="info" id="php-variables" style="display:none">
        <div class="notes-header">
          <h3>VARIABLES: <span class="notes-subheader"> WHAT ARE VARIABLES </span></h3>
          <hr>
          <h5>PHP supports 8 types of variables.
			<ol>
				<li>four scalar (single-valued) types: boolean, integer, floating point, and strings</li>
				<li>two scalar (multivalued) types: arrays, objects, resources and null (a special type that has no value)</li>
				<li>a varialbe must start with a $, first character after the dollar sign must be either a letter or an underscore and it cannot be a number</li>
				<li>print $some_var; (without quotation marks)  print "Hello, $name" (within double quotation marks) print 'hello, $name'; (You cannot print variable within single quotation marks, this won't work)</li>
			</ol>
			
			<?php 
			  $user = $_SERVER['HTTP_USER_AGENT'];
			  $sever = $_SERVER['SERVER_SOFTWARE'];
			  echo "You are viewing this page using<br><strong>$user</strong><br><br>";
			  echo "This server is running <br><strong>$sever</strong>";
			 ?>
	     </h5>

			
        </div>
        <div class="whiteSpace"></div>
        <div class="code">
          <div class = "code-title"> GREETING </div>
          <p class="code-block">
 </p>
          <div class="test">
            <button class="code-test-button" onClick = "greeting();">Try This Code</button>
          </div>
          <span class="code-comments"> // test result </span><br>
          <div class="test-result" id="greeting"></div>
          
        </div>
      </div>
      
      

        


        



      
      <!------------ end of notes  ----------------> 
    </div>
    
    <!------------ footer area ---------------->
    <div id="study-1"> <img src="images/study-1.gif" alt="study-1" width="250px" height="250px"> </div>
    
    <!------------ end of container  ----------------> 
  </div>
  
  <!------------ end of wrapper  ----------------> 
</div>
</body>
</html>
