<?php 
session_start();
if (!isset($_SESSION["userId"]))  exit ('Permission denied');
require 'script/utilities.php';

?>
<!doctype html>
<html>

<head>
    <?php require 'components/head.php' ?>

    <link rel="stylesheet" type="text/css" href="lib/DataTables/datatables.min.css">
    <script type="text/javascript" charset="utf8" src="lib/DataTables/datatables.min.js"></script>
    <script type="text/javascript" charset="utf8" src="lib/DataTables/Buttons-1.5.4/js/dataTables.buttons.min.js"></script>
    <script type="text/javascript" charset="utf8" src="lib/DataTables/JSZip-2.5.0/jszip.min.js"></script>
    <script type="text/javascript" charset="utf8" src="lib/DataTables/Buttons-1.5.4/js/buttons.html5.min.js"></script>
    <script type="text/javascript" charset="utf8" src="lib/DataTables/Buttons-1.5.4/js/buttons.flash.min.js"></script>


    <script src="js/ajaxDropdown.js"></script>
    <script src="js/ajaxAttendances.js"></script>
    <script src="js/ajaxAttendancesModifier.js"></script>
    <link href="./css/dashBoard.css" rel="stylesheet">
    <link href="./css/attTable.css" rel="stylesheet">
    
    <title>Presenze</title>

    <script>
        // ajax functions for dropdown courses list loading
        ajaxDropdownUpdate('<?php if ($_SESSION["userId"]== "admin") echo "all"; else echo $_SESSION['userId'];?>', "course", "attendanceId");
        
        // ajax functions for attendaces table loading
        ajaxGetAttendances("attForm");

        // ajax functions for adding attendance
        ajaxAddAttendance("addAttendanceForm");

        // ajax functions for removing lesson
        ajaxRemoveLesson("removeLessonForm");

    </script>
</head>

<body>

    <?php require 'components/attendancesModal.php' ?>
    <?php require 'components/navbar.php' ?>

    <div class="container-fluid">
        <div class="container" style="margin-top: 1em; min-height: 100vh;">

            
            <!-- Add to my courses dropdown -->
            <form id="attForm" action="script/generateAttendanceMatrix.php" method="get" >
                <div class="form-group">
                    <label for="addCourse">Seleziona corso</label>
                    <select class="form-control" id="attendanceId" name="attendanceId" required>
                        <option value="" disabled selected>Seleziona corso</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-success">Gestisci presenze</button>
                <br>
                <br>
            </form>
            
            <div class="table-responsive">
                <table class="table table-striped top" id="attTable">
                    <caption id="tableCaption"></caption>
                    <thead>
                        <tr id="tableHead">
                        </tr>
                    </thead>
                    <tbody id="tableBody">
                    </tbody>
                </table>
            </div>

        </div>



    </div>

    <?php require 'components/footer.php' ?>

</body>

</html>