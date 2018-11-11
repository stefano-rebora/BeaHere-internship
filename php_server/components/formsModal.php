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

<!-- FORMS ONLY FOR THE ADMIN -->
<?php if ($_SESSION["userId"]== "admin") { ?>

<!-- Create Professor Account Form Modal -->
<div class="modal fade" id="AddProfessorModal" tabindex="-1" role="dialog" aria-labelledby="addProfessorModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">


            <div class="modal-body">
                <form method="post" action="script/professorSignUp_script.php">
                    <div class="form-group">
                        <label for="professorId" class="col-form-label">Id professore</label>
                        <input type="number" min="0" class="form-control" id="professorId" name="professorId" placeholder="Id professore"
                            required>
                    </div>
                    <div class="form-group">
                        <label for="prof_name" class="col-form-label">Nome</label>
                        <input type="text" class="form-control" id="prof_name" name="prof_name" placeholder="Nome"
                            required>
                    </div>
                    <div class="form-group">
                        <label for="prof_surname" class="col-form-label">Cognome</label>
                        <input type="text" class="form-control" id="prof_surname" name="prof_surname" placeholder="Cognome"
                            required>
                    </div>
                    <div class="form-group">
                        <label for="prof_email" class="col-form-label">Email</label>
			            <input type="email" id ="prof_email" name="prof_email" class="form-control" placeholder="Indirizzo Email" 
                        required>
			        </div>                   
			    	<div class="form-group">
                        <label for="prof_password" class="col-form-label">Password</label>
			    		<input type="password" id ="prof_password"name="prof_password" class="form-control" placeholder="Password"
                         required>
			    	</div>
                    <div class="form-group">
                        <label for="prof_password_conf" class="col-form-label">Conferma password</label>
			    	    <input type="password" id="prof_password_conf" name="prof_password_conf"  class="form-control" placeholder="Conferma Password"
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

<!-- Reset Professor Password Form Modal -->
<div class="modal fade" id="ResetProfessorModal" tabindex="-1" role="dialog" aria-labelledby="resetProfessorModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">


            <div class="modal-body">
                <form method="post" action="script/resetPassword_script.php">     
                
                    <div class="form-group">
                        <label for="resetProfId" class="col-form-label">Id professore</label>
                        <input type="text" class="form-control" id="resetProfId" name="resetProfId" placeholder="ID Professore">
                    </div>

			    	<div class="form-group">
                        <label for="resetProfPassword" class="col-form-label">Password</label>
			    		<input type="password" id="resetProfPassword" name="resetPassword" class="form-control" placeholder="Nuova Password"
                         required>
			    	</div>
                    <div class="form-group">
                        <label for="resetProfPassword_conf" class="col-form-label">Conferma password</label>
			    	    <input type="password" id="resetProfPassword_conf" name="resetPassword_conf"  class="form-control" placeholder="Conferma Password"
                         required>
			    	</div>
                    <div class="row">
                        <div class="col-md-4">
                        <button type="submit" class="btn btn-success">Reset Password Professore</button>
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

<!-- Remove Professor Account Form Modal -->
<div class="modal fade" id="RemoveProfessorModal" tabindex="-1" role="dialog" aria-labelledby="removeProfessorModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">


            <div class="modal-body">
                <form method="post" action="script/removeAccount_script.php">     
                
                    <div class="form-group">
                        <label for="removeProfId" class="col-form-label">Id professore</label>
                        <input type="text" class="form-control" id="removeProfId" name="removeProfId" placeholder="ID Professore">
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                        <button type="submit" class="btn btn-success">Cancella Account Professore</button>
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

<!-- Reset Student Password Form Modal -->
<div class="modal fade" id="ResetStudentModal" tabindex="-1" role="dialog" aria-labelledby="resetStudentModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">


            <div class="modal-body">
                <form method="post" action="script/resetPassword_script.php">     
                
                    <div class="form-group">
                        <label for="resetStudentId" class="col-form-label">Id studente</label>
                        <input type="text" class="form-control" id="resetStudentId" name="resetStudentId" placeholder="ID Studente">
                    </div>

			    	<div class="form-group">
                        <label for="resetProfPassword" class="col-form-label">Password</label>
			    		<input type="password" id="resetProfPassword" name="resetPassword" class="form-control" placeholder="Nuova Password"
                         required>
			    	</div>
                    <div class="form-group">
                        <label for="resetProfPassword_conf" class="col-form-label">Conferma password</label>
			    	    <input type="password" id="resetProfPassword_conf" name="resetPassword_conf"  class="form-control" placeholder="Conferma Password"
                         required>
			    	</div>
                    <div class="row">
                        <div class="col-md-4">
                        <button type="submit" class="btn btn-success">Reset Password Studente</button>
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

<!-- Remove Student Account Form Modal -->
<div class="modal fade" id="RemoveStudentModal" tabindex="-1" role="dialog" aria-labelledby="removeStudentModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">


            <div class="modal-body">
                <form method="post" action="script/removeAccount_script.php">     
                
                    <div class="form-group">
                        <label for="removeStudentId" class="col-form-label">Id studente</label>
                        <input type="text" class="form-control" id="removeStudentId" name="removeStudentId" placeholder="ID Studente">
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                        <button type="submit" class="btn btn-success">Cancella Account Studente</button>
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

<?php } ?>