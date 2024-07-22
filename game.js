//All the variables and step 2
let sounds = ['sounds/red.mp3','sounds/blue.mp3','sounds/green.mp3','sounds/yellow.mp3'];
let buttonColors = ['red', 'blue', 'green', 'yellow'];
let gamePattern =[];
let userClickedPattern = [];
var level = 0;
var started = false;
let randomChosenColor;

//start game
  const startGame = () => {
    if (!started) {
      started = true;
      nextSequence();
    }
  };
  $(document).keydown(function() {
    startGame();
  });
//step1
const nextSequence = () =>{
    userClickedPattern = [];
    level++;
    $('#level-title').text('Level ' + level);
    const randomNumber = Math.floor((Math.random() * 4));
    randomChosenColor = buttonColors[randomNumber];
    let $myElement = $('#' + randomChosenColor);
    $myElement.fadeOut(200).fadeIn(200);
    gamePattern.push(randomChosenColor);
    playYourSound(randomChosenColor)
    console.log(gamePattern)
    };
//these functions are not ordered

//detect which button is clicked
$('.btn').click(function(event){
    let userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    animatePress(userChosenColor)
    playYourSound(userChosenColor)
    checkAnswer(userClickedPattern.length - 1)
})
//add animations
const animatePress = (currentColor)=>{
    $('#' + currentColor).addClass('pressed');
    setTimeout(function(){
        $('#' + currentColor).removeClass('pressed');
    }, 100)
}
//to play sound 
function playYourSound(name){
    new Audio(sounds[buttonColors.indexOf(name)]).play().catch(error => {
        console.error('Failed to play audio:', error);
      });
};

const checkAnswer = (currentLevel)=>{
    if( gamePattern[currentLevel] === userClickedPattern[currentLevel] ){
        console.log(userClickedPattern)
        console.log(gamePattern)
        if (userClickedPattern.length === gamePattern.length){
            console.log(userClickedPattern.length)
            console.log(gamePattern.length)
            console.log('SUCCESS')
            setTimeout(function(){
                nextSequence()
            }, 1000)
        }
        } else{
          console.log("WRONG")
          $('#level-title').text("Game Over, Press Any Key to Restart");
          new Audio('sounds/wrong.mp3').play().catch(error => {
              console.error('Failed to play audio:', error);
            });
            $('body').addClass('game-over')
            setTimeout(function(){
              $('body').removeClass('game-over')
            },200)
            startOver()
    }
}
const startOver = ()=>{
    level  = 0;
    gamePattern = [];
    started = false;
}