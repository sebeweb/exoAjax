$(document).ready(function () {
    $("form").submit(function () {
        $.ajax({
            timeout: 3000,
            type: 'POST',
            url: "http://localhost/Amsterdam/web/app_dev.php/quartier/Add",
            success: function (data) {
//                alert(data);
                $("#liste > ul").add("<li>"+data+"</li>");
            },
            data: {
                nom: $("input[name='nom']").val(),
                nbrHabitants: $("input[name='nbrHabitants']").val()
            }
        });
    });
//    $("#liste > ul").add("<li>"+d.nom+"-"+d.nbrHabitants+"</li>");
});
