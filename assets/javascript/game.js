

  
         var snake =
         {
           name: "snake",
           nameArray: ["s","n","a","k","e"],
           length: 5,
           image: "assets/images/snake.jpg",
           imageSilhouette: "assets/images/snakeSil.jpg",
         }
     
         var peach =
         {
           name: "peach",
           nameArray: ["p","e","a","c","h"],
           length: 5,
           image: 'assets/images/peach.jpg',
           imageSilhouette: "assets/images/peachSil.jpg",
         }
     
         var kirby =
         {
           name: "kirby",
           nameArray: ["k","i","r","b","y"],
           length: 5,
           image: "assets/images/kirby.jpg",
           imageSilhouette: "assets/images/kirbySil.jpg",
         }
     
         var mario =
         {
           name: "mario",
           nameArray: ["m","a","r","i","o"],
           length: 5,
           image: "assets/images/mario.jpg",
           imageSilhouette: "assets/images/marioSil.jpg",
         }
     
     
    var score = 0;
    var questionIndex = 0;
    var playerWins = 0;
    var playerLosses = 0;
    var playerGuesses = 0;

    var characterArray = [snake,peach,kirby,mario];
    var character = Math.floor(Math.random() * 4);      // returns a random integer from 0 to 3

    document.getElementById("character").innerHTML = characterArray[character].name;
    document.getElementById("characterImage").src= characterArray[character].imageSilhouette;
    

    var pos = 0;
    var answerArraySet = ["answer1", "answer2","answer3","answer4","answer5","answer6", "answer7","answer8","answer9","answer10"];
         
    var guessArray = ["guess1", "guess2","guess3","guess4","guess5","guess6", "guess7","guess8","guess9","guess10"];
    var setArray = ["guess1", "guess2","guess3","guess4","guess5","guess6", "guess7","guess8","guess9","guess10"];


      for (s=0; s<characterArray[character].length; s++)
      {
        g = document.createElement('p');
        g.setAttribute("id", answerArraySet[s]);
        g.setAttribute("style", "display: inline;"); 
        g.innerHTML="-";
        document.getElementById("letters").appendChild(g); 

      }



      var correct = 0;


      function checkDuplicate(userInput) {

        var duplicate = 0;

        for (i=0; i<setArray.length;i++)
        {
          if(userInput == setArray[i])
            duplicate++;
        }

        if(duplicate==2)
          return true;   

        else
          return false;
      
      }

      function checkWin(temp){

        if(temp == correct)
        {
          correct = 0;
          playerGuesses = 0;
          return true;
        }
      }



        function reset(){

        
        console.log("RESET");
        guessArray = ["guess1", "guess2","guess3","guess4","guess5","guess6", "guess7","guess8","guess9","guess10"];
        setArray = ["guess1", "guess2","guess3","guess4","guess5","guess6", "guess7","guess8","guess9","guess10"];
        pos = 0;
        character = Math.floor(Math.random() * 4);
        document.getElementById("character").innerHTML = characterArray[character].name;
        document.getElementById("characterImage").src= characterArray[character].imageSilhouette;
        var temp = document.getElementById("letters");

        for (i =0 ; i <guessArray.length; i++)
          document.getElementById(guessArray[i]).innerHTML = "_";

        while (temp.hasChildNodes()) {  
          temp.removeChild(temp.firstChild);
      } 
        
          
      for (s=0; s<characterArray[character].length; s++)
      {
        g = document.createElement('p');
        g.setAttribute("id", answerArraySet[s]);
        g.setAttribute("style", "display: inline;"); 
        g.innerHTML="-";
        document.getElementById("letters").appendChild(g); 

      }

        }


     

      function gameStart(userInput){

      
        setArray[pos] = userInput;

        if(checkDuplicate(userInput))
        {
          console.log("duplicate");
          alert("duplicate");
        }

        else
        {
          document.getElementById(guessArray[pos]).innerHTML = userInput;

          for(j=0; j<characterArray[character].length;j++)
          {
            if(userInput==characterArray[character].nameArray[j])
            {
              document.getElementById(answerArraySet[j]).innerHTML = userInput;
              correct++;
            }
          }
          playerGuesses++;
          pos++;


          if (checkWin(characterArray[character].length))
            {
              console.log("WIN");
              playerWins++;
              reset();
              
            }

            if(playerGuesses==10)
            {
              console.log("YOU LOSE");
              playerGuesses = 0;
              playerLosses++;
              reset();
            }

        document.getElementById("guesses").innerHTML = playerGuesses;
        document.getElementById("wins").innerHTML = playerWins;
        document.getElementById("losses").innerHTML = playerLosses;

      
        }
  
      }

      document.onkeyup = function(event) {
        // Determine which key was pressed, make it lowercase, and set it to the userInput variable.

        var userInput = event.key.toLowerCase();
        console.log("PRESS");
        gameStart(userInput);

      };

    
   

   