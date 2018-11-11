
function ajaxAddAttendance(formID) {
    $(document).ready(function () {

        $("#"+formID).on('submit',function (e) {
            e.preventDefault();

            // AJAX call
            $.post('script/ajaxAddAttendance.php?',$("#"+formID).serialize(), function (response) {
                $('#AddAttendanceModal').modal('hide');
                if($.trim(response) === "OK"){
                    $("#succesModalAlert").text("Presenza aggiunta con successo. Se vuoi visualizzare le modifiche ricarica la pagina");
                    $('#MessageModal').modal('show');
               }
               else{
                    $("#errorModalAlert").text(response);
                    $('#ErrorModal').modal('show');
               }
                
            }, "text");
  
        });   

    });
    
}


function ajaxRemoveLesson(formID) {
    $(document).ready(function () {

        $("#"+formID).on('submit',function (e) {
            e.preventDefault();

            // AJAX call
            $.post('script/ajaxRemoveLesson.php?',$("#"+formID).serialize(), function (response) {
                $('#RemoveLessonModal').modal('hide');
                if($.trim(response) === "OK"){
                    $("#succesModalAlert").text("Lezione cancellata con successo. Se vuoi visualizzare le modifiche ricarica la pagina");
                    $('#MessageModal').modal('show');
               }
               else{
                    $("#errorModalAlert").text(response);
                    $('#ErrorModal').modal('show');
               }
                
            }, "text");
  
        });   

    });
    
}