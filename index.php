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
            <h2 id="killScore">0</h2>
        </div>
        <div>
            <img id="cleanIcon" src="./Images/Tombstones/tomb-1.png" alt="Tombstone Icon">
            <h2 id="cleanScore">0</h2>
        </div>
        

        <h1 id="nav-name">MAC BURTON</h1>
        <div id="nav-links">
            <div id="icons_section" class="row"></div>
        </div>

        <!-- Nav Button Section -->
        
        <!--<div id="nav_section" class="row"></div>-->
        <div class="row">
            <button id="nav-index" class="nav-page-button col-3">Index</button>
            <button id="nav-portfolio" class="nav-page-button col-3">Portfolio</button>
            <button id="nav-resume" class="nav-page-button col-3">Resume</button>
        </div>

        <!--Main-->
        <div class="main border">
            
        </div>
        
    </body>
    <footer class="footer">
        <p>Sour Simian Studios 2023 &#x2022; 902-476-4883 &#x2022; macburton1000@gmail.com</p>
    </footer>
</html>


