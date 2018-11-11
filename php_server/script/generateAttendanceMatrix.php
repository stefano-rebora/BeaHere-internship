
<?php
session_start();
if (!isset($_SESSION["userId"]))  exit ('Permission denied');
require 'utilities.php';

if (isset ($_GET["attendanceId"])) {

    $courseId = sanitize_input($_GET["attendanceId"]);

    $connection= startConnection();

    $lessonsIds = array();
    $lessonsList = array();
    $studentsList = array();
    $attCounter = array();
    $attendanceMatrix = array();

    // Get the list of all lessons

    $stm = $connection->prepare("SELECT id, date, start, end FROM lesson WHERE lesson.course_id = ? ORDER BY lesson.date, lesson.start") ;
    $res = $stm->bind_param("s" , $courseId) ;
    $res = $stm->execute();
    $stm->bind_result($lid,$ldate,$lstart, $lend);

    
    while ($stm->fetch()){
        $lessonsIds[] = $lid;
        $lessonsList[] = nl2br($ldate."\n".$lstart."-".$lend);
    }

    $lessonCount = count($lessonsList);

/*     foreach ($lessonsList as $lesson) {
        echo $lesson;
    }  */

    // Get the list of all attendances
    $stm = $connection->prepare("SELECT s.id, s.surname,s.name, l.date, l.start,l.end FROM student s JOIN attendance a ON s.id = a.student_id JOIN lesson l ON a.lesson_date = l.date AND a.lesson_minor_id = l.minor_id JOIN course c ON l.course_id = c.id WHERE c.id = ? ORDER BY s.surname ") ;
    $res = $stm->bind_param("s" , $courseId) ;
    $res = $stm->execute();
    $stm->bind_result($sid,$ssurname, $sname, $ldate, $lstart,$lend);

    // Create the attedance matrix
    while ($stm->fetch()){
        $student = $ssurname." ".$sname." ".$sid;
        $lesson = $ldate."\n".$lstart."-".$lend;
        if(!in_array($student,$studentsList)){
            $studentsList[]=$student;
            $attendanceMatrix[]= array_fill(0,$lessonCount,0);
            $attCounter[] = 0;
        }

        $studentPosition = array_search($student, $studentsList);
        $lessonPosition = array_search(nl2br($lesson), $lessonsList);

        $attendanceMatrix[$studentPosition][$lessonPosition] = 1;
        $attCounter[$studentPosition] += 1;
    }

    // foreach ($attendanceMatrix as $row) {
    //     foreach($row as $elem){
    //         echo $elem;

    //     }
    // }
    
    $attCounter = array_map( function($val) use($lessonCount) { return round($val *100/$lessonCount,2); }, $attCounter);

    header('Content-Type: application/json');
    $payload = array();
    $payload["lessonsIds"] = $lessonsIds;
    $payload["lessons"] = $lessonsList;
    $payload["students"] = $studentsList;
    $payload["attPerc"] = $attCounter;
    $payload["attMatrix"] = $attendanceMatrix;

    echo json_encode($payload);
    $stm->close();
    $connection->close();
    exit();



}







/* $array = array();

for ($i = 0; $i <= 10; $i++) {
    
    for ($j = 0; $j <= 10; $j++) {
        
        $array[$i][$j]= 0;

}

}

for ($i = 0; $i <= 10; $i++) {
    
    for ($j = 0; $j <= 10; $j++) {
        
        echo $array[$i][$j];

}

} */

?>