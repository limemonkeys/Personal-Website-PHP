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
    </head>
    <body id="body">
        <div id="cloudspace">
            
        </div>
        <div id="navspace">
            <img id="sunContainer" src="./Sun.png" alt="Mac Burton">

            <div>
                <img id="cleanIcon" src="./Images/Tombstones/tomb-1.png" alt="Tombstone Icon">
                <h2 id="cleanScore">0</h2>
            </div>
            <div>
                <img id="killIcon" src="./Images/Character/D0.png" alt="Death Icon">
                <h2 id="killScore">0</h2>
            </div>
            
            
            
            <img id="name-logo" src="./Images/Mac Burton Logo.png" alt="Mac Burton">
            <!--
            <h1 id="nav-name">MAC BURTON</h1>
            
            <div id="nav-links">
                <div id="icons_section" class="row"></div>
            </div>
            
            <div class="row">
                <button id="nav-index" class="nav-page-button col-3">Index</button>
                <button id="nav-portfolio" class="nav-page-button col-3">Portfolio</button>
                <button id="nav-resume" class="nav-page-button col-3">Resume</button>
            </div>
            -->
        </div>
        
        <div id="gamespace">
            
            <img id="clickSign" src="./Images/Signs/S1.png" style="position:absolute;">
            <div id="deathSpace" style="position:absolute;">
                
            </div>
            <img id="character" style="position:absolute;" src="./Images/Character/M0.png" onclick="GFG_Fun()" >
            
            <div id="deathSpawner" style="position:absolute;">
                
            </div>
            
            <img id="character-space" style="visibility: hidden;" src="./Images/Character/M0.png" onclick="GFG_Fun()">
            
            <script src="microgame.js"></script>

            <!--Main-->
            <!-- Opacity: 0 tree causing clickable issues -->
            
            <div id="greenery">
                <img id="treeHitbox" src="./Images/Tree.png">
                <img id="tree1" src="./Images/Tree.png">
                <img id="bush1" src="./Bush1.png">
                <img id="bush2" src="./Bush2.png">
                <img id="bush3" src="./Bush3.png">
                <img id="tree2" src="./Images/Tree.png">
            </div>
            
            
            <div id="dirttest">
            </div>
            <div id="dirt">
                <div id="icons_section" class="row"></div>
            </div>
            <div id="dirtindex">
            <div class="row">
                <button id="nav-index" class="nav-page-button col-3">Home</button>
                <button id="nav-portfolio" class="nav-page-button col-3">Portfolio</button>
                <button id="nav-resume" class="nav-page-button col-3">Resume</button>
            </div>
            </div>
            <div id="stone" class="main">
            </div>
        </div>
        <div id="bottom">
            <p class= "bottom">Buzzwords.<br>SEO.<br></p>
        </div>
    </body>
    <footer id="footer" class="footer">
        <p>Sour Simian Studios 2023 &#x2022; 902-476-4883 &#x2022; macburton1000@gmail.com</p>
    </footer>
</html>


