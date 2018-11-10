
<?php
    if (!isset($_SESSION["userId"]))  exit ('Permission denied');
    require 'components/messageModal.php';
    require 'components/formsModal.php';
?>

<!-- NavBar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
        <img src="img/brand.png"  alt="Logo" style="width:150px;">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" href="dashboard.php">Home
                    <span class="sr-only">(current)</span>
                </a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="attendanceDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Presenze
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="./attendances.php">Visualizza presenze</a>
                    <a class="dropdown-item" href="#">Modifica presenze</a>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="courseDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Corsi
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#" data-toggle="modal" data-target="#AddCourseModal">Crea nuovo corso</a>
                </div>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="register.php">Registro professore </a>
            </li>

            <?php if ($_SESSION["userId"]== "admin") { ?>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="professorDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Professori
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#" data-toggle="modal" data-target="#AddProfessorModal">Crea account</a>
                        <a class="dropdown-item" href="#" data-toggle="modal" data-target="#ResetProfessorModal">Reset password</a>
                        <a class="dropdown-item" href="#" data-toggle="modal" data-target="#RemoveProfessorModal">Cancella account</a>
                    </div>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="professorDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Studenti
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#" data-toggle="modal" data-target="#ResetStudentModal">Reset password</a>
                        <a class="dropdown-item" href="#" data-toggle="modal" data-target="#RemoveStudentModal">Cancella account</a>
                    </div>
                </li>
                

            <?php } ?>


        </ul>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <span class="navbar-text">
                    <?php echo $_SESSION['name']." ".$_SESSION["surname"] ?>
                </span>
            </li>
            <li class="nav-item">
                <form action="script/logOut_script.php">
                    <button style='margin-left:10px' type="submit" class="btn btn-secondary">Logout</button>
                </form>
            </li>
        </ul>
</nav>