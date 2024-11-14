$(document).ready(function(){
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
    

    $('#searchButton').on('click', function () {
        // Get the 3-letter input from the user
        const digit1 = $('#digit1').val().trim().toLowerCase();
        const digit2 = $('#digit2').val().trim().toLowerCase();
        const digit3 = $('#digit3').val().trim().toLowerCase();
        const inputCharacters = $('#digit1').val().trim().toLowerCase() + $('#digit2').val().trim().toLowerCase() + $('#digit3').val().trim().toLowerCase();
        console.log(inputCharacters);

        
        if (inputCharacters.length == 3){
            const inputSet = new Set(inputCharacters);
            // Load the dictionary JSON file using AJAX
            $.getJSON('../json/dictionary.json', function (dictionary) {
                // Filter words that contain all three input characters
                const matchingWords = Object.entries(dictionary).filter(([word, definition]) => {
                    const wordSet = new Set(word);
                    // Check if each input character is in the word's character set
                    return [...inputSet].every(char => wordSet.has(char));
                });

                var verifiedResults = [];

                matchingWords.forEach(function (word){
                    let regex = new RegExp(inputCharacters.split('').join('.*'), 'i');
                    if (regex.test(word[0])){
                        //console.log(word);
                        verifiedResults.push(word);
                    }
                });

                // Sort results by length
                verifiedResults.sort((a, b) => a[0].length - b[0].length);
                console.log(verifiedResults);

                $('#results').html("");

                let currLen = 0;
                let currList = [];
                verifiedResults.forEach(function (word){
                    if(currLen < word[0].length){
                        currLen = word[0].length;
                        console.log(word[0])
                    }
                });

                let collapsibleButton = document.createElement('button');
                collapsibleButton.type = "button";
                collapsibleButton.className = "collapsible";
                collapsibleButton.innerHTML = "X Num Words"
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

                let collapsibleContent = document.createElement('p');
                collapsibleContent.innerHTML = "* Lorem ipsum, bitch.";

                collapsibleDiv.append(collapsibleContent);

                //let catagory = document.createElement('img');

                //$('#results').append(verifiedResults[0][0]);
                
                $('#results').append(collapsibleButton);
                $('#results').append(collapsibleDiv);



                
            }).fail(function () {
                $('#results').text("Error loading dictionary file.");
            });
        }
    });
    

});