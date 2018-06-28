    // VARIABLES
    // ==========================================================================

    // The array of questions for our quiz game.

    
    var questions = [
        { q: "The sky is blue.", a: "t" },
        { q: "There are 365 days in a year.", a: "t" },
        { q: "There are 42 ounces in a pound.", a: "f" },
        { q: "The Declaration of Independence was created in 1745.", a: "f" },
        { q: "Bananas are vegetables.", a: "f" }
      ];
  
      // We start the game with a score of 0.
      var score = 0;
      // Variable to hold the index of current question.
      var questionIndex = 0;
  
      // FUNCTIONS
      // ==============================================================================
  
      // Function to render questions.

      var game = 
      {
          playerWins: 0,
          guesses: 10,

          notCorrect: function() {
            this.guesses--;
            console.log("not correct");
          },


          //document.getElementById("p1").innerHTML = "New text!";

    }

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

  
      var characterArray = [snake,peach,kirby,mario];
      var character = Math.floor(Math.random() * 4);      // returns a random integer from 0 to 3

      var guessArray = ["guess1", "guess2","guess3","guess4","guess5","guess6", "guess7","guess8","guess9","guess10"];
      var length = 4;


      var pos = 0;

      var answerArraySet = ["answer1", "answer2","answer3","answer4","answer5"];


      for (s=0; s<characterArray[character].length; s++)
      {
        g = document.createElement('p');
        g.setAttribute("id", answerArraySet[s]);
        g.innerHTML="-";
        document.getElementById("guesses").appendChild(g); 

      }


      document.onkeyup = function(event) {
        var setArray = ["guess1", "guess2","guess3","guess4","guess5","guess6", "guess7","guess8","guess9","guess10"];
        





        // Determine which key was pressed, make it lowercase, and set it to the userInput variable.

        var userInput = event.key.toLowerCase();
        guessArray[pos] = userInput;
        document.getElementById(setArray[pos]).innerHTML = userInput;

        for(j=0; j<characterArray[character].length;j++)
        {
          if(userInput==characterArray[character].nameArray[j])
          {
            document.getElementById(answerArraySet[j]).innerHTML = userInput;
          }
        }
        pos++;
        

        
        

      

  
      };