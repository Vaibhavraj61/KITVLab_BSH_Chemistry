$(document).ready(function () {

    var incr = 1, ic = 1;
    $("#simulation,#step-no1,#step-no2,#step-no3,#step-no4,#step-no5,#step-no6,#step-no7,#step-no8,#step-no9,#step-no10,#btn-next,#btn-stop,#btn-finish,#btn-finish,#img1,#img2,#img3,#img4,#img5,#img6,#img7,#img8,#img9,#task2,#h6").hide();
    $("#step-no1,#step-no2,#step-no3").css("color", "black");

    $("#btn-start").click(function () {
        $("#simulation,#btn-next,#btn-stop,#title1").show();
        $('#btn-start,#btn-finish,#img6,#img8,#img9').hide();
    });

    $("#btn-next").click(function () {
        $("#step-no" + incr + ",#img" + incr).show();
        $("#step-no" + incr).css("color","white");
        $("#step-no" + incr).prev().css("color","black");
        $("#img" + incr).prev().hide();
        incr += 1;
        
        $('#img4,#img5,#img6,#img8,#img9').hide()
        if (incr == 5) {
            $("#title1,#step-no1,#step-no2,#step-no3,#img1,#img2,#img3").hide();
            $('#step-no4').show();
        }
        if (incr == 6) {
            $('#img4').show();
        }
        if (incr == 7) {
            $('#img5,#img6').show();
            $('#img7,#img8,#img9').hide();

        }

        if (incr == 8) {
            $('#h6').show();
            $('#img7,#img8,#img9').hide();
        }
        if (incr == 9) {
            $('#img7,#img8').show();
            $('#step-no9').focus();
            $('#img7,#img8').css("visibility", "visible");
        }
        if (incr == 10) {
            $('#img7,#img8').show();
            $('#img7,#img8').css("visibility", "visible");
            $('#img9').hide();
        }

        if (incr == 11) {
            $('#img8').hide();
            $('#img9').show();
            $('#img9').css("visibility", "visible");
        }

        if (incr == 12) {
            $('#img9').show();
            $('#img9').css("visibility", "visible");
            alert('End of Simulation');
            $("#btn-next,#btn-stop").hide();
            $("#btn-finish").show();
        }
    });

    $("#btn-stop").click(function () {
        $("#simulation,#step-no1,#step-no2,#step-no3,#step-no4,#step-no5,#step-no6,#step-no7,#step-no8,#step-no9,#step-no10,#btn-next,#btn-stop,#img1,#img2,#img3,#img4,#img5,#img6,#img7,#img8,#img9,#h6").hide();
        incr = 1;
        $("#btn-start").show();
    });

    $("#btn-finish").click(function () {
        $("#simulation,#step-no1,#step-no2,#step-no3,#step-no4,#step-no5,#step-no6,#step-no7,#step-no8,#step-no9,#step-no10,#btn-next,#btn-stop,#btn-finish,#img1,#img2,#img3,#img4,#img5,#img6,#img7,#img8,#img9,#h6").hide();
        incr = 1;
        $("#btn-start").show();
    });


});