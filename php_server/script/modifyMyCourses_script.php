<?php
session_start();
if (!isset($_SESSION["userId"]))  exit ('Permission denied');
$_SESSION["message"] = "";
$_SESSION["success"] = "";
require 'utilities.php';


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
       $connection = startConnection();
       
       if (isset($_POST["addCourse"])){ // Add course
           $stm = $connection->prepare("INSERT INTO teaching (professor_id,course_id) VALUES (?,?)") ;
           $res = $stm->bind_param("ss" , $_SESSION["userId"] , $_POST["addCourse"]) ;
           $res = $stm->execute();
           if (!$res) $_SESSION["message"] ="Operazione fallita" ;
           else {
                $_SESSION["success"] ="Corso aggiunto ai tuoi corsi con successo";  
           }
           $stm->close();
        }
        else if (isset($_POST["removeCourse"])){ // Remove course
            $stm = $connection->prepare("DELETE FROM teaching WHERE professor_id = ? AND course_id = ?") ;
            $res = $stm->bind_param("ss" , $_SESSION["userId"] , $_POST["removeCourse"]) ;
            $res = $stm->execute();
            if (!$res) $_SESSION["message"] ="Operazione fallita" ;
            else {
                 $_SESSION["success"] ="Corso rimosso dai tuoi corsi con successo";  
            }
            $stm->close();
         }
        // Resource release
        $connection->close();
    
    header("Location:../dashboard.php");
}





?>