<?php
session_start();
if (!isset($_SESSION["userId"]))  exit ('Permission denied');
require 'utilities.php';


if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["attLessonId"]) && isset($_POST["attStudentId"]) ) {

    
    $connection = startConnection();

    // Get lesson info
    $lessonId = sanitize_input($_POST["attLessonId"]);
    $studentId = sanitize_input($_POST["attStudentId"]);

    $stm = $connection->prepare("SELECT date, minor_id FROM lesson WHERE id = ?") ;
    $res = $stm->bind_param("s" ,$lessonId) ;
    $res = $stm->execute();
    $stm->bind_result($ldate,$lminor_id);

    // Insert attendance
    while ($stm->fetch()){

        $stm->close();
        $stm = $connection->prepare("INSERT INTO attendance (student_id, lesson_date, lesson_minor_id) VALUES (?,?,?)") ;
        $res = $stm->bind_param("sss" , $studentId,$ldate,$lminor_id) ;
        $res = $stm->execute();
        
        if (!$res) echo "Operazione fallita" ;
        else {
            echo "OK" ;
        }


    }
    

    // Resource release
    $stm->close();
    $connection->close();
  
}


?>