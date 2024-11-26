$(document).ready(function(){
    let sound = true;

    $(".digit-input").keyup(function() {
        if (this.value.length == this.maxLength) {
            $(this).next('.digit-input').focus();
        }
        checkIfFull();
    });
    
    $(".digit-input").keydown(function(e) {
        if ((e.which == 8 || e.which == 46) && $(this).val() == "") {
            $(this).prev('.digit-input').focus();
        }
        checkIfFull();
    });
    
    function checkIfFull() {
        if ($("#digit1").val() != "" && $("#digit2").val() != "" && $("#digit3").val() != "") {
            $("#submitBtn").removeClass("disabled");
        } else {
            $("#submitBtn").addClass("disabled");
        }
    }
    
    /*
    fetch("../json/dictionary.json")
    .then(res => res.json())
    .then(json => console.log(json));*/
    
    $('#sound').on('click', function () {

        if (sound){
            document.getElementById("sound").src = "../img/platle/soundoffp.png";
            sound = false;
            respawnSfx.pause();
        }
        else{
            document.getElementById("sound").src = "../img/platle/soundonp.png";
            sound = true;
        }
    });

    $('#help').on('click', function () {
        
        $("#content").addClass("brightness");
        fetch("../templates/platle/help.php")
        .then((res) => res.text())
        .then((text) =>{
            $('#helpZone').append(text);
        })
        .catch((e) => console.error(e));
        
        $("#body").addClass("stopScrolling");
    });

    $('.submit').on('click', function () {

        

        // Get the 3-letter input from the user
        const digit1 = $('#digit1').val().trim().toLowerCase();
        const digit2 = $('#digit2').val().trim().toLowerCase();
        const digit3 = $('#digit3').val().trim().toLowerCase();

        const inputCharacters = $('#digit1').val().trim().toLowerCase() + $('#digit2').val().trim().toLowerCase() + $('#digit3').val().trim().toLowerCase();
        if (inputCharacters.length == 3) {
            
            //console.log(inputCharacters);

            
            if (/^[A-Za-z]+$/.test(digit1) && /^[A-Za-z]+$/.test(digit2) && /^[A-Za-z]+$/.test(digit3)){
                if (sound){
                    respawnSfx = new Audio('../sfx/Platle/car horn.mp3');
                    respawnSfx.volume = 1;
                    respawnSfx.play();
                }
                const inputSet = new Set(inputCharacters);
                // Load the dictionary JSON file using AJAX
                $.getJSON('../json/dictionary.json', function (dictionary) {
                    // Filter words that contain all three input characters
                    const matchingWords = dictionary.filter(word => {
                        const wordSet = new Set(word);
                        // Check if each input character is in the word's character set
                        return [...inputSet].every(char => wordSet.has(char));
                    });            

                    var verifiedResults = [];

                    matchingWords.forEach(function (word){
                        let regex = new RegExp(inputCharacters.split('').join('.*'), 'i');
                        //console.log(word);
                        if (regex.test(word)){
                            //console.log(word);
                            verifiedResults.push(word);
                        }
                    });

                    // Sort results by length
                    verifiedResults.sort((a, b) => a.length - b.length);

                    $('#results').html("");


                    
                    // Checking to see if the first result 

                    if (verifiedResults.length > 0){
                        let maxLen = verifiedResults[0].length;
                        let currList = [];

                        if (maxLen == 3){
                            currList.push(verifiedResults[0]);
                            verifiedResults = verifiedResults.slice(1);
                        }

                        
                        verifiedResults.forEach(function (word){
                            // The next word in queue will qualify for new row
                            if (word.length > maxLen){
            
                                let collapsibleButton = document.createElement('button');
                                collapsibleButton.type = "button";
                                collapsibleButton.className = "collapsible";

                                

                                collapsibleButton.addEventListener("click", function() {
                                    this.classList.toggle("active");
                                    var content = this.nextElementSibling;
                                    if (content.style.display === "block") {
                                        content.style.display = "none";
                                    } else {
                                        content.style.display = "block";
                                    }
                                });

                                let collapsibleDiv = document.createElement('div');
                                collapsibleDiv.className = "content";

                                collapsibleButton.innerHTML = maxLen + " Letter Words";      

                                let collapsibleContent = document.createElement('p');

                                collapsibleContent.innerHTML = '<ul><li>' + currList.join("</li><li>"); + '</li></ul>';
                                currList = [];

                                collapsibleDiv.append(collapsibleContent);

                                $('#results').append(collapsibleButton);
                                $('#results').append(collapsibleDiv);

                                maxLen = word.length;
                                currList.push(word);
                            }
                            // Word belongs to current row
                            else{
                                currList.push(word);
                            }
                        });
                    }
                    else{
                        let collapsibleDiv = document.createElement('div');
                        collapsibleDiv.id = "errorContent";

                        let errorImg = document.createElement('img');
                        errorImg.src = "../img/platle/wrongway.png";
                        errorImg.id = "wrongway";

                        let collapsibleContent = document.createElement('p');
                        collapsibleContent.innerHTML = "ERROR: No results :(";

                        collapsibleDiv.append(errorImg);
                        collapsibleDiv.append(collapsibleContent);

                        $('#results').append(collapsibleDiv);


                        if (document.getElementById("sound").src.split(/(\\|\/)/g).pop() == "soundon.png"){
                            respawnSfx = new Audio('../sfx/Platle/car crash.mp3');
                            respawnSfx.volume = 1;
                            respawnSfx.play();
                        }
                    }
                    
                }).fail(function () {
                    $('#results').text("Error loading dictionary file.");
                });
            }
            else{
                $('#results').html("");

                let collapsibleDiv = document.createElement('div');
                collapsibleDiv.id = "errorContent";

                let errorImg = document.createElement('img');
                errorImg.src = "../img/platle/wrongway.png";
                errorImg.id = "wrongway";

                let collapsibleContent = document.createElement('p');
                collapsibleContent.innerHTML = "ERROR: One or more character invalid.";

                collapsibleDiv.append(errorImg);
                collapsibleDiv.append(collapsibleContent);

                $('#results').append(collapsibleDiv);


                if (document.getElementById("sound").src.split(/(\\|\/)/g).pop() == "soundon.png"){
                    respawnSfx = new Audio('../sfx/Platle/car crash.mp3');
                    respawnSfx.volume = 1;
                    respawnSfx.play();
                }
                
            }
        }
        else{
            $('#results').html("");

            let collapsibleDiv = document.createElement('div');
            collapsibleDiv.id = "errorContent";

            let errorImg = document.createElement('img');
            errorImg.src = "../img/platle/wrongway.png";
            errorImg.id = "wrongway";

            let collapsibleContent = document.createElement('p');
            collapsibleContent.innerHTML = "ERROR: Missing one or more input characters.";

            if ((digit1.length > 0 && !/^[A-Za-z]+$/.test(digit1)) || (digit2.length > 0 && !/^[A-Za-z]+$/.test(digit2)) || (digit3.length > 0 && !/^[A-Za-z]+$/.test(digit3))){
                collapsibleContent.innerHTML = "ERROR: Missing one or more input characters and one or more character invalid.";
            }
            collapsibleDiv.append(errorImg);
            collapsibleDiv.append(collapsibleContent);

            $('#results').append(collapsibleDiv);


            if (document.getElementById("sound").src.split(/(\\|\/)/g).pop() == "soundon.png"){
                respawnSfx = new Audio('../sfx/Platle/car crash.mp3');
                respawnSfx.volume = 1;
                respawnSfx.play();
            }
        }
        
    });
    

});

