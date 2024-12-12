// Issues loading jQuery?
// Try: ctrl + shift + R (Clears cache and loads saved file)
// CTRL + F5 may work as well


// $ sign distinguishes jQuery variables from other variables.

$(document).ready(function(){

    fetch("./templates/icons_template.php")
        .then((res) => res.text())
        .then((text) =>{
            
            $('#icons_section').append(text);
        })
        .catch((e) => console.error(e));

    $('.stone').html("");
    fetch("./templates/index_template.php")
        .then((res) => res.text())
        .then((text) =>{
            
            $('#stone').append(text);
        })
        .catch((e) => console.error(e));
        $('#nav-index').css('background-color', '#EA893F');
        $('#nav-portfolio').css('background-color', '#EAA977');
        $('#nav-resume').css('background-color', '#EAA977');

        

        

        /*
    fetch("./templates/nav_template.php")
        .then((res) => res.text())
        .then((text) =>{
            
            $('#nav_section').append(text);
        })
        .catch((e) => console.error(e));
    */
    

    $('#nav-index').click(function(){
        $('.main').html("");
        fetch("./templates/index_template.php")
            .then((res) => res.text())
            .then((text) =>{
                $('.main').append(text);
            })
            .catch((e) => console.error(e));
        $('#nav-index').css('background-color', '#EA893F');
        $('#nav-portfolio').css('background-color', '#EAA977');
        $('#nav-resume').css('background-color', '#EAA977');
    })

    $('#nav-portfolio').click(function(){
        $('.main').html("");
        fetch("./templates/portfolio_template.php")
            .then((res) => res.text())
            .then((text) =>{
                $('.main').append(text);
            })
            .catch((e) => console.error(e));
        $('#nav-index').css('background-color', '#EAA977');
        $('#nav-portfolio').css('background-color', '#EA893F');
        $('#nav-resume').css('background-color', '#EAA977');
    })

    $('#nav-resume').click(function(){
        //document.getElementById('deathSpace').style.visibility = "hidden";
        $('.main').html("");
        fetch("./templates/resume_template.php")
            .then((res) => res.text())
            .then((text) =>{
                $('.main').append(text);
            })
            .catch((e) => console.error(e));
        //document.getElementById('deathSpace').style.visibility = "visible";
        $('#nav-index').css('background-color', '#EAA977');
        $('#nav-portfolio').css('background-color', '#EAA977');
        $('#nav-resume').css('background-color', '#EA893F');

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

    const d = new Date();
    let month = d.getMonth();

    // Winterize site if 
    if (month == 11 || month <= 1){
        console.log("It's December!");
        document.getElementById('dirttest').style.backgroundImage = 'url("../img/background-texture/snow-dirt.png")';   
        document.getElementById('wrapper').style.backgroundImage = 'url("../img/gif/snowfall.gif")';   
        document.getElementById('bush1').src = "../img/greenery/WBush1.png";
        document.getElementById('bush2').src = "../img/greenery/WBush2.png";
        document.getElementById('bush3').src = "../img/greenery/WBush3.png";
        document.getElementById('tree1').src = "../img/greenery/WTree.png";
        document.getElementById('tree2').src = "../img/greenery/WTree.png";
        document.getElementById('name-logo').src = "../img/centerpiece/wmac-burton.png";

    }
});