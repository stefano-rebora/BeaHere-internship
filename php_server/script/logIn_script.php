<?php

session_start();
$_SESSION["message"] = "";
require 'utilities.php';		   

// define variables and set to empty values
$userId = $password ="";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $userId = sanitize_input($_POST["userId"]);
 
    $password = sanitize_input($_POST["password"]);
    
   if (check_logIn($userId , $password)) {  
	   header("Location:../dashboard.php");
   }
   else {
       $_SESSION["message"] = "Username e/o password errati";
       header("Location:../index.php");
   }

	
}
 

?>

