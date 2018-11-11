function ajaxGetAttendances(formID) {
    $(document).ready(function () {

        $("#"+formID).on('submit',function (e) {
            e.preventDefault();

            // AJAX call
            $.get('script/generateAttendanceMatrix.php?'+$("#"+formID).serialize(), function (data) {
                
                // Clear dataTable
                if ($.fn.dataTable.isDataTable('#attTable')) {
                    $('#attTable').DataTable().destroy();
                }

                
                // Remove old elements from dropdown lists of attendance modifier forms
                $("#attLessonId").empty();
                $("#attLessonId").append('<option value="" disabled selected>Seleziona lezione</option>');
                $("#removeLessonId").empty();
                $("#removeLessonId").append('<option value="" disabled selected>Seleziona lezione</option>');
                
                // Add new titles to attendance modifier forms
                var tableTitle = $("#attendanceId option:selected").text();
                $("#addAttCourseTitle").text(tableTitle);
                $("#removeLessonCourseTitle").text(tableTitle);

                // Remove old elements from the table and add new elements
                $("#tableHead").empty();
                $("#tableBody").empty();
                $("#tableHead").append("<th>Studente</th>");
                $("#tableHead").append("<th>Percentuale Presenze</th>");
                

                
                $("#tableCaption").text(tableTitle);


                
                // Add lesson columns to table
                $.each(data["lessons"], function (i, item) {
                    $("#tableHead").append("<th class='no-sort'>" + item + "</th>");
                    
                    // Add new elements to dropdown lists of attendance modifier forms
                    $("#attLessonId").append("<option value=\""+ data["lessonsIds"][i] + "\">" + item + "</option");
                    $("#removeLessonId").append("<option value=\""+ data["lessonsIds"][i] + "\">" + item + "</option");
                });

                // Add student rows
                $.each(data["students"], function (s, item) {
                    
                    var row = $("<tr></tr>");
                    row.append("<td>"+item+"</td>")
                    row.append("<td>"+data["attPerc"][s]+" % </td>")

                    $.each(data["attMatrix"][s], function (i, item) {
                        if(item)
                            row.append("<td class ='td-success'> &check; </td>");
                        else 
                            row.append("<td class ='td-danger'> &#10005; </td>");
                    });

                    $("#tableBody").append(row);
                });


                // Initialize dataTable
                $('#attTable').DataTable({
                    dom: 'Bfrtip',
                    "paging":   false,
                    "info":     false,
                    "columnDefs": [{ orderable: false, targets:  "no-sort"}],
                    buttons: [
                        { extend: 'excel', text: 'Download Excel' },

                        // Attendance modifier form buttons
                        { text: 'Aggiungi Presenza', action:function(){$('#AddAttendanceModal').modal('show');} },
                        { text: 'Cancella Lezione', action:function(){$('#RemoveLessonModal').modal('show');} }

                    ]
                });
               

            }, "json");
  
        });   

    });
    
}