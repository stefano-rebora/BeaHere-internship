<?php
session_start();
if (!isset($_SESSION["userId"]) && $_SESSION["userId"] != "admin")  exit ('Permission denied');
$_SESSION["message"] = "";
$_SESSION["success"] = "";
require 'utilities.php';

// define variables and set to empty values
$password = $repassword = $hashPass = "";
$noErrors = true;

if ($_SERVER["REQUEST_METHOD"] == "POST" && (isset($_POST["removeStudentId"])|| isset($_POST["removeProfId"])) ) {
    
    $connection = startConnection();
    $stm = "";

    // Reset Student password
    if (isset($_POST["removeStudentId"])) { 
        $studentId = sanitize_input($_POST["removeStudentId"]);
        $stm = $connection->prepare("DELETE FROM student WHERE id = ?") ;
        $res = $stm->bind_param("s" ,$studentId) ;
    }

    // Reset Prof password
    else if (isset($_POST["removeProfId"])) {
        $profId = sanitize_input($_POST["removeProfId"]);

        echo $profId;
        $stm = $connection->prepare("DELETE FROM professor WHERE id = ?") ;
        $res = $stm->bind_param("s" ,$profId) ;
    }

    $res = $stm->execute();
       
    if (!$res || $stm->affected_rows == 0) $_SESSION["message"] ="Operazione fallita! Controllare che i dati siano corretti e che l'utente sia registrato nel sistema" ;
    else {
        $_SESSION["success"] ="Account rimosso con successo";  
    }

    // Resource release
    $stm->close();
    $connection->close();
  
}
    
  
header("Location:../dashboard.php");


?>