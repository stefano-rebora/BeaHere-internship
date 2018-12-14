<?php 
session_start();
if (isset($_SESSION["userId"])){
    header("Location:dashboard.php");
    exit ();
}
?>

<!doctype html>
<html>

<head>
    <?php require 'components/head.php' ?>
    <link href="./css/loginForm.css" rel="stylesheet">
    <title>LogIn</title>
</head>

<body id="LoginForm">
    <?php require 'components/messageModal.php' ?> 
    <div class="container">
    <img class=" logo-img mx-auto d-block" src="img/login-logo.png" alt="Be Here">
        <div class="login-form">
            <div class="main-div">
                <!--<div class="panel">
                    <h2>Login</h2>
                    <p>Inserisci username e password</p>
                </div> -->
                <form method="post" action="script/logIn_script.php" id="Login">
                    <div class="form-group">
                        <input type="text" class="form-control" id="userId" name="userId" placeholder="ID Professore">
                    </div>

                    <div class="form-group">
                        <input type="password" class="form-control" id="password" name="password" placeholder="Password">
                    </div>

                    <div class="forgot">
                        <a href="">Password dimenticata?</a>
                    </div>

                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
        <img class="img-fluid unige-img mx-auto d-block" src="img/Unige.jpg" alt="Unige">
    </div>
</body>

</html>