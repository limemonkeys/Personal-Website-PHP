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
stopCorpseMovement = false;
cloud1Toggle = false;
logoMoveTimer = 0;

cloudDelay = 128;
cloudCount = 0;
cloudClass = "";
prevCloudClass = "";
cloudClasses = ["cloud-top", "cloud-middle", "cloud-bottom"];
clouds = [];

maxVW = 0;

//Temp vars
trigger = false;

//TODO if permawait, corpse should not teleport to curr pos (to see bug kill while waiting about to walk)

timerId = setInterval( function() { //This function is called by the browser every 33 milliseconds
    document.getElementById("killScore").innerHTML = score;
    document.getElementById("cleanScore").innerHTML = cleanScore;
    var width = document.getElementById('navspace').offsetWidth - 64;

    /* Not sure if I like this effect :/
    // Move Mac Burton logo up and down
    if (logoMoveTimer < 24){
        logoMoveTimer+= 1;
    }
    else{
        logoMoveTimer = 0;
        if (document.getElementById('name-logo').style.paddingTop === ""){
            document.getElementById('name-logo').style.paddingTop = "52px";
        }
        else if (parseInt(document.getElementById('name-logo').style.paddingTop) < 64){
            document.getElementById('name-logo').style.paddingTop = "64px";
        }
        else{
            document.getElementById('name-logo').style.paddingTop = "52px";
        }

        
    }
    */
    if (cloudDelay >= 128 - getRandomInt(0, 16)){
        cloudDelay = 0;
        cloudCount++;
        let cloudImg = document.createElement('img');
        cloudImg.id = 'cloud' + cloudCount;
        
        /*
        Check if prev cloud exists. If so, create clone of list and remove it from it
        Select random cloud, that's it's class
        */
        selectedCloudClass = cloudClasses[0];
        if (prevCloudClass != ""){
            cloudClasses.splice(cloudClasses.indexOf(prevCloudClass), 1);
            selectedCloudClass = cloudClasses[getRandomInt(0,cloudClasses.length - 1)];
            cloudClasses.push(prevCloudClass);
            cloudImg.style.paddingTop = getRandomInt(0, 32) + "px"; 
        }
        
        cloudImg.className = selectedCloudClass;
        cloudImg.style.position = 'absolute';
        cloudImg.src ='../img/clouds/cloud.png';
        cloudImg.style.marginLeft = -160 + "px";
        
        document.getElementById('cloudspace').appendChild(cloudImg);

        prevCloudClass = selectedCloudClass;
    }
    else{
        cloudDelay++;
    }
    for (var i = 1; i < cloudCount + 1; i++) {
        if (document.getElementById('cloud' + i) != null){
            if (maxVW < Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)){
                maxVW  = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            }
            if (parseInt(document.getElementById('cloud' + i).style.marginLeft) <  maxVW){
                document.getElementById('cloud' + i).style.marginLeft = (parseInt(document.getElementById('cloud' + i).style.marginLeft) + 2) + "px";
            }
            else{
                var element = document.getElementById('cloud' + i);
                element.parentNode.removeChild(element);
            }
        }
    }
        
    // Check to reposition corpses
    ralseiCorpses.forEach(function(ralsei) {
        // Footer changes sizes based for mobile (800px or less)
        console.log("offsetWidth: " + document.getElementById('gamespace').offsetWidth);
        if (document.getElementById('gamespace').offsetWidth <= 800){
            console.log("IN");
            ralsei.style.top = (document.getElementById('gamespace').offsetHeight - 64)+ "px";
        }
        else{
            ralsei.style.top = (document.getElementById('gamespace').offsetHeight - 52)+ "px";
        }
        
        if (parseInt(ralsei.style.left) > (document.getElementById('gamespace').offsetWidth - 76)){
            ralsei.style.left = (document.getElementById('gamespace').offsetWidth - 76) + "px";
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
            respawnSfx = new Audio('../sfx/Respawn/respawn-1.mp3');
            respawnSfx.volume = 0.05;
            respawnSfx.play();
        }
    }

    if (falling){
        fallingCounter++;           
        if (isNaN(parseInt(document.getElementById('corpse' + score).style.top))){
            if (!permaWait && !wait){
                
                // See comment below.
                document.getElementById('corpse' + score).style.left =  guy.style.left = left + "px";
            }
            else{
                permaWait = true;
            }
            document.getElementById('corpse' + score).style.top = (fallingCounter * fallingCounter)+ "px";
            
            firstCycle = false;
        }
        else{
            
            if (parseInt(document.getElementById('corpse' + score).style.top) < document.getElementById('gamespace').scrollHeight - document.getElementsByClassName('footer')[0].offsetHeight){

                if (!permaWait){
                    if (wait){
                        stopCorpseMovement = true;
                    }
                    if (!stopCorpseMovement){
                        document.getElementById('corpse' + score).style.left =  guy.style.left = left + "px";

                    }
                    // This HAS to get cleaned up VVV, however it works...
                }
                else{
                    permaWait = true;
                }
                if (fallingCounter * fallingCounter > document.getElementById('gamespace').scrollHeight - document.getElementsByClassName('footer')[0].offsetHeight - (document.getElementById('treeHitbox').offsetHeight)){
                    smackSfx = new Audio('../sfx/Smacks/smack-2.mp3');
                    smackSfx.volume = 0.2;
                    smackSfx.play();
                    
                    //document.getElementById('nav-name').innerHTML = document.getElementById('corpse' + score).clientHeight / 2;
                    fallingCounter = 0;
                    falling = false;
                    permaWait = false;
                    firstCycle = true;
                    stopCorpseMovement = false;

                    landed = true;

                    //document.getElementById('corpse' + score).style.visibility = "hidden";
                    
                    let img = document.createElement('img');
                    img.id = 'ralsei' + (score);
                    //img.classList.add('corpses');
                    img.style.position = 'absolute';
                    img.src ='../img/character/D1.png';
                    img.style.zIndex = 1;
                    if (!right){
                        img.style.transform = "scaleX(-1)";
                    }
                    // Controls where the corpse lands. Putting an if check breaks it here...
                    img.style.left = document.getElementById('corpse' + score).style.left;
                    document.getElementById('corpse' + score).remove();
                    //img.style.top = guy.style.left;
                    img.style.top = (document.getElementById('gamespace').offsetHeight - 52)+ "px";

                    //console.log("img.style: " + img.style);
                    // ADD 3/4 of the size of the image
                    img.onclick = function() {  
                        
                        imageNameSplit = img.src.split("/");
                        imageName = imageNameSplit[imageNameSplit.length - 1]
                        if (!(imageName == 'tomb-1.png' || imageName == 'tomb-2.png' || imageName == 'tomb-3.png')){
                            cleanScore++;
                            document.getElementById("cleanScore").innerHTML = cleanScore;
                            bellSfx = new Audio('../sfx/Bells/bell-' + getRandomInt(1,3) + '.mp3');
                            bellSfx.volume = 0.2;
                            bellSfx.play();
                            img.style.zIndex = 0;
                            img.src ='../img/tombstones/tomb-' + getRandomInt(1,3) + '.png';
                            
                        }
                        
                    };
                    
                    //document.getElementById('text-main').appendChild(img);
                    document.getElementById('deathSpace').appendChild(img);
                    ralseiCorpses.push(img)
                }
                else{
                    document.getElementById('corpse' + score).style.top = (fallingCounter * fallingCounter)+ "px";
                }  
            }
        }
    }

    if (parseFloat(document.getElementById('character').style.opacity) < 1.0){
        document.getElementById('character').style.opacity = parseFloat(document.getElementById('character').style.opacity) + 0.1;
    }

    if (wait){
        document.getElementById('character').src = "../img/character/M0.png";
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
                left= document.getElementById("navspace").offsetWidth - 64;
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
                document.getElementById('character').src = "../img/character/M" + spriteManager + ".png";
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
            left= document.getElementById("navspace").offsetWidth - 64;
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
            document.getElementById('character').src = "../img/character/M" + spriteManager + ".png";
        }
        //Update image
        guy.style.left = left + "px";
        }
        document.getElementById('deathSpawner').style.left = guy.style.left;
    }
    
    
}, 33 );

function onKill() {
    score++;
    document.getElementById("killScore").innerHTML = score;
    let img = document.createElement('img');
    img.id = 'corpse' + score;
    img.style.position = 'absolute';
    img.src ='../img/character/D0.png';
    img.style.left = guy.style.left;
    img.style.zIndex = 5;
    img.style.marginTop = ((document.getElementById('treeHitbox').offsetHeight) - 32) + "px";

    document.getElementById('deathSpace').appendChild(img);
    
    if (wait){
        permaWait = true;
    }

    document.getElementById('character').style.visibility = "hidden";
    death = true;
    falling = true;

    punchSfx = new Audio('../sfx/Punches/punch-1.mp3');
    punchSfx.volume = 0.2;
    punchSfx.play();

    screamSfx = new Audio('../sfx/Screams/scream-' + getRandomInt(1,3) + '.mp3');
    screamSfx.volume = 0.2;
    screamSfx.play();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}