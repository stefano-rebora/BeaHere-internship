
<?php
session_start();
if (!isset($_SESSION["userId"]))  exit ('Permission denied');
require 'utilities.php';



if (isset ($_POST["lessonId"])&& isset ($_POST["noteInput"]) ) {

    $lessonId = sanitize_input($_POST["lessonId"]);
    $noteInput = sanitize_input(urldecode($_POST["noteInput"]));

    $connection= startConnection();


    // Update lesson note

    $stm = $connection->prepare("UPDATE lesson SET note = ? WHERE id = ?") ;
    $res = $stm->bind_param("ss" , $noteInput, $lessonId) ;
    $res = $stm->execute();

    if (!$res) {
        echo "Modifiche fallite";
    }
    else {
        echo "OK";
    }

    $stm->close();
    $connection->close();
    exit();


}

?>