function wheelHover(element) {
    element.setAttribute('src', '../img/platle/Wheel\ P.png');
}
  
function wheelUnhover(element) {
    element.setAttribute('src', '../img/platle/Wheel.png');
}

function helpHover(element) {
    element.setAttribute('src', '../img/platle/qmarkp.png');
}
  
function helpUnhover(element) {
    element.setAttribute('src', '../img/platle/qmark.png');
}

function helpClose(element) {
    $("#content").removeClass("brightness");
    $("#body").removeClass("stopScrolling");
    element.parentNode.parentNode.remove();
}

function soundHover(element) {
    console.log(element.src);
    if (document.getElementById("sound").src.split(/(\\|\/)/g).pop() == "soundon.png"){
        element.setAttribute('src', '../img/platle/soundonp.png');
    }
    else if (document.getElementById("sound").src.split(/(\\|\/)/g).pop() == "soundoff.png"){
        element.setAttribute('src', '../img/platle/soundoffp.png');
    }
}
  
function soundUnhover(element) {
    if (document.getElementById("sound").src.split(/(\\|\/)/g).pop() == "soundonp.png"){
        element.setAttribute('src', '../img/platle/soundon.png');
    }
    else if (document.getElementById("sound").src.split(/(\\|\/)/g).pop() == "soundoffp.png"){
        element.setAttribute('src', '../img/platle/soundoff.png');
    }
}