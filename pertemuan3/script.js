$(document).ready(function () {
    // Event .click      https://api.jquery.com/category/events/
    $('#click').click(function () { //membuat event .click   function adalah aksinya
        alert('Saya Sedang Belajar JQuery');
    });

    // Event .dblclick      https://api.jquery.com/category/events/
    $('#dblclick').dblclick(function () { //membuat event .click   function adalah aksinya
        $(this).css('background-color', 'red');
    });

    // Event .mouseleave     mouse meninggalkan
    $('.mouse').mouseleave(function () {
        $(this).css('background-color', 'blue')
    })
    // Event .mouseenter diarahkan
    $('.mouse').mouseenter(function () {
        $(this).css('background-color', 'lime')
    })

    //Event keydown
    $('#keydown').keydown(function () {
        $('#pesan_keydown').text($(this).val());
    })

    //Event keyup
    $('#keyup').keyup(function () {
        $('#pesan_keyup').text($(this).val());
    })
})