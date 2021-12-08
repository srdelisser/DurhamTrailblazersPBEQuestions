function showAnswer(){
    var e = document.getElementById("answer");
    if(e.style.display == 'none')
    e.style.display = 'block';
    else
    e.style.display = 'none';
}
//creating a list of all the questions
//to randomly do through lol
var c3q=new Array()

c3q[0]="q_1.html"
c3q[1]="q_2.html"
c3q[2]="q_3.html"
c3q[3]="q_4.html"
//c3q[4]="http://www.geocities.com"

//randomly chooses the questions for chapter 3
function random_c3q(){
    window.location=c3q[Math.floor(Math.random()*c3q.length)]
}

function return_c3(){
    window.location="index.html"
}

