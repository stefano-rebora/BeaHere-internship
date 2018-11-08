
<?php
session_start();
if (!isset($_SESSION["userId"]))  exit ('Permission denied');
require 'utilities.php';

if (isset ($_GET["registerId"])) {

    $courseId = sanitize_input($_GET["registerId"]);
    $userId = $_SESSION["userId"];

    $connection= startConnection();

    $lessonsIds = array();
    $lessonsList = array();
    $lessonsNotes = array();


    // Get the list of all lessons

    $stm = $connection->prepare("SELECT id, date, start, end, note FROM lesson WHERE lesson.course_id = ? AND lesson.professor_id = $userId  ORDER BY lesson.date, lesson.start") ;
    $res = $stm->bind_param("s" , $courseId) ;
    $res = $stm->execute();
    $stm->bind_result($lid,$ldate,$lstart, $lend, $lnote);

    
    while ($stm->fetch()){
        $lessonsIds[] = $lid;
        $lessonsList[] = nl2br($ldate."\n".$lstart."-".$lend);
        $lessonsNotes[] = $lnote;
    }

    header('Content-Type: application/json');
    $payload = array();
    $payload["lessonsIds"] = $lessonsIds;
    $payload["lessons"] = $lessonsList;
    $payload["notes"] = $lessonsNotes;

    echo json_encode($payload);
    $stm->close();
    $connection->close();
    exit();


}

?>