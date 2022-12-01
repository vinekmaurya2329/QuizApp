var Questionbank = [
    {
        question:'Three pipes A, B and C can fill a tank from empty to full in 30 minutes, 20 minutes, and 10 minutes respectively. When the tank is empty, all the three pipes are opened. A, B and C discharge chemical solutions P,Q and R respectively. What is the proportion of the solution R in the liquid in the tank after 3 minutes?',
        option:['5/11','6/11','7/11','8/11'],
        answer:'6/11'
    },
    {
        question:'	 Pipes A and B can fill a tank in 5 and 6 hours respectively. Pipe C can empty it in 12 hours. If all the three pipes are opened together, then the tank will be filled in:',
        option:['30/17 hours','30/11 hours','60/17 hours','9/2 hours'],
        answer:'60/17 hours'
    },
    {
        question:' 	A pump can fill a tank with water in 2 hours. Because of a leak, it took 2 hours to fill the tank. The leak can drain all the water of the tank in:',
        option:['13/3 hours','7 hours','8 hours','14 hours'],
        answer:'14 hours'
    },
    {
        question:'	 Two pipes A and B can fill a cistern in 37 minutes and 45 minutes respectively. Both pipes are opened. The cistern will be filled in just half an hour, if the B is turned off after:',
        option:['5 min','9 min','10 min','12 min'],
        answer:'9 min'
    },
    {
        question:'A tank is filled by three pipes with uniform flow. The first two pipes operating simultaneously fill the tank in the same time during which the tank is filled by the third pipe alone. The second pipe fills the tank 5 hours faster than the first pipe and 4 hours slower than the third pipe. The time required by the first pipe is:',
        option:['6 hours','10 hours','15 hours','30 hours'],
        answer:'15 hours'
    },
    {
        question:'Two pipes can fill a tank in 20 and 24 minutes respectively and a waste pipe can empty 3 gallons per minute. All the three pipes working together can fill the tank in 15 minutes. The capacity of the tank is:',
        option:['60 gallons',' 100 gallons',' 120 gallons',' 180 gallons'],
        answer:' 120 gallons'
    },
    {
        question:'A tank is filled in 5 hours by three pipes A, B and C. The pipe C is twice as fast as B and B is twice as fast as A. How much time will pipe A alone take to fill the tank?',
        option:['20 hours','25 hours','35 hours','not defined'],
        answer:'35 hours'
    },
    {
        question:'	 Two pipes A and B together can fill a cistern in 4 hours. Had they been opened separately, then B would have taken 6 hours more than A to fill the cistern. How much time will be taken by A to fill the cistern separately?',
        option:['1 hours','2 hours','6 hours',' 8 hours'],
        answer:'6 hours'
    },
    {
        question:'Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both the pipes are used together, then how long will it take to fill the tank?',
        option:['12 min',' 15 min',' 20 min','25 min'],
        answer:'12 min'
    },
    {
        question:'	 A large tanker can be filled by two pipes A and B in 60 minutes and 40 minutes respectively. How many minutes will it take to fill the tanker from empty state if B is used for half the time and A and B fill it together for the other half?',
        option:['15 min','16 min','20 min ','30 min'],
        answer:'30 min'
    },
]

var question = document.getElementById('question');
var quizcountainer = document.getElementById('Quiz-countainer');
var scoreboard = document.getElementById('scoreboard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var stat = document.getElementById('stat');
var i = 0;
var score = 0;

var num= document.getElementById('num');


// function to display questions


function displayquestion(){
    for( var a=0; a<span.length; a++){
        span[a].style.background='white';

    }
    question.innerHTML= Questionbank[i].question;
    num.innerHTML='Q.'+(i+1);
    option0.innerHTML=Questionbank[i].option[0];
    option1.innerHTML=Questionbank[i].option[1];
    option2.innerHTML=Questionbank[i].option[2];
    option3.innerHTML=Questionbank[i].option[3];
    stat.innerHTML="Question :"+ ' '+(i+1)+' '+ "of" + ' '+ Questionbank.length;

}

// function to calculate score 

function calcScore(e){
if(e.innerHTML===Questionbank[i].answer && score<Questionbank.length){
    score= `Your Score : ${score+1+"<br>"} 

    correct: ${score+1}

`

    document.getElementById(e.id).style.background='limegreen';

}else{
    document.getElementById(e.id).style.background='red';
    
    
}
setTimeout(nextquestion,1500);
}

// function  to display next question

function nextquestion(){
    if(i<Questionbank.length-1){
        i=i+1;
        displayquestion();
    }else{
        points.innerHTML=score+'/'+ Questionbank.length;
        quizcountainer.style.display='none';
        scoreboard.style.display='block'
    }
}

// click events to next button

next.addEventListener('click',nextquestion);

// back to quiz GamepadButton

function backToQuiz(){
    location.reload();
}


displayquestion();
