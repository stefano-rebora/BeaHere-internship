
<?php
session_start();
if (!isset($_SESSION["userId"]))  exit ('Permission denied');
require 'utilities.php';

if (isset ($_GET["attendanceAcademicYear"])) {

    $academicYear = sanitize_input($_GET["attendanceAcademicYear"]);

    $connection= startConnection();

    $coursesIds = array();
    $coursesNames = array();
    $lessonCounter = array();
    $avgAttCounter = array();
    $avgPercentageCounter = array();

    // Get the list of total number of lessons per course

    $stm = $connection->prepare("SELECT course_id, course_name, num_lessons FROM lessonpercourse WHERE academic_year = ? ORDER BY course_id") ;
    $res = $stm->bind_param("s" , $academicYear) ;
    $res = $stm->execute();
    $stm->bind_result($course_id,$course_name,$num_lessons);

    
    while ($stm->fetch()){
        $coursesIds[] = $course_id;
        $coursesNames[] = $course_name;
        $lessonCounter[] = $num_lessons;
    }

    $courseCount = count($coursesIds);
    $avgPercentageCounter= array_fill(0,$courseCount,0);


    // Get the list of avg number of attendances per course
    $stm = $connection->prepare("SELECT course_id, AVG(num_attend) FROM attendanceperstudent WHERE academic_year = ? GROUP BY course_id ORDER BY course_id;") ;
    $res = $stm->bind_param("s" , $academicYear) ;
    $res = $stm->execute();
    $stm->bind_result($course_id, $avg_num_attendances);

    // Create the attendance avg data
    while ($stm->fetch()){

        $coursePosition = array_search($course_id, $coursesIds);
        $avgPercentageCounter[$coursePosition] = round((($avg_num_attendances/$lessonCounter[$coursePosition]) * 100),2);
    }


    header('Content-Type: application/json');
    $payload = array();
    $payload["courseIds"] = $coursesIds;
    $payload["courseNames"] = $coursesNames;
    $payload["avgAttendance"] = $avgPercentageCounter;

    echo json_encode($payload);
    $stm->close();
    $connection->close();
    exit();



}

?>