<?php
session_start();
if (!isset($_SESSION["userId"]))  exit ('Permission denied');
require 'utilities.php';


if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["removeLessonId"])) {

    
    $connection = startConnection();

    // Remove lesson
    $lessonId = sanitize_input($_POST["removeLessonId"]);
    $stm = $connection->prepare("DELETE FROM lesson WHERE id = ?") ;
    $res = $stm->bind_param("s" ,$lessonId) ;
    
    $res = $stm->execute();
       
    if (!$res || $stm->affected_rows == 0) {
        echo "Operazione fallita! Controllare che la lezione non sia stata già cancellata" ;
    }
    else {
        echo "OK";  
    }

    // Resource release
    $stm->close();
    $connection->close();
  
}


?>