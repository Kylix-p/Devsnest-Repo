const quess=[
    {
    question:" Q1: What is the full form of IDK?",
    a: "i know",
    b:"i don't know ",
    c:"i dora you",
    d:"i door knock",
    ans:"ans2"
},
{
    question:" Q2: What is the full form of LOL?",
    a: "laughing out loud",
    b:"lots of love",
    c:"loud of laughing",
    d:"laughing or love",
    ans:"ans1"
},
{
    question:" Q3: What is the full form of BRB?",
    a: "be right be",
    b:"bro",
    c:"be right back",
    d:"been rool back",
    ans:"ans3"
},
{
    question:" Q4: What is the full form of IKR?",
    a: "i know right",
    b:"i knock right",
    c:"i know ",
    d:"all of these",
    ans:"ans1"
},
{
    question:" Q5: What is the full form of LMAO?",
    a: "laughing more and or",
    b:"laugh many ",
    c:"laughing my ass off",
    d:"none",
    ans:"ans3"
}];
const question=document.querySelector('.question');
const option1=document.querySelector('#op1');
const option2=document.querySelector('#op2');
const option3=document.querySelector('#op3');
const option4=document.querySelector('#op4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const showscore=document.querySelector("#showscore");
let questioncount=0;
let score=0;
const loadquestion= () => {
    const questionlist=quess[questioncount];
    question.innerText=questionlist.question;
    option1.innerText=questionlist.a;
    option2.innerText=questionlist.b;
    option3.innerText=questionlist.c;
    option4.innerText=questionlist.d;

}
const getcheckanswer= ()=>{
    let answer;
    answers.forEach((curanselem)=>{
    if(curanselem.checked){
             answer=curanselem.id;
            }
        
        });
        return answer;

};
loadquestion();
submit.addEventListener('click', () => {
    const checkedanswer=getcheckanswer();
    console.log(checkedanswer);
    if(checkedanswer == quess[questioncount].ans ){
        score++;
    };
    questioncount++;
    if(questioncount <  quess.length){
        loadquestion();
    }
   else{
       
    document.write(`You won and your score is ${score}`);
    
    showscore.innerHTML=`
    <h3>yow scored ${score}</h3>
    <button.class="btn" onclick="location.relaod()"></button>
     `;
    }
});
    