//Geting the user choice
let userInput = 'paper'

const getInput = userInput =>{
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
        return userInput
    } else{
        console.log('Please type a valid option...')
        return 'Error'
    } 
}

//Geting the computer choice
function computerInput(){
    switch(Math.floor(Math.random()* 3)){
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

//Set the winner conditions 
function winner(userChoice, computerChoice){

    if (userChoice === 'paper' && computerChoice === 'rock'){
        return 'You won!';
    
      } else if(userChoice === 'rock' && computerChoice === 'scissors'){
        return 'You won!'
    
      } else if(userChoice === 'scissors' && computerChoice === 'paper'){
        return 'You won!'

      } else if (userChoice === 'Error'){
        return 'Error, try again'
        
      } else if(userChoice === computerChoice){
        return 'Its a tie!'
      
      }else {
        return 'The computer wins!'
      }

        
}

//The game 
const startGame = () =>{
    const userChoice = getInput(userInput)
    const computerChoice = computerInput()
    console.log('Lets play rock, paper, scissors!')
    console.log('Your turn: ' + userChoice)  
    console.log('Computers choise: ' + computerChoice) 
    console.log(winner(userChoice, computerChoice))         
    
}

//Starting the game
startGame()

