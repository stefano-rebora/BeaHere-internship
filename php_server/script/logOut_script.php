<?php
	session_start();
	session_unset();
	session_destroy();

    session_start();
    $_SESSION["success"]="Logout effettuato con successo";
	header("Location: ../index.php");

?>