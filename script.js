// Create a JS file and link it to the index.html file.

// Take a look at your html file, you should have a button with an “onclick” event. This event is equal to the function playTheGame(). It means that when you will click on the button, the function playTheGame() will be called.
// We will learn more about events next week ;)


// Now let’s create the function:

// In the JS file, create a function called playTheGame() that takes no parameter.
// In the function, start by asking the user if they would like to play the game (Hint: use the built-in confirm() function).

// If the answer is false, alert “No problem, Goodbye”.

// If his answer is true, follow these steps:
// Ask the user to enter a number between 0 and 10 (Hint: use the built-in prompt() function). You then have to check the validity of the user’s number :

// If the user didn’t enter a number (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”.
// If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.
// Else (ie. he entered a number between 0 and 10), create a variable named computerNumber where the value is a random number between 0 and 10 (Hint: Use the built-in Math.random() function). Make sure that the number is rounded.



function playTheGame(){

    let c = confirm("Souhaitez vous jouer au jeux")

    if(c==false){

        alert("Pas de problème , au revoir")
    }else{

        let userNumber

        while(true){
            userNumber = prompt("Entrez un nombre entre 0 et 10")
            if(isNaN(userNumber)==true){

                alert("Désolé, ce n'est pas un numéro, au revoir")

            }else if(!nombre(userNumber)){

                alert("Désolé, ce n'est pas un bon chiffre, au revoir")

            }else{

                

                break;
            
            }

            
        }
                let computerNumber = Math.floor(Math.random()*10)
                 console.log(computerNumber)
            
                compareNumbers(userNumber, computerNumber)
     }

   

}


function nombre(str){ 
    const regex = new RegExp(/^[0-9]*$/)
    return regex.test(str)

}



// Second Part
// Outside of the playTheGame() function, create a new function named compareNumbers(userNumber,computerNumber) that takes 2 parameters : userNumber and computerNumber

// The point of this function is to check if the userNumber is the same as the computerNumber:
// If userNumber is equal to computerNumber, alert “WINNER” and stop the game.

// If userNumber is bigger than computerNumber, alert “Your number is bigger then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

// If userNumber is lower than computerNumber, alert “Your number is smaller then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

// If the user guessed more than 3 times, alert “out of chances” and exit the function.

function compareNumbers(userNumber,computerNumber){

   let compter = 0

   while(compter < 3){
        if(userNumber == computerNumber){ 

            alert("Winner") 
            return;
       
        }                
        else if(userNumber > computerNumber){
            alert("Votre numéro est plus grand que celui de l'ordinateur, devinez à nouveau")
            userNumber = prompt("Entrez un nouveau numéro :");
        } else {
            alert("Votre numéro est plus petit que celui de l'ordinateur, devinez à nouveau");
            userNumber = prompt("Entrez un nouveau numéro :");
        }
        compter++


    }
    alert("Hors chances*");

   

}
