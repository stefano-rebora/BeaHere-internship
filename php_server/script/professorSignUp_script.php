<?php
session_start();
if (!isset($_SESSION["userId"]) && $_SESSION["userId"] != "admin")  exit ('Permission denied');
$_SESSION["message"] = "";
$_SESSION["success"] = "";
require 'utilities.php';

// define variables and set to empty values
$name = $surname = $email = $id = $password = $repassword = $hashPass = "";
$noErrors = true;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	
   check_empty($_POST["prof_name"] , "nome" , $_SESSION["message"]);
   $name = sanitize_input($_POST["prof_name"]);
   // check if name only contains letters
   if (!preg_match("/^[a-zA-Z' ]*$/",$name)) {
	 $noErrors = false;
     $_SESSION["message"] ="Nome non valido: consentite solo lettere alfabetiche";
   }
  	
    check_empty($_POST["prof_surname"] , "cognome" , $_SESSION["message"]);
    $surname = sanitize_input($_POST["prof_surname"]);
    // check if surname only contains letters
    if (!preg_match("/^[a-zA-Z' ]*$/",$surname)) {
	  $noErrors = false;
      $_SESSION["message" ] = "Cognome non valido: consentite solo lettere alfabetiche";
    }
  
  
    check_empty($_POST["prof_email"] , "email" , $_SESSION["message"]);
    $email = sanitize_input($_POST["prof_email"]);
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	  $noErrors = false;
      $_SESSION["message"] = "Indirizzo email non valido";
    }
  
    
    check_empty($_POST["professorId"] , "Id professore" , $_SESSION["message"]);
    $id= sanitize_input($_POST["professorId"]);
    // check if username is correct
	if (!preg_match("/^[0-9]{7}$/",$id)) {
	  $noErrors = false;
      $_SESSION["message"] = "Id professore non valido: deve essere formato da 6 cifre";
    }
	
    check_empty($_POST["prof_password"] , "password" , $_SESSION["message"]);
    $password = sanitize_input($_POST["prof_password"]);
	  $hashPass = password_hash($password, PASSWORD_DEFAULT);
  
   
    check_empty($_POST["prof_password_conf"] , "conferma password" , $_SESSION["message"]);
    $repassword = sanitize_input($_POST["prof_password_conf"]);

	if ($repassword !== $password) {
	  $noErrors = false;
	  $_SESSION["message"] = "Conferma password errata" ;
	}
    
	// If all is correct , a new registration will be saved into DB
   if ($noErrors) { 
       
	    $connection = startConnection();
       
       $stm = $connection->prepare("INSERT INTO professor (id, password, name, surname, email) VALUES (?,?,?,?,?)") ;
       $res = $stm->bind_param("sssss" , $id , $hashPass , $name , $surname , $email) ;
       $res = $stm->execute();
       
       if (!$res) $_SESSION["message"] ="Registrazione fallita" ;
       else {
           $_SESSION["success"] ="Utente registrato con successo";  
       }
        // Resource release
        $stm->close();
        $connection->close();
  
   }
    
  
    header("Location:../dashboard.php");
}




?>