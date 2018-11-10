<?php
require 'createConnection.php';

function sanitize_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data , ENT_QUOTES, 'UTF-8');
  return $data;
}



// Return true if username and password are correct
function check_logIn ($user , $pass) {
    
	$connection= startConnection();
	$stm = "";
	
    if ($user == "admin") { // query for admin's password
		$stm = $connection->prepare("SELECT name, surname, password FROM professor WHERE id = -1") ;
	}
	else { // query for user's password
		$stm = $connection->prepare("SELECT name, surname, password FROM professor WHERE id = ?") ;
		$res = $stm->bind_param("s" , $user) ; 
	}

    $res = $stm->execute();
	$stm->bind_result($name, $surname, $hashpass);

    if ($stm->fetch() ) {
        if(password_verify($pass,$hashpass)){
			$_SESSION["userId"] = $user; // If login is correct , a new session is initialized
			$_SESSION["name"] = $name;
			$_SESSION["surname"] = $surname;
			$stm->close();
			$connection->close();
            return true;
        }
	}
	$stm->close();
	$connection->close();
    return false ;
    
}

function check_empty ($data , $varName , &$varErr ) {
  global $noErrors;
  if (empty($data)) {
    $varErr ="Campo ".$varName." obbligatorio";
	$noErrors = false;
  }
}

?>