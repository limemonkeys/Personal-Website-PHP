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
        <script src="jQuery.js"></script>
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
        
        <script src="microgame.js"></script>

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
        </div>
        <script>
 
            // Check if file is completely ready
            $(document).ready(function () {
                $('#nav-links').load('nav-links.html');
            });
        </script>

        <!-- Nav Button Section -->

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
        
        <div class="row">
            
            <button id="index">Index</button>
            <button id="portfolio">Portfolio</button>
            <button id="resume">Resume</button>
            <button id="appender">Appender</button>
            <button id="nuke">Nuke</button>
        </div>
        

        <!--Main-->
        <div class="main border">
            <p id="pTest">Male</p>
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


