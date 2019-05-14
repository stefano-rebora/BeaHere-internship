<?php
session_start();
if (!isset($_SESSION["userId"]))  exit ('Permission denied');
$_SESSION["message"] = "";
$_SESSION["success"] = "";
require 'utilities.php';

// define variables and set to empty values
$courseName = $courseCode = $courseYear ="";
$noErrors = true;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   check_empty($_POST["courseName"] , "Nome corso" , $_SESSION["message"]);
   $courseName = sanitize_input($_POST["courseName"]);
   // check if name only contains letters
   if (!preg_match("/^[a-zA-Z' 0-9]*$/",$courseName)) {
     $noErrors = false;
     $_SESSION["message"] ="Nome corso non valido: consentite solo lettere alfabetiche";
   }
  	
    check_empty($_POST["courseId"] , "Codice corso" , $_SESSION["message"]);
    $courseCode = sanitize_input($_POST["courseId"]);
    // check if the course code is valid
    if (!preg_match("/^[0-9]{5}$/",$courseCode)) {
      $noErrors = false;
      $_SESSION["message" ] = "Codice corso non valido: il codice deve essere composto da 5 cifre";
    }
  
  
    check_empty($_POST["courseYear"] , "Anno accademico" , $_SESSION["message"]);
    $courseYear = sanitize_input($_POST["courseYear"]);
    // check if the academic year is valid
    if (!preg_match("/^[0-9]{4}-[0-9]{4}$/",$courseYear)) {
      $noErrors = false;
      $_SESSION["message" ] = "Anno accademico non valido: il formato deve essere yyyy-yyyy (es. 2017-2018)";
      }
    
	// If all is correct
   if ($noErrors) { 
       
	     $connection = startConnection();
       
       $stm = $connection->prepare("INSERT INTO course (id,name, academic_year) VALUES (?,?,?)") ;
       $res = $stm->bind_param("sss" , $courseCode , $courseName, $courseYear) ;
       $res = $stm->execute();
       
       if (!$res) $_SESSION["message"] ="Creazione corso fallita" ;
       else {
           $_SESSION["success"] ="Nuovo corso creato con successo";  
       }
        // Resource release
        $stm->close();
        $connection->close();
   }
    
    header("Location:../dashboard.php");
}




?>