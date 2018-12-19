<?php 
session_start();
if (!isset($_SESSION["userId"]) && $_SESSION["userId"] != "admin")  exit ('Permission denied');

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
    <script type="text/javascript" charset="utf8" src="lib/chart/Chart.min.js"></script>


    <script src="js/ajaxAttendancesAcademicYear.js"></script>
    <link href="./css/dashBoard.css" rel="stylesheet">
    <link href="./css/attTable.css" rel="stylesheet">
    
    <title>Panoramica corsi</title>

    <script>
        
        // ajax functions for attendaces table loading
        ajaxGetAttendancesAcademicYear("attForm");

    </script>
</head>

<body>

    <?php require 'components/attendancesModal.php' ?>
    <?php require 'components/navbar.php' ?>

    <div class="container-fluid">
        <div class="container" style="margin-top: 1em; min-height: 100vh;">

            
            <!-- Add to my courses dropdown -->
            <form id="attForm" action="script/ajaxGenerateCourseAvgAttendance.php" method="get" >
                <div class="form-group">
                    <label for="courseYear" class="col-form-label">Anno Accademico</label>
                    <input type="text" class="form-control" id="courseYearRecap" name="courseYearRecap" placeholder="yyyy-yyyy"
                        required>
                </div>
                <button type="submit" class="btn btn-success">Gestisci presenze</button>
                <br>
                <br>
            </form>
            
            <div class="chart-container" >
                <canvas id="attChart"></canvas>
            </div>
            
            <div class="table-responsive table-top">
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