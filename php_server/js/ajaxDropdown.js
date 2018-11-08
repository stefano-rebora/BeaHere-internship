function ajaxDropdownUpdate(filter, table, elementID) {
    $(document).ready(function () {
        $("#"+elementID).one('focus',function () {
            $.get('script/ajaxDropdownList.php?f='+filter+'&t='+table, function (data) {
                $.each(data, function (i, item) {
                    courseCode = data[i].substring(0,5);
                    $("#"+elementID).append("<option value=\""+ courseCode + "\">" + data[i] + "</option");
                });
            }, "json");
        });

    });
    
}