<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Mac's Website - Home</title>
        <link rel="icon" href="./Images/Character/D0.png">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fredoka One">
        <link rel="stylesheet" href="styles/styles.css">
        <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
        <!--<script src="functions.js"></script>-->
    </head>
    <body id="body">

        
        <div id="deathSpace" style="position:absolute;">
            <img src="./Images/Signs/S1.png" style="position:absolute; padding-top: 4px;">
        </div>
        <img id="character" style="position:absolute;" src="./Images/Character/M0.png" onclick="GFG_Fun()" >
        <div id="deathSpawner" style="position:absolute;">
            
        </div>
        
        <img id="character-space" style="visibility: hidden;" src="./Images/Character/M0.png" onclick="GFG_Fun()">
        
        
        <script type="text/javascript">
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

            
            //console.log("product: " + product[0]);
            
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            console.log(urlParams);
            if (urlParams.size > 0){
                const killScoreURL = urlParams.get('k');
                score = killScoreURL;
                console.log(score);
                

                const cleanScoreURL = urlParams.get('c');
                cleanScore = cleanScoreURL;
                console.log(cleanScore);
                
            }
            
            //Temp vars
            trigger = false;
            
            //TODO if permawait, corpse should not teleport to curr pos (to see bug kill while waiting about to walk)

            timerId = setInterval( function() { //This function is called by the browser every 33 milliseconds
                updateLinks();
                //document.getElementById('nav-name').innerHTML = "" + landed;
                document.getElementById("killScore").innerHTML = score;
                document.getElementById("cleanScore").innerHTML = cleanScore;
                var width = document.getElementById('nav-name').offsetWidth - 64;

                if (death){
                    deathCounter++;
                    if (landed){
                        document.getElementById('character').style.opacity = "0.0";
                        document.getElementById('character').style.visibility = "visible";
                        //document.getElementById("killScore").innerHTML = deathCounter;
                        
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

                    //if (fallingCounter < 32){

                        
                    // This can probably be improved on
                    //if (fallingCounter < 32){
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

                                    document.getElementById('corpse' + score).style.visibility = "hidden";
                                    
                                    let img = document.createElement('img');
                                    img.id = 'corpse' + (score);
                                    //img.classList.add('corpses');
                                    img.style.position = 'absolute';
                                    img.src ='./Images/Character/D1.png';
                                    if (!right){
                                        img.style.transform = "scaleX(-1)";
                                    }
                                    // Controls where the corpse lands. Putting an if check breaks it here...
                                    img.style.left = guy.style.left;
                                    img.onclick = function() { 
                                        
                                        imageNameSplit = img.src.split("/");
                                        imageName = imageNameSplit[imageNameSplit.length - 1]
                                        if (!(imageName == 'tomb-1.png' || imageName == 'tomb-2.png' || imageName == 'tomb-3.png')){
                                            cleanScore++;
                                            updateLinks();
                                            document.getElementById("cleanScore").innerHTML = cleanScore;
                                            bellSfx = new Audio('./sfx/Bells/bell-' + getRandomInt(1,3) + '.mp3');
                                            bellSfx.volume = 0.2;
                                            bellSfx.play();
                                            img.src ='./Images/Tombstones/tomb-' + getRandomInt(1,3) + '.png';
                                        }
                                    };
                                    
                                    document.getElementById('text-main').appendChild(img);
                                    

                                    //document.getElementById('corpse' + score).style.top = document.getElementById('body').scrollHeight - document.getElementsByClassName('footer')[0].offsetHeight + "px";
                                }
                                else{
                                    document.getElementById('corpse' + score).style.top = (fallingCounter * fallingCounter)+ "px";
                                    
                                }  
                            }
                            //document.getElementById('nav-name').innerHTML = document.getElementById('corpse' + score).style.top + "\n" + document.getElementById('body').scrollHeight;
                        }
                    //}
                    
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
                updateLinks();
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
                
            }

            function updateLinks(){
                document.getElementById("nav-index").setAttribute("href", "./index.html?k=" + score + "&c=" + cleanScore);
                document.getElementById("nav-portfolio").setAttribute("href", "./portfolio.html?k=" + score + "&c=" + cleanScore);
                document.getElementById("nav-resume").setAttribute("href", "./resume.html?k=" + score + "&c=" + cleanScore);
            }

            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
        </script>

        <div>
            <img id="killIcon" src="./Images/Character/D0.png" alt="Death Icon">
            <h2 id="killScore"></h2>
        </div>
        <div>
            <img id="cleanIcon" src="./Images/Tombstones/tomb-1.png" alt="Tombstone Icon">
            <h2 id="cleanScore"></h2>
        </div>
        <h1 id="nav-name">MAC BURTON</h1>
        <div id="nav-links" class="row">
            <!-- <button onclick="updateScore()">temp button</button> -->
            <div class="col-6">
                <a href="https://github.com/limemonkeys" target="_blank">
                    <img class="nav-logos" src="./Images/Logos/github.png" alt="Github Logo">
                </a>
            </div>
            <div class="col-6">
                <a href="https://limemonkeys.itch.io/" target="_blank">
                    <img class="nav-logos" src="./Images/Logos/itch.png" alt="Itch.io Logo">
                </a>
            </div>
            <div class="col-6">
                <a href="https://stackoverflow.com/users/14095522/lime" target="_blank">
                    <img class="nav-logos" src="./Images/Logos/stack-overflow.png" alt="Stack Overflow Logo">
                </a>
            </div>
            <div class="col-6">
                <a href="https://www.linkedin.com/in/mac-burton-2851a319b/" target="_blank">
                    <img class="nav-logos" src="./Images/Logos/linkedin.png" alt="LinkedIn Logo">     
                </a>
            </div>
            <div class="col-6">
                <a href="mailto:macburton1000@gmail.com">
                    <img class="nav-logos" src="./Images/Logos/mail.png" alt="Email Logo">     
                </a>
            </div>
            <div class="col-6">
                <a href="https://www.instagram.com/citrussimian/" target="_blank">
                    <img class="nav-logos" src="./Images/Logos/instagram.png" alt="Instagram Logo">    
                </a>
            </div>
        </div>
        <div class="row">
            <a id="nav-index" class="col-3" href="./index.html">
                <div class="nav-page">
                    Home
                </div>
            </a> 
            <a id="nav-portfolio" class="col-3" href="./portfolio.html">
                <div class="nav-page">
                    Portfolio
                </div>
            </a>
            <a id="nav-resume" class="col-3" href='./resume.html'>
                <div class="nav-page">
                    Resume
                </div>
            </a>
        </div>
        

        

        <!--Main-->
        <div class="main border">
            <h1>Home</h1>
            <p class="text">
                Welcome. 
                Please enjoy the interactive game made entirely of HTML, CSS, and JS, found on the top and bottom of the screen.
                I made this website myself and it is locally hosted on my Raspberry Pi 3 B+ using Apache2.
            </p>
            <h1 class="text-space">About Me</h1>
            <img id="profile" src="./Images/Headshot 1.jpeg" alt="Selfie">
            <p id="" class="text">
                My name is Mac Burton. 
            </p>
            <p class="text">
                I am a New Grad who recieved a Bachelors of Computer Science 
                and Certificate of User Experience Design and Evaluation from 
                Dalhousie University.
            </p>
            <p class="text">
                I love to keep myself busy with my free time with
                personal projects relating to my studies. More specifically, I
                have a passion for game development and find myself participating 
                in game jams when I can.
            </p>
            <p class="text">
                I also enjoy trading card games and cooking with my free time.
            </p>
            <p class="text">
                I recently retired as President and Founder of the Dalhousie
                Trading Card Game Society. Has been going strong for four years.
                My Trading Card Game of choice is Magic the Gathering and I enjoy
                casual EDH and competitive modern.
            </p>
            <p class="text">
                I volunteered frequently with the Loaded Ladle for the past year.
                The Loaded Ladle is a non-profit open food cooperative, providing free
                meal services to the community from Tuesday to Friday. The Loaded
                Ladle serves upwards of 300 people each day. I have also run a team
                for the Iron Ladle: A cooking competition in which I assembled a team
                and planned a recipe for one of the services.
            </p>
            
            <p class="text">
                I am a part time musician with the 36 Canadian Brigade Group Band 
                with the Department of National Defense as a Army Reservist at the 
                rank of Corporal. I have attended the Canadian Forces School of Music
                at Canadian Forces Base Borden in Ontario.
            </p>
            <?php echo '<p class="text">Hello World</p>'; ?>
            <img id="cleanSign" src="./Images/Signs/S2.png">
            <p id="text-main" class="text hidden-text">
                I am the one who stops.<br>
                I am the one who stops
            </p>
        </div>
        
    </body>
    <footer class="footer">
        <p>Sour Simian Studios 2023 &#x2022; 902-476-4883 &#x2022; macburton1000@gmail.com</p>
    </footer>
</html>


