//$ <= Objeto jQuery 
// ready es un evento
$(document).ready(function () {
    // Selector Id
    $("#rojo").css("background", "red")
        .css("color", "white");

    $("#amarillo").css("background", "yellow")
        .css("color", "green");

    $("#verde").css("background", "green")
        .css("color", "white");

    // Selector clase
    var mi_clase = $(".zebra");
    mi_clase.css("border", "5px dashed black")

    console.log(mi_clase[0]);
    console.log(mi_clase.eq(1)); // igual que el anterior pero con propiedades jQuery

    $(".sin_borde").click(function () {
        $(this).addClass('zebra');
    });

    // Selectores por etiqueta
    var parrafos = $("p").css("cursor", "pointer");
    parrafos.click(function () {
        var that = $(this);
        if (that.hasClass("zebra")) {
            that.removeClass("zebra");
        }
    });

    // Selectores atributos
    $('[title="Google"]').css('background', '#ccc');
    $('[title="Facebook"]').css('background', 'blue');

    // Otros
    $('p, a').addClass('margen_superior'); // De esta forma no se accede 2 veces al DOM

    // var busqueda = $('#caja .resaltado');
    // Con parent subes un nivel
    var busqueda = $('#caja').parent().parent().find('.resaltado');

    console.log(busqueda);
});