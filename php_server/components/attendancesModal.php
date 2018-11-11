<?php
if (!isset($_SESSION["userId"]))  exit ('Permission denied');
?>

<!-- Add Attendance Form Modal -->
<div class="modal fade" id="AddAttendanceModal" tabindex="-1" role="dialog" aria-labelledby="addAttendanceModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">

            <div class="modal-body">
                <form method="post" id="addAttendanceForm" action="">
                    <div class="form-group">
                        <label id="addAttCourseTitle" class="col-form-label"></label>
                    </div>
                    <div class="form-group">
                        <label for="attStudentId" class="col-form-label">Id studente</label>
                        <input type="text" class="form-control" id="attStudentId" name="attStudentId" placeholder="ID Studente" required>
                    </div>

                    <div class="form-group">
                        <label for="attLessonId">Lezione</label>
                        <select class="form-control" id="attLessonId" name="attLessonId" required>
                            <option class="drop-down" value="" disabled selected>Seleziona lezione</option>
                        </select>
                    </div>                    

                    <div class="row">
                        <div class="col-md-4">
                        <button type="submit" class="btn btn-success">Aggiungi Presenza</button>
                        </div>
                        <div class="col-md-5">
                        </div>
                        <div class="col-md-3">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Annulla</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
</div>

<!-- Remove Lesson Form Modal -->
<div class="modal fade" id="RemoveLessonModal" tabindex="-1" role="dialog" aria-labelledby="RemoveLessonModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">


            <div class="modal-body">
                <form method="post" id="removeLessonForm" action="">

                    <div class="form-group">
                        <label id="removeLessonCourseTitle" class="col-form-label"></label>
                    </div>

                    
                    <div class="form-group">
                        <label for="removeLesson">Lezione</label>
                        <select class="form-control" id="removeLessonId" name="removeLessonId" required>
                            <option class="drop-down" value="" disabled selected>Seleziona lezione</option>
                        </select>
                    </div>  


                    <div class="row">
                        <div class="col-md-4">
                        <button type="submit" class="btn btn-success">Cancella Lezione</button>
                        </div>
                        <div class="col-md-5">
                        </div>
                        <div class="col-md-3">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Annulla</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
</div>