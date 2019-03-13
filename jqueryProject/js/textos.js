//$ <= Objeto jQuery 
// ready es un evento
$(document).ready(function () {

    $("#add_button").click(function () {
        // Machaca lo anterior que haya en menú
        // $('#menu').html('<li><a href="' + $("#add_link").val() + '"></a></li>');
        $('#menu').append('<li><a href="' + $("#add_link").val() + '"></a></li>');
        // Añade al principio
        // $('#menu').prepend('<li><a href="' + $("#add_link").val() + '"></a></li>');
        // Antes de la lista
        // $('#menu').before('<li><a href="' + $("#add_link").val() + '"></a></li>');
        // Después de la lista
        // $('#menu').after('<li><a href="' + $("#add_link").val() + '"></a></li>');
        reloadLinks();

        // Elimina el contenido dek input
        $("#add_link").val('');

    });

    console.log($('a').length);
});

function reloadLinks() {
    // Bucle de a
    $('a').each(function (i) {
        // console.log($(this));
        var that = $(this);
        var enlace = that.attr('href'); // Coger valor de un atributo
        that.attr('target', '_blank'); // Añade atributo
        // that.removeAttr('target'); // Borra atributo
        that.text(enlace);
    });
}