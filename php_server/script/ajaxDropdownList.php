<?php
session_start();
if (!isset($_SESSION["userId"]))  exit ('Permission denied');
require 'utilities.php';

// f ->  query filter (i.e userId)
// t ->  table name
 
if (isset ($_GET["f"]) && $_GET["t"]) {

    $filter = sanitize_input($_GET["f"]);
    $table = sanitize_input($_GET["t"]);

    $connection= startConnection();

    // course list
    if($table == "course"){
        if ($filter == "all"){
            $stm = $connection->prepare("SELECT * FROM course ORDER BY name") ;
        }
        else {
            $stm = $connection->prepare("SELECT Id, name, academic_year FROM course JOIN teaching ON course.id = teaching.course_id WHERE teaching.professor_id = ? ORDER BY course.name") ;
            $res = $stm->bind_param("s" , $filter) ;
        }

        $res = $stm->execute();
        $stm->bind_result($code,$name, $year);

        $rows = array();

        header('Content-Type: application/json');
        while ($stm->fetch()){
            $rows[] = $code." ".$name." ".$year;
        }
        echo json_encode($rows);
        $stm->close();
        $connection->close();
        exit();

    }

    $connection->close();
    

}




?>