document.getElementById('character').style.transform = "scale(1)";

var left = 0;
guy = document.getElementById('character');
timerId = 0;
counter = 0;
deathCounter = 0;
spriteManager = 0;
up = true;
right = true;
moveSpeed = 8;
opacityFadeNum = 0;
wait = true;
death = false;
opacityFade = false;
score = 0;
cleanScore = 0;
falling = false;
fallingCounter = 0;
permaWait = false;
firstCycle = true;
landed = false;
ralseiCorpses = [];

//Temp vars
trigger = false;

//TODO if permawait, corpse should not teleport to curr pos (to see bug kill while waiting about to walk)

timerId = setInterval( function() { //This function is called by the browser every 33 milliseconds
    document.getElementById("killScore").innerHTML = score;
    document.getElementById("cleanScore").innerHTML = cleanScore;
    var width = document.getElementById('nav-name').offsetWidth - 64;

    //console.log(document.getElementById('body').offsetHeight);

    // Check to reposition corpses
    ralseiCorpses.forEach(function(ralsei) {
        ralsei.style.top = (document.getElementById('body').offsetHeight - 52)+ "px";
        console.log("ralsei.style.left: " + ralsei.style.left);
        if (parseInt(ralsei.style.left) > (document.getElementById('body').offsetWidth - 76)){
            ralsei.style.left = (document.getElementById('body').offsetWidth - 76) + "px";
        }
    });

    if (death){
        deathCounter++;
        if (landed){
            document.getElementById('character').style.opacity = "0.0";
            document.getElementById('character').style.visibility = "visible";

            landed=false;
            deathCounter = 0;
            death = false;
            opacityFade = true;
            respawnSfx = new Audio('./sfx/Respawn/respawn-1.mp3');
            respawnSfx.volume = 0.05;
            respawnSfx.play();
        }
    }

    if (falling){
        fallingCounter++;           
        if (isNaN(parseInt(document.getElementById('corpse' + score).style.top))){
            if (!permaWait && !wait){
                document.getElementById('corpse' + score).style.left =  guy.style.left = left + "px";
            }
            else{
                permaWait = true;
            }
            document.getElementById('corpse' + score).style.top = (fallingCounter * fallingCounter)+ "px";
            firstCycle = false;
        }
        else{
            
            if (parseInt(document.getElementById('corpse' + score).style.top) < document.getElementById('body').scrollHeight - document.getElementsByClassName('footer')[0].offsetHeight){

                if (!permaWait && !wait){
                    // This HAS to get cleaned up VVV, however it works...
                    document.getElementById('corpse' + score).style.left =  guy.style.left = left + "px";
                }
                else{
                    permaWait = true;
                }
                //document.getElementById('nav-name').innerHTML = fallingCounter * fallingCounter + "\n" + document.getElementById('body').scrollHeight
                if (fallingCounter * fallingCounter > document.getElementById('body').scrollHeight - document.getElementsByClassName('footer')[0].offsetHeight){
                    smackSfx = new Audio('./sfx/Smacks/smack-2.mp3');
                    smackSfx.volume = 0.2;
                    smackSfx.play();
                    
                    //document.getElementById('nav-name').innerHTML = document.getElementById('corpse' + score).clientHeight / 2;
                    fallingCounter = 0;
                    falling = false;
                    permaWait = false;
                    firstCycle = true;
                    
                    landed = true;

                    //document.getElementById('corpse' + score).style.visibility = "hidden";
                    document.getElementById('corpse' + score).remove();
                    
                    let img = document.createElement('img');
                    img.id = 'ralsei' + (score);
                    //img.classList.add('corpses');
                    img.style.position = 'absolute';
                    img.src ='./Images/Character/D1.png';
                    if (!right){
                        img.style.transform = "scaleX(-1)";
                    }
                    // Controls where the corpse lands. Putting an if check breaks it here...
                    img.style.left = guy.style.left;
                    //img.style.top = guy.style.left;
                    img.style.top = (document.getElementById('body').offsetHeight - 52)+ "px";

                    //console.log("img.style: " + img.style);
                    // ADD 3/4 of the size of the image
                    img.onclick = function() {  
                        
                        imageNameSplit = img.src.split("/");
                        imageName = imageNameSplit[imageNameSplit.length - 1]
                        if (!(imageName == 'tomb-1.png' || imageName == 'tomb-2.png' || imageName == 'tomb-3.png')){
                            cleanScore++;
                            document.getElementById("cleanScore").innerHTML = cleanScore;
                            bellSfx = new Audio('./sfx/Bells/bell-' + getRandomInt(1,3) + '.mp3');
                            bellSfx.volume = 0.2;
                            bellSfx.play();
                            img.src ='./Images/Tombstones/tomb-' + getRandomInt(1,3) + '.png';
                        }
                    };
                    
                    //document.getElementById('text-main').appendChild(img);
                    document.getElementById('deathSpace').appendChild(img);
                    ralseiCorpses.push(img)

                    //document.getElementById('corpse' + score).style.top = document.getElementById('body').scrollHeight - document.getElementsByClassName('footer')[0].offsetHeight + "px";
                }
                else{
                    document.getElementById('corpse' + score).style.top = (fallingCounter * fallingCounter)+ "px";
                }  
            }
            //document.getElementById('nav-name').innerHTML = document.getElementById('corpse' + score).style.top + "\n" + document.getElementById('body').scrollHeight;
        }
    }

    if (parseFloat(document.getElementById('character').style.opacity) < 1.0){
        document.getElementById('character').style.opacity = parseFloat(document.getElementById('character').style.opacity) + 0.1;
    }

    if (wait){
        document.getElementById('character').src = "./Images/Character/M0.png";
        counter++;
        if (counter > 32){
            
            wait = false;
        }
    }
    
    else{
        if (right){
            left += moveSpeed;
            if( left > width) {
                
                //clearInterval( timerId ); //Stop the interval because left is > 200
                document.getElementById('character').style.transform = "scaleX(-1)";
                left= document.getElementById("nav-name").offsetWidth - 64;
                right = false;
                wait = true;
            }

            counter++;
            if (counter > 4){
                counter = 0;
                if (spriteManager > 2){
                    up = false;
                }
                else if (spriteManager < 2){
                    up = true;
                }
                up ? spriteManager++ : spriteManager--;
                document.getElementById('character').src = "./Images/Character/M" + spriteManager + ".png";
            }
            //Update image
            guy.style.left = left + "px";
    }
    else{
        
        if(left > width) { 

            trigger = true;
            //document.getElementById('nav-name').innerHTML = guy.style.left + "\n" + width + "BANG";
            //clearInterval( timerId ); //Stop the interval because left is > 200
            document.getElementById('character').style.transform = "scaleX(-1)";
            left= document.getElementById("nav-name").offsetWidth - 64;
            right = false;
        }

        left -= moveSpeed;
        if( left < 8) {
            
            //clearInterval( timerId ); //Stop the interval because left is > 200
            document.getElementById('character').style.transform = "scaleX(1)";
            left = 8;
            right = true;
            wait = true;
        }
        



        counter++;
        if (counter > 4){
            counter = 0;
            if (spriteManager > 2){
                up = false;
            }
            else if (spriteManager < 2){
                up = true;
            }
            up ? spriteManager++ : spriteManager--;
            document.getElementById('character').src = "./Images/Character/M" + spriteManager + ".png";
        }
        //Update image
        guy.style.left = left + "px";
        }
        document.getElementById('deathSpawner').style.left = guy.style.left;
    }
    
    
}, 33 );

function GFG_Fun() {
    //<img id="character" style="position:absolute;" src="./Images/Character/M0.png" onclick="GFG_Fun()" >
    score++;
    document.getElementById("killScore").innerHTML = score;
    let img = document.createElement('img');
    img.id = 'corpse' + score;
    img.style.position = 'absolute';
    img.src ='./Images/Character/D0.png';
    img.style.left = guy.style.left;

    document.getElementById('deathSpace').appendChild(img);
    
    if (wait){
        permaWait = true;
    }

    document.getElementById('character').style.visibility = "hidden";
    death = true;
    falling = true;

    punchSfx = new Audio('./sfx/Punches/punch-1.mp3');
    punchSfx.volume = 0.2;
    punchSfx.play();

    screamSfx = new Audio('./sfx/Screams/scream-' + getRandomInt(1,3) + '.mp3');
    screamSfx.volume = 0.2;
    screamSfx.play();

    /*
    corpses.forEach(function(corpse) {
        console.log(corpse.style.left)
    });
    */
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}