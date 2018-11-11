function ajaxGetRegister(formID) {
    $(document).ready(function () {

        $("#"+formID).on('submit',function (e) {
            e.preventDefault();

            // AJAX call
            $.get('script/ajaxGenerateRegister.php?'+$("#"+formID).serialize(), function (data) {
                
                // Clear dataTable
                if ($.fn.dataTable.isDataTable('#attTable')) {
                    $('#attTable').DataTable().destroy();
                }

                // Remove old elements and add new elements
                $("#tableHead").empty();
                $("#tableBody").empty();
                $("#tableHead").append("<th>Lezione</th>");
                $("#tableHead").append("<th class='no-sort'>Note Lezione</th>");
                $("#tableHead").append("<th class='no-sort'></th>");

                var tableTitle = $("#registerId option:selected").text();
                $("#tableCaption").text(tableTitle);

                // Add lessons rows
                $.each(data["lessons"], function (l, item) {
                    
                    var row = $("<tr></tr>");
                    row.append("<td>"+item+"</td>")
                    row.append("<td class='no-sort'>"+
                                    "<textarea class='form-control noteTextArea' name='noteInput' id='noteInput"+data["lessonsIds"][l]+"' rows='3' maxlength='280'>"+data["notes"][l]+"</textarea>" +
                                "</td>");
                                
                    row.append("<td><button type='button' class='btn btn-primary' onclick='ajaxUpdateNote("+data["lessonsIds"][l]+")'>Salva modifiche</button></td>")

                    $("#tableBody").append(row);
                });


                // Initialize dataTable
                $('#attTable').DataTable({
                    dom: 'Bfrtip',
                    "paging":   false,
                    "info":     false,
                    "columnDefs": [{ orderable: false, targets:  "no-sort"}],
                    buttons: [
                        {
                            extend: 'excel',
                            text:'Download Excel',
                            exportOptions: {
                                columns: [0,1]
                            }, 
                        }
                    
                    ]
                });
               

            }, "json");
  
        });   

    });
    
}

function ajaxUpdateNote(lessonIdParam) {

    var res = encodeURI($("#noteInput"+lessonIdParam).val());

    // AJAX call
    $.post('script/ajaxUpdateLessonNote.php?',{ lessonId: lessonIdParam, "noteInput": res }, function (response) {
        if($.trim(response) === "OK"){
             $("#succesModalAlert").text("Modifiche avvenute con successo");
             $('#MessageModal').modal('show');
        }
        else{
             $("#errorModalAlert").text(response);
             $('#ErrorModal').modal('show');
        }
    }, "text");
}