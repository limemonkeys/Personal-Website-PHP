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
        //console.log(inputCharacters);

        
        if (inputCharacters.length == 3){
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

                //let currLen = verifiedResults[0].length;\
                // This is the beginning of the fix
                /*
                let maxLen = 0;
                let currList = [];
                verifiedResults.forEach(function (word){
                    if (maxLen < word.length){
                        
                    }
                });
                */
                
                let currLen = verifiedResults[0].length;
                console.log(verifiedResults[0].length);
                let currList = [];

                if (verifiedResults[0] == inputCharacters){
                    currLen = 3;

                    let collapsibleButton = document.createElement('button');
                    collapsibleButton.type = "button";
                    collapsibleButton.className = "collapsible";

                    collapsibleButton.innerHTML = inputCharacters.length + " Letter Word(s)";

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
                    collapsibleContent.innerHTML = inputCharacters;
                    currList = [];

                    collapsibleDiv.append(collapsibleContent);

                    $('#results').append(collapsibleDiv);
                    $('#results').append(collapsibleButton);
                }


                
                verifiedResults.forEach(function (word){
                    console.log(word);
                    if(currLen < word.length){
                        
                        currLen = word.length;

                        let collapsibleButton = document.createElement('button');
                        collapsibleButton.type = "button";
                        collapsibleButton.className = "collapsible";

                        collapsibleButton.innerHTML = word.length + " Letter Word(s)";

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
                        collapsibleContent.innerHTML = currList.join("\n");
                        currList = [];

                        collapsibleDiv.append(collapsibleContent);

                        $('#results').append(collapsibleDiv);
                        $('#results').append(collapsibleButton);
                    }
                    else{
                        currList.push(word)
                    }
                });
                
            }).fail(function () {
                $('#results').text("Error loading dictionary file.");
            });
        }
    });
    

});