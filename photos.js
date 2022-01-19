/*
    File: photos.js
    Name: Henry Pacheco Cachon
    Class: CS325, January 2022
    Lab: 08
    Due: 19 January 2022
*/

"use strict";

$(document).ready(function(){

    $.ajax({
        url: "img/pict1.jpg",
        xhrFields: {
            responseType: 'blob'
        },

        success (data){
            const url = window.URL || window.webkitURL;
            const src = url.createObjectURL(data);
            $("<img />").attr('src',src).prependTo($(".photoBlock"));
        }
    })

    $("#next").submit( function(e){

        e.preventDefault();

        var form = $(this);
        var actionURL = form.attr('action');

        $.ajax({
            type: "POST",
            url: actionURL,
            data: form,
            success: function(data){
                $("img").attr('src', "img/" + data);
            }
        });

    });
    
})