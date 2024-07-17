//All the variables and step 2
let sounds = ['sounds/red.mp3','sounds/blue.mp3','sounds/green.mp3','sounds/yellow.mp3'];
let buttonColors = ['red', 'blue', 'green', 'yellow'];
let gamePattern =[];
let userClickedPattern = [];

var started = false 

//start game
$('.document').keypress(function(){
    if(!started){
        started = true;
        nextSequence()
    }
})

//step1
const nextSequence = (arr) =>{
    const randomNumber = Math.floor((Math.random() * 4));
    var level = 0;
    $('#level-title').text('Level ' + level);
    level++;
    return arr[randomNumber]};

//step 3
var randomChosenColor = nextSequence(buttonColors);
console.log(randomChosenColor)
//step 4
gamePattern.push(randomChosenColor)
console.log(gamePattern)

//step5
let myID = randomChosenColor;
let $myElement = $('#' + myID);
console.log($myElement)

//jQuery for animating flash
function flashing(){
    $myElement.fadeOut(100).fadeIn(100);
}
$myElement.click(function(){
   flashing();
   playYourSound();
})

//add sound to each button

function playYourSound(){
    new Audio(sounds[buttonColors.indexOf(myID)]).play().catch(error => {
        console.error('Failed to play audio:', error);
      });
};

//detect which button is clicked
$('.btn').click(function(event){
    let userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    animatePress(userChosenColor)
})

//add animations
const animatePress = (currentColor)=>{
    $('#' + currentColor).addClass('pressed');
    setTimeout(function(){
        $('#' + currentColor).removeClass('pressed');
    }, 100)
}
