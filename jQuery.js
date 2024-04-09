$(document).ready(function(){

    /*
    $('button').click(function(){
        $('#pTest').text('test')
    })
    */

    $('#index').click(function(){
        // $ sign distinguishes jQuery variables from other variables.
        var $divStart = "<h1>test</h1>";
        var $divCont = "<p>more info here</p>"
        $('#pTest').html($divStart);
        $('#pTest').append($divCont);
    })

    $('#portfolio').click(function(){
        // $ sign distinguishes jQuery variables from other variables.
        var $divStart = "<h1>test</h1>";
        var $divCont = "<p>more info here</p>"
        $('#pTest').html($divStart);
        $('#pTest').append($divCont);
    })

    $('#resume').click(function(){
        // $ sign distinguishes jQuery variables from other variables.
        var $divStart = "<h1>test</h1>";
        var $divCont = "<p>more info here</p>"
        $('#pTest').html($divStart);
        $('#pTest').append($divCont);
    })

    $('#appender').click(function(){
        // $ sign distinguishes jQuery variables from other variables.
        var $divStart = "<p>Append Successful :D</p>";
        if ($('.main').html == ""){
            $('.main').html($divStart);
            
        }
        else
        {
            $('.main').append($divStart);
        }
        
    })

    $('#nuke').click(function(){
        $('.main').html("");
    })
});