<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Mac's Website - Home</title>
        <link rel="icon" href="./img/character/D0.png">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fredoka One">
        <link rel="stylesheet" href="styles/styles.css">
        <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
        <script src="./scripts/jQuery.js"></script>
    </head>
    <body id="body">
        <div id="wrapper">
            <div id="cloudspace">
                
            </div>
            <div id="navspace">
                <img id="sunContainer" src="./img/space/Sun.png" alt="Mac Burton">

                <div>
                    <img id="cleanIcon" src="./img/tombstones/tomb-1.png" alt="Tombstone Icon">
                    <h2 id="cleanScore">0</h2>
                </div>
                <div>
                    <img id="killIcon" src="./img/character/D0.png" alt="Death Icon">
                    <h2 id="killScore">0</h2>
                </div>
                
                <img id="name-logo" src="./img/centerpiece/mac-burton.png" alt="Mac Burton">
            </div>
            
            <div id="gamespace">
                
                <img id="clickSign" src="./img/signs/S1.png" style="position:absolute;">
                <div id="deathSpace" style="position:absolute;">
                    
                </div>
                <img id="character" style="position:absolute;" src="./img/character/M0.png" onclick="onKill()" >
                
                <div id="deathSpawner" style="position:absolute;">
                    
                </div>
                
                <img id="character-space" style="visibility: hidden;" src="./img/character/M0.png" onclick="GFG_Fun()">
                
                <script src="./scripts/microgame.js"></script>

                <!--Main-->
                <!-- Opacity: 0 tree causing clickable issues -->
                
                <div id="greenery">
                    <img id="treeHitbox" src="./img/greenery/Tree.png">
                    <img id="tree1" src="./img/greenery/Tree.png">
                    <img id="bush1" src="./img/greenery/Bush1.png">
                    <img id="bush2" src="./img/greenery/Bush2.png">
                    <img id="bush3" src="./img/greenery/Bush3.png">
                    <img id="tree2" src="./img/greenery/Tree.png">
                </div>
                
                
                <div id="dirttest">
                </div>
                <div id="dirt">
                    <div id="icons_section" class="logoContainer row"></div>
                </div>
                <div id="dirtindex">
                <div class="row navContainer">
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
        </div>
    </body>
    <footer id="footer" class="footer">
        <p>Self Designed, Illustrated, Coded, and Hosted</p><p id="spacing">&nbsp;&#x2022;&nbsp;</p><p>902-476-4883 &#x2022; macburton2000@gmail.com</p>
    </footer>
</html>


