
function ajaxAddAttendance(formID) {
    $(document).ready(function () {

        $("#"+formID).on('submit',function (e) {
            e.preventDefault();

            // AJAX call
            $.get('script/ajaxAddAttendance.php?'+$("#"+formID).serialize(), function (response) {
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
            $.get('script/ajaxRemoveLesson.php?'+$("#"+formID).serialize(), function (response) {
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