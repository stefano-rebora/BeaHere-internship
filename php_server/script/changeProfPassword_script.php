<?php
session_start();
if (!isset($_SESSION["userId"]))  exit ('Permission denied');
$_SESSION["message"] = "";
$_SESSION["success"] = "";
require 'utilities.php';

// define variables and set to empty values
$password = $new_password = $repassword = $hashPass = $userId= "";
$noErrors = true;

if($_SESSION["userId"] == "admin") $userId = "-1";
else $userId = $_SESSION["userId"];



if ($_SERVER["REQUEST_METHOD"] == "POST") {
	

    check_empty($_POST["password"] , "password" , $_SESSION["message"]);
    $password = sanitize_input($_POST["password"]);

    check_empty($_POST["new_password"] , "nuova password" , $_SESSION["message"]);
    $new_password = sanitize_input($_POST["new_password"]);
	$hashPass = password_hash($new_password, PASSWORD_DEFAULT);
  
   
    check_empty($_POST["password_conf"] , "conferma password" , $_SESSION["message"]);
    $repassword = sanitize_input($_POST["password_conf"]);

	if ($repassword !== $new_password) {
	  $noErrors = false;
	  $_SESSION["message"] = "Conferma password errata" ;
	}
    
	// If all is correct 
   if ($noErrors) { 
       
        $connection = startConnection();
        
        // Check current password
        $stm = $connection->prepare("SELECT password FROM professor WHERE id = ?") ;
        $res = $stm->bind_param("s" , $userId) ; 
   
        $res = $stm->execute();
        $stm->bind_result($old_hashpass);

        if ($stm->fetch() ) {

            // If the current password is correct
            if(password_verify($password,$old_hashpass)){

                // Update the password
                $stm->close();
                $stm = $connection->prepare("UPDATE professor SET password = ? WHERE id = ?") ;
                $res = $stm->bind_param("ss" ,$hashPass, $userId) ;
                $res = $stm->execute();
       
                if (!$res || $stm->affected_rows == 0) $_SESSION["message"] ="Operazine fallita" ;
                else {
                    $_SESSION["success"] ="Password aggiornata con successo";  
                }

            }
            else $_SESSION["message"] = "Password errata" ;
        }
        else $_SESSION["message"] ="Operazine fallita" ;
       
        
        // Resource release
        $stm->close();
        $connection->close();
  
   }
    
  
    header("Location:../dashboard.php");
}




?>