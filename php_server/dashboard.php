<?php 
session_start();
if (!isset($_SESSION["userId"]))  exit ('Permission denied');
require 'script/utilities.php';

?>
<!doctype html>
<html>

<head>
    <?php require 'components/head.php' ?>
    <script src="js/ajaxDropdown.js"></script>
    <link href="./css/dashBoard.css" rel="stylesheet">
    <title>DidUp</title>

<?php if ( $_SESSION["userId"] != "admin") { ?>
    <script>
        // ajax functions for dropdown courses list loading
        ajaxDropdownUpdate("all", "course", "addCourse")
        ajaxDropdownUpdate('<?php echo $_SESSION['userId'];?>', "course", "removeCourse")
    </script>

<?php } ?>
</head>

<body>


    <?php require 'components/navbar.php' ?>

    <div class="container-fluid">
        <div class="container" style="margin-top: 1em; min-height: 100vh;">
            <!-- Password form -->
            <form action="script/changeProfPassword_script.php" method="post">
                <div class="card person-card">
                    <div class="card-body">
                        <!-- Sex image -->
                        <img id="img_person" class="person-img" src="https://visualpharm.com/assets/217/Life%20Cycle-595b40b75ba036ed117d9ef0.svg">
                        <h2 id="username" class="card-title">
                            <?php echo $_SESSION["name"]." ".$_SESSION["surname"]." (".$_SESSION["userId"].")" ?>
                        </h2>
                        <!-- First row (on medium screen) -->
                        <h4>Cambia password</h4>
                        <div class="row">

                            <div class="form-group col-md-4">
                                <label for="changePassword" class="col-form-label">Password</label>
                                <input type="password" class="form-control" id="changePassword" name="password" placeholder="Digita password"
                                    required>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="changeNewPassword" class="col-form-label">Nuova pasword</label>
                                <input type="password" class="form-control" id="changeNewPassword" name="new_password"  placeholder="Digita nuova password"
                                    required>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="changePasswordConf" class="col-form-label">Conferma nuova password</label>
                                <input type="password" class="form-control" id="changePasswordConf" name="password_conf"  placeholder="Conferma nuova password"
                                    required>
                            </div>
                        </div>
                        <!-- Second row (on medium screen) -->
                        <div class="row justify-content-center">
                            <button type="submit" class="btn btn-primary">Cambia password</button>
                        </div>

                    </div>
                </div>
            </form>

            <!-- Left Card -->
            <div class="row">
                <div class="col-md-6" style="padding=0.5em;">
                    <div class="card">
                        <div class="card-header">
                            <h2 class="card-title">I miei corsi</h2>
                        </div>

                        <div class="card-body">

                            <!-- My courses table -->
                            <table class="table table-bordered table-striped table-responsive">
                                <thead>
                                    <tr>
                                        <th>Codice corso</th>
                                        <th>Nome</th>
                                        <th>Anno accademico</th>
                                    </tr>
                                </thead>
                                <tbody>
                <?php
                      $connection = startConnection();

                      if($_SESSION["userId"]== "admin"){
                        $stm = $connection->prepare("SELECT * FROM course ORDER BY name") ;
                      }
                      else{
                        $stm = $connection->prepare("SELECT Id, name, academic_year FROM course JOIN teaching ON course.id = teaching.course_id WHERE teaching.professor_id = ? ORDER BY course.name") ;
                        $res = $stm->bind_param("s" , $_SESSION["userId"]) ;
                      }

                      $res = $stm->execute();
                      $stm->bind_result($courseId, $courseName, $courseYear);
                      
                       while ($stm->fetch()) {
                            echo '<tr>
                                    <td>'.$courseId.'</td>
                                    <td>'.$courseName.'</td>
                                    <td>'.$courseYear.'</td>
                                   </tr>' ;
                        }
                        $stm->close();
                        $connection->close();
                ?>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- Right Card -->
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h2 class="card-title">Gestisci i miei corsi</h2>
                        </div>
                        <div class="card-body">
                            <!-- Add to my courses dropdown -->
                            <form method="post" action="script/modifyMyCourses_script.php">
                                <div class="form-group">
                                    <label for="addCourse">Aggiungi corso</label>
                                    <select class="form-control" id="addCourse" name="addCourse" required>
                                    <option class="drop-down" value="" disabled selected>Seleziona corso</option>
                                    </select>
                                </div>
                                <button type="submit" class="btn btn-success">Aggiungi ai miei corsi</button>
                            <br>
                            <br>
                            </form>
                            <!-- Remove from my courses dropdown -->
                            <form method="post" action="script/modifyMyCourses_script.php">
                                <div class="form-group">
                                    <label for="removeCourse">Rimuovi corso</label>
                                    <select class="form-control" id="removeCourse" name="removeCourse" required>
                                    <option value="" disabled selected>Seleziona corso</option>
                                    </select>
                                </div>
                                <button type="submit" class="btn btn-danger">Rimuovi dai miei corsi</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <?php require 'components/footer.php' ?>

</body>

</html>