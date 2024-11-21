<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Mac's Website - Home</title>
        <link rel="icon" href="./img/character/D0.png">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fredoka One">
        <link rel="stylesheet" href="../styles/platle-styles.css">
        <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
        <script src="../scripts/platle.js"></script>
    </head>
    <body id="body">
               
        
        <div id="plateContainer">
            <img id="plate" src="../img/platle/plate.png"></img>
            <div class="digits">
                <input id="digit1" name="digit1" class="digit-input" data-indx="0" data-next-id="digit2" value="" size="1" maxlength="1" autocomplete="off" type="text">
                <input id="digit2" name="digit2" data-prev-id="digit1" class="digit-input" data-indx="1" data-next-id="digit3" value="" size="1" maxlength="1" autocomplete="off" type="text">
                <input id="digit3" name="digit3" data-prev-id="digit2" class="digit-input" data-indx="2" data-next-id="digit4" value="" size="1" maxlength="1" autocomplete="off" type="text">
                <input value="" size="1" maxlength="1" autocomplete="off" type="text" placeholder="1" readonly>
                <input value="" size="1" maxlength="1" autocomplete="off" type="text" placeholder="2" readonly>
                <input value="" size="1" maxlength="1" autocomplete="off" type="text" placeholder="3" readonly>
            </div>
        </div>
        <div id="interactables">
            <img id="searchButton" src="../img/platle/Wheel.png"></img>
            <img id="sound"  src="../img/platle/sound on.png"></img>        
            <img id="help" src="../img/platle/qmark.png"></img> 
        </div>
        
        <h2>Results</h2>
        <div id="results">
            
        </div>  
        <footer id="footer" class="footer">
            <p>Footer</p>
        </footer>
    </body>
    
</html>


