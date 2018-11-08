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

                // Remove old elements and add new elements
                $("#tableHead").empty();
                $("#tableBody").empty();
                $("#tableHead").append("<th>Studente</th>");
                $("#tableHead").append("<th>Percentuale Presenze</th>");
                $.each(data["lessons"], function (i, item) {
                    $("#tableHead").append("<th class='no-sort'>" + item + "</th>");
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
                        { extend: 'excel', text: 'Download Excel' }
                    ]
                });
               

            }, "json");
  
        });   

    });
    
}