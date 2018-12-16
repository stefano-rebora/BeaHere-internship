var chart;

function ajaxGetAttendancesAcademicYear(formID) {
    $(document).ready(function () {

        $("#"+formID).on('submit',function (e) {
            e.preventDefault();

            // AJAX call
            $.get('script/ajaxGenerateCourseAvgAttendance.php?'+$("#"+formID).serialize(), function (data) {

                if('error' in data){
                    $("#errorModalAlert").text(data['error']);
                    $('#ErrorModal').modal('show');
                    return;
                }
                
                // CREATE TABLE
                
                // Clear dataTable
                if ($.fn.dataTable.isDataTable('#attTable')) {
                    $('#attTable').DataTable().destroy();
                }

                
                // Add new titles to attendance modifier forms
                var tableTitle = "Anno accademico " + $("#courseYearRecap").val();
 
 

                // Remove old elements from the table and add new elements
                $("#tableHead").empty();
                $("#tableBody").empty();
                $("#tableHead").append("<th>Codice</th>");
                $("#tableHead").append("<th>Corso</th>");
                $("#tableHead").append("<th>Percentuale Media Presenze</th>");
                

                $("#tableCaption").text(tableTitle);

                // Add course rows
                $.each(data["courseIds"], function (c, item) {
                    
                    var row = $("<tr></tr>");
                    row.append("<td>"+item+"</td>")
                    row.append("<td>"+data["courseNames"][c]+"</td>")
                    row.append("<td>"+data["avgAttendance"][c]+" % </td>")

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
                    ]
                });

                

                // CREATE ATTENDANCES CHART

                var ctx = document.getElementById('attChart').getContext('2d');
                if (chart) {
                    chart.destroy();
                }
                chart = new Chart(ctx, {
                // The type of chart we want to create
                    type: 'horizontalBar',
                    

                    // The data for our dataset
                    data: {
                        labels: data["courseNames"],
                        
                        datasets: [{
                            backgroundColor:'#add2eb',
                            data: data["avgAttendance"],
                        }]
                    },

                    // Configuration options
                    options: {
                        legend: {
                            display: false
                        },
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            text: tableTitle
                        },
                        scales: {
                            xAxes: [{
                                ticks: {
                                    max: 100
                                },
                              scaleLabel: {
                                display: true,
                                labelString: 'Percentuale Presenza Media',
                                fontSize: 18
                              }
                            }],
                          }
                        
                    }
                }); 
               

            }, "json");
  
        });   

    });
    
}