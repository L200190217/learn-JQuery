$(document).ready(function () { //document untuk menyeleksi semua dokumen yg ada di index. ready untuk mengeksekusi 
    //selector tag
    $('h1').css('color','red');
    $('p').css('color','blue');

    //selector class
    $('.judul').css('background-color','red');
    $('.paragraf').css('color','salmon');

    //selector id
    $('#judul').css('border','2px solid blue');
    $('#paragraf').css('border','2px solid green');

    $('*').css('background-color','skyblue')


    // selector 1
    // https://www.w3schools.com/jquery/jquery_ref_selectors.asp
    // $('h4').css('background-color','yellow');
    $('h4:eq(2)').css('background-color','yellow');

    // selector 2
    $('input:submit').css('background-color','green');
    $('input:button').css('background-color','white');
})