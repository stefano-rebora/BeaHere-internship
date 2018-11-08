<?php
if (!isset($_SESSION["userId"]))  exit ('Permission denied');
?>

<!-- Create Course Form Modal -->
<div class="modal fade" id="AddCourseModal" tabindex="-1" role="dialog" aria-labelledby="addCourseModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">


            <div class="modal-body">
                <form method="post" action="script/createCourse_script.php">
                    <div class="form-group">
                        <label for="courseId" class="col-form-label">Codice corso</label>
                        <input type="number" min="0" class="form-control" id="courseId" name="courseId" placeholder="Codice corso"
                            required>
                    </div>
                    <div class="form-group">
                        <label for="courseName" class="col-form-label">Nome corso</label>
                        <input type="text" class="form-control" id="courseName" name="courseName" placeholder="Nome corso"
                            required>
                    </div>
                    <div class="form-group">
                        <label for="courseYear" class="col-form-label">Anno Accademico</label>
                        <input type="text" class="form-control" id="courseYear" name="courseYear" placeholder="yyyy-yyyy"
                            required>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                        <button type="submit" class="btn btn-success">Crea nuovo corso</button>
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

<!-- Create Professor Account Form Modal -->
<div class="modal fade" id="AddProfessorModal" tabindex="-1" role="dialog" aria-labelledby="addProfessorModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">


            <div class="modal-body">
                <form method="post" action="script/professorSignUp_script.php">
                    <div class="form-group">
                        <label for="courseId" class="col-form-label">Id professore</label>
                        <input type="number" min="0" class="form-control" id="professorId" name="professorId" placeholder="Id professore"
                            required>
                    </div>
                    <div class="form-group">
                        <label for="name" class="col-form-label">Nome</label>
                        <input type="text" class="form-control" id="name" name="name" placeholder="Nome"
                            required>
                    </div>
                    <div class="form-group">
                        <label for="surname" class="col-form-label">Cognome</label>
                        <input type="text" class="form-control" id="surname" name="surname" placeholder="Cognome"
                            required>
                    </div>
                    <div class="form-group">
                        <label for="email" class="col-form-label">Email</label>
			            <input type="email" name="email" id="email" class="form-control" placeholder="Indirizzo Email" 
                        required>
			        </div>                   
			    	<div class="form-group">
                        <label for="password" class="col-form-label">Password</label>
			    		<input type="password" name="password" id="password" class="form-control" placeholder="Password"
                         required>
			    	</div>
                    <div class="form-group">
                        <label for="password_confirmation" class="col-form-label">Conferma password</label>
			    	    <input type="password" name="password_confirmation" id="password_confirmation" class="form-control" placeholder="Conferma Password"
                         required>
			    	</div>
                    <div class="row">
                        <div class="col-md-4">
                        <button type="submit" class="btn btn-success">Crea account</button>
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