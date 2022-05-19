//  DISPLAYING THE USERS CHOICE------------------------------------------------------
// ---------------------------------------------------------------------------

var compChoice = document.getElementById('compChoice')
const userChoice = document.getElementById('userChoice')
const resultDisplay = document.getElementById('result')
// select buttons as const possible choices as all buttons on this page are the possible choices
//change this to more specific selectors if we add more buttons
const possibleChoices = document.querySelectorAll('button')
let playerChoice
let oppChoice
let result

//declare that for each possibleChoice() in possibleChoices, we want an EVENT/something to happen on click
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) =>{
    //here we pass through the event (e), and get the target id for whatever we click and save that to var playerChoice
    playerChoice = e.target.id
    userChoice.innerHTML = playerChoice
    //everytime the user chooses we generate a random computer choice
    generateComputerChoice()
    getResult()
}))

//GENERATE RANDOM COMPUTER OPP CHHOICE
function generateComputerChoice(){
    // generate a random computer choice
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) +1
    // or ---> const randomNumber = Math.random() * 3 <--length of choices
    // console.log(randomNumber)
    //display computer choice for possible comp choices
    if (randomNumber === 1){
        oppChoice = 'Shield'
    }
    if (randomNumber === 2){
        oppChoice = 'Magic'
    }
    if (randomNumber === 3){
        oppChoice = 'Blade'
    }
    compChoice.innerHTML = oppChoice
}

// rockpaper scissors rules:- shield beats blade, blade beats magic, magic beats shield
function getResult(){
    if (oppChoice === playerChoice ){
    result = 'Sparks fly! : You are on equal footing!!'
    }
    if (oppChoice === 'Shield' && playerChoice === "Magic"){
    result = 'An arcane blast sores through the air, incinerating your foe and their shield!!'
    }
    if (oppChoice === 'Shield' && playerChoice === "Blade"){
    result = 'Your blade strikes true yet, your blows have no effect on their shield!!'
    }
    if (oppChoice === 'Magic' && playerChoice === "Blade"){
    result = 'You cleaved through the opponents magic like butter!!'
    }
    if (oppChoice === 'Magic' && playerChoice === "Shield"){
    result = 'Both you and your shield have been incenerated!!'
    }
    if (oppChoice === 'Blade' && playerChoice === "Magic"){
    result = 'Your magic was cut down by an enchanted blade'
    }
    if (oppChoice === 'Blade' && playerChoice === "Shield"){
    result = 'You blocked their blade strike!! they are vunlurable!'
    }
    resultDisplay.innerHTML = result

}
// Below will be more complex version with realistic reactions to previously played choices version 

// function getResult(){
//     if (oppChoice === playerChoice ){
//     result = 'You are on equal footing!!'
//     }
//     if (oppChoice === 'Shield' && playerChoice === "Magic"){
//     result = 'You have drawn blood!!'
//     }
//     if (oppChoice === 'Shield' && playerChoice === "Blade"){
//     result = 'Your blows have no effect!!'
//     }
//     if (oppChoice === 'Magic' && playerChoice === "Blade"){
//     result = 'You cleaved through the opponents magic like butter!!'
//     }
//     if (oppChoice === 'Magic' && playerChoice === "Shield"){
//     result = 'You blocked that attack!!'
//     }
//     if (oppChoice === 'Blade' && playerChoice === "Magic"){
//     result = 'Your magic was cut down, You have been struck!!'
//     }
//     if (oppChoice === 'Blade' && playerChoice === "Shield"){
//     result = 'You blocked their blade strike!! they are vunlurable!'
//     }
//     resultDisplay.innerHTML = result

// }
// -----------------------------------------------------------------------
//randomise gifs


            function swapImages(){
              var $active = $('#myGallery .active');
              var $next = ($('#myGallery .active').next().length > 0) ? $('#myGallery .active').next() : $('#myGallery img:first');
              $active.fadeOut(function(){
              $active.removeClass('active');
              $next.fadeIn().addClass('active');
              });
            }

            $(document).ready(function(){
              // Run our swapImages() function every 5secs
              setInterval('swapImages()', 5000);
            })
      