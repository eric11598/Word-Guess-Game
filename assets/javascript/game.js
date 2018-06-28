

  
         var snake =
         {
           name: "snake",
           nameArray: ["s","n","a","k","e"],
           length: 5,
         }
     
         var peach =
         {
           name: "peach",
           nameArray: ["p","e","a","c","h"],
           length: 5,
         }
     
         var kirby =
         {
           name: "kirby",
           nameArray: ["k","i","r","b","y"],
           length: 5,
         }
     
         var mario =
         {
           name: "mario",
           nameArray: ["m","a","r","i","o"],
           length: 5,
         }
     
     
     var score = 0;
     var questionIndex = 0;
  


      var game = 
      {
          score: 0,
          guesses: 10,

          notCorrect: function() {
            this.guesses--;
            console.log("not correct");
          },




          

    }

    var playerWins = 0;
    var playerLosses = 0;

  
      var characterArray = [snake,peach,kirby,mario];
      var character = Math.floor(Math.random() * 4);      // returns a random integer from 0 to 3

      document.getElementById("character").innerHTML = characterArray[character].name;


     
      


      var pos = 0;

      var answerArraySet = ["answer1", "answer2","answer3","answer4","answer5"];


      for (s=0; s<characterArray[character].length; s++)
      {
        g = document.createElement('p');
        g.setAttribute("id", answerArraySet[s]);
        g.setAttribute("style", "display: inline;"); 
        g.innerHTML="-";
        document.getElementById("guesses").appendChild(g); 

      }


      var guessArray = ["guess1", "guess2","guess3","guess4","guess5","guess6", "guess7","guess8","guess9","guess10"];
      var setArray = ["guess1", "guess2","guess3","guess4","guess5","guess6", "guess7","guess8","guess9","guess10"];

      var correct = 0;
      var guesses = 0;

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
          return true;
        
      }

     

      
      document.onkeyup = function(event) {
        

        // Determine which key was pressed, make it lowercase, and set it to the userInput variable.

        var userInput = event.key.toLowerCase();
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
          pos++;


          if (checkWin(characterArray[character].length))
            console.log("win");


        document.getElementById("wins").innerHTML = playerWins;
        document.getElementById("losses").innerHTML = playerLosses;

      
        }
  
      };