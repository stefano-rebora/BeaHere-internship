<?php
session_start();
if (!isset($_SESSION["userId"]) && $_SESSION["userId"] != "admin")  exit ('Permission denied');
$_SESSION["message"] = "";
$_SESSION["success"] = "";
require 'utilities.php';

// define variables and set to empty values
$password = $repassword = $hashPass = "";
$noErrors = true;

if ($_SERVER["REQUEST_METHOD"] == "POST" && (isset($_POST["resetStudentId"])|| isset($_POST["resetProfId"]) )
 && isset($_POST["resetPassword"]) && isset($_POST["resetPassword_conf"]) ) {


    check_empty($_POST["resetPassword"] , "nuova password" , $_SESSION["message"]);
    $password = sanitize_input($_POST["resetPassword"]);
    $hashPass = password_hash($password, PASSWORD_DEFAULT);
      
       
    check_empty($_POST["resetPassword_conf"] , "conferma password" , $_SESSION["message"]);
    $repassword = sanitize_input($_POST["resetPassword_conf"]);
    if ($repassword !== $password) {
        $noErrors = false;
        $_SESSION["message"] = "Conferma password errata" ;
    }

    if ($noErrors) {

        $connection = startConnection();
        $stm = "";

        // Reset Student password
        if (isset($_POST["resetStudentId"])) { 
            $studentId = sanitize_input($_POST["resetStudentId"]);
            $stm = $connection->prepare("UPDATE student SET password = ? WHERE id = ?") ;
            $res = $stm->bind_param("ss" ,$hashPass, $studentId) ;
        }

        // Reset Prof password
        else if (isset($_POST["resetProfId"])) {
            $profId = sanitize_input($_POST["resetProfId"]);
            $stm = $connection->prepare("UPDATE professor SET password = ? WHERE id = ?") ;
            $res = $stm->bind_param("ss" ,$hashPass, $profId) ;
        }

        $res = $stm->execute();
       
        if (!$res || $stm->affected_rows == 0) $_SESSION["message"] ="Operazione fallita! Controllare che i dati siano corretti e che l'utente sia registrato nel sistema" ;
        else {
            $_SESSION["success"] ="Reset password avvenuto con successo";  
        }

        // Resource release
        $stm->close();
        $connection->close();
    }
  
}
    
  
header("Location:../dashboard.php");


?>