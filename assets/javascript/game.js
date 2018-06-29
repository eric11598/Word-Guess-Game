

  
         var snake =
         {
           name: "snake",
           nameArray: ["s","n","a","k","e"],
           length: 5,
           image: "assets/images/snake.jpg",
           imageSilhouette: "assets/images/snakeSil.jpg",
         }
         var link =
         {
           name: "link",
           nameArray: ["l","i","n","k"],
           length: 4,
           image: "assets/images/link.jpg",
           imageSilhouette: "assets/images/linkSil.jpg",
         }
         var luigi =
         {
           name: "luigi",
           nameArray: ["l","u","i","g","i"],
           length: 5,
           image: "assets/images/luigi.jpg",
           imageSilhouette: "assets/images/luigiSil.jpg",
         }
         var pikachu =
         {
           name: "pikachu",
           nameArray: ["p","i","k","a","c","h","u"],
           length: 7,
           image: "assets/images/pikachu.jpg",
           imageSilhouette: "assets/images/pikachuSil.jpg",
         }

         var samus =
         {
           name: "samus",
           nameArray: ["s","a","m","u","s"],
           length: 5,
           image: "assets/images/samus.jpg",
           imageSilhouette: "assets/images/samusSil.jpg",
         }

         var yoshi =
         {
           name: "yoshi",
           nameArray: ["y","o","s","h","i"],
           length: 5,
           image: "assets/images/yoshi.jpg",
           imageSilhouette: "assets/images/yoshiSil.jpg",
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
         
        var fox =
        {
          name: "fox",
          nameArray: ["f","o","x"],
          length: 3,
          image: "assets/images/fox.jpg",
          imageSilhouette: "assets/images/foxSil.jpg",
        }

        var ness =
        {
          name: "ness",
          nameArray: ["n","e","s","s"],
          length: 4,
          image: "assets/images/ness.jpg",
          imageSilhouette: "assets/images/nessSil.jpg",
        }
     
    var score = 0;
    var questionIndex = 0;
    var playerWins = 0;
    var playerLosses = 0;
    var playerGuesses = 0;
    var pauseGame = false;

    var characterArray = [snake,peach,kirby,mario,fox,ness,luigi,pikachu,samus,yoshi];
    var character = Math.floor(Math.random() * 10);      // returns a random integer from 0 to 3

    document.getElementById("character").innerHTML = characterArray[character].name;
    document.getElementById("characterImage").src= characterArray[character].imageSilhouette;
    

    var pos = 0;
    var answerArraySet = ["answer1", "answer2","answer3","answer4","answer5","answer6", "answer7","answer8","answer9","answer10"];
         
    var guessArray = ["guess1", "guess2","guess3","guess4","guess5","guess6", "guess7","guess8","guess9","guess10"];
    var setArray = ["guess1", "guess2","guess3","guess4","guess5","guess6", "guess7","guess8","guess9","guess10"];

        /*
      for (s=0; s<characterArray[character].length; s++)
      {
        g = document.createElement('p');
        g.setAttribute("id", answerArraySet[s]);
        g.setAttribute("style", "display: inline;"); 
        g.innerHTML="-";
        document.getElementById("letters").appendChild(g); 

      }*/



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

          playerGuesses = 0;
          correct = 0;

          guessArray = ["guess1", "guess2","guess3","guess4","guess5","guess6", "guess7","guess8","guess9","guess10"];
          setArray = ["guess1", "guess2","guess3","guess4","guess5","guess6", "guess7","guess8","guess9","guess10"];
          pos = 0;
          character = Math.floor(Math.random() * 10);
          document.getElementById("character").innerHTML = characterArray[character].name;
          document.getElementById("characterImage").src= characterArray[character].imageSilhouette;
          document.getElementById("status").innerHTML = "";
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
        g.innerHTML="_ ";
        document.getElementById("letters").appendChild(g); 

      }

        }


     
      reset();

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
              document.getElementById("status").innerHTML = "YOU WIN ! PRESS ANY KEY TO PLAY AGAIN"
              playerWins++;
              pauseGame = true;
              document.getElementById("characterImage").src= characterArray[character].image;
              
              
            }

            if(playerGuesses==10)
            {
              document.getElementById("status").innerHTML = "YOU LOSE ! PRESS ANY KEY TO PLAY AGAIN"
              
              playerLosses++;
              
              pauseGame = true;
            }

      
        document.getElementById("wins").innerHTML = playerWins;
        document.getElementById("losses").innerHTML = playerLosses;

      
        }
  
      }

      document.onkeyup = function(event) {
        
        if(pauseGame)
        {
          console.log(pauseGame);
          pauseGame = false;
          reset();
        }
        else
        {
          var userInput = event.key.toLowerCase();
          gameStart(userInput);
        }

      };

    
   

